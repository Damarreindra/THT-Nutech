import React, { useState } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { formatRupiah } from "../utils/formatterUtils";
import { useDispatch } from "react-redux";
import { fetchBalance, payment } from "../utils/Store/TransactionSlice";
import ConfirmPaymentModal from "./ConfirmPaymentModal";
import AlertModal from "./AlertModal";

function PaymentForm({ item }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    dispatch(payment(item.service_code)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        dispatch(fetchBalance());
        setIsConfirmOpen(false);
        setIsAlertOpen(true);
        setSuccess(true);
        setMessage(result.payload?.message);
      } else {
        setSuccess(false);
        setMessage(result.payload?.message);
        setIsConfirmOpen(false);
      }
      setIsAlertOpen(true);
      setIsConfirmOpen(false);
    });
  };

  const handleConfirm = () => {
    setIsConfirmOpen(true);
  };

  return (
    <div>
      <h1 className="font-base">Pembayaran</h1>
      <div className="flex flex-row items-center gap-3 mt-3">
        <img src={item.service_icon} alt={item.service_name} width={50} />
        <h2 className="font-bold">{item.service_name}</h2>
      </div>
      <div className="relative w-full mb-4 mt-3">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <FaMoneyBill />
        </span>
        <input
          type="text"
          value={formatRupiah(item.service_tariff)}
          readOnly
          className={`w-full p-3 pl-10 pr-10 border border-gray-300 rounded cursor-default`}
        />
      </div>
      <button
        onClick={handleConfirm}
        className="w-full bg-red-600 text-white rounded p-3 hover:bg-red-900"
      >
        Bayar
      </button>

      {isConfirmOpen && (
        <ConfirmPaymentModal
          isOpen={isConfirmOpen}
          onClose={() => setIsConfirmOpen(false)}
          onConfirm={handlePayment}
          amount={item.service_tariff}
          payment={item.service_name}
        />
      )}

      {isAlertOpen && (
        <AlertModal
          isOpen={isAlertOpen}
          onClose={() => setIsAlertOpen(false)}
          amount={item.service_tariff}
          success={success}
          payment={item.service_name}
          type={"Pembayaran"}
        />
      )}
    </div>
  );
}

export default PaymentForm;
