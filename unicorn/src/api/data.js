import axios from "axios";

export const BASE_URL = 'http://hoshi-kirby.xyz/api/v1';

export async function fetchMenuData() {
    try {
        const response = await axios.get("/data/menu.json");
        return response.data;
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        return null;
    }
}
