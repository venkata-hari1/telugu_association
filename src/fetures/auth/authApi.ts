import axios from "axios";
import { origin } from "../../apiRequest/config";

export const signInAdmin = async (data:any) => {

    const reqData = JSON.stringify(data)
    const response = await axios({
        url: `${origin}/auth/members_signin`,
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        data: reqData
    })

    return response?.data
};

export const forgetPasswordAdmin = async (data: { email: string }) => {
  const reqData = JSON.stringify(data);
  const response = await axios({
    url: `${origin}/auth/forgetpassword`,
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  });
  return response?.data;
};

// VERIFY OTP
export const verifyOtpAdmin = async (data: { email: string; otp: string }) => {
  const reqData = JSON.stringify(data);
  const response = await axios({
    url: `${origin}/auth/verifyotp`,
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    data: reqData,
  });
  return response?.data;
};