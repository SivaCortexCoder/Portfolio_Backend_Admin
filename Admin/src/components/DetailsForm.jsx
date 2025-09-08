import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectContext } from '../context/ProjectContextProvider';
import { toast } from 'react-toastify';
import axios from 'axios';

const DetailsForm = () => {
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const {id} = useParams()
  const navigate = useNavigate()

  const {personalInfo,fetchPersonalInfo} = useContext(ProjectContext)
  const [form, setForm] = useState({
    name: "", role: "", tagline: "", image: "", about: "",
    email: "", phone: "", location: "", github: "", linkedin: ""
  });

  useEffect(()=>{
    if(personalInfo && personalInfo._id === id){
      setForm(personalInfo);
    }

  },[personalInfo, id])

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.put(`${baseURL}/api/personal-info/${id}`, form);
      toast.success(res.data.message)
      fetchPersonalInfo()
      navigate("/");
      
    } catch (error) {
      console.error("Error updating personal info", error);
      toast.error(error)
    }

  }

  return (
        <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">Edit Personal Information</h1>
            <p className="text-blue-100 mt-2">Update your personal details here</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-8 space-y-6">
              {/* Basic Info */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Basic Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name" value={form.name} onChange={handleChange}
                      placeholder="Siva Kumar"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="role"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role" value={form.role} onChange={handleChange}
                      placeholder="MERN Stack Developer"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="tagline"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tagline *
                  </label>
                  <input
                    type="text"
                    id="tagline"
                    name="tagline" value={form.tagline} onChange={handleChange}
                    placeholder="Crafting digital experiences that inspire and delight users worldwide"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="image"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Profile Image URL *
                  </label>
                  <input
                    type="url"
                    id="image"
                    name="image" value={form.image} onChange={handleChange}
                    placeholder="https://example.com/profile.jpg"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>
              </div>

              {/* About */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  About
                </h2>
                <textarea
                  id="about"
                  name="about" value={form.about} onChange={handleChange}
                  rows={5}
                  placeholder="Write something about yourself..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white resize-none"
                ></textarea>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Contact Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" value={form.email} onChange={handleChange}
                      placeholder="sivaofficial76@gmail.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 9500059697"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location" value={form.location} onChange={handleChange}
                    placeholder="Chennai, Tamilnadu."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  Social Links
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="github"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      GitHub *
                    </label>
                    <input
                      type="url"
                      id="github"
                      name="github" value={form.github} onChange={handleChange}
                      placeholder="https://github.com/SivaCortexCoder"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      LinkedIn *
                    </label>
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin" value={form.linkedin} onChange={handleChange}
                      placeholder="https://www.linkedin.com/in/siva-kumar-585123276/"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="cursor-pointer px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Save Personal Info
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

 

export default DetailsForm