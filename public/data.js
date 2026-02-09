// Import generated assets
import candidate1 from "../../assets/images/candidate-1.png";
import candidate2 from "../../assets/images/candidate-2.png";
import candidate3 from "../../assets/images/candidate-3.png";
import candidate4 from "../../assets/images/candidate-4.png";
import party2 from "../../assets/images/party-1.png";
import party1 from "../../assets/images/party-2.png";
import party3 from "../../assets/images/party-3.png";
import party4 from "../../assets/images/party-4.png";



 const polls = [
  {
    id: 1,
    name: "Hasnat Abdullah",
    candidateImage: candidate1,
    party: "NCP",
    partyImage: party1,
    seat: " Comilla-04",
    percent: 78,
    color: "bg-emerald-600",
    status: "Leading",
  },
  {
    id: 2,
    name: "Shafiqur Rahman",
    candidateImage: candidate2,
    party: "Jamaat",
    partyImage: party2,
    seat: "Dhaka-15",
    percent: 75,
    color: "bg-blue-600",
    status: "Stable",
  },
  {
    id: 3,
    name: "Tarique Rahman",
    candidateImage: candidate3,
    party: "BNP",
    partyImage: party3,
    seat: "Dhaka-1",
    percent: 58,
    color: "bg-red-600",
    status: "Close Call",
  },
  {
    id: 4,
    name: "Tasnim Jara",
    candidateImage: candidate4,
    party: "Independent",
    partyImage: party4,
    seat: "Dhaka-09",
    percent: 75,
    color: "bg-orange-500",
    status: "Trailing",
  },
]; 

export default polls 




 {/*  <div className="flex border rounded overflow-hidden">
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
      
      
    
import { motion } from "framer-motion";
import {  Vote } from "lucide-react";
import { useEffect, useState } from "react";
import { getCandidateList } from "../../services/api";
import EndorseModal from "../EndorseModal";
import { submitVote } from "../../services/api";
import placeholderCandidate from "../../assets/images/candidate-1.png";



const PARTY_COLOR_MAP = {
  বিএনপি: "bg-red-600",
  জামাত: "bg-blue-600",
  এনসিপি: "bg-emerald-600",
  স্বতন্ত্র: "bg-orange-500",
};



const DEFAULT_COLOR = "bg-pink-600";


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

        //backend - UI format mapping
        const formatteData = data.map((item) => ({
          id: item.id,
          name: item.name,
          candidateImage: item.image || placeholderCandidate,
          party: item.party,
          partyImage: item.marka_image,
          seat: item.seat_name,
          percent: Number(item.poll_percentage?.replace("%", "")) || 0, 
          color: PARTY_COLOR_MAP[item.party] || DEFAULT_COLOR,
          status: "Live",

        }));

        setPolls(formatteData);
      } catch (err) {
        if (isMounted) {
          setError("Failed to load election data");
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
    return <p className="text-center py-20 text-red-500">{error}</p>;
  }





  return (
    <>

     <section className="relative w-full min-h-screen py-20 px-4 md:px-8 overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-50 via-slate-50 to-red-50/30 opacity-70 dark:from-emerald-950/20 dark:via-slate-950 dark:to-red-950/20" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-multiply dark:mix-blend-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
      
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">
              Live Election Data
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight dark:text-white">
              National Poll{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-600 to-red-600">
                Projections
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Real-time tracking of candidate performance across key
              constituencies. Data updated every hour based on verified polling
              stations.
            </p>
          </motion.div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {polls.map((poll, index) => (
            <PollCard 
            key={poll.id} 
            poll={poll} 
            index={index}   
            onEndorse={() => {
            setSelectedCandidateId(poll.id);
            setModalOpen(true);
            }}/>
          ))}
        </div>

        
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
            Live Updates Enabled • Source: National Election Commission
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




const PollCard = ({ poll, index,  onEndorse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-zinc-900/70 dark:border-white/10"
    >
  
      <div
        className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20 ${poll.color}`}
      />

      <div className="p-6 flex flex-col items-center text-center relative z-10">
  
        <div className="relative mb-4">
          <div
            className={`absolute inset-0 rounded-full blur opacity-40 ${poll.color} group-hover:opacity-70 transition-opacity duration-500`}
          />
          <img
            src={poll.candidateImage}
            alt={poll.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-sm z-20">
            <img
              src={poll.partyImage}
              alt={poll.party}
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

    
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-700 transition-colors">
          {poll.name}
        </h3>

        <div className="flex items-center gap-2 mt-1 mb-4">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            {poll.seat}
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {poll.party}
          </span>
        </div>

  
        <div className="w-full space-y-2 mb-6">
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Vote Share
            </span>
            <span
              className="text-2xl font-bold"
              style={{
              color:
              poll.color === "bg-red-600"
              ? "#ef4444"
              : poll.color === "bg-blue-600"
              ? "#2563eb"
              : poll.color === "bg-emerald-600"
              ? "#10b981"
              : poll.color === "bg-orange-500"
              ? "#f97316"
              : "#000",
              }}

            
            >
              {poll.percent}%
            </span>
          </div>

          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner dark:bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${poll.percent}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                delay: 0.2,
              }}
              className={`h-full rounded-full ${poll.color} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
            </motion.div>
          </div>
        </div>

    
        <button
          onClick={onEndorse}
          className="w-full py-3 px-6 rounded-full bg-slate-900 text-white font-semibold
          hover:bg-linear-to-r hover:from-emerald-600 hover:to-red-600 hover:shadow-lg hover:shadow-emerald-500/20
          active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
          data-testid={`btn-endorse-${poll.id}`}
        >
          <span>Endorse Candidate</span>
          <Vote className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};



export default ElectionPolls;
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      */}



 //bg-linear-to-r from-green-600 to-red-600     