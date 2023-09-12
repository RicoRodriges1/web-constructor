import React from "react";
import { useListContext } from "../Context/ListContext";
import { WorkspaceButton } from "./WorkspaceButton";
import { WorkspaceParagraph } from "./WorkspaceParagraph";
import { WorkspaceHeadline } from "./WorkspaceHeadline";
import { WorkspaceImage } from "./WorkspaceImage";


export function Workspace() {
  const { list } = useListContext();

  return <>
    {
      list.map((item) => {
        if (item.component == "button") return <WorkspaceButton key={item.id} id={item.id}/> 
        else if (item.component == "paragraph") return <WorkspaceParagraph key={item.id} id={item.id}/>
        else if (item.component == "headline") return <WorkspaceHeadline key={item.id} id={item.id}/> 
        else if (item.component == "image") return <WorkspaceImage key={item.id} id={item.id}/> 
      }

      )
    }
  </>
}