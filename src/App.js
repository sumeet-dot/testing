import React from "react";
import { Container, Grid, Breadcrumbs, Typography, Link } from "@mui/material";
import Header from "./components/Header";
import ItemCard from "./components/ItemCard";

const items = [
  {
    title: "Handmade Vase",
    description: "A beautiful handmade vase perfect for home decor.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Knitted Scarf",
    description: "A warm and cozy knitted scarf for winter.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Wooden Sculpture",
    description: "An intricately carved wooden sculpture.",
    image: "https://via.placeholder.com/150",
  },
];

const App = () => {
  return (
    <>
      <style>
        {`
          body {
            background-color: black;
            color: white;
          }
          .breadcrumb-section {
            background-image: url('Sitemap Whiteboard in Green Purple Basic Style.png'); /* Replace with your image URL */
            background-size: cover;
            background-position: center;
            height: 100vh; /* Full height */
            display: flex;
            align-items: center;
            color: white;
          }
          .breadcrumb-section .gold-text {
            color: #602020; /* Gold color */
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Shadow */
          }
        `}
      </style>
      <Header />
      <div className="breadcrumb-section">
        <Container>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary"></Typography>
          </Breadcrumbs>
          <Typography variant="h4" className="gold-text" style={{ fontSize: "150px", fontWeight: 'bold', fontFamily: 'palatino', marginLeft: "-100px" }}>
            Welcome to 
          </Typography>
          <Typography variant="h6" className="gold-text" style={{ marginTop: "-50px", fontSize: "125px", fontWeight: 'bold', fontFamily: 'palatino', marginLeft: "-50px" }}>
            'Dharohara'
          </Typography>
        </Container>
      </div>
      <Container>
        <Grid container spacing={4} style={{ marginTop: "20px" }}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ItemCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;