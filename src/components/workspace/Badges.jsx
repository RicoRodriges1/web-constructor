import { Box } from "@mui/material";

export function Badges(props) {
  const {handleDown, handleUp, handleCopy, handleDelete} = props;

  return <>
    <Box sx={{ 
      display: "inline-block", 
      bgcolor: "#449CF4",
      borderRadius: "3px 3px 0px 0px",
      p: "3px",
      mr: "5px"
    }} >
      <img src="/arrow-down.png" width={"15px"} height={"15px"} alt="arrow-down" style={{marginRight: "5px"}} onClick={handleDown}/>
      <img src="/arrow-up.png" width={"15px"} height={"15px"} alt="arrow-up" onClick={handleUp}/>
    </Box>
    <Box sx={{ 
      display: "inline-block", 
      bgcolor: "#68C2E9",
      borderRadius: "3px 3px 0px 0px",
      p: "3px"
    }}>
      <img src="/copy.png" width={"15px"} height={"15px"} alt="copy" style={{marginRight: "5px"}} onClick={handleCopy}/>
      <img src="/trash.png" width={"15px"} height={"15px"} alt="trash" onClick={handleDelete}/>
    </Box>
  </>
}