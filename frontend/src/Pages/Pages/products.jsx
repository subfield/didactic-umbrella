import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("Loans");

  const tabs = [
    "Loans",
    "Savings and Investment",
    "Money Management",
    "Financial Advisory",
    "Homes and Apartment",
  ];

  const tabContent = {
    Loans: [
      {
        title: "Instant Loans",
        description: "Projects greater than ₦500,000",
        rate: "5-10%",
      },
      {
        title: "Salary Advance",
        description: "Projects lesser than ₦499,999",
        rate: "20-30%",
      },
      {
        title: "Restocking",
        description: "Projects greater than ₦500,000",
        rate: "10-15%",
      },
      {
        title: "Back To School",
        description: "Projects lesser than ₦499,999",
        rate: "15-30%",
      },
    ],
    "Savings and Investment": [
      {
        title: "Target Savings",
        description: "Lorem ipsum datsum opsum.",
      },
      {
        title: "Redeemable Contribution",
        description: "Lorem ipsum datsum opsum.",
      },
      {
        title: "Real Estate",
        description: "Lorem ipsum datsum opsum.",
      },
    ],
    "Money Management": [
      {
        title: "Government Treasury Bills",
        description: "Lorem ipsum datsum opsum.",
      },
      {
        title: "Bonds",
        description: "Lorem ipsum datsum opsum.",
      },
      {
        title: "Money Market",
        description: "Lorem ipsum datsum opsum.",
      },
      {
        title: "Pensions",
        description: "Lorem ipsum datsum opsum.",
      },
    ],
    "Financial Advisory": [
      {
        title: "Book for Financial Advisory",
        description: "Lorem ipsum datsum opsum.",
      },
    ],
    "Homes and Apartment": [
      {
        title: "Visit Homes and Apartment",
        description: "Lorem ipsum datsum opsum.",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Tabs */}
      <div className="mb-8 border-b">
        <div className="overflow-x-auto">
          <div className="flex space-x-8 w-max md:w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {tabContent[activeTab].map((item, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-between rounded-lg bg-[#F8F8F8] p-6 transition-colors hover:bg-gray-200"
          >
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
            {item.rate ? (
              <span className="text-lg font-semibold text-gray-900">
                {item.rate}
              </span>
            ) : (
              <ArrowUpRight
                className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                size={24}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
