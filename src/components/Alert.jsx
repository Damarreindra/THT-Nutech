import React, { useEffect } from "react";

function Alert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, onClose]);
  
  return (
    <div className="absolute right-5 bottom-5 bg-green-500 text-white rounded p-4">
      <p>{message}</p>
    </div>
  );
}

export default Alert;
