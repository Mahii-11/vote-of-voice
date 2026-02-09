import {
  FaVoteYea,
  FaUsers,
  FaPoll,
  FaCheckCircle,
} from "react-icons/fa";

export default function PollSummary() {
  return (
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
  )
}
