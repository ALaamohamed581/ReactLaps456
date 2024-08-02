import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./AllMoviesComponent.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourite } from "../../store/slices/favourite";
import { navigateForwared, productsAction } from "../../store/slices/products";
import { BsFillHeartFill } from "react-icons/bs";

let page = 1;

let staticUr = `https://image.tmdb.org/t/p/w500/`;

export default function AllMoviesComponent() {
  const dispatch = useDispatch();

  let Products = useSelector((state) => state.products.products);
  let {
    favoures: { fav },
  } = useSelector((state) => state);

  async function navigate(pageindex) {
    page = page + pageindex;

    dispatch(navigateForwared(page));
  }

  function AddThisMoivieToYourFavourtieList(prd = {}) {
    if (!fav.includes(prd)) {
      dispatch(addToFavourite(prd));
    }
  }

  useEffect(() => {
    dispatch(productsAction());
  }, []);

  return (
    <>
      <div className={styles.layout}>
        {Products.map((prd) => {
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
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Link
                    to={`/ProductsDetails/${prd.id}`}
                    className={styles.text}
                  >
                    <Button variant="primary">Details</Button>
                  </Link>

                  <BsFillHeartFill
                    className={fav.includes(prd) ? styles.added : ""}
                    onClick={() => AddThisMoivieToYourFavourtieList(prd)}
                  />
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button onClick={() => navigate(1)} className="btn btn-info">
          next bage &rarr
        </button>

        <button onClick={() => navigate(-1)} className="btn btn-info">
          previous page bage &larr
        </button>
      </div>
    </>
  );
}
