"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import {Link, useParams} from "react-router-dom"
import CancelModal from "../../Components/CancelModal"
import { useGetSessionQuery } from "../../../redux/api"

export default function BookingDetail() {
  const [showCancelModal, setShowCancelModal] = useState(false)
  const { bookingId } = useParams(); 
  const { data: booking, isLoading, isError } = useGetSessionQuery(bookingId);
  // This would come from your API/database
  // const booking = {
  //   date: "Aug 24, 2024 at 10:00am",
  //   type: "Homes and Apartment",
  //   status: "Upcoming",
  //   info: "Aliqui sed lorem quam at risus urcu ultrices cras. Mi felis dolor rutrum vulputat. Pretium urna enim curabitur blandit et neque eu senectus quis. Risus sed mattis egestas nec in morbi diam ornare.",
  //   apartment: {
  //     title: "3 Bedroom Apartment",
  //     location: "Lugbe, Abuja",
  //     checkIn: "Aug 24, 2024 at 12:00PM",
  //     checkOut: "Aug 25, 2024 at 12:00PM",
  //   },
  // }

  if (isLoading) return <p>Loading booking details...</p>;
  if (isError) return <p>Error loading booking details.</p>;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Link href="/bookings" className="flex items-center text-sm text-gray-600">
          <ChevronLeft className="mr-1 h-4 w-4" />
          View booking
        </Link>
        <div className="flex gap-4">
          <button className="border bg-white px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
            Reschedule
          </button>
          <button
            onClick={() => setShowCancelModal(true)}
            className="border border-red-600 bg-white px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            Cancel
          </button>
          <button className=" bg-[#42032B] px-4 py-2 text-sm text-white hover:bg-purple-700">
            Contact Support
          </button>
        </div>
      </div>

      {/* Booking Details */}
      <div className="border bg-white p-6">
        <h2 className="mb-6 text-lg font-semibold">Booking details</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500">Date</div>
              <div>{booking.date}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Service Type</div>
              <div>{booking.purpose}</div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-sm text-gray-500">Status</div>
              <div>{booking.status}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Other Relevant Information</div>
              <div className="text-sm text-gray-600">{booking.info}</div>
            </div>
          </div>
        </div>
        <hr className="mt-10"/>
        {/* Apartment Details (only show for Homes and Apartment type) */}
        {booking.type === "Homes and Apartment" && (
          <div className="mt-8">
            <h3 className="mb-6 text-lg font-semibold">Apartment</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500">Title</div>
                  <div>{booking.apartment.title}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div>{booking.apartment.location}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500">Apartment</div>
                  <button className="text-purple-600 hover:text-purple-900">View Details</button>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Check-in - Check Out</div>
                  <div>
                    {booking.apartment.checkIn} - {booking.apartment.checkOut}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cancel Modal */}
      {showCancelModal && (
        <CancelModal
          onClose={() => setShowCancelModal(false)}
          onConfirm={() => {
            // Handle cancellation logic here
            setShowCancelModal(false)
          }}
        />
      )}
    </div>
  )
}

