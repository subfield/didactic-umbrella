import { Shield, ChefHat, Coffee, Tv, Wifi, Shirt, Clock, Wind, Bell, PocketIcon as Pool, Bath, Refrigerator, Car } from 'lucide-react'

const facilities = [
    { icon: Shield, label: 'Security' },
    { icon: ChefHat, label: 'Kitchen' },
    { icon: Coffee, label: 'Breakfast' },
    { icon: Tv, label: 'DSTV' },
    { icon: Wifi, label: 'Internet' },
    { icon: Shirt, label: 'Laundry' },
    { icon: Clock, label: '24 Hour\nFront Desk' },
    { icon: Wind, label: 'Air\nConditioning' },
    { icon: Bell, label: 'Room\nService' },
    { icon: Pool, label: 'Swimming\nPool' },
    { icon: Bath, label: 'Private\nBathroom' },
    { icon: Refrigerator, label: 'Refrigerator' },
    { icon: Car, label: 'Parking\nSpace' }
  ]

function Facilities() {
  return (
    <div>
        <div className="max-w-4xl px-4 sm:px-6 lg:px-32 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Facilities</h2>
      
      <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-8 gap-y-10">
        {facilities.map((facility, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center mb-2 group-hover:bg-pink-100 transition-colors">
              <facility.icon className="w-6 h-6 text-pink-600" />
            </div>
            <span className="text-sm text-gray-600 whitespace-pre-line">
              {facility.label}
            </span>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
export default Facilities