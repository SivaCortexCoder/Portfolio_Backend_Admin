import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [personalInfo, setPersonalInfo] = useState(null);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURL}/project/all-projects`);
      setProjects(res.data.allProjects);
    } catch (error) {
      console.error(error);
    }
  };

    
  const fetchPersonalInfo = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/personal-info`);
      setPersonalInfo(res.data);
    } catch (error) {
      console.error("Error fetching personal info", error);
    }
  };




  useEffect(() => {
    fetchData();
    fetchPersonalInfo();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, fetchData, personalInfo,fetchPersonalInfo }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
