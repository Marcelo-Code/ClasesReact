import { Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styles } from "./styles";

export const PruebaGrid = () => {
  return (
    <Grid container>
      {/* la pantalla se divide en 12 columnas */}
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "red" }}>Caja 1</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <h2 style={{ backgroundColor: "blue" }}>Caja 2</h2>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Button color="secondary" variant="contained">
          Sumar
        </Button>
      </Grid>
      <Grid size={{ xs: 12, sm: 6, md: 3 }}>
        <Typography variant="h5" sx={styles.caja5}>
          Caja 3
        </Typography>
      </Grid>
      <TextField label="nombre" variant="outlined" color="primary.pepe" />
    </Grid>
  );
};
