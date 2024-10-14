import React from "react";

function ProfilePictModal({ isActive, image, onClick, onClose }) {
  if (!isActive) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg flex flex-col  shadow-lg">
        <div className=" border-b flex justify-center items-center p-3">
          <h1 className="font-semibold text-center text-xl">Pratinjau</h1>
        </div>
        <div className="flex flex-col p-8 ">
          <img width={250} src={image} />
          <button
            className="bg-red-500 p-3 rounded text-white mt-3 mb-3"
            onClick={onClick}
          >
            Ya, Perbarui
          </button>
          <button className="text-gray-400" onClick={onClose}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePictModal;
