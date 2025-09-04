import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContextProvider";
import { toast } from "react-toastify";

const ProjectAddForm = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const { id } = useParams();
  const { projects, fetchData } = useContext(ProjectContext);

  const initialFormData = {
    title: "",
    description: "",
    imagelink1: "",
    imagelink2: "",
    imagelink3: "",
    tech: "",
    githublink: "",
    livelink: "",
    detailedDescription: "",
    features: "",
    featured: "False",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (id) {
      const project = projects.find((p) => p._id === id);
      if (project) {
        setFormData({
          title: project.title,
          description: project.description,
          imagelink1: project.imagelink1,
          imagelink2: project.imagelink2,
          imagelink3: project.imagelink3,
          tech: project.tech.join(", "),
          githublink: project.githublink,
          livelink: project.livelink,
          detailedDescription: project.detailedDescription,
          features: project.features.join("\n"),
          featured: project.featured ? "True" : "False",
        });
      }
    }
  }, [id, projects]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      tech: formData.tech.split(",").map((item) => item.trim()),
      features: formData.features
        .split("\n")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      featured: formData.featured === "True",
    };

    try {
      if (id) {
      const res = await axios.put(`${baseURL}/project/update-project/${id}`,payload);
      toast.success(res.data.message || "Project updated successfully!");
      } else {
      const res =   await axios.post(`${baseURL}/project/add-project`, payload);
       toast.success(res.data.message || " Project added successfully!");
        setFormData(initialFormData);
      }

      fetchData();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if(projects.length===0){
    return <h1>No Projects Found..</h1>
  }

  return (
    <div className="min-h-screen  py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              {" "}
              {id ? "Edit Project Details" : "Add New Project"}
            </h1>
            <p className="text-blue-100 mt-2">
              Share your amazing project with the world
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-8 space-y-6">
              {/* Basic Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Basic Information
                </h2>

                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Project Title *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="E-Commerce Platform"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="tech"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Tech Stack *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                      type="text"
                      id="tech"
                      name="tech"
                      value={formData.tech}
                      onChange={handleChange}
                      placeholder="React.js, Node.js, MongoDB"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Short Description *
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400 resize-none"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="A brief overview of your project..."
                    required
                  />
                </div>
              </div>

              {/* Images Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Project Images
                </h2>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="imagelink1"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Main Image *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                      type="url"
                      id="imagelink1"
                      name="imagelink1"
                      value={formData.imagelink1}
                      onChange={handleChange}
                      placeholder="https://example.com/image1.jpg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="imagelink2"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Image 2
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                      type="url"
                      id="imagelink2"
                      name="imagelink2"
                      value={formData.imagelink2}
                      onChange={handleChange}
                      placeholder="https://example.com/image2.jpg"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="imagelink3"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Image 3
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                      type="url"
                      id="imagelink3"
                      name="imagelink3"
                      value={formData.imagelink3}
                      onChange={handleChange}
                      placeholder="https://example.com/image3.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Links Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Project Links
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="githublink"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      GitHub Repository *
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                      type="url"
                      id="githublink"
                      name="githublink"
                      value={formData.githublink}
                      onChange={handleChange}
                      placeholder="https://github.com/username/repo"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="livelink"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Live Demo URL
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                      type="url"
                      id="livelink"
                      name="livelink"
                      value={formData.livelink}
                      onChange={handleChange}
                      placeholder="https://your-project.com"
                    />
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Project Details
                </h2>

                <div className="space-y-2">
                  <label
                    htmlFor="detailedDescription"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Detailed Description *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400 resize-none"
                    id="detailedDescription"
                    name="detailedDescription"
                    value={formData.detailedDescription}
                    onChange={handleChange}
                    placeholder="Provide a comprehensive description of your project, including its purpose, architecture, challenges faced, and solutions implemented..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="features"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Key Features *
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400 resize-none"
                    id="features"
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder="• User authentication and authorization&#10;• Real-time data synchronization&#10;• Responsive design for all devices&#10;• Advanced search and filtering"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="featured"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Featured Project
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white hover:border-gray-400"
                    id="featured"
                    name="featured"
                    value={formData.featured}
                    onChange={handleChange}
                  >
                    <option value="False">false</option>
                    <option value="True">true</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <div>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {id ? "Update Project" : "Publish Project"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectAddForm;
