import axios from "axios";

// const authurl = `${import.meta.env.VITE_API_BACKEND_URL || 'http://localhost:8080'}/auth/authstatus`;
const authurl = 'http://localhost:8080/auth/authstatus';
const user_present = async () => {
  try {
    const response = await axios.get(authurl, { withCredentials: true });
    return response.data;
  } catch (err) {
    console.log("Authentication error:", err);
    return err;
  }
};

export default user_present;

