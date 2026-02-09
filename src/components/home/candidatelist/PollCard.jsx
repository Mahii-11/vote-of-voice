/* eslint-disable no-unused-vars */
import { Crown, Vote, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

const PollCard = ({ seat, index, onEndorse, isVoting = false }) => {

  if (!seat?.candidates || seat.candidates.length < 2) return null;

  const [left, right] = seat.candidates.map((c) => ({
    id: c.id,
    name: c.name,
    party: c.party,
    seat: seat.seat_name,
    pollPercentage: Number(c.poll_percentage?.replace("%", "")) || 0,
    candidateImage: c.image,
    partyImage: c.marka_image,
    votes: Number(c.votes) || 0,
  }));

  const winnerId =
    left.pollPercentage > right.pollPercentage
      ? left.id
      : right.pollPercentage > left.pollPercentage
      ? right.id
      : null;

  const renderCandidate = (candidate) => {
    const isLeading = winnerId === candidate.id;

    const progressGradient =
      "bg-linear-to-r from-emerald-600 to-teal-600";

    return (
      <motion.div
        whileHover={{ y: -6 }}
        className={cn(
          "flex-1 flex flex-col items-center text-center p-7 sm:p-9 relative transition-all duration-300",
          isLeading
            ? "bg-linear-to-b from-white via-blue-50/40 to-purple-50/30 scale-[1.02]"
            : "bg-white"
        )}
      >
        {/* Leading Badge */}
        <div className="h-8 mb-3">
          {isLeading && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full 
              bg-yellow-100 text-yellow-700 text-xs font-extrabold uppercase tracking-wider shadow"
            >
              <Crown className="w-4 h-4 fill-yellow-500" />
              Leading
            </motion.div>
          )}
        </div>

        {/* Image */}
        <div className="relative mb-5 group">
          <div
            className={cn(
              "w-32 h-32 rounded-full p-0.75 shadow-xl transition duration-300",
              isLeading
                ? "bg-linear-to-tr from-amber-300 to-orange-400"
                : "bg-neutral-200"
            )}
          >
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={candidate.candidateImage}
                alt={candidate.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          </div>

          {/* Party Logo */}
          <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md">
            <img
              src={candidate.partyImage}
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-black tracking-tight">
          {candidate.name}
        </h3>

        {/* Party */}
        <div className="mt-1 mb-4 text-xs font-bold px-3 py-1 rounded-full bg-neutral-100">
          {candidate.party}
        </div>

        {/* Percentage */}
        <div className="mb-6 w-full">
          <div className="flex justify-center items-end gap-1 mb-2">
            <span className="text-4xl font-extrabold tracking-tight">
              {candidate.pollPercentage}
            </span>
            <span className="text-lg font-bold text-neutral-400 mb-1">
              %
            </span>
          </div>

          {/* Animated Progress */}
          <div className="h-3 w-full bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${candidate.pollPercentage}%` }}
              transition={{ duration: 1.2 }}
              className={cn(
                "h-full rounded-full",
                progressGradient
              )}
            />
          </div>

          {/* Votes */}
          <div className="flex items-center justify-center gap-1 mt-2 text-xs text-neutral-500">
            <TrendingUp size={14} />
            {candidate.votes.toLocaleString()} votes
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => onEndorse(candidate.id)}
          disabled={isVoting}
          className={cn(
            "w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition",
            isVoting
              ? "bg-neutral-200 text-neutral-400"
              : "bg-linear-to-r from-emerald-600 to-teal-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
          )}
        >
          {isVoting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Vote size={18} />
              Vote Now
            </>
          )}
        </button>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-3xl border shadow-xl hover:shadow-2xl transition overflow-hidden"
    >
      {/* Header */}
      <div className="text-center py-6 bg-linear-to-r from-blue-50 via-white to-purple-50 border-b">
        <h2 className="text-xs tracking-[0.3em] font-bold text-neutral-500 uppercase">
          District Breakdown
        </h2>

        <div className="text-2xl font-black mt-1">
          {seat.district} • {seat.seat_name}
        </div>
      </div>

      {/* Candidates */}
      <div className="flex flex-col md:flex-row relative">

        {renderCandidate(left)}

        {/* VS */}
        <div className="relative flex items-center justify-center">
          <div className="hidden md:block absolute w-px h-full bg-neutral-200" />

          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="z-10 w-12 h-12 rounded-full bg-linear-to-r from-emerald-600 to-teal-600 text-white font-extrabold flex items-center justify-center shadow-lg"
          >
            VS
          </motion.div>
        </div>

        {renderCandidate(right)}
      </div>

      {/* Footer */}
      <div className="bg-neutral-50 py-3 px-6 flex justify-between text-xs text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Live Polling
        </div>

        <div>Updated just now</div>
      </div>
    </motion.div>
  );
};

export default PollCard;
