/* eslint-disable no-unused-vars */
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EndorseModal = ({ open, onClose, candidateId, onSubmit }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Name and phone number required");
      return;
    }

    onSubmit({
      candidate_id: candidateId,
      name,
      phone,
    });

    setName("");
    setPhone("");
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 40 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 relative"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-500 hover:text-slate-800"
          >
            <X />
          </button>

          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Endorse Candidate
          </h3>
          <p className="text-slate-500 mb-6 text-sm">
            Enter your details to submit your vote
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-slate-900 text-white font-semibold
              hover:bg-linear-to-r hover:from-emerald-600 hover:to-red-600 transition-all"
            >
              Submit Vote
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EndorseModal;
