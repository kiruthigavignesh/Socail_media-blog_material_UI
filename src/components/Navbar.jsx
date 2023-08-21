
import MailIcon from '@mui/icons-material/Mail';
import InterestsIcon from '@mui/icons-material/Interests';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import We from '../img/logo1.png';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar style={{ background: "#9c27b4" }}>
       
        <Typography variant="h5"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <img src={We} alt="" style={{width:'70px',height:'70px'}} /> <span  >SOCIAL MEDIA</span>
        </Typography>
        {/* <InterestsIcon sx={{ display: { xs: "block", sm: "none" } }} /> */}
        <Search style={{ display: 'flex' }}>
          <SearchIcon style={{ color: "black" }} />
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsActiveIcon />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3IqHM8OqxkK6WKEtlCKbfAS8Sd5u372BvrALIWoZ4tibJWENT7znCtQkT_kgPSLeuMw&usqp=CAU"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3IqHM8OqxkK6WKEtlCKbfAS8Sd5u372BvrALIWoZ4tibJWENT7znCtQkT_kgPSLeuMw&usqp=CAU"
          />
          <Typography variant="span">Kiruthiga </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

