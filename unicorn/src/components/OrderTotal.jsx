export function OrderTotal({ receipt }) {
  const total = receipt.reduce(
    (acc, item) => acc + item.product_count * item.product_price,
    0
  );

  return (
    <div className="mt-4 pt-4 font-bold flex items-center justify-between w-full">
      <span className="text-xl ">총 주문금액</span>
      <span className="text-lg">{total.toLocaleString()}원</span>
    </div>
  );
}
