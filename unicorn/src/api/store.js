import axios from "axios";
import { BASE_URL } from "./data";

export async function storeAdd({ store_code, store_name }) {
  try {
    const response = await axios.post(
      `${BASE_URL}/order/store/add`,
      {
        store_code: "testcode",
        store_name: "test",
        store_status: true,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    console.log("StoreAdd 성공");
    return true;
  } catch (error) {
    console.error("StoreAdd 실패:", error);
    return false;
  }
}

export async function storeList({ store_code }) {
  try {
    const response = await axios.get(
      `${BASE_URL}/order/store/list`,
      {
        params: {
          store_code: "testcode",
          store_status: true,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    console.log("StoreList 성공");
    return true;
  } catch (error) {
    console.error("StoreList 실패:", error);
    return false;
  }
}
