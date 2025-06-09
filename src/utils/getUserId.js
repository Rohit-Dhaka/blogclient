// utils/getUserId.js
import {jwtDecode} from "jwt-decode";

export default function getUserIdFromToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    // Adjust to whatever your backend puts inside the token:
    // e.g. decoded.id  or decoded._id  or decoded.userId
    return decoded._id || decoded.id || null;
  } catch (err) {
    console.error("Bad token:", err);
    return null;
  }
}
