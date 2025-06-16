import { Link } from "react-router";
import logo from './servora-logo.jpg';

const Heading = () => {
  return (
    <Link to={`/`}>
      <img src={logo} alt={`Servora (Image not found)`} />
      <p>Servora</p>
    </Link>
  );
};

export default Heading;
