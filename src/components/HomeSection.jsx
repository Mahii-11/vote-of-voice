import {
  FaVoteYea,
  FaUsers,
  FaPoll,
  FaCheckCircle,
} from "react-icons/fa";

const polls = [
  {
    name: "Md. Rahim",
    party: "Awami League",
    area: "Dhaka-10",
    percent: 72,
    color: "bg-green-600",
  },
  {
    name: "Sumon Ahmed",
    party: "BNP",
    area: "Chattogram-5",
    percent: 65,
    color: "bg-blue-600",
  },
  {
    name: "Sadia Hossain",
    party: "Jatiya Party",
    area: "Sylhet-2",
    percent: 58,
    color: "bg-green-600",
  },
];

export default function HomeSection() {
  return (
    <div className="bg-linear-to-b from-green-50 to-white min-h-screen">
      
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <div className="bg-white p-4 rounded-lg shadow text-sm">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


      <div className="flex border rounded overflow-hidden">
        <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600 whitespace-nowrap">
          নির্বাচনের ধরন
        </span>
        <select className="flex-1 px-3 py-2 outline-none">
          <option>জাতীয় সংসদ নির্বাচন</option>
          <option>সিটি কর্পোরেশন নির্বাচন</option>
          <option>ইউনিয়ন পরিষদ নির্বাচন</option>
        </select>
      </div>

      
      <div className="flex border rounded overflow-hidden whitespace-nowrap">
        <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
          নির্বাচনের নাম
        </span>
        <select className="flex-1 px-3 py-2 outline-none">
          <option>দ্বাদশ জাতীয় সংসদ নির্বাচন</option>
        </select>
      </div>

      <div className="flex border rounded overflow-hidden">
        <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
          প্রার্থীর ধরন
        </span>
        <select className="flex-1 px-3 py-2 outline-none">
          <option>সংসদ সদস্য</option>
          <option>স্বতন্ত্র প্রার্থী</option>
        </select>
      </div>

      <div className="flex border rounded overflow-hidden">
        <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
          জেলা
        </span>
        <select className="flex-1 px-3 py-2 outline-none">
          <option>ঝালকাঠি</option>
          <option>বরিশাল</option>
          <option>ঢাকা</option>
        </select>
      </div>

  
      <div className="flex border rounded overflow-hidden">
        <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
          আসন
        </span>
        <select className="flex-1 px-3 py-2 outline-none">
          <option>ঝালকাঠি-১</option>
          <option>ঝালকাঠি-২</option>
        </select>
      </div>

    
      <div className="flex items-center">
        <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded transition">
          অনুসন্ধান
        </button>
      </div>

    </div>
    </div>
    </div>

  
      <section className="max-w-7xl mx-auto px-4 mt-10">
        <h2 className="text-center font-semibold text-lg mb-6">
          • Trending Polls •
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {polls.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-5 text-center"
            >
              <img
                src="https://i.pravatar.cc/100"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <h3 className="font-semibold mt-3">{p.name}</h3>
              <p className="text-sm text-gray-500">
                Party: {p.party} <br /> {p.area}
              </p>

              <div className="mt-4">
                <div className="h-3 bg-gray-200 rounded">
                  <div
                    className={`h-3 rounded ${p.color}`}
                    style={{ width: `${p.percent}%` }}
                  />
                </div>
                <p className="mt-1 text-sm font-medium">{p.percent}%</p>
              </div>

              <button
                className={`mt-4 w-full text-white py-2 rounded ${
                  p.color
                }`}
              >
                Vote Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          ["24", "Active Polls", <FaPoll />],
          ["150K", "Total Votes Cast", <FaVoteYea />],
          ["85K", "Participants", <FaUsers />],
          ["12,500", "Today's Votes", <FaCheckCircle />],
        ].map((s, i) => (
          <div
            key={i}
            className="bg-white shadow rounded p-4 flex items-center gap-4"
          >
            <div className="text-green-600 text-2xl">{s[2]}</div>
            <div>
              <h3 className="font-bold text-lg">{s[0]}</h3>
              <p className="text-sm text-gray-500">{s[1]}</p>
            </div>
          </div>
        ))}
      </section>

    
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

      
      <section className="bg-green-50 mt-14 py-10">
        <h3 className="text-center font-semibold mb-6">
          • Why Choose Us •
        </h3>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Anonymous Voting",
            "Real-Time Results",
            "No Political Bias",
            "Mobile Friendly",
          ].map((t, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <FaCheckCircle className="mx-auto text-green-600 text-2xl mb-2" />
              <p className="text-sm">{t}</p>
            </div>
          ))}
        </div>
      </section>

      
      <section className="bg-linear-to-r from-green-600 to-red-600 text-white py-10 text-center">
        <h2 className="text-xl font-semibold mb-4">
          Join Thousands of Citizens Shaping Bangladesh’s Future!
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-green-700 px-6 py-2 rounded">
            Register Now
          </button>
          <button className="bg-white text-black px-6 py-2 rounded">
            Start a Poll
          </button>
        </div>
      </section>

      
      <footer className="text-center text-sm text-gray-500 py-4">
        © 2024 Vote Voice BD. All Rights Reserved.
      </footer>
    </div>
  );
}
