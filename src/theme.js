import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

const theme = createTheme({
    palette:
    {
        primary:
        {
            main:green[900],
            light:blue[500]
        },
        secondary:
        {
            main:blue[500]
        },
        other:
        {
            main:"#888"
        }
    }
})

export default theme