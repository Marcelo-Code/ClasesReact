import {
    createTheme
} from "@mui/material";

export const customTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#A02334",
            pepe: "#FFFFF"
        },
        secondary: {
            main: "#FFAD60"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "100px"
                }
            }
        }

    }
});