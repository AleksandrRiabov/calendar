import React from 'react'
import "./BookingModal.css"
import {useGlobalContext} from "../../context";

export default function BookingModal() {
   const {closeBookingModal, bookingModalContent} = useGlobalContext();

   return (
      <div className="modal-container">
          <div className="modal">
             <div className="modal-content">
                {bookingModalContent}
             </div>
             <div className="close" onClick={() => closeBookingModal()}>x</div>
          </div>
      </div>
   )
}
