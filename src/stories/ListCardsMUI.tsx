import React from "react";
import { CardMUI } from "./CardMUI";
import Box from "@mui/material/Box";
import styles from "./ListCardsMUI.module.css";

export interface listCardsMUI {
  title: string;
  content: string;
  color?: "black" | "red";
}

export interface ListCardsMUIProps {
  /**
   * ListCardsMUI is a list of cards
   */
  listCardsMUI: listCardsMUI[];
  height?: number;
  maxHeight: string;
  activeHover?: boolean;
}

const ListCardsMUI: React.FC<ListCardsMUIProps> = ({
  listCardsMUI,
  height,
  maxHeight = "100%",
  activeHover = false,
}) => {
  const eventExamples = {
    normal: {
      title: "Card Title",
      content: "Card Content",
      color: "black" as "black",
    },
    urgent: {
      title: "Urgent Event",
      content: "This is an urgent event",
      color: "red" as "red",
    },
  };
  const events = [
    eventExamples.normal,
    eventExamples.urgent,
    eventExamples.normal,
    eventExamples.normal,
    eventExamples.normal,
    eventExamples.normal,
  ];

  return (
    <Box
      component="ul"
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: maxHeight,
        width: "100%",
        overflowY: "scroll",
        scrollbarColor: "#9999 #fff",
        scrollbarWidth: "thin",
        padding: "2px",
      }}
    >
      {listCardsMUI.map(({ title, content, color = "black" }, index) => (
        <CardMUI
          key={index}
          index={index}
          title={title}
          content={content}
          colorTitle={color}
          colorContent={color}
          styles={{ boxShadow: "none", borderRadius: "0px", padding: "0px" }}
          classNames={styles.interactive}
          activeHover={activeHover}
        />
      ))}
    </Box>
  );
};

export default ListCardsMUI;
