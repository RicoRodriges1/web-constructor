import { Box, Typography } from "@mui/material";
import { WorkspaceImage } from "../workspace/WorkspaceImage";
import { useListContext } from "../Context/ListContext";
import { createId } from "../createId";

export function MenuImage() {
  const {list, setList} = useListContext();

  const addImage = () => {
    const listItem = {
      id: createId(),
      component: "image",
      value: null,
    }
    setList([...list, listItem])
  }

  return <Box sx={{ 
    display: "flex",
    padding: "15px 10px",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    backgroundColor:"#F6F9FE", 
    borderRadius:"6px",
    cursor: "pointer"
  }}
  onClick={addImage}
  >
    <img src="/Image.png" width={"25px"} height={"25px"} alt="headline_icon"/>
    <Typography variant="caption" sx={{ letterSpacing:"0.24px", lineHeight:"150%", fontSize:"12px", textAlign:"center" }}>
      Image
    </Typography>
  </Box>
}