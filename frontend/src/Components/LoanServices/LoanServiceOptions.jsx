import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

function LoanServiceOptions() {
  const [activeOption, setActiveOption] = useState(0)
  const [expandedSection, setExpandedSection] = useState(null)

  const options = [
    {
      title: "Salary Advance",
      description:
        "This is a loan given to an employee in form of an overdraft. The repayment structure is designed towards the employees monthly wages/ salary. At Crystal Bricks, we understand that happens. This product is developed for salary earners who need a quick loan until their next payday.",
      requirements: [
        {
          title: "Applicants must be 18 years and above",
          content: "Proof of age through valid government-issued ID is required.",
        },
        {
          title: "Active Job or Business",
          content: "Provide recent pay stubs or business registration documents.",
        },
        {
          title: "Cooperative",
          content: "Membership in a recognized cooperative can improve loan terms.",
        },
        {
          title: "Membership",
          content: "Existing Crystal Bricks members may qualify for preferential rates.",
        },
      ],
      actionText: "Request Service",
    },
    {
      title: "Restocking",
      description:
        "Designed for business owners, this loan provides quick access to funds for restocking inventory. Flexible repayment terms tailored for entrepreneurs.",
      requirements: [
        {
          title: "Applicants must be 18 years and above",
          content: "Valid government-issued ID required.",
        },
        {
          title: "Active Job or Business",
          content: "Proof of business operation and financial statements.",
        },
        {
          title: "Cooperative",
          content: "Membership in business associations may be beneficial.",
        },
        {
          title: "Membership",
          content: "Loyalty programs for repeat borrowers available.",
        },
      ],
      actionText: "Request Service",
    },
    {
      title: "Bridging",
      description:
        "A short-term loan to help bridge financial gaps during a specific period. Ideal for individuals or businesses waiting on other payments.",
      requirements: [
        {
          title: "Applicants must be 18 years and above",
          content: "Age verification required through official documents.",
        },
        {
          title: "Active Job or Business",
          content: "Proof of incoming payments or contracts.",
        },
        {
          title: "Cooperative",
          content: "Cooperative members may access special bridging loan options.",
        },
        {
          title: "Membership",
          content: "Crystal Bricks members enjoy expedited processing.",
        },
      ],
      actionText: "Request Service",
    },
    {
      title: "Back To School",
      description:
        "Helping parents and guardians cover school fees and related expenses. Affordable repayment plans to ease the financial burden.",
      requirements: [
        {
          title: "Applicants must be 18 years and above",
          content: "Parents or guardians must provide proof of age.",
        },
        {
          title: "Active Job or Business",
          content: "Income verification for repayment capability.",
        },
        {
          title: "Cooperative",
          content: "Educational cooperative members may receive additional benefits.",
        },
        {
          title: "Membership",
          content: "Returning customers may qualify for increased loan amounts.",
        },
      ],
      actionText: "Request Service",
    },
  ]

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-12">
        We offer various{" "}
        <span className="relative">
          Loan Service
          <span className="absolute bottom-1 left-0 w-full h-1 bg-pink-500"></span>
        </span>{" "}
        options
      </h2>

      <div className="grid lg:grid-cols-[250px,1fr] gap-8">
        {/* Left Section - Loan Types */}
        <nav className="space-y-3">
          {options.map((option, index) => (
            <button
              key={index}
              className={`flex items-center text-lg font-medium transition-all gap-2 w-full text-left ${
                activeOption === index ? "text-pink-600" : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setActiveOption(index)}
            >
              {activeOption === index && <span>→</span>}
              {option.title}
            </button>
          ))}
        </nav>

        {/* Right Section - Content */}
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">{options[activeOption].description}</p>

          {/* Requirements Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Requirements</h3>
            {options[activeOption].requirements.map((req, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full py-4 text-left"
                >
                  <span className="font-medium">{req.title}</span>
                  {expandedSection === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>

                {expandedSection === index && <div className="pb-4 text-sm text-gray-600">{req.content}</div>}
              </div>
            ))}
          </div>

          <a href="#" className="inline-flex items-center text-pink-600 hover:text-pink-700">
            {options[activeOption].actionText}
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default LoanServiceOptions

