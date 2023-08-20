import axios from "axios";
import { BASE_URL } from "./data";
export async function getOrderList() {
  try {
    const response = await axios.get(`${BASE_URL}/cart/list`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    console.log("주문내역 : ", response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("데이터 가져오기 실패:", error);
    return false;
  }
}

export async function deleteOrder(product_id) {
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
    console.log("OrderDelete 성공");
    return true;
  } catch (error) {
    console.error("OrderDelete 실패:", error);
    return false;
  }
}

export async function updateOrder(item) {
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
    console.log("OrderUpdate 성공");
    return true;
  } catch (error) {
    console.error("OrderUpdate 실패:", error);
    return false;
  }
}

export async function addOrder(item, tableNumber) {
  try {
    const response = await axios.post(
      `${BASE_URL}/cart/add`,
      {
        user_id: sessionStorage.getItem("user_id"),
        table_number: tableNumber,
        product_id: item.name,
        product_price: item.price,
        product_count: item.quantity,
        product_option: {},
      },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    console.log("OrderAdd 성공");
    return true;
  } catch (error) {
    console.error("CartAdd 실패:", error);
    return false;
  }
}

export async function getOrderListAll() {
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
