import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/slices/language";
import { useSelector } from "react-redux";
function Home() {
  let {
    language: { language },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  function ChangeDir() {
    dispatch(changeLanguage(language == "en" ? "ar" : "en"));
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={ChangeDir}>chnage writing direction</button>
    </>
  );
}
export default Home;
