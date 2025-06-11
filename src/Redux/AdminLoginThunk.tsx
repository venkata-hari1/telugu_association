import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL, API_ENDPOINTS } from "../config/AdminConfig";


interface AdminLoginPayload {
  email: string;
  password: string;
}

export const adminLogin = createAsyncThunk(
  "admin/login",
  async (credentials: AdminLoginPayload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}${API_ENDPOINTS.ADMIN_LOGIN}`,
        credentials
      );

      toast.success("Login successful!");
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
      return rejectWithValue(error.response?.data);
    }
  }
);
