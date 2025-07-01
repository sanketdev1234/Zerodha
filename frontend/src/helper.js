import axios from "axios";

// const authurl = `${import.meta.env.VITE_API_URL || 'http://localhost:8080'}api/auth/authstatus`;

const user_present = async () => {
  try {
    const response = await axios.get('api/auth/authstatus', { withCredentials: true });
    return response.data;
  } catch (err) {
    console.log("Authentication error:", err);
    return err;
  }
};

export default user_present;

