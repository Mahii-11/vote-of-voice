

const BASE_URL = "https://election-poll.dotzpos.com/api";

// GET: Candidate List

export const getCandidateList = async () => {
    try {
        const response = await fetch(`${BASE_URL}/candidate-list`);
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const result = await response.json();

        if (!result.status) {
            throw new Error("Api status false");
        }

        return result.data.data;
    } catch (error) {
        console.error("getCandidateList error:", error);
        throw error;
    }
};




export const getDivision = async () => {
    try {
        const res = await fetch(`${BASE_URL}/division-list`);
        if (!res.ok) {
            throw new Error(`Request failed: ${res.status}`);
        }

        const result = await res.json();

        return result.data;
    } catch (error) {
        console.error("Division Api error:", error);
        return []; 
    }
};


export const getDistrict = async (divisionId) => {

    try {
        const response = await fetch(`${BASE_URL}/get-district/${divisionId}`);
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const result = await response.json();
        console.log("DISTRICT API RAW 👉", result);
        return result.data;
        }catch (error) {
         console.error("District Api error:", error);
         throw error;
} 

};

export const getSeat = async (districtId) => {
    try {
        const res = await fetch(`${BASE_URL}/get-seats/${districtId}`);
        if (!res.ok) {
            throw new Error(`Request failed: ${res.status}`);
        }
        const result = await res.json();
        return result.data;

    } catch (error) {
        console.error("Seat Api erro:", error);
        throw error;
    }
}; 



export const getCandidateBySeat = async (seatId) => {
    const res = await fetch(`${BASE_URL}/candidate-list-by-filter?seat_id=${seatId}`);
    const data = await res.json();
    return data?.data?.data?.[0] || null;
};





// Post

export const submitVote = async ({ candidate_id, name, mobile }) => {
  const formData = new FormData();

  formData.append("candidate_id", candidate_id);
  formData.append("name", name);
  formData.append("mobile", mobile);

  const res = await fetch(`${BASE_URL}/store-poll`, {
    method: "POST",
    body: formData, 
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error("Vote submission failed");
  }

  return result;
};
