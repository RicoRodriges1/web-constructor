import React from "react";
import { useListContext } from "../Context/ListContext";
import { Typography, Button, Box } from "@mui/material";


export function Renderspace() {
  const { list } = useListContext();

  const Paragraph = (value) => 
    <Typography sx={{
      color: "#97AACD",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%", 
      letterSpacing: "0.28px",
      mb: "30px"
    }}>
      {value}
    </Typography>

  const Btn = (value) => <Button sx={{ bgcolor: "#4368E0",color: "white", borderRadius:"4px", py: "10px", px: "30px", mb: "30px" }}>{value}</Button>

  const Image = (value) => <img src={value} alt="img" />

  const Headline = (value) => 
    <Typography sx={{
      color: "#252A32",
      textAlign: "center",
      fontFamily: "Roboto",
      fontSize: "22px",
      fontWeight: 700,
      lineHeight: "150%", 
      letterSpacing: "0.44px",
      mb: "30px"
    }}>
      {value}
    </Typography>

  return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
    {
      list.map((item) => <React.Fragment key={item.id}>{
        item.component == "paragraph" ? Paragraph(item.value) : 
        item.component == "image" ? Image(item.value) :
        item.component == "headline" ? Headline(item.value) :
        item.component == "button" ? Btn(item.value) : <></>
      }</React.Fragment>)
    }
  </Box>
}