import { ChevronRight, ChevronLeft } from "lucide-react";
import { useGetSessionByUserIdQuery } from "../../../redux/api";

export default function Dashboard() {
    const {data: booking, isLoading, isError} = useGetSessionByUserIdQuery()
  
  const applications = [
    {
      id: "CB001",
      product: "Loan",
      type: "Instant Loan",
      status: "Pending",
      date: "Aug 14, 2024 at 10:23am",
    },
    {
      id: "CB002",
      product: "Savings & Investment",
      type: "Target Savings",
      status: "Pending",
      date: "Aug 14, 2024 at 10:23am",
    },
    {
      id: "CB001",
      product: "Loan",
      type: "Back to School",
      status: "Pending",
      date: "Aug 14, 2024 at 10:23am",
    },
    {
      id: "CB002",
      product: "Savings & Investment",
      type: "Real Estate",
      status: "Pending",
      date: "Aug 14, 2024 at 10:23am",
    },
    {
      id: "CB003",
      product: "Financial Advisory",
      type: "-",
      status: "Pending",
      date: "Aug 14, 2024 at 10:23am",
    },
    {
      id: "CB003",
      product: "Financial Advisory",
      type: "-",
      status: "Pending",
      date: "Aug 14, 2024 at 10:23am",
    },
  ];
  if (isLoading) return <p>Loading Total count...</p>
  if (isError) return <p>Error loading count.</p>
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Applications</p>
              <h3 className="text-2xl font-semibold">{booking.count()}</h3>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              View all
            </a>
          </div>
        </div>

        <div className="p-6 bg-white border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Bookings</p>
              <h3 className="text-2xl font-semibold">{booking.count()}</h3>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              View bookings
            </a>
          </div>
        </div>

        <div className="p-6 bg-white border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Responses</p>
              <h3 className="text-2xl font-semibold">20</h3>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              View response
            </a>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <a href="#" className="text-sm text-gray-600 hover:underline">
            View all
          </a>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 px-6 border-b">
          <button className="px-1 py-4 text-[#473552] border-b-2 border-purple-600">
            Applications
          </button>
          <button className="px-1 py-4 text- hover:text-gray-900">
            Bookings
          </button>
          {/* <button className="px-1 py-4 text-gray-600 hover:text-gray-900">Responses</button> */}
        </div>

        {/* Table */}
        <div className="p-6 overflow-x-auto border">
          <div className="min-w-[800px]">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600 border-b">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Product/Service</th>
                  <th className="pb-3 font-medium">Service Type</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {applications.map((app, index) => (
                  <tr key={index} className="text-sm">
                    <td className="py-4">{app.id}</td>
                    <td className="py-4">{app.product}</td>
                    <td className="py-4">{app.type}</td>
                    <td className="py-4">
                      <span className="px-2 py-1 text-yellow-600 bg-yellow-50 rounded-full">
                        {app.status}
                      </span>
                    </td>
                    <td className="py-4">{app.date}</td>
                    <td className="py-4">
                      <button className="text-purple-600 hover:text-purple-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between pt-4 mt-4 border-t">
              <p className="text-sm text-gray-600">Showing 10 of 83</p>
              <div className="flex gap-2">
                <button className="p-2 text-gray-600 border rounded-lg hover:bg-gray-50">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-2 text-gray-600 border rounded-lg hover:bg-gray-50">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
