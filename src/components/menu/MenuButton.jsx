import { Box, Typography, Button } from "@mui/material";
import { useListContext } from "../Context/ListContext";
import { WorkspaceButton } from "../workspace/WorkspaceButton";
import { createId } from "../createId";


export function MenuButton() {
  const {list, setList} = useListContext();

  const addButton = () => {
    const id = createId()
    const listItem = {
      id: id,
      component: "button",
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
    onClick={addButton}
    >
    <img src="/Image.png" width={"25px"} height={"25px"} alt="headline_icon"/>
    <Typography variant="caption" sx={{ letterSpacing:"0.24px", lineHeight:"150%", fontSize:"12px", textAlign:"center" }}>
      Button
    </Typography>
  </Box>
}