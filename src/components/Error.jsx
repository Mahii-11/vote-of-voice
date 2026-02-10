import { useNavigate, useRouteError } from "react-router";
import { AlertTriangle } from "lucide-react";

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-50 to-blue-100 px-6">
      
      <div className="max-w-lg w-full bg-white shadow-2xl rounded-3xl p-10 text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          কিছু সমস্যা হয়েছে
        </h1>

        {/* Error Message */}
        <p className="text-gray-500 mb-6">
          {error?.statusText || error?.message || "অপ্রত্যাশিত একটি ত্রুটি ঘটেছে।"}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition font-medium"
          >
            ← ফিরে যান
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition font-medium shadow-md hover:shadow-lg"
          >
            হোমে যান
          </button>

        </div>

      </div>
    </div>
  );
}
