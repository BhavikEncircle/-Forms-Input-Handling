import React from "react";

const Registered_Data = ({ formData, onReturnToForm }) => {
  return (
    <div className="bg-gray-200 p-5 rounded-xl h-auto w-200 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Registered Data</h1>
      <div className="flex flex-col gap-2 w-150 text-lg">
        <p className="text-gray-800">
          <span className="font-bold">Name:</span>{" "}
          {formData.name || "Not provided"}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Email:</span>{" "}
          {formData.email || "Not provided"}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Password:</span>{" "}
          {formData.password ? "••••••••" : "Not provided"}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Gender:</span>{" "}
          {formData.gender || "Not provided"}
        </p>
        <p className="text-gray-800">
          <span className="font-bold">Skills:</span>{" "}
          {formData.skills.length > 0
            ? formData.skills.join(", ")
            : "No skills selected"}
        </p>
      </div>
      <button
        onClick={onReturnToForm}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl text-xl mt-4"
      >
        Return to Registration Form
      </button>
    </div>
  );
};

export default Registered_Data;
