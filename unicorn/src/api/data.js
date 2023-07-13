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
        const response = await axios.post("/api/login", {
            user_id,
            user_pw
        });
        return response.data;
    } catch (error) {
        console.error("로그인 실패:", error);
    }
}