/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getDistrict, getDivision, getSeat } from "../../services/api";



export default function PollSearchSection() {
       const [division, setDivision] = useState([]);
       const [districts, setDistricts] = useState([]);
       const [seats, setSeats] = useState([]);
       const [selectedDivision, setSelectedDivision] = useState("");
       const [selectedDistrict, setSelectedDistrict] = useState("");
       const [selectedSeat, setSelectedSeat] = useState("");


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
              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded transition">
                অনুসন্ধান
              </button>
            </div> 
            </div>
          </div>
     </div>           
 </div>
  )
};
