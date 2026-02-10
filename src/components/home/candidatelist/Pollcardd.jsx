/* eslint-disable no-unused-vars */
import { Crown, Vote, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";


const Pollcardd = ({ seat, index }) => {

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
          "flex-1 flex flex-col items-center text-center p-4 sm:p-5 relative transition-all duration-300",
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
              এগিয়ে আছেন
            </motion.div>
          )}
        </div>

        {/* Image */}
        <div className="relative mb-5 group">
          <div
            className={cn(
              "w-20 h-20 rounded-full p-0.75 shadow-xl transition duration-300",
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
        <h3 className="text-sm font-black tracking-tight whitespace-nowrap">
          {candidate.name}
        </h3>

        {/* Party */}
        <div className="mt-1 mb-4 text-xs font-bold px-3 py-1 rounded-full bg-neutral-100">
          {candidate.party}
        </div>

        {/* Percentage */}
        <div className="mb-6 w-full">
          <div className="flex justify-center items-end gap-1 mb-2">
            <span className="text-2xl font-extrabold tracking-tight">
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
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-3xl border shadow-xl hover:shadow-2xl transition overflow-hidden scale-90"
    >
      {/* Header */}
      <div className="text-center py-3 bg-linear-to-r from-blue-50 via-white to-purple-50 border-b">
        <h2 className="text-xs tracking-[0.3em] font-bold text-neutral-500 uppercase">
          নির্বাচনী আসনভিত্তিক তথ্য
        </h2>

        <div className="text-lg font-black mt-1">
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
            className="z-10 w-8 h-8 text-xs rounded-full bg-linear-to-r from-emerald-600 to-teal-600 text-white font-extrabold flex items-center justify-center shadow-lg"
          >
            VS
          </motion.div>
        </div>

        {renderCandidate(right)}
      </div>
    </motion.div>
  );
};


export default Pollcardd


