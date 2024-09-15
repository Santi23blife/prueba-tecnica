import { Box, CardHeader, Modal, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Text } from "./Text";
import AnimationNotification from "./AnimationNotificaction";
import { useState } from "react";
import { listCardsMUI } from "./ListCardsMUI";
import { modifyEvent } from "../redux/eventsSlice";
import Form, { Field } from "./Form";
import { setMapSearch } from "../redux/mapSearchSlice";
import { useDispatch } from "react-redux";

interface CardProps {
  title: string;
  content: string;
  color?: "black" | "gray" | "red";
  colorTitle?: "black" | "gray" | "red";
  colorContent?: "black" | "gray" | "red";
  backgroundColor?: string;
  styles?: React.CSSProperties;
  classNames?: string;
  index?: number;
}

export const CardMUI: React.FC<CardProps> = ({
  title,
  content,
  colorTitle = "black",
  colorContent = "black",
  backgroundColor = "white",
  styles = {},
  classNames = "",
  index = 0,
}) => {
  const colorsMap = {
    black: "#000000",
    gray: "#3A3B3C",
    red: "#B02727",
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 420,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    borderRadius: "8px",
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    dispatch(setMapSearch({ value: content.split(" - ")[2] }));
  };
  const handleClose = () => setOpen(false);

  const handleAddEvent = (event: any) => {
    const { title, content, date, place } = event;
    console.log(event);
    const newEvent: listCardsMUI = {
      title: title,
      content: `${content} - ${date} - ${place}`,
    };
    dispatch(modifyEvent({ index, event: newEvent }));
    handleClose();
  };

  const formInfo: Field[] = [
    {
      name: "title",
      type: "text",
      message: "Title is required",
      label: "Title",
      value: title,
    },
    {
      name: "content",
      type: "text",
      message: "Description is required",
      label: "Description",
      value: content.split(" - ")[0],
    },
    {
      name: "date",
      type: "text",
      message: "Date is required",
      label: "Date",
      value: content.split(" - ")[1],
    },
    {
      name: "place",
      type: "text",
      message: "Place is required",
      label: "Place",
      value: content.split(" - ")[2],
    },
  ];

  return (
    <>
      <Card
        sx={{
          minWidth: 300,
          minHeight: 84,
          ...styles,
        }}
        classes={{ root: classNames }}
        onClick={() => handleOpen()}
      >
        <CardHeader
          title={title}
          subheader={
            <Text variant="h1" text={content} color={colorsMap[colorContent]} />
          }
          action={
            <AnimationNotification
              iconName="notification"
              onClick={() => console.log("hola, como estas?")}
            />
          }
          sx={{
            color: colorsMap[colorTitle],
            backgroundColor: backgroundColor,
          }}
        />
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Event
          </Typography>
          <Form
            fields={formInfo}
            handleSubmit={(e) => handleAddEvent(e)}
            submitText="Entrar"
            boxStyles={{
              width: "100%",
            }}
            formStyles={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              justifyContent: "center",
              alignItems: "center",
            }}
            buttonActionStyles={{
              width: "80%",
            }}
          />
        </Box>
      </Modal>
    </>
  );
};
