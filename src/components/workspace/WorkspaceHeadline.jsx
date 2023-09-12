import React from "react";
import { Typography, TextField, Box } from "@mui/material";
import { Badges } from "./Badges";
import { useListContext } from "../Context/ListContext";
import { createId } from "../createId";

export function WorkspaceHeadline(props) {
  const { list, setList } = useListContext()
  const [opened, setOpened] = React.useState(false);
  const [text, setText] = React.useState("");
  const { id } = props;

  React.useEffect(() => {
    const obj = list.find(obj => obj.id === id);
    if(!obj) throw new Error("Cannot find object to change its state.");
    const newObject = {
      id: obj.id,
      component: obj.component,
      value: text
    }
    const updatedList = list.map(item => (item.id === obj.id ? newObject : item))
    setList(updatedList)
  }, [text])

  const handleTextChange = (e) => {
    setText(e.target.value);
  }


  const handleUp = (e) => {
    e.stopPropagation();
    const index = list.findIndex(obj => obj.id === id);
    if(index - 1 >= 0 && index < list.length) {
      const newArray = [...list];
      const temp = newArray[index];
      newArray[index] = newArray[index - 1];
      newArray[index - 1] = temp;
      setList(newArray);
    } 
  }

  const handleDown = (e) => {
    e.stopPropagation();
    const index = list.findIndex(obj => obj.id === id);
    if(index >= 0 && index < list.length - 1) {   
      const newArray = [...list];
      const temp = newArray[index];
      newArray[index] = newArray[index + 1];
      newArray[index + 1] = temp;
      setList(newArray);
    } 
  }

  const handleCopy = (e) => {
    e.stopPropagation();
    const obj = list.find(obj => obj.id === id);
    const newObj = {
      ...obj,
      id: createId(),
    };
    setList([...list, newObj]);
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    const index = list.findIndex(obj => obj.id === id);
    const newArray = list;
    setList(newArray.filter((_, ind) => ind !== index))
  }

  return <Box sx={{
    display: "flex",
    width: "458px",
    padding: "15px 10px",
    position: "relative",
    mb: "15px",
    cursor: "pointer",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    borderRadius: "6px",
    color: "black",
    background: opened ? "#D9E7FF" :"#FFF",
    "&.MuiButtonBase-root:hover": { bgcolor: opened ? "#D9E7FF" :"#FFF" }
    }}
    onClick={() => setOpened(!opened)}
  >
    <img src="/Icons.png" width={"25px"} height={"25px"} alt="headline_icon"/>
    <Typography variant="caption" sx={{ 
      letterSpacing:"0.24px", 
      lineHeight:"150%", 
      fontSize:"12px", 
      textAlign:"center", 
      width: "80px" 
    }}>
      Headline
    </Typography>
    {opened 
      ? <>
        <Box sx={{ p: "5px", borderRadius: "3px", bgcolor: "white", width: "447px" }}>
          <TextField 
            fullWidth
            variant="outlined" 
            size="small" 
            value={text} 
            onChange={handleTextChange} 
            onClick={e => e.stopPropagation()} 
            sx={{ borderRadius: "2px", borderColor: "#E4E6F1" }}
            inputProps={{
              style: {
                height: "11px",
              }
            }}
          />
        </Box>
        <Box sx={{ position: "absolute", top: "-25px", right: "10px"}}>
            <Badges handleUp={e => handleUp(e)} handleDown={e => handleDown(e)} handleCopy={e => handleCopy(e)} handleDelete={e => handleDelete(e)}/>
        </Box>
      </>
      : <></>
    }
  </Box>
}