import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increaseCounter } from "../../store/slices/conuter";
function Home() {
  // let {
  //   language: { language },
  // } = useSelector((state) => state);

  const dispatch = useDispatch();
  // function ChangeDir() {
  //   dispatch(changeLanguage(language == "en" ? "ar" : "en"));
  // }
  const {
    counter: { counter },
  } = useSelector((state) => state);
  console.log(counter);
  useEffect(() => {}, []);
  function countUp() {
    dispatch(increaseCounter(1));
  }
  return (
    <>
      <h1>
        <button onClick={() => countUp()}>Count up :{counter}</button>
      </h1>

      {/* <button onClick={ChangeDir}>chnage writing direction</button> */}
    </>
  );
}
export default Home;
