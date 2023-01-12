import { Box } from '@mui/system';
import React from 'react';

const Sidebar = () => {
    return (
        <Box p={2} flex={2} bgcolor="lightgreen" sx={{ display:{xs:"none", sm:"block"}}}>
            Sidebar
        </Box>
    );
};

export default Sidebar;