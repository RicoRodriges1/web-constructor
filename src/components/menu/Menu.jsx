import { Grid, Box } from "@mui/material";
import { MenuHeadline } from "./MenuHeadline";
import { MenuButton } from "./MenuButton";
import { MenuParagraph } from "./MenuParagraph";
import { MenuImage } from "./MenuImage";

export function Menu() {


  return <Box sx={{ m:"30px" }}>
    <Grid container spacing={"10px"} >
      <Grid container item spacing={"10px"} sx={{ p:0 }}>
        <Grid item xs={6}>
          <MenuHeadline />
        </Grid>
        <Grid item xs={6}>
          <MenuParagraph />
        </Grid>
      </Grid>
      <Grid container item spacing={"10px"}> 
        <Grid item xs={6}>
          <MenuButton />
        </Grid>
        <Grid item xs={6}>
          <MenuImage />
        </Grid>
      </Grid>
    </Grid>
  </Box>

}