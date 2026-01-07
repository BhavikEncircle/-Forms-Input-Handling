import React, { useState } from "react";

const Registration_From = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        if (checked) {
          return { ...prevData, skills: [...prevData.skills, value] };
        } else {
          return {
            ...prevData,
            skills: prevData.skills.filter((skill) => skill !== value),
          };
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className=" bg-gray-200 p-5 rounded-xl h-auto w-200 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800">Registration Form</h1>
      <form className="flex flex-col gap-2 w-150 " onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-gray-800 font-bold text-xl mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="border px-2 w-150 rounded-xl text-xl py-1"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email" className="text-gray-800 font-bold text-xl mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="border px-2 w-150 rounded-xl text-xl py-1"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label
          htmlFor="password"
          className="text-gray-800 font-bold text-xl mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="border px-2 w-150 rounded-xl text-xl py-1"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <label
          htmlFor="gender"
          className="text-gray-800 font-bold text-xl mb-1"
        >
          Gender
        </label>
        <div className="flex gap-2 justify-center items-center w-150 mx-auto ">
          <label
            htmlFor="male"
            className="text-gray-800 font-bold text-xl mb-1"
          >
            Male
          </label>
          <input
            type="radio"
            id="male"
            name="gender"
            className="w-150 py-1"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label
            htmlFor="female"
            className="text-gray-800 font-bold text-xl mb-1"
          >
            Female
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            className="w-150 py-1"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label
            htmlFor="other"
            className="text-gray-800 font-bold text-xl mb-1"
          >
            Other
          </label>
          <input
            type="radio"
            id="other"
            name="gender"
            className="w-150 py-1"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
        </div>
        <br />
        <label
          htmlFor="skills"
          className="text-gray-800 font-bold text-xl mb-1"
        >
          Skills
        </label>
        <div className="flex flex-col gap-3 w-150">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="HTML"
              name="skills"
              className="w-5 h-5 cursor-pointer"
              value="HTML"
              checked={formData.skills.includes("HTML")}
              onChange={handleChange}
            />
            <label
              htmlFor="HTML"
              className="text-gray-800 font-semibold text-lg cursor-pointer"
            >
              HTML
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="CSS"
              name="skills"
              className="w-5 h-5 cursor-pointer"
              value="CSS"
              checked={formData.skills.includes("CSS")}
              onChange={handleChange}
            />
            <label
              htmlFor="CSS"
              className="text-gray-800 font-semibold text-lg cursor-pointer"
            >
              CSS
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="JavaScript"
              name="skills"
              className="w-5 h-5 cursor-pointer"
              value="JavaScript"
              checked={formData.skills.includes("JavaScript")}
              onChange={handleChange}
            />
            <label
              htmlFor="JavaScript"
              className="text-gray-800 font-semibold text-lg cursor-pointer"
            >
              JavaScript
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="React"
              name="skills"
              className="w-5 h-5 cursor-pointer"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleChange}
            />
            <label
              htmlFor="React"
              className="text-gray-800 font-semibold text-lg cursor-pointer"
            >
              React
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="Angular"
              name="skills"
              className="w-5 h-5 cursor-pointer"
              value="Angular"
              checked={formData.skills.includes("Angular")}
              onChange={handleChange}
            />
            <label
              htmlFor="Angular"
              className="text-gray-800 font-semibold text-lg cursor-pointer"
            >
              Angular
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="Node"
              name="skills"
              className="w-5 h-5 cursor-pointer"
              value="Node"
              checked={formData.skills.includes("Node")}
              onChange={handleChange}
            />
            <label
              htmlFor="Node"
              className="text-gray-800 font-semibold text-lg cursor-pointer"
            >
              Node
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-xl text-xl"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration_From;
