import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { assets} from '../assets/assets/assets.js'

const MyProfile = () => {
  const { userData, setUserData, loadUserProfileData, token, backendUrl } =
    useAppContext();

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
    toast.success("Editing mode enabled");
  };

  const updateUserProfile = async () => {};

  useEffect(() => {
    loadUserProfileData();
  }, []);

  return (
    <div className="max-w-2xl mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6">
      <div className="flex flex-col items-center space-y-4">
        {isEditing ? (
          <label htmlFor="fileInput">
          <div>

            <img src={image ? URL.createObjectURL(image) : userData?.image} alt="" />
            <img src={image ? '' : assets.upload_icon} alt="" />
          </div>

          <input onChange={(e) => setUserData(e.target.files[0])} type="file" id="fileInput" hidden />
          </label>
        ) : (
          <img
            src={userData?.image || ""}
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
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="bg-blue-600 text-white font-medium px-6 py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
