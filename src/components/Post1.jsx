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

const Post1 = () => {
    return (
        <><div>
            <Card sx={{ margin: 5 }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">:
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaBgDWsS8GGv4n0TKhf8LvnFLxxHr5JTn-w&usqp=CAU" style={{ width: "50px", height: '40px' }} alt="" />
                    </Avatar>}
                    action={<IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>}
                    title="Priya Dharshni"
                    subheader="May 29, 2023" />
                <CardMedia
                    component="img"
                    height="20%"
                    image="https://img.freepik.com/free-photo/purple-flowers-dark-background_1340-23749.jpg?size=626&ext=jpg&ga=GA1.1.651598837.1679294721&semt=sph" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        The beauty and smell of roses is a sight and experience to behold. The swirling petals, long stems, and oval leaflet extend to roses a mystic charm that is hard to find in any other flower. Moreover, the vivid colours of red, pink, yellow, white in which roses bloom enhances the beauty of this flower by manifolds.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                    </IconButton>
                    <IconButton aria-label="share">
                        <Checkbox

                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon sx={{ color: "black" }} />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>

            </Card>
        </div>
            <div>
                <Card sx={{ margin: 5 }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">:
                            <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph" style={{ width: "50px", height: '40px' }} alt="" />
                        </Avatar>}
                        action={<IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>}
                        title="Nadhiya Lakshmanan"
                        subheader="June 1, 2023" />
                    <CardMedia
                        component="img"
                        height="20%"
                        image="https://img.freepik.com/free-photo/colorful-heart-air-balloon-shape-collection-concept-isolated-color-background-beautiful-heart-ball-event_90220-1047.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            "The act of caring and giving to someone else. Having someone's best interest and wellbeing as a priority in your life. To truly love is a very selfless act."                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                        </IconButton>
                        <IconButton aria-label="share">
                            <Checkbox

                                icon={<BookmarkBorderIcon />}
                                checkedIcon={<BookmarkIcon sx={{ color: "black" }} />} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>

                </Card>
            </div>
            <div>
                <Card sx={{ margin: 5 }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">:
                            <img src="https://img.freepik.com/free-photo/vertical-photo-cute-lady-wearing-sunglasses-stand-park_144627-78068.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph" style={{ width: "50px", height: '40px' }} alt="" />
                        </Avatar>}
                        action={<IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>}
                        title="Divya selvam"
                        subheader="June 1, 2023" />
                    <CardMedia
                        component="img"
                        height="20%"
                        image="https://img.freepik.com/free-vector/hand-drawn-flat-people-dancing_23-2149054026.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            "The act of caring and giving to someone else. Having someone's best interest and wellbeing as a priority in your life. To truly love is a very selfless act."                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                        </IconButton>
                        <IconButton aria-label="share">
                            <Checkbox

                                icon={<BookmarkBorderIcon />}
                                checkedIcon={<BookmarkIcon sx={{ color: "black" }} />} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>

                </Card>
            </div>
            <div>
                <Card sx={{ margin: 5 }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">:
                            <img src="https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph" style={{ width: "50px", height: '40px' }} alt="" />
                        </Avatar>}
                        action={<IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>}
                        title="Saranya"
                        subheader="June 1, 2023" />
                    <CardMedia
                        component="img"
                        height="20%"
                        image="https://img.freepik.com/premium-photo/woman-dancer-indian-classical-dance-bharatanatyam-dressed-traditional-national-dance-suit_353119-453.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            "The act of caring and giving to someone else. Having someone's best interest and wellbeing as a priority in your life. To truly love is a very selfless act."                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                        </IconButton>
                        <IconButton aria-label="share">
                            <Checkbox

                                icon={<BookmarkBorderIcon />}
                                checkedIcon={<BookmarkIcon sx={{ color: "black" }} />} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>

                </Card>
            </div>
            <div>
                <Card sx={{ margin: 5 }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">:
                            <img src="https://img.freepik.com/free-photo/portrait-woman-with-pink-hijab_1340-44613.jpg?size=626&ext=jpg&ga=GA1.2.651598837.1679294721&semt=sph" style={{ width: "50px", height: '40px' }} alt="" />
                        </Avatar>}
                        action={<IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>}
                        title="Sharmila Banu"
                        subheader="June 1, 2023" />
                    <CardMedia
                        component="img"
                        height="20%"
                        image="https://img.freepik.com/free-vector/circus-event-with-tents-ferris-wheel-rides-games-ticket-booth-pirate-ship-isolated_1308-32954.jpg?size=626&ext=jpg&ga=GA1.1.651598837.1679294721&semt=sph" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            "The act of caring and giving to someone else. Having someone's best interest and wellbeing as a priority in your life. To truly love is a very selfless act."                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />

                        </IconButton>
                        <IconButton aria-label="share">
                            <Checkbox

                                icon={<BookmarkBorderIcon />}
                                checkedIcon={<BookmarkIcon sx={{ color: "black" }} />} />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>

                </Card>
            </div>

        </>

    )
}

export default Post1

