import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Appointment confirmed</h3>
        </div>
        <span>
        If you want to change the appointment time, you can reschedule your appointment.
        </span>
      </div>
    </>
  );
};

export default Checkout;
