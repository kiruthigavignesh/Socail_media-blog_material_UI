import React from 'react'
import { Box } from "@mui/material";
import Post from './Post';

import Post1 from './Post1';

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post1 />

    </Box>
  )
}

export default Feed
