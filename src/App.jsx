import { Paper, Box, Divider, Grid } from "@mui/material";
import { Header } from "./components/Header";
import { Menu } from "./components/menu/Menu"
import { Renderspace } from "./components/renderspace/Renderspace";
import { Workspace } from "./components/workspace/Workspace";
import { ListContextProvider } from "./components/Context/ListContext";

export default function App() {
  return (
    <ListContextProvider>
      <Paper elevation={0} sx={{ m: 4, borderRadius: "16px", pt: "21px" }}>
        <Box>
          <Header />
        </Box>
        <Divider />
        <Box sx={{ }}>
          <Grid container spacing={0} sx={{ minHeight: "80vh" }}>
            <Grid item xs={2} >
              <Menu />
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs sx={{ backgroundColor: "#F5F5FC", borderRadius: "0 0 16px 0" }}>
              <Grid container sx={{ height: "100%" }}>
                <Grid item xs sx={{ m: "30px", mt: "25px" }}>
                  <Workspace />
                </Grid>
                <Grid item sx={{ p: "30px", pt: "25px", backgroundColor: "white", borderRadius: "0 0 16px 0", width: "632px" }}>
                  <Renderspace />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </ListContextProvider>
  );
}

