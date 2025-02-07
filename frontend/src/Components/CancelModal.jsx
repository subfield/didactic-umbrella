export default function CancelModal({ onClose, onConfirm }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md rounded-lg bg-white p-6">
          <h3 className="mb-4 text-lg font-semibold">Cancel booking?</h3>
          <p className="mb-6 text-gray-600">Are you sure you want to cancel this booking? This action cannot be undone</p>
          <div className="flex justify-end gap-4">
            <button onClick={onClose} className="border px-4 py-2 text-sm text-red-600 border-red-600 hover:bg-gray-50">
              No, go back
            </button>
            <button
              onClick={onConfirm}
              className="border border-grey-400 bg-white border-black px-4 py-2 text-sm text-gray-600 hover:bg-gray-200"
            >
              Yes, cancel
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  