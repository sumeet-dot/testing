import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const items = [
  { name: 'Rajasthani Bandhni', image: 'https://i.ibb.co/2n7YvYm/IMG-9777.jpg' },
  { name: 'Patiala Jooti', image: 'https://i.ibb.co/m5GRTKC/IMG-9778.jpg' },
  { name: 'Barelly Jhoomka', image: 'https://i.ibb.co/whvCTzv/IMG-9781.jpg' },
  { name: 'Lucknowi Kurta', image: 'https://i.ibb.co/v1fjTTh/IMG-9783.jpg' },
  { name: 'Ghungroo', image: 'https://i.ibb.co/QJ7MWzv/IMG-9786.jpg' },
  { name: 'Banarasi Saree', image: 'https://i.ibb.co/dD1cX2v/IMG-9784.jpg' },
];

const ItemCard = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"  // Fixed height instead of padding ratio
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ItemCardList = () => {
  return (
    <Grid container spacing={4} style={{ marginTop: "20px" }}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ItemCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export { ItemCardList, items };
export default ItemCard;