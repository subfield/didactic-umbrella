"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {Link} from "react-router-dom";
import CancelModal from "../../Components/CancelModal"
import { useGetSessionByUserIdQuery } from "../../../redux/api";

export default function BookingsPage() {
  const [showCancelModal, setShowCancelModal] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState(null)

  const {data: booking, isLoading, isError} = useGetSessionByUserIdQuery()


  // console.log({booking})

  // const bookings = [
  //   { date: "Aug 19, 2024 at 1:00am", type: "Homes and Apartment", status: "Upcoming", id: "1" },
  //   { date: "Aug 18, 2024 at 11:30am", type: "Financial Advisory", status: "Upcoming", id: "2" },
  //   { date: "Aug 14, 2024 at 3:00pm", type: "Financial Advisory", status: "Upcoming", id: "3" },
  //   { date: "Aug 14, 2024 at 10:00am", type: "Money Management", status: "Completed", id: "4" },
  //   { date: "Feb 14, 2024 at 10:00am", type: "Homes and Apartment", status: "Cancelled", id: "5" },
  //   { date: "Dec 16, 2023 at 3:00pm", type: "Homes and Apartment", status: "Completed", id: "6" },
  // ]

  useEffect(()=>{

  })

  const handleCancel = (booking) => {
    setSelectedBooking(booking)
    setShowCancelModal(true)
  }

  const confirmCancel = () => {
    // Handle cancellation logic here
    console.log("Cancelling booking:", selectedBooking)
    setShowCancelModal(false)
    setSelectedBooking(null)
  }

  if (isLoading) return <p>Loading bookings...</p>
  if (isError) return <p>Error loading bookings.</p>

  return (
      <div>
        {/* Filters */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex gap-4">
            <select className=" border p-2 text-sm">
              <option>Status</option>
              <option>Upcoming</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <select className=" border p-2 text-sm">
              <option>Type</option>
              <option>Homes and Apartment</option>
              <option>Financial Advisory</option>
              <option>Money Management</option>
            </select>
            <select className="border p-2 text-sm">
              <option>Sort by</option>
              <option>Date</option>
              <option>Status</option>
            </select>
          </div>
          <button className=" bg-purple-600 px-4 py-2 text-sm text-white hover:bg-purple-700">Add New</button>
        </div>

        {/* Table */}
        <div className=" border bg-white">
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
            {booking.map((booking) => (
                <tr key={booking.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{booking.date}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">{booking.purpose}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          booking.status === "Upcoming"
                              ? "bg-blue-100 text-blue-800"
                              : booking.status === "Completed"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                      }`}
                  >
                    {booking.status}
                  </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <div className="flex gap-4">
                      <Link to={`/bookingdetails/${booking.id}`} className="text-purple-600 hover:text-purple-900">
                        View
                      </Link>
                      <button
                          className={`${
                              booking.status === "Completed" || booking.status === "Cancelled"
                                  ? "pointer-events-none text-gray-400"
                                  : "text-purple-600 hover:text-purple-900"
                          }`}
                      >
                        Reschedule
                      </button>
                      <button
                          onClick={() => handleCancel(booking)}
                          className={`${
                              booking.status === "Completed" || booking.status === "Cancelled"
                                  ? "pointer-events-none text-gray-400"
                                  : "text-red-600 hover:text-red-900"
                          }`}
                      >
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>

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

        {/* Cancel Modal */}
        {showCancelModal && <CancelModal onClose={() => setShowCancelModal(false)} onConfirm={confirmCancel} />}
      </div>
  )
}

