import { useNavigate} from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

function GoBack() {
  const navigate = useNavigate();
  return (
    <>
        <div className="border-b">
      <div className="max-w-7xl mx-auto px-4">
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center py-4 text-sm hover:text-pink-600 font-bold text-black transition-colors group"
        >
          <ArrowLeft className="w-6 h-6 mr-2 transition-transform group-hover:-translate-x-1" />
          Go Back
        </button>
      </div>
    </div>
    </>
  )
}
export default GoBack