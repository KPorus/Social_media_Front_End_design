import { Box } from '@mui/system';
import React from 'react';

const RightBar = () => {
    return (
      <Box
        p={2}
        flex={2}
        bgcolor='lightblue'
        sx={{ display: { xs: "none", sm: "block" } }}>
        RightBer
      </Box>
    );
};

export default RightBar;