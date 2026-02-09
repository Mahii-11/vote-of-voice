

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

export const getDistrict = async () => {

    try {
        const response = await fetch(`${BASE_URL}/district-list`);
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        const result = await response.json();

        return result.data;
        }catch (error) {
         console.error("District Api error:", error);
         throw error;
} 

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
