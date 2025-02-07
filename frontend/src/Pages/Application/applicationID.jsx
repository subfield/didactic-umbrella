"use client"

import { useState } from "react"
import { ChevronLeft, X } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import Woman from "../../assets/Woman.svg"
import { useGetReservationByIdQuery } from "../../../redux/api"

export default function ApplicationDetail() {
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const {applicationId} = useParams();
  const {data: history, isLoading, isError} = useGetReservationByIdQuery(applicationId)
  // const history = [
  //   { id: "CB556001", amount: "₦4,900.50", status: "Completed", date: "Aug 4, 2024" },
  //   { id: "CB223689", amount: "₦19,904.80", status: "Completed", date: "Jul 2, 2024" },
  //   { id: "CB889334", amount: "₦6,900.80", status: "Completed", date: "Feb 14, 2024" },
  //   { id: "CB456112", amount: "₦19,553.80", status: "Completed", date: "Dec 16, 2023" },
  //   { id: "CB223889", amount: "₦4,904.80", status: "Pending", date: "Aug 14, 2024" },
  //   { id: "CB445990", amount: "₦24,904.80", status: "Pending", date: "Aug 7, 2024" },
  // ]

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  if (isLoading) return <p>Loading application details...</p>;
  if (isError) return <p>Error loading application details.</p>;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <Link href="/applications" className="mb-4 flex items-center text-sm text-gray-600">
          <ChevronLeft className="mr-1 h-4 w-4" />
          View Application
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Application Details */}
          <div className=" border bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold">Application details</h2>
            <div className="grid gap-4">
              <div>
                <div className="text-sm text-gray-500">Service</div>
                <div>Loan</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Service Type</div>
                <div>Restocking</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Status</div>
                <div className="text-orange-600">In progress</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Date Added</div>
                <div>Aug 24, 2024 at 10:23am</div>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="border bg-white p-6">
  <div className="mb-4 flex items-center justify-between">
    <h2 className="text-lg font-semibold">History</h2>
    <button className="text-sm text-purple-600">View all</button>
  </div>
  
  <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
    <table className="min-w-full">
      <thead>
        <tr className="text-left text-sm text-gray-500">
          <th className="pb-2">Pay ID</th>
          <th className="pb-2">Amount</th>
          <th className="pb-2">Status</th>
          <th className="pb-2">Date Due</th>
          <th className="pb-2">Proof of Payment</th>
        </tr>
      </thead>
      <tbody className="text-sm">
        {history.map((item) => (
          <tr key={item.id}>
            <td className="py-2">{item.id}</td>
            <td className="py-2">{item.amount}</td>
            <td className="py-2">
              <span
                className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                  item.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {item.status}
              </span>
            </td>
            <td className="py-2">{item.date}</td>
            <td className="py-2">
              <button
                onClick={() => setShowUploadModal(true)}
                className="text-purple-600 hover:text-purple-900"
              >
                View/Upload receipt
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>

        {/* Right Column - Loan Details */}
        <div className=" border bg-white p-6">
          <div className="mb-6">
            <img src={Woman} alt="Loan Type" width={500} height={200} className="rounded-lg" />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Restocking</h2>
          <p className="mb-6 text-gray-600">
            This products is designed to assist already existing businesses seeking financial partnership to enable them
            increase their stock so as to meet customer demands. The strength of every business or trade they say, is
            restocking
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-sm text-gray-500">Principal</div>
              <div className="text-lg font-semibold">₦500,000.00</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Interest rate</div>
              <div className="text-lg font-semibold">10%</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Interest (₦)</div>
              <div className="text-lg font-semibold">₦100,000.00</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Payment</div>
              <div className="text-lg font-semibold">₦600,000.00</div>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <div>
              <div className="text-sm text-gray-500">Start Date</div>
              <div>Jul 2, 2024 at 2:36pm</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">End Date</div>
              <div>Aug 24, 2024 at 10:23am</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Loan Duration</div>
              <div>(2 Months)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Upload Receipt</h3>
              <button
                onClick={() => {
                  setShowUploadModal(false)
                  setSelectedFile(null)
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              className="mb-4 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <input type="file" onChange={handleFileChange} className="hidden" id="fileInput" accept="image/*" />
              <label htmlFor="fileInput" className="cursor-pointer">
                {selectedFile ? (
                  <div className="text-sm text-gray-600">Selected file: {selectedFile.name}</div>
                ) : (
                  <div className="text-sm text-gray-600">
                    Drag image/video here
                    <br />
                    or click to upload
                  </div>
                )}
              </label>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setShowUploadModal(false)
                  setSelectedFile(null)
                }}
                className="rounded-lg border px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle upload here
                  setShowUploadModal(false)
                  setSelectedFile(null)
                }}
                className="rounded-lg bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

