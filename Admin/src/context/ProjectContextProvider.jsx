import axios from "axios";
import React, { useEffect, useState, createContext } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseURL}/project/all-projects`);
      setProjects(res.data.allProjects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, fetchData }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
