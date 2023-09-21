import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <FontAwesomeIcon icon={faCircleXmark} size="3x" />
      <h2>Feature is not yet available. Come back soon!</h2>
    </div>
  );
};

export default UnderConstruction;
