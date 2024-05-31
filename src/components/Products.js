import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Products() {
  const category = useParams();
  console.log(category.categoryName);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/product/category/${category.categoryName}`)
    .then((res) => {
      console.log(res.data.products, 1111);
      setProducts(res.data.products);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [category.categoryName]);

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >
        {products.map((item) => (
          <Card key={item.id} sx={{ width: 345 }}>
            <CardMedia
              component="img"
              alt={item.title}
              height="200"
              width="200"
              image={item.images[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {item.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="h5">₹{item.price}</Typography>
              <Typography
                variant="h5"
                style={{ textAlign: "end", width: "100%" }}
              >
                {item.brand}
              </Typography>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </div>
  );
}

export default Products;