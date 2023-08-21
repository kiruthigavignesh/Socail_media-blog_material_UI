import React from 'react'
import { Box, Typography } from "@mui/material";
import { Avatar, AvatarGroup } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Fab from '@mui/material/Fab';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const itemData = [

  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box width={300} >
        <Typography variant="h6" color="gray">Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAwtjwT_FJlD3tFKZbSJ4dltELQ3WaEqnjTx0IdNY2TlNgvBmjncsmh4GIfFZyU4-ygM&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkljYL77IZl5ECJ6L-PzFbwYSk2YzzFM-7w&usqp=CAU" />
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXZjPZ6dWHU5KmeRS91v2TbE4aOcHukMtRg&usqp=CAU" />
          <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBYDmXHkxayxYZdXR11eMmDUP4tSEe7b9cg&usqp=CAU" />
          <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkljYL77IZl5ECJ6L-PzFbwYSk2YzzFM-7w&usqp=CAU" />
          <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBYDmXHkxayxYZdXR11eMmDUP4tSEe7b9cg&usqp=CAU" />

          <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXZjPZ6dWHU5KmeRS91v2TbE4aOcHukMtRg&usqp=CAU" />
          <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAwtjwT_FJlD3tFKZbSJ4dltELQ3WaEqnjTx0IdNY2TlNgvBmjncsmh4GIfFZyU4-ygM&usqp=CAU" />
          <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAwtjwT_FJlD3tFKZbSJ4dltELQ3WaEqnjTx0IdNY2TlNgvBmjncsmh4GIfFZyU4-ygM&usqp=CAU" />

        </AvatarGroup>

        <Typography variant="h6" color="gray" mt={2} mb={2}> Latest Images</Typography>
        <ImageList sx={{ width: 400, height: 450 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" mt={2} mb={2} color="gray"> Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAwtjwT_FJlD3tFKZbSJ4dltELQ3WaEqnjTx0IdNY2TlNgvBmjncsmh4GIfFZyU4-ygM&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBYDmXHkxayxYZdXR11eMmDUP4tSEe7b9cg&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAwtjwT_FJlD3tFKZbSJ4dltELQ3WaEqnjTx0IdNY2TlNgvBmjncsmh4GIfFZyU4-ygM&usqp=CAU" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <Typography variant="h6" color="gray" mt={2} mb={2}> Enjoy Music</Typography>

      
      <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        
        <Fab style={{ background: "#9c27b4" }} aria-label="add">
        <MusicNoteIcon  />
      </Fab>
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://img.freepik.com/premium-photo/dj-power-color-spots-generative-ai_138015-1582.jpg?size=626&ext=jpg&ga=GA1.1.651598837.1679294721&semt=sph"
        alt="Live from space album cover"
      />
    </Card>
    <BottomNavigation style={{marginTop:"20px"}}
        showLabels
        
       
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>

      </Box>
    </Box>
  )
}

export default Rightbar
