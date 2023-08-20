import axios from "axios";
import { BASE_URL } from "./data";

export async function getUserList() {
  try {
    const response = await axios.get(`${BASE_URL}/user/list`, {});
    console.log(response);
    return true;
  } catch (error) {
    console.error("유저 받아오기 실패:", error);
    return false;
  }
}

export async function refreshToken() {
  console.log("토큰 갱신 시도");
  console.log(sessionStorage.getItem("token"));
  try {
    const response = await axios.post(
      `${BASE_URL}/user/refresh`,
      {
        params: {
          refresh_token: sessionStorage.getItem("token"),
        },
      }
      // {
      //   headers: {
      //     Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      //   },
      // }
    );
    console.log(response);
  } catch (error) {
    console.error("토큰 갱신 실패:", error);
    return false;
  }
}

export async function loginUser({ user_id, user_pw }) {
  try {
    const response = await axios.get(`${BASE_URL}/user/login`, {
      params: {
        id: user_id,
        pw: user_pw,
      },
    });
    console.log(response.data.data);
    sessionStorage.setItem("token", response.data.data.access_token);
    sessionStorage.setItem("user_id", user_id);
    return true;
  } catch (error) {
    console.error("로그인 실패:", error);
    return false;
  }
}

export async function checkUser() {
  try {
    const response = await axios.get(`${BASE_URL}/user/check`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(response);
    console.log("Check 성공");
    return true;
  } catch (error) {
    console.error("유저 체크 실패:", error);
    return false;
  }
}

export async function UpdateUser(email) {
  try {
    const response = await axios.put(`${BASE_URL}/user/update`, {
      user_id: "string",
      user_pw: "string",
      user_name: "string",
      user_phone: "string",
      user_email: email,
      is_valid: true,
    });
    console.log(response);
    console.log("UpdateUser 성공");
    return true;
  } catch (error) {
    console.error("UpdateUser 실패:", error);
    return false;
  }
}
