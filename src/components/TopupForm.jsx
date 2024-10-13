import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBalance, topUp } from "../utils/Store/TransactionSlice";
import AlertModal from "./AlertModal";

function TopupForm() {
  const [nominal, setNominal] = useState(0);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleClick = (uang) => {
    if (uang < 0) {
      setError("Nominal tidak boleh kurang dari 0");
      setNominal(0);
    } else {
      setError("");
      setNominal(uang);
    }
  };


  const handleChange = (e) => {
    const value = e.target.value;
    const number = parseInt(value, 10);
    if (isNaN(number) || number <= 0) {
      setError("Nominal tidak boleh kurang dari 0");
      setNominal();
    } else if (number <= 9999) {
      setError("Nominal top-up boleh kurang dari Rp. 10.000");
      setNominal();
    } else if (number > 1000000) {
      setError("Nominal top-up boleh lebih dari Rp. 1.000.000");
      setNominal(1000000);
    } else {
      setError("");
      setNominal(number);
    }
  };

  const handleTopup = () => {
    dispatch(topUp(nominal)).then((result) => {
      if (result.meta.requestStatus === "fulfilled") {
        setSuccess(true);
        dispatch(fetchBalance());
      } else {
        setSuccess(false);
      }
      setIsAlertOpen(true);
    });
  };

  return (
    <div className="mt-5 py-8">
      <p className="text-xl">Silahkan masukan</p>
      <h2 className="font-bold text-2xl">Nominal Top Up</h2>
      <div className="w-full mt-5">
        <div className="grid grid-cols-5 grid-rows-5 gap-2">
          <input
            className="col-span-2 border border-gray-400 rounded p-2 text-sm"
            value={nominal}
            onChange={handleChange}
            type="number"
            min={0}
          />
          {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}

          <button
            className="col-span-2 col-start-1 row-start-2 bg-red-600 rounded text-white text-sm py-1 px-2 disabled:bg-gray-400"
            onClick={handleTopup}
            disabled={!!error || nominal < 10000}
          >
            Top Up
          </button>

          {[
            { value: 10000, label: "Rp.10.000" },
            { value: 20000, label: "Rp.20.000" },
            { value: 50000, label: "Rp.50.000" },
            { value: 100000, label: "Rp.100.000" },
            { value: 250000, label: "Rp.250.000" },
            { value: 500000, label: "Rp.500.000" },
          ].map((item, index) => (
            <button
              key={item.value}
              className="border border-gray-400 rounded text-sm py-1 px-2"
              onClick={() => handleClick(item.value)}
              style={{
                gridColumn: (index % 3) + 3,
                gridRow: Math.floor(index / 3) + 1,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <AlertModal
        isOpen={isAlertOpen}
        success={success}
        onClose={() => setIsAlertOpen(false)}
        amount={nominal}
        type={"Top Up"}
      />
    </div>
  );
}

export default TopupForm;
