import React, { useContext } from "react";
import { Edit, Mail, Phone, Linkedin, Github, LocationEdit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContextProvider";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const { personalInfo } = useContext(ProjectContext);

  return (
    <section className="w-[90%] md:w-[85%] max-w-6xl mx-auto py-12 sideleft">
      {!personalInfo ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-center text-gray-600 text-2xl animate-pulse">Loading personal info...</p>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Personal Information
              </h2>
              <p className="text-gray-600">Manage your Personal Data</p>
            </div>
            <div>
              <button
                onClick={() => {
                  navigate(`/edit-details/${personalInfo._id}`);
                }}
                className="bg-blue-500 text-white px-6 py-1 rounded flex items-center gap-2 cursor-pointer"
              >
                <Edit className="w-4 h-4 text-white" strokeWidth={2} /> Edit
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 items-center">
            <div>
              <img
                src={personalInfo.image}
                alt="Profile"
                className="w-96 mx-auto"
              />
            </div>
            <div className="ml-5">
              <h1 className="text-5xl md:text-7xl font-bold text-violet-800 mb-2 leading-tight">
                {personalInfo.name}
              </h1>
              <h3 className="text-2xl md:text-4xl font-medium mb-6">
                {personalInfo.role}
              </h3>
              <p className="text-lg text-purple-800 leading-relaxed mb-6">
                {personalInfo.tagline}
              </p>
              <p className="text-md text-gray-600">{personalInfo.about}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-5 mt-10 w-[90%] mx-auto">
            <div className="border border-gray-300 rounded-md px-4 py-2 flex-1">
              <h2 className="flex items-center gap-2 font-medium text-lg">
                <Mail className="w-4 h-4" strokeWidth={2} /> Email
              </h2>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-500"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="border border-gray-300 rounded-md px-4 py-2 flex-1">
              <h2 className="flex items-center gap-2 font-medium text-lg">
                <Phone className="w-4 h-4" strokeWidth={2} /> Phone
              </h2>
              <a
                href={`tel:${personalInfo.phone}`}
                className="hover:text-blue-500"
              >
                {personalInfo.phone}
              </a>
            </div>

            <div className="border border-gray-300 rounded-md px-4 py-2 flex-1">
              <h2 className="flex items-center gap-2 font-medium text-lg">
                <Linkedin className="w-4 h-4" strokeWidth={2} /> LinkedIn
              </h2>
              <a
                className="hover:text-blue-500"
                href={personalInfo.linkedin}
                target="blank"
              >
                {personalInfo.linkedin}
              </a>
            </div>

            <div className="border border-gray-300 rounded-md px-4 py-2 flex-1">
              <h2 className="flex items-center gap-2 font-medium text-lg">
                <Github className="w-4 h-4" strokeWidth={2} /> GitHub
              </h2>
              <a
                className="hover:text-blue-500"
                href={personalInfo.github}
                target="blank"
              >
                {personalInfo.github}
              </a>
            </div>

            <div className="border border-gray-300 rounded-md px-4 py-2 flex-1">
              <h2 className="flex items-center gap-2 font-medium text-lg">
                <LocationEdit className="w-4 h-4" strokeWidth={2} /> Location
              </h2>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default PersonalInfo;
