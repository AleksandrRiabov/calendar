import  {useState} from 'react'
import "./BookingModal.css"
import {useGlobalContext} from "../../context";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const initialForm = {name: "", lastName: "", mobile: "", email: "", message: ""};

export default function BookingModal() {
   const {showBookingModal, closeBookingModal, bookingModalContent, selectedDay, setConfirmation} = useGlobalContext();
   const [formContent, setFormContenet] = useState(initialForm);


   const finalFormData = () => {
      const formData = {...formContent, date: selectedDay.day.format("MMMM DD YYYY"), time: bookingModalContent}
      setConfirmation({status: true, appointment: formData});
      closeBookingModal();
   }

   return (
      <div className={`modal ${showBookingModal ? "active": null}`}>
          <div className="modal-container">
             <div className={`modal-content ${showBookingModal ? "modal-content-active": null}`}>
               <form>
               <TextField 
                  id="standard-read-only-input"
                  style={{ width: "50%" }}
                  label="Appointment Date"
                  value={selectedDay.day.format("MMMM DD YYYY")}
                  InputProps={{
                     readOnly: true,
                }}
                   />
                   <TextField 
                  id="standard-read-only-input"
                  style={{ width: "50%" }}
                  label="Appointment Time"
                  value={bookingModalContent}
                  InputProps={{
                     readOnly: true,
                }}
                   />
                <div className="flex-wrapper">
                  <TextField style={{ width: "49%" }} value={formContent.name} onChange={(e) => setFormContenet({...formContent, name: e.target.value})} id="standart-basic" label="Name"/>
                  <TextField  style={{ width: "49%" }} value={formContent.lastName} onChange={(e) => setFormContenet({...formContent, lastName: e.target.value})} id="standart-basic" label="Last Name"/>
                </div>
                <div className="flex-wrapper">
                  <TextField style={{ width: "49%" }} value={formContent.mobile} onChange={(e) => setFormContenet({...formContent, mobile: e.target.value})} id="standart-basic" label="Mobile" placeholder="07*********"/>
                  <TextField  style={{ width: "49%" }} value={formContent.email} onChange={(e) => setFormContenet({...formContent, email: e.target.value})}id="standart-basic" label="Email" placeholder="email@email.com"/>
                </div>
                <TextField
                     value={formContent.message}
                      onChange={(e) => setFormContenet({...formContent, message: e.target.value})}
                     id="standard-full-width"
                     label="Label" 
                     placeholder="Message"
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                        shrink: true,
                     }}
                     variant="standard"
                  />
               <Button 
                onClick={(e) => {
                   e.preventDefault();
                   finalFormData();
                   setFormContenet(initialForm);
                }}
               type="submit" fullWidth color={"primary"} variant={"contained"} style={{marginTop: "15px"}}>Book</Button>
               </form>
             </div>
             <div className="close" onClick={() => closeBookingModal()}>x</div>
          </div>
      </div>
   )
}
