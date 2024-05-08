import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import styles from "./AllMoviesComponent.module.css";
import axiosConfig from "../../axiosConfig/axiosConfig";
let staticUr = `https://image.tmdb.org/t/p/w500/`;

export default function ProductsDetails() {
  const { id } = useParams();

  const [product, setPrpoductId] = useState({});
  async function getData() {
    let { data } = await axiosConfig.get(id);
    console.log(data);
    setPrpoductId(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{ width: "35rem", margin: "auto" }}>
      <Card className={(styles.card, styles.shadow)}>
        <Card.Img
          className={styles.img}
          variant="top"
          src={`${staticUr}${product.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className={styles.text}> {product.overview}</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
