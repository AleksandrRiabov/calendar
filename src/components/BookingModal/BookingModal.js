import React from 'react'
import "./BookingModal.css"
import {useGlobalContext} from "../../context";

export default function BookingModal() {
   const {showBookingModal, closeBookingModal, bookingModalContent} = useGlobalContext();

   return (
      <div className={`modal ${showBookingModal ? "active": null}`}>
          <div className="modal-container">
             <div className={`modal-content ${showBookingModal ? "modal-content-active": null}`}>
                {bookingModalContent}
             </div>
             <div className="close" onClick={() => closeBookingModal()}>x</div>
          </div>
      </div>
   )
}
