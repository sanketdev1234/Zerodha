import axios from "axios";

const checkAuth = async () => {
    try {
        const response = await axios.get("/auth/authstatus");
        return response.data;
    } catch (err) {
        console.error("Auth check failed", err);
        return null;
    }
};

export default checkAuth;

