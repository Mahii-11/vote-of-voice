const polls = [
  {
    name: "Md. Rahim",
    candidateImage: "https://i.pravatar.cc/150?img=12",
    party: "NCP",
    partyImage: "https://upload.wikimedia.org/wikipedia/commons/3/36/Bangladesh_Election_Commission_Logo.svg",
    seat: "Dhaka-10",
    percent: 72,
  },
  {
    name: "Sumon Ahmed",
    candidateImage: "https://i.pravatar.cc/150?img=32",
    party: "BNP",
    partyImage: "https://upload.wikimedia.org/wikipedia/commons/f/f9/BNP_logo.svg",
    seat: "Chattogram-5",
    percent: 65,
  },
  {
    name: "Sadia Hossain",
    candidateImage: "https://i.pravatar.cc/150?img=47",
    party: "Jamaat",
    partyImage: "https://upload.wikimedia.org/wikipedia/commons/7/75/Jamaat-e-Islami_Bangladesh_logo.svg",
    seat: "Sylhet-2",
    percent: 58,
  },

    {
    name: "Sadia Hossain",
    candidateImage: "https://i.pravatar.cc/150?img=47",
    party: "Jamaat",
    partyImage: "https://upload.wikimedia.org/wikipedia/commons/7/75/Jamaat-e-Islami_Bangladesh_logo.svg",
    seat: "Sylhet-2",
    percent: 58,
  },
];

const PollSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-slate-800">
            Active Election Polls
          </h2>
          <p className="text-slate-500 mt-3">
            Explore public opinion and endorse your preferred candidate
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {polls.map((poll, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition border border-slate-100"
            >
              {/* Candidate Image */}
              <div className="flex justify-center">
                <img
                  src={poll.candidateImage}
                  alt={poll.name}
                  className="w-20 h-20 rounded-full border-2 border-green-600"
                />
              </div>

              {/* Name */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-slate-800">
                  {poll.name}
                </h3>

                {/* Party */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  <img
                    src={poll.partyImage}
                    alt={poll.party}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm text-slate-600">
                    {poll.party}
                  </span>
                </div>

                {/* Seat */}
                <p className="text-sm text-slate-500 mt-1">
                  {poll.seat}
                </p>
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="flex justify-between text-sm text-slate-500 mb-1">
                  <span>Support</span>
                  <span>{poll.percent}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full">
                  <div
                    className="h-2 rounded-full bg-green-600 transition-all duration-700"
                    style={{ width: `${poll.percent}%` }}
                  />
                </div>
              </div>

              {/* Button */}
              <button className="mt-6 w-full py-2.5 rounded-xl text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition">
                Endorse Candidate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PollSection;
