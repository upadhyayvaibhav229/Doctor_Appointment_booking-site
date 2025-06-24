import React, { useEffect, useState } from "react";
import { useAdminContext } from "../../Contexts/AdminContext";

const DoctorList = () => {
  const { doctors, getAllDoctors, adminToken,changeAvailability } = useAdminContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      await getAllDoctors();
      setLoading(false);
    };

    if (adminToken) fetchDoctors();
  }, [adminToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-auto">
      <h1 className="text-xl font-semibold text-indigo-700 mb-4">
        Doctor List
      </h1>

      {loading ? (
        <p className="text-gray-500">Loading doctors...</p>
      ) : doctors.length === 0 ? (
        <p className="text-red-500">No doctors found.</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          {doctors.map((item, index) => (
            <div
              key={index}
              className="group max-w-64 w-full sm:w-[280px]  border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden cursor-pointer bg-indigo-50 group-hover:bg-indigo-500">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/300x180?text=No+Image")
                  }
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col gap-1">
                <p className="font-bold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-600">{item.specialization}</p>

                <label className="flex items-center gap-2 text-sm mt-3">
                  <input
                  onChange={(e) => changeAvailability(item._id, e.target.checked)}
                    type="checkbox"
                    checked={item.availability}
                    // readOnly
                    className="accent-indigo-600"
                  />
                  <span className={item.availability ? "text-green-600" : "text-red-500"}>
                    {item.availability ? "Available" : "Not available"}
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorList;
