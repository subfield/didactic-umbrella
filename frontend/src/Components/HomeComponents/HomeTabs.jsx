import { useState } from "react";
import Properties from "./Properties";
import Shortlets from "./Shortlets";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("shortlets");

  const renderTabContent = () => {
    switch (activeTab) {
      case "shortlets":
        return <Shortlets />;
      case "properties":
        return <Properties />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="py-8 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-3/5 mx-auto ">
            <p className="text-center text-gray-500 mb-8 font-normal">
              Explore a curated list of properties, from family homes to modern
              apartments. Find the perfect property suited to your lifestyle and
              budget.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-200 rounded p-1">
              <button
                className={`px-4 py-2 border-b-2 transition-colors duration-300 ${
                  activeTab === "shortlets"
                    ? "bg-white rounded font-medium shadow"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("shortlets")}
              >
                Shortlets
              </button>
              <button
                className={`px-4 py-2 border-b-2 transition-colors duration-300 ${
                  activeTab === "properties"
                    ? "bg-white rounded font-medium shadow"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("properties")}
              >
                Properties
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>{renderTabContent()}</div>
    </>
  );
};

export default Tabs;
