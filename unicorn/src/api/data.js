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
                id: user_id,
                pw: user_pw
            }
        })
        if (response.data.access_token) {
            localStorage.setItem('token', response.data.access_token);
            return true;
        } else if (response.data.message) {
            return false;
        }
    } catch (error) {
        console.error("로그인 실패:", error);
        return false;
    }
}


export async function CheckUser() {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz/api/v1/user/check`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        console.log(response);
        console.log("Check 성공");
        return true;
    } catch (error) {
        console.error("유저 체크 실패:", error);
        return false;
    }
}

