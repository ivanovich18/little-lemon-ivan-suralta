import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Table reservation booked successfully!</h2>
      <p>A confirmation email will be sent to the email address you provided. Please show the confirmation email to the attending personnel when you arrive at your scheduled date and time.</p>
    </div>
  );
};

export default ConfirmedBooking;
