import React from "react";
import { formatRupiah, formatWib } from "../utils/formatterUtils";

function TransactionHistoryCard({ item }) {
    const payment = item.transaction_type === "PAYMENT"
    const textColor = payment ? "text-red-500" : "text-green-500"
    
  return (
    <div className="bg-white border border-gray-300 shadow rounded p-3 relative">
      {
        <>
          <p className={`font-bold ${textColor}`}>{payment ? "- " :"+ "}{formatRupiah(item.total_amount)}</p>
          <p className="text-sm text-gray-400">{formatWib(item.created_on)+" WIB"}</p>

          <p className="absolute right-2 top-2 text-sm text-black font-semibold">{item.description}</p>
        </>
      }
    </div>
  );
}

export default TransactionHistoryCard;
