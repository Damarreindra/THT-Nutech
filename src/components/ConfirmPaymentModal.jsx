import React from "react";
import { IoMdWallet } from "react-icons/io";
import { formatRupiah } from "../utils/formatterUtils";

const ConfirmPaymentModal = ({ isOpen, onClose, amount, payment, onConfirm}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <div className="flex justify-center">
        
            <IoMdWallet className="text-red-600 text-6xl" />
        
        </div>
        <p className="text-center text-base mb-2">
         Beli {payment} senilai
         </p>
        <h2 className="text-center text-xl font-bold mb-2">
         {formatRupiah(amount)} ?
        </h2>
        <div className="text-center flex flex-col">
        <button
            onClick={onConfirm}
            className="text-red-500 font-semibold hover:underline mb-3"
          >
            Ya, lanjutkan bayar
          </button>
          <button
            onClick={onClose}
            className="text-gray-500 font-base hover:underline"
          >
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPaymentModal;
