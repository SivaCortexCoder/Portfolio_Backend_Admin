import React from "react";
import Myprojects from "../components/Myprojects";
import { FolderOpen } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Myprojects />
    </div>
  );
};

export default Home;