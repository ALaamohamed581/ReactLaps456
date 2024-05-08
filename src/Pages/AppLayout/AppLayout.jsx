import NavBar from "../../copmnents/navbar/NavBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const AppLayout = () => {
  let {
    language: { language },
  } = useSelector((state) => state);
  console.log(language, "<---- in  the app");

  return (
    <div dir={language == "en" ? "ltr" : "rtl"}>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
