import React from "react";
import { assets } from "../../assets/assets_admin/assets";
import { useAdminContext } from "../../Contexts/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
const AddDoctor = () => {
  const [docImg, setDocImg] = React.useState(null);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [experience, setExperience] = React.useState("1 Year");
  const [fees, setFees] = React.useState("");
  const [specialization, setSpecialization] =
    React.useState("General Physician");
  const [degree, setDegree] = React.useState("");
  const [address1, setAddress1] = React.useState("");
  const [address2, setAddress2] = React.useState("");
  // const [education, setEducation] = React.useState("");

  const [about, setAbout] = React.useState("");

  const { adminToken, backendUrl } = useAdminContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!docImg) {
        toast.error("Please upload a doctor image.");
        return;
      }

      const formData = new FormData();
      formData.append("docImg", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", fees);
      formData.append("specialization", specialization);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );
      formData.append("degree", degree);
      formData.append("about", about);

      const { data } = await axios.post(
        `${backendUrl}/api/admin/add-doctor`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      if (data.success || data.message === "Doctor added successfully") {
        toast.success("Doctor added successfully");
        // Reset form
        setDocImg(null);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setFees("");
        setSpecialization("General Physician");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later.");
      console.log(error?.response?.data || error);
    }
  };

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 p-4 rounded-lg space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Add Doctor</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 p-2">
          <label
            htmlFor="doc-img"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            <img
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              className="w-16 h-16 rounded-full bg-gray-100 cursor-pointer object-cover border border-dashed border-gray-300"
              alt="upload area"
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            className="hidden"
            type="file"
            id="doc-img"
          />
          <p className="text-center md:text-left">
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-2">
              <p className="font-bold">Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="p-2 rounded border border-gray-300"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="p-2 rounded border border-gray-300"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="p-2 rounded border border-gray-300"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="p-2 rounded border border-gray-300"
              >
                {[...Array(10).keys()].map((year) => (
                  <option key={year} value={year + 1}>
                    {year + 1} {year + 1 === 1 ? "Year" : "Years"}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="p-2 rounded border border-gray-300"
                type="number"
                placeholder="Your Fees"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <p className="font-bold">Specialization</p>
              <select
                onChange={(e) => setSpecialization(e.target.value)}
                value={specialization}
                className="p-2 rounded border border-gray-300"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
                <option value="Urologist">Urologist</option>
                <option value="Orthopedic surgeon">Orthopedic surgeon</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Ophthalmologist">Ophthalmologist</option>
                <option value="Psychiatrist">Psychiatrist</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-bold">Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="p-2 rounded border border-gray-300"
                type="text"
                placeholder="Your Education"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold">Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="p-2 rounded border border-gray-300"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="p-2 rounded border border-gray-300"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <p className="font-bold">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="p-2 rounded border w-full border-gray-300"
            placeholder="Write about doctor"
            rows={5}
            required
          ></textarea>
        </div>

        <div className="mt-4 text-center">
          <button className="bg-[#5f6FFF] text-white p-2 rounded cursor-pointer">
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
