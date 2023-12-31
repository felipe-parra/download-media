'use client'
import React from 'react'

export default function Modal({ downloadUrl }: { downloadUrl?: string }) {
  return (
    <dialog id="modal_response" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <input type="text" className='input input-ghost' value={downloadUrl || ""} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
