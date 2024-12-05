import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const ItemCard = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemCard;