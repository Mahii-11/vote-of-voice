/* eslint-disable no-unused-vars */
import { Crown, Vote } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";




  

const PollCard = ({ seat, index, onEndorse, isVoting = false }) => {
  // Map candidates to expected structure
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
  console.log("seat:", seat);
  console.log("candidates:", seat?.candidates);

  if (!seat?.candidates || seat.candidates.length < 2) {
  return null; // or loading placeholder
}



  // Determine winner
  const winnerId =
    left.pollPercentage > right.pollPercentage
      ? left.id
      : right.pollPercentage > left.pollPercentage
      ? right.id
      : null;

  const renderCandidate = (candidate, isRightSide = false) => {
    if (!candidate) return <div className="flex-1 p-6" />;

    const isLeading = winnerId === candidate.id;

    const isRepublican =
      candidate.party.toLowerCase().includes("republican") ||
      candidate.party.toLowerCase().includes("red");
    const isDemocrat =
      candidate.party.toLowerCase().includes("democrat") ||
      candidate.party.toLowerCase().includes("blue");

    const themeColor = isRepublican
      ? "text-red-600 bg-red-50 border-red-100 ring-red-500"
      : isDemocrat
      ? "text-blue-600 bg-blue-50 border-blue-100 ring-blue-500"
      : "text-purple-600 bg-purple-50 border-purple-100 ring-purple-500";

    const progressColor = isRepublican
      ? "bg-red-500"
      : isDemocrat
      ? "bg-blue-500"
      : "bg-purple-500";

    return (
      <div
        className={cn(
          "flex-1 flex flex-col items-center text-center p-6 sm:p-8 relative z-10 transition-colors duration-300",
          isLeading ? "bg-linear-to-b from-white to-neutral-50/50" : "bg-white"
        )}
      >
        {/* Leading Indicator */}
        <div className="h-8 mb-2 flex items-center justify-center">
          {isLeading && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider shadow-sm border border-yellow-200"
            >
              <Crown className="w-3.5 h-3.5 fill-yellow-500 stroke-yellow-600" />
              Leading
            </motion.div>
          )}
        </div>

        {/* Image Container */}
        <div className="relative mb-6 group">
          <div
            className={cn(
              "w-32 h-32 rounded-full p-1 ring-4 shadow-xl transition-all duration-300",
              isLeading ? "ring-yellow-400 shadow-yellow-500/20" : "ring-white shadow-black/5"
            )}
          >
            <img
              src={candidate.candidateImage}
              alt={candidate.name}
              className="w-full h-full rounded-full object-cover bg-neutral-100"
            />
          </div>

          {/* Party Badge */}
          <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-md border border-neutral-100">
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border",
                themeColor
              )}
            >
              <img
                src={candidate.partyImage}
                alt={candidate.party}
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-1 mb-6">
  {/* Candidate Name */}
           <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-foreground leading-snug drop-shadow-sm">
            {candidate.name}
          </h3>

          {/* Party Badge */}
          <p className="sm:text-sm  text-green-600 bg-green-50 border-green-200 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-6 border uppercase tracking-widest">
            {candidate.party}
          </p>
          </div>


        {/* Stats */}
        <div className="w-full mb-8">
          <div className="flex items-end justify-center gap-1 mb-2">
            <span
              className={cn(
                "text-2xl sm:text-3xl font-display font-black tracking-tighter",
                isLeading ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {candidate.pollPercentage}
            </span>
            <span className="text-xl font-bold text-muted-foreground/60 mb-1">%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${candidate.pollPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className={cn("h-full rounded-full", progressColor)}
            />
          </div>
        </div>

        {/* Action */}
        <button
          onClick={() => onEndorse(candidate.id)}
          disabled={isVoting}
          className={cn(
            "group w-full py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 bg-black text-white cursor-pointer",
            isVoting
              ? "bg-neutral-100 text-neutral-400 cursor-not-allowed"
              : " border-2 border-neutral-200  shadow-sm hover:border-blue-500  bg-black text-white hover:text-blue-500 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm"
          )}
        >
          {isVoting ? (
            <div className="w-5 h-5 border-2 border-neutral-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Vote className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Vote Now</span>
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-white/50 overflow-hidden relative"
    >
      {/* Header */}
      <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-red-500 opacity-30" />
      <div className="text-center py-6 bg-linear-to-r from-blue-50 via-white to-purple-50 border-b border-neutral-100">
        <h2 className="text-lg font-bold text-muted-foreground uppercase tracking-widest">
          District Breakdown
        </h2>
        <div className="text-xl font-display font-black text-foreground mt-1">
          {seat.district} • {seat.seat_name}
        </div>
      </div>

      {/* Candidates */}
      <div className="flex flex-col md:flex-row relative">
        {renderCandidate(left)}
        <div className="relative z-20 flex items-center justify-center md:w-0 h-12 md:h-auto -my-6 md:my-0">
          <div className="absolute inset-0 md:inset-y-0 md:w-px bg-linear-to-b from-transparent via-neutral-200 to-transparent w-full h-px md:h-full top-1/2 md:top-0 -translate-y-1/2 md:translate-y-0" />
          <div className="relative bg-white p-1 rounded-full shadow-lg border border-neutral-100 z-10">
            <div className="w-10 h-10 rounded-full bg-foreground text-background font-black font-display text-sm flex items-center justify-center shadow-inner">
              VS
            </div>
          </div>
        </div>
        {renderCandidate(right, true)}
      </div>

      {/* Footer */}
      <div className="bg-neutral-50 border-t border-neutral-100 py-3 px-6 flex justify-between items-center text-xs font-medium text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live Polling
        </div>
      </div>
    </motion.div>
  );
};

export default PollCard;
