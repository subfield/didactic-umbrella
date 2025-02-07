import { useState } from "react";
import Blogs from "./Blogs";
import FAQs from "./Faqs";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("blogs");

  const renderTabContent = () => {
    switch (activeTab) {
      case "blogs":
        return <Blogs />;
      case "faqs":
        return <FAQs />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:w-3/5 mx-auto ">
            <p className="text-center text-pink-700 mb-8 font-bold">
              Resources
            </p>
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
              Find out more details we have in stock for youn
            </h2>
          </div>
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-200 rounded p-1">
              <button
                className={`px-4 py-2 transition-colors duration-300 ${
                  activeTab === "blogs"
                    ? "bg-white rounded font-medium shadow"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("blogs")}
              >
                Blogs
              </button>
              <button
                className={`px-4 py-2 border-b-2 transition-colors duration-300 ${
                  activeTab === "faqs"
                    ? "bg-white rounded font-medium shadow"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("faqs")}
              >
                FAQs
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
