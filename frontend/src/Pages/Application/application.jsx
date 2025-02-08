import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import {  useGetUserReservationsQuery } from "../../../redux/api"

export default function ApplicationsPage() {
  const [activeTab, setActiveTab] = useState("All")

  const {data: Apps, isLoading, isError} = useGetUserReservationsQuery()
  // const applications = [
  //   { date: "Aug 24, 2024 at 10:00am", type: "Loan Service", status: "Pending", id: "1" },
  //   { date: "Aug 19, 2024 at 1:00am", type: "Loan Service", status: "Pending", id: "2" },
  //   { date: "Aug 14, 2024 at 3:00pm", type: "Savings", status: "Pending", id: "3" },
  //   { date: "Aug 14, 2024 at 10:00am", type: "Savings", status: "Completed", id: "4" },
  //   { date: "Aug 7, 2024 at 1:30pm", type: "Loan Service", status: "Cancelled", id: "5" },
  //   { date: "Aug 7, 2024 at 1:30pm", type: "Loan Service", status: "Cancelled", id: "6" },
  //   { date: "Dec 16, 2023 at 3:00pm", type: "Savings", status: "Completed", id: "7" },
  // ]
  if (isLoading) return <p>Loading Application...</p>
  if (isError) return <p>Error loading Applications.</p>
  return (
      <div className="">
        {/* Tabs */}
        <div className="mb-6 border-b">
          <div className="flex gap-6">
            {["All", "Active"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-1 py-4 ${
                        activeTab === tab ? "border-b-2 border-purple-600 text-purple-600" : "text-gray-500"
                    }`}
                >
                  {tab}
                </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <select className=" border p-2 text-sm">
            <option>Status</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
          <select className=" border p-2 text-sm">
            <option>Type</option>
            <option>Loan Service</option>
            <option>Savings</option>
          </select>
          <select className=" border p-2 text-sm">
            <option>Sort by</option>
            <option>Date</option>
            <option>Status</option>
          </select>
        </div>

        {/* Table */}
        <div className="border bg-white">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <table className="min-w-full">
              <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Service Type</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500"></th>
              </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
              {Apps.map((app) => (
                  <tr key={app.id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{app.date}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{app.purpose}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
              <span
                  className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      app.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : app.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                  }`}
              >
                {app.status}
              </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      <div className="flex gap-4">
                        <Link to={`/applicationID/${app.id}`} className="text-purple-600 hover:text-purple-900">
                          View
                        </Link>
                        <button className="text-red-600 hover:text-red-900">Cancel</button>
                      </div>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t bg-white px-6 py-3">
            <div className="text-sm text-gray-500">Showing 10 of 12</div>
            <div className="flex gap-2">
              <button className="rounded border p-1 hover:bg-gray-50">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="rounded border p-1 hover:bg-gray-50">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
  )
}

