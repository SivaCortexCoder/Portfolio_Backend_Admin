import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Edit3, Trash2, FolderOpen, Plus } from "lucide-react";

const Myprojects = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const { projects, fetchData } = useContext(ProjectContext);
  const navigate = useNavigate();
  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await axios.delete(`${baseURL}/project/delete-project/${id}`);
       toast.success(res.data.message || "Project deleted successfully!");
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong.")
    }
  };

  return (
    <div className="w-[90%] md:w-[85%] max-w-6xl mx-auto py-12">
     
      <div className=" mb-8">
        <div className="sideleft">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">All Projects</h2>
          <p className="text-gray-600">Manage your project portfolio</p>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-200 p-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
            <FolderOpen className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto">
            Get started by creating your first project to see it displayed here.
          </p>
          <button
            onClick={() => navigate('/add-project')}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
            Create Your First Project
          </button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade">
          {projects.map((project) => (
            <div 
              key={project._id} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imagelink1}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(`/add-project/${project._id}`)}
                    className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    <Edit3 className="w-4 h-4" strokeWidth={2} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="flex-1 cursor-pointer inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={2} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      

    </div>
  );
};

export default Myprojects;