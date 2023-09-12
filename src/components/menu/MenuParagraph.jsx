import { Box, Typography } from "@mui/material";
import { useListContext } from "../Context/ListContext";
import { WorkspaceParagraph } from "../workspace/WorkspaceParagraph";


export function MenuParagraph() {
  const {list, setList, createId} = useListContext();

  const addParagraph = () => {
    const id = createId();
    const listItem = {
      id: id,
      component: "paragraph",
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
  onClick={addParagraph}
  >
    <img src="/Vector.png" width={"25px"} height={"25px"} alt="headline_icon"/>
    <Typography variant="caption" sx={{ letterSpacing:"0.24px", lineHeight:"150%", fontSize:"12px", textAlign:"center" }}>
      Paragraph
    </Typography>
  </Box>
}