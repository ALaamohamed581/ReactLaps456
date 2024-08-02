import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ContactUs() {
  const navigate = useNavigate();

  function handlnavigation() {
    navigate("/aboutus");
  }
  const {
    counter: { counter },
  } = useSelector((state) => state);

  return (
    <>
      <h1>{counter}</h1>
      <button className="btn btn-primary" onClick={() => handlnavigation()}>
        Got to about
      </button>
    </>
  );
}
export default ContactUs;
