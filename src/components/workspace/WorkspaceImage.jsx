import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { Badges } from "./Badges";
import { useListContext } from "../Context/ListContext";
import { createId } from "../createId";

export function WorkspaceImage(props) {
  const { list, setList } = useListContext();
  const [opened, setOpened] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const { id } = props;

  React.useEffect(() => {
    const obj = list.find(obj => obj.id === id);
    if(!obj) throw new Error("Cannot find object to change its state.");
    const newObject = {
      id: obj.id,
      component: obj.component,
      value: image
    }
    const updatedList = list.map(item => (item.id === obj.id ? newObject : item))
    setList(updatedList)
  }, [image])

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
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
    cursor: "pointer",
    padding: "15px 10px",
    position: "relative",
    mb: "15px",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    borderRadius: "6px",
    background: opened ? "#D9E7FF" :"#FFF",
    "&.MuiButtonBase-root:hover": { bgcolor: opened ? "#D9E7FF" :"#FFF" }
    }}
    onClick={() => setOpened(!opened)}
  >
    <img src="/Image.png" width={"25px"} height={"25px"} alt="headline_icon"/>
    <Typography variant="caption" sx={{ letterSpacing:"0.24px", lineHeight:"150%", fontSize:"12px", textAlign:"center", width: "80px" }}>
      Image
    </Typography>
    {opened 
      ? <>
        <Button variant="contained" size="small" component="label" onClick={(e) => e.stopPropagation()}>
          Upload image
          <input type="file" hidden accept="image/*" onChange={handleImageUpload}/>
        </Button>
        <Box sx={{ position: "absolute", top: "-25px", right: "10px"}}>
          <Badges handleUp={e => handleUp(e)} handleDown={e => handleDown(e)} handleCopy={e => handleCopy(e)} handleDelete={e => handleDelete(e)}/>
        </Box>
      </>
      : <></>
    }
  </Box>
}