import axios from "axios";

export async function fetchMenuData() {
    try {
        const response = await axios.get("/data/menu.json");
        return response.data;
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        return null;
    }
}

export async function UserLogin({ user_id, user_pw }) {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz/api/v1/user/login`, {
            params: {
                user_id: user_id,
                user_pw: user_pw
            }
        })
        console.log(response);
        // localStorage.setItem("sessionToken", response.data.token);
        return response.data;
    } catch (error) {
        console.error("로그인 실패:", error);
    }
}


