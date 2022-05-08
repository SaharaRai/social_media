import React, { useEffect } from "react";
import Sidebar from "../components/sidebar";
import Timeline from "../components/timeline";
import Header from "../components/header";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Social Media";
  }, []);
  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
