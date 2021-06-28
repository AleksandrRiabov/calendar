import "./Confirmation.css"
import {useGlobalContext} from "../../context";

const Confirmation = ({confirmation}) => {
    const {date, time, name, lastName} = confirmation.appointment;
    const {setConfirmation} = useGlobalContext();

   return <div className="confirmation">
        <div className="confirmationInner">
           <p>Thank you {name} {lastName}! </p> 
           <p> Your Appointment with us has been booked successfuly.</p>
           <p>Appointment time: {time}</p>
           <p>Appointment date: {date}</p>

           <div onClick={() => {setConfirmation({status: false, appointment: {}}) }} className="close">X</div>
        </div>
   </div>
}

export default Confirmation;