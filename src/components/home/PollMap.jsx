export default function PollMap() {
  return (
       <section className="max-w-6xl mx-auto px-4 mt-10 grid md:grid-cols-2 gap-6">
        <div className="shadow rounded p-4 w-full h-64 flex items-center justify-center">
          <img
            src="/src/assets/images/bdmap.png"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="bg-white shadow rounded p-6 space-y-4">
          <h3 className="font-semibold">
            Bangladesh Constituency Polls
          </h3>
          <p className="text-sm text-gray-600">
            🔴 Click Your Area to See Results
          </p>
          <p className="text-sm text-gray-600">
            🔴 What is the biggest issue in your constituency?
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded">
            Take Survey
          </button>
        </div>
      </section>
  )
}
