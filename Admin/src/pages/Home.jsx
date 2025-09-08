import React from "react";
import Myprojects from "../components/Myprojects";
import { FolderOpen } from "lucide-react";
import PersonalInfo from "../components/PersonalInfo";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PersonalInfo/>
      <Myprojects />
    </div>
  );
};

export default Home;