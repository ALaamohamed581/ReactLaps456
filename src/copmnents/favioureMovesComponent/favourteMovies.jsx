import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./AllMoviesComponent.module.css";
let staticUr = `https://image.tmdb.org/t/p/w500/`;
import { removefromfavouris } from "../../store/slices/favourite";
const FavourteMivesCompnents = () => {
  let {
    favoures: { fav },
  } = useSelector((state) => state);

  console.log(fav);
  const dispatch = useDispatch();

  function RemoveFromFavourites(id) {
    dispatch(removefromfavouris(id));
    console.log(fav);
  }

  return (
    <>
      <div className={styles.layout}>
        {fav.map((prd) => {
          return (
            <Card key={prd.title} className={styles.card}>
              <Card.Img
                className={styles.img}
                variant="top"
                src={`${staticUr}${prd.poster_path}`}
              />
              <Card.Body>
                <Card.Title>{prd.title}</Card.Title>
                <Card.Text className={styles.text}> {prd.overview}</Card.Text>
                <Link to={`/ProductsDetails/${prd.id}`} className={styles.text}>
                  {" "}
                  <Button variant="primary">Details</Button>
                </Link>
                <Button onClick={() => RemoveFromFavourites(prd.id)}>
                  Renove from favoutites
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default FavourteMivesCompnents;
