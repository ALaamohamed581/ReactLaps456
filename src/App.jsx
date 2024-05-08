import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./Pages/aboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import NotFound from "./Pages/notfound/NotFound";
import AppLayout from "./Pages/AppLayout/AppLayout";
import { Provider } from "react-redux";
import store from "./store/Store";
import Home from "./Pages/home/Home";
import FavourteMivesCompnents from "./copmnents/favioureMovesComponent/favourteMovies";
import ProductsDetails from "./Pages/ProdutDetails/ProductsDetails";
import Movies from "./Pages/products/Movies";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, path: "/home", element: <Home /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/Movies", element: <Movies /> },
      { path: "/ProductsDetails/:id", element: <ProductsDetails /> },
      { path: "/favorutesMovies", element: <FavourteMivesCompnents /> },
      { path: "*", element: <NotFound />, errorElement: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />;
    </Provider>
  );
}

export default App;
