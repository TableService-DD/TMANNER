import axios from "axios";
import { BASE_URL } from "./data";
export async function getCartList() {
  try {
    const response = await axios.get(`${BASE_URL}/cart/list`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    return false;
  }
}

export async function deleteCart(product_id) {
  try {
    const response = await axios.delete(`${BASE_URL}/cart/delete`, {
      params: {
        product_id: product_id,
      },
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(response);
    console.log("CartDelete 성공");
    return true;
  } catch (error) {
    console.error("CartDelete 실패:", error);
    return false;
  }
}

export async function updateCart(item) {
  try {
    const response = await axios.put(
      `${BASE_URL}/cart/update`,
      {
        product_id: item.product_id,
        product_price: item.product_price,
        product_count: item.product_count,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    console.log("CartUpdate 성공");
    return true;
  } catch (error) {
    console.error("CartUpdate 실패:", error);
    return false;
  }
}

export async function addCart(item) {
  console.log("item", item);
  try {
    const response = await axios.post(
      `${BASE_URL}/cart/add`,
      {
        product_id: item.name,
        product_price: item.price,
        product_count: item.quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    console.log("CartAdd 성공");
    return true;
  } catch (error) {
    console.error("CartAdd 실패:", error);
    return false;
  }
}

export async function getOrderList() {
  try {
    const response = await axios.get(`${BASE_URL}/order/list/all`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    return false;
  }
}
