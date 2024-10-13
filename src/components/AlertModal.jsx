import React from "react";
import * as RiIcons from "react-icons/ri";
import { FiXCircle } from "react-icons/fi";
import { formatRupiah } from "../utils/formatterUtils";

const AlertModal = ({ isOpen, onClose, amount, type, payment, success }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <div className="flex justify-center">
          {success ? (
            <RiIcons.RiCheckboxCircleFill className="text-green-600 text-6xl " />
          ) : (
            <FiXCircle className="text-red-600 text-6xl" />
          )}
        </div>
        <h2 className="text-center text-xl font-bold mb-2">
          {type} {payment} sebesar {formatRupiah(amount)}
          {success ? " berhasil" : " gagal"}
        </h2>
        <div className="text-center">
          <button
            onClick={onClose}
            className="text-red-500 font-semibold hover:underline"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
