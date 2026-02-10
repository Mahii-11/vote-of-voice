/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import PollCard from "./PollCard";
import EndorseModal from "./EndorseModal";
import { submitVote } from "../../../services/api";
import { getCandidateList } from "../../../services/api";




const PollCardSkeleton = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg dark:bg-zinc-900/70 dark:border-white/10 animate-pulse"
    >
      <div className="p-6 flex flex-col items-center text-center relative z-10">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white shadow-md" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>

        <div className="h-6 w-32 rounded bg-slate-200 dark:bg-slate-700 mb-2" />
        <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700 mb-4" />

        <div className="w-full space-y-2 mb-6">
          <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="h-10 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>
    </motion.div>
  );
};

export const ElectionPolls = () => {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPolls = async () => {
      try {
        const data = await getCandidateList();
        if (!isMounted) return;

      

        setPolls(data);
      } catch (err) {
        if (isMounted) {
          setError("Failed to load candidate-list");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    fetchPolls();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto py-20">
        {Array.from({ length: 4 }).map((_, i) => (
          <PollCardSkeleton key={i} index={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="flex gap-4 rounded-lg border border-red-100 bg-red-50 p-6 max-w-md shadow-sm">
          <AlertTriangle className="text-red-500 mt-1" size={22} />
          <div>
            <h3 className="text-sm font-semibold text-red-600">
              Something went wrong
            </h3>
            <p className="mt-1 text-sm text-red-500">{error}</p>
          </div>
        </div>
      </div>
    );
  }

 

  return (
    <>
      <section className="relative w-full min-h-screen py-20 px-4 md:px-8 overflow-hidden bg-slate-50 dark:bg-slate-950">
        {/* Background Ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-50 via-slate-50 to-red-50/30 opacity-70 dark:from-emerald-950/20 dark:via-slate-950 dark:to-red-950/20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">
                লাইভ নির্বাচন তথ্য
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-white">
                 জনমত গড়ে 
                <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-red-600">
                  ভবিষ্যৎ
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
               একই আসনের প্রার্থীদের মধ্যে আপনার পছন্দ নির্বাচন করুন এবং সমর্থন দিয়ে জানান জনতার অবস্থান।
              </p>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-350 mx-auto mt-6 px-4">
            {polls.map((seat, index) => (
              <PollCard
                key={seat.seat_id}
                seat={seat}
                index={index}
                onEndorse={(candidateId) => {
                setSelectedCandidateId(candidateId);
                setModalOpen(true);
                }}
              />
            ))}
          </div>

          {/* Footer / Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-slate-200 backdrop-blur-sm text-sm text-slate-500 shadow-sm dark:bg-white/5 dark:border-white/10 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
             লাইভ আপডেট সক্রিয় • সূত্র: জাতীয় নির্বাচন কমিশন
            </div>
          </motion.div>
        </div>
      </section>

      <EndorseModal
        open={modalOpen}
        candidateId={selectedCandidateId}
        onClose={() => setModalOpen(false)}
        onSubmit={async (data) => {
          try {
            await submitVote({
              candidate_id: selectedCandidateId,
              name: data.name,
              mobile: data.phone,
            });

            alert("Vote submitted successfully!");
            setModalOpen(false);
          } catch {
            alert("Something went wrong!");
          }
        }}
      />
    </>
  );
};


export default ElectionPolls;
