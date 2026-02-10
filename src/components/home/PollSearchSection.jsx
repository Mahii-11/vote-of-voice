import { useEffect, useState } from "react";
import { getCandidateBySeat, getDistrict, getDivision, getSeat } from "../../services/api";
import Pollcardd from "./candidatelist/Pollcardd";



export default function PollSearchSection() {
       const [division, setDivision] = useState([]);
       const [districts, setDistricts] = useState([]);
       const [seats, setSeats] = useState([]);
       const [selectedDivision, setSelectedDivision] = useState("");
       const [selectedDistrict, setSelectedDistrict] = useState("");
       const [selectedSeat, setSelectedSeat] = useState("");
       //const [candidates, setCandidates] = useState([]);
       const [seatData, setSeatData] = useState(null);

       const [loading, setLoading] = useState(false);


         useEffect(() => {
         const loadDivision = async () => {
         const data = await getDivision();
         setDivision(data);
         };

        loadDivision();
        }, []);

            
           useEffect(() => {
           const loadDistrict = async () => {
           const data = await getDistrict(selectedDivision);
           setDistricts(data);
          };

          if(selectedDivision) loadDistrict();

         }, [selectedDivision]);


         useEffect(() => {
          if (!selectedDistrict) return;

         const loadSeats = async () => {
         const data = await getSeat(selectedDistrict);
         console.log("SEATS 👉", data);

         setSeats(data);
         setSelectedSeat("");
         };

         loadSeats();
 
         }, [selectedDistrict]);


         const handleSearch = async () => {
          if (!selectedSeat) {
            alert("দয়া করে একটি আসন নির্বাচন করুন");
            return;
          }

          try {
            setLoading(true);
            const data = await getCandidateBySeat(selectedSeat);
            setSeatData(data);
          } catch (err) {
            console.log(err);
          } finally {
            setLoading(false);
          }
         };

     


   


       return (
       <div className="bg-linear-to-b from-green-50 to-white  overflow-visible">
            
              <div className="max-w-7xl mx-auto px-4 pt-6">
                <div className="bg-white p-4 rounded-lg shadow text-sm overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                  
            <div className="flex border rounded ">
              <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
                  বিভাগ
              </span>
              <select
               className="flex-1 px-3 py-2 outline-none appearance-none bg-white"
               value={selectedDivision}
               onChange={(e) => {
                 console.log("Division ID:", e.target.value); 
                 setSelectedDivision(Number(e.target.value));
               }}
               
              >
              <option value="">বিভাগ নির্বাচন করুন</option>
                {division.map((dis) => (
                  <option key={dis.id} value={dis.id}>
                    {dis.name}
                  </option>
                ))}
              </select>
            </div>
      
            <div className="flex border rounded ">
              <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
                জেলা
              </span>
              <select
               className="flex-1 px-3 py-2 outline-none appearance-none bg-white"
               value={selectedDistrict}
               disabled={!selectedDivision}
               onChange={(e) => setSelectedDistrict(e.target.value)}
              >
              <option value="">জেলা নির্বাচন করুন</option>
                {districts.map((dis) => (
                  <option key={dis.id} value={dis.id}>
                    {dis.name}
                  </option>
                ))}
              </select>
            </div>
    
        
            <div className="flex border rounded overflow-hidden">
              <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
                আসন
              </span>
              <select 
              className="flex-1 px-3 py-2 outline-none"
               value={selectedSeat}
               onChange={(e) => setSelectedSeat(Number(e.target.value))}
               disabled={!selectedDistrict}
              >
                 <option value="">আসন নির্বাচন করুন</option>
                  {seats.map((s) => (
                  <option key={s.id} value={s.id}>
                   {s.name}
                   </option>
                     ))}
 
              </select>
            </div>
      
          
            <div className="flex items-center">
              <button 
              onClick={handleSearch}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded transition">
                অনুসন্ধান
              </button>
            </div> 
            </div>
          </div>
        </div>    

          {
               loading && <p className="text-center mt-6">Loading...</p>
            }

             {
               seatData && (
              <div className="max-w-2xl mx-auto mt-6 px-4">
              <Pollcardd seat={seatData} />
              </div>
               )
              }       
       </div>
      )
    };



    /*                     
    

     candidates.length > 0 && (
           <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mt-10">
            {candidates.map((c) => (
              <div key={c.id} className="bg-white shadow rounded-xl p-4 text-center">

               <img
                    src={c.image}
                    alt={c.name}
                   className="w-28 h-28 object-cover mx-auto rounded-full"
                 />

              <h2 className="font-semibold mt-3">{c.name}</h2>
               <p className="text-gray-500">{c.party}</p>

              <p className="text-green-600 font-bold mt-1">
              {c.poll_percentage}
               </p>

             </div>
             ))}
             </div>
            )
    
    
    
    
    
    
    
    
    
    
    */