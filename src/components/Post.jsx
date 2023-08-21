import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAwtjwT_FJlD3tFKZbSJ4dltELQ3WaEqnjTx0IdNY2TlNgvBmjncsmh4GIfFZyU4-ygM&usqp=CAU" alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Kiruthiga Vigneshwaran"
        subheader="May 26, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://img.freepik.com/free-photo/free-photo-flowers-blossom-floral-bouquet-decoration-colorful-beautiful-background-garden-flowers-plant-pattern_1340-26141.jpg?size=626&ext=jpg&ga=GA1.1.651598837.1679294721&semt=sph"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Nature can refer to the general realm of living plants and animals, and in some cases to the
          processes associated with inanimate objects—the way that particular types of things exist and change of their own accord,
          such as the weather and geology of the Earth.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

        </IconButton>
        <IconButton aria-label="share">
          <Checkbox

            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon sx={{ color: "black" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>

    </Card>
  )
}

export default Post

