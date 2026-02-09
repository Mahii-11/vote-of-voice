import { useEffect, useState } from "react";
import { getDistrict } from "../../services/api";


export default function PollSearchSection() {
       const [districts, setDistricts] = useState([]);
       const [selected, setSelected] = useState("");
    
      useEffect(() => {
        const loadDistricts = async () => {
          const data = await getDistrict();
          setDistricts(data);
        };
        loadDistricts();
      }, []);

       return (
       <div className="bg-linear-to-b from-green-50 to-white  overflow-visible">
            
              <div className="max-w-7xl mx-auto px-4 pt-6">
                <div className="bg-white p-4 rounded-lg shadow text-sm overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
            <div className="flex border rounded ">
              <span className="bg-gray-100 px-4 flex items-center text-sm text-gray-600">
                জেলা
              </span>
              <select
               className="flex-1 px-3 py-2 outline-none appearance-none bg-white"
               value={selected}
               onChange={(e) => setSelected(e.target.value)}
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
              <select className="flex-1 px-3 py-2 outline-none">
                <option>ঝালকাঠি-১</option>
                <option>ঝালকাঠি-২</option>
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
