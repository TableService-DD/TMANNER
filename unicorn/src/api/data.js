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
export async function getUserList() {
    try {
        const response = await axios.get(`http://hoshi-kirby.xyz/api/v1/user/list`, {
        })
        console.log(response);
        return true;
    } catch (error) {
        console.error("유저 받아오기 실패:", error);
        return false;
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
        console.log(response);
        if (response.data.access_token) {
            sessionStorage.setItem('token', response.data.access_token);

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
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
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
export async function CartList() {
    try {
        const response = await axios.get(`${BASE_URL}/cart/list`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        return false;
    }
}



export async function CartAdd(item) {
    console.log("item", item);
    try {
        const response = await axios.post(`${BASE_URL}/cart/add`, {
            "product_id": item.name,
            "product_price": item.price + "",
            "product_count": item.quantity + "",
        }, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        });
        console.log(response);
        console.log("CartAdd 성공");
        return true;
    } catch (error) {
        console.error("CartAdd 실패:", error);
        return false;
    }
}

export async function OrderList() {
    try {
        const response = await axios.get(`${BASE_URL}/order/list/all`, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        return false;
    }
}

export async function UpdateUser(email) {
    try {
        const response = await axios.put(`${BASE_URL}/user/update`, {
            "user_id": "string",
            "user_pw": "string",
            "user_name": "string",
            "user_phone": "string",
            "user_email": email,
            "is_valid": true,
        });
        console.log(response);
        console.log("UpdateUser 성공");
        return true;
    } catch (error) {
        console.error("UpdateUser 실패:", error);
        return false;
    }
}