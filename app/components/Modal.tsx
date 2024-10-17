import React from 'react'

interface IModal {
  modalPayload: {
    message: string;
    callback: () => void;
  }
}

const Modal = ({ modalPayload: { message, callback  } }: IModal) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-lg font-bold">{message}</h2>
          <button 
          onClick={callback}
          className={`mt-4 p-2 bg-[#FF4579] text-white rounded w-full`}>
            Fechar
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal