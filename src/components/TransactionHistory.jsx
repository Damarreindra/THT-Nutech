import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "../utils/Store/TransactionSlice";
import TransactionHistoryCard from "./TransactionHistoryCard";

function TransactionHistory() {
  const dispatch = useDispatch();
  let [limit, setLimit] = useState(5);

  const { data } = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransaction(limit));
  }, []);

  const handleLimit = () => {
    setLimit((limit += 5));
    dispatch(fetchTransaction(limit));
  };

  const records = data?.records || [];

  return (
    <div className="flex gap-3 flex-col">
      <p className="font-bold">Semua Transaksi</p>
      {records.map((item, index) => {
        return (
          <div key={index}>
            <TransactionHistoryCard item={item} />
          </div>
        );
      })}
      <button
        disabled={records.length < limit}
        className="disabled:hidden text-red-600 font-bold"
        onClick={handleLimit}
      >
Show More
      </button>
    </div>
  );
}

export default TransactionHistory;
