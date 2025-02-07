import {Loader2} from "lucide-react";

export const Preloader = () => {
    return (
        <div className="w-full h-full fixed inset-0 flex items-center justify-center bg-white backdrop-blur-lg z-50">
            <div className="flex items-center justify-center">
                <Loader2 className='text-pink-600 h-10 w-10 animate-spin'/>
            </div>
        </div>
    )
}