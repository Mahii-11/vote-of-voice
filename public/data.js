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