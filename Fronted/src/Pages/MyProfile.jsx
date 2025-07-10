import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { assets } from "../assets/assets/assets.js";
import axios from "axios";

const MyProfile = () => {
  const { userData, setUserData, loadUserProfileData, token, backendUrl } =
    useAppContext();
  const [image, setImage] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateProfile = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      // formData.append("email", userData.email);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address || {}));
      formData.append("dob", userData.dob); // ✅ Added
      formData.append("gender", userData.gender); // ✅ Added
      formData.append("bio", userData.bio || ""); // ✅ Added

      if (image) {
        formData.append("image", image);
      }

      // validation
      const requiredFields = ["name", "phone", "dob", "gender", "address"];
      for (const field of requiredFields) {
        if (!userData[field]) {
          toast.error(
            `${field.charAt(0).toUpperCase() + field.slice(1)} is required`
          );
          return;
        }
      }
      if (userData.address && typeof userData.address !== "object") {
        toast.error("Address must be an object");
        return;
      }

      const { data } = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      await new Promise((resolve) => setTimeout(resolve, 1000)); // ⏳ Simulate network delay

      if (data.success) {
        setUserData(data.user); // 🔁 refresh local data
        toast.success(data.message);
        setIsEditing(false); // ✅ Exit edit mode
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false); // ✅ Stop loading state
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    toast.success("Editing mode enabled");
  };

  useEffect(() => {
    loadUserProfileData();
  }, []);

  return (
    <div className="max-w-2xl mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <div className="flex flex-col items-center space-y-4">
        {isEditing ? (
          <label htmlFor="fileInput">
            <div className="inline-block relative cursor-pointer">
              <img
                className="w-36 h- rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
                src={
                  isEditing && image instanceof File
                    ? URL.createObjectURL(image)
                    : userData?.image
                }
                alt=""
              />
              <img
                className="w-10 absolute bottom-12 right-12"
                src={image ? "" : assets.upload_icon}
                alt="Upload Icon"
              />
            </div>

            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="fileInput"
              hidden
            />
          </label>
        ) : (
          <img
            src={userData?.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow"
          />
        )}

        {isEditing ? (
          <input
            type="text"
            value={userData?.name || ""}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="text-center text-2xl font-semibold text-gray-800 border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          />
        ) : (
          <h1 className="text-2xl font-bold text-gray-800">{userData?.name}</h1>
        )}
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-700 underline mb-4">
          Contact Information
        </h2>
        <div className="grid grid-cols-[1fr_2.5fr] gap-4 text-sm">
          <p className="font-medium">Email:</p>
          <p className="text-blue-600">{userData?.email || ""}</p>

          <p className="font-medium">Phone:</p>
          {isEditing ? (
            <input
              type="text"
              value={userData?.phone || ""}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            />
          ) : (
            <p>{userData?.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                value={userData?.address?.line1 || ""}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    address: { ...userData.address, line1: e.target.value },
                  })
                }
                placeholder="Address Line 1"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
              />
              <input
                type="text"
                value={userData?.address?.line2 || ""}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    address: { ...userData.address, line2: e.target.value },
                  })
                }
                placeholder="Address Line 2"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none"
              />
            </div>
          ) : (
            <div>
              <p>{userData?.address?.line1}</p>
              <p>{userData?.address?.line2}</p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-semibold text-gray-700 underline mb-4">
          Personal Information
        </h2>
        <div className="grid grid-cols-[1fr_2.5fr] gap-4 text-sm">
          <p className="font-medium">Date of Birth:</p>
          {isEditing ? (
            <input
              type="date"
              value={userData?.dob || ""}
              onChange={(e) =>
                setUserData({ ...userData, dob: e.target.value })
              }
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            />
          ) : (
            <p>{userData?.dob}</p>
          )}

          <p className="font-medium">Gender:</p>
          {isEditing ? (
            <select
              value={userData?.gender || ""}
              onChange={(e) =>
                setUserData({ ...userData, gender: e.target.value })
              }
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p>{userData?.gender}</p>
          )}

          <p className="font-medium">Bio:</p>
          {isEditing ? (
            <textarea
              value={userData?.bio || ""}
              onChange={(e) =>
                setUserData({ ...userData, bio: e.target.value })
              }
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none w-full"
              rows={3}
            />
          ) : (
            <p className="text-gray-600">{userData?.bio}</p>
          )}
        </div>
      </div>

      <div className="mt-5">
        {isEditing ? (
          <button
            onClick={updateProfile}
            disabled={loading}
            className={`bg-blue-600 text-white font-medium px-6 py-2 rounded-md transition-all mr-2 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Saving...
              </span>
            ) : (
              "Save Profile"
            )}
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
