import React from "react";
import { Container, Grid, Breadcrumbs, Typography, Box, TextField } from "@mui/material";
import Header from "./components/Header";
import { ItemCardList } from "./components/ItemCard";

const App = () => {
  return (
    <>
      <style>
        {`
          body {
            background-color: #A50E00;
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
          .tagline {
            color: white;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-top: 20px;
          }
          .tagline span {
            color: white;
            margin-top: 50px;
            font-size: 82px;
            font-weight: bold;
            
          }
          .about-us-section {
           background-color: #A50E00;
            padding: 30px;
            text-align: center;
            color: white;
            margin-bottom: 20px;
            width: 100%;
            box-sizing: border-box;
          }
          .about-us-section h2 {
            font-size: 26px;
            margin-bottom: 10px;
          }
          .about-us-section p {
            font-size: 28px;
            margin: 0;
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
      <Container style ={{width:"100%"}}>
        <div className="about-us-section">
          <h2>About Us</h2>
          
          <Typography className="tagline">
            
            <span>परंपरा से प्रेरित</span>
          </Typography>
          <p>Welcome to Dharohara, a place where your search ends.</p>
          <p>Inspired by tradition, we bring you the finest art and craft from across India.</p>
        

        </div>
        
        <ItemCardList />
      </Container>
    </>
  );
};

export default App;