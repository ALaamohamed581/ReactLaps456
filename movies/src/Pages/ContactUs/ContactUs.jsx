import { useNavigate } from "react-router-dom";
function ContactUs() {
  const navigate = useNavigate();

  function handlnavigation() {
    navigate("/aboutus");
  }
  return (
    <>
      <h1>Contact Us</h1>
      <button className="btn btn-primary" onClick={() => handlnavigation()}>
        Got to about
      </button>
    </>
  );
}
export default ContactUs;
