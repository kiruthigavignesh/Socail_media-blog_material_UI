import { Tooltip, Fab, styled, Typography, Avatar, TextField, Stack } from '@mui/material'
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Add as AddIcon } from "@mui/icons-material";
import ImageIcon from '@mui/icons-material/Image';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import VideoChatIcon from '@mui/icons-material/VideoChat';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "20px"

})
const Add = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={e => setOpen(true)}
        title="Create Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}>

        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>

      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box width={300} height={300} borderRadius={5} p={3} bgcolor={"background.default"} color={"text.primary"}>
          <Typography variant='h6' color='gray ' textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpAwtjwT_FJlD3tFKZbSJ4dltELQ3WaEqnjTx0IdNY2TlNgvBmjncsmh4GIfFZyU4-ygM&usqp=CAU"
              sx={{ width: 30, height: 30 }} />

            <Typography fontWeight={500} variant="span">
              Kiruthiga Vigneshwaran
            </Typography>
          </UserBox>

          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="what's on your mind?"


            variant="standard" />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <AddReactionIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoChatIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}><DateRangeIcon /></Button>

          </ButtonGroup>
        </Box>
      </StyledModal>
    </>


  );
}

export default Add;
