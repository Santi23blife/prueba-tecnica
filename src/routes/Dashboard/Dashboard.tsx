import { Avatar, Box, Modal, Typography } from "@mui/material";
import ListCardsMUI, { listCardsMUI } from "../../stories/ListCardsMUI";
import MapEmbed from "../../stories/MapEmbed";
import { Text } from "../../stories/Text";
import { ButtonMUI } from "../../stories/Button";
import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux/useSelector";
import Form, { Field } from "../../stories/Form";
import { useAppDispatch } from "../../hooks/redux/useDispatch";
import { addEvent } from "../../redux/eventsSlice";
import { getCookies } from "../../utils/cookies/getCookie";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../utils/cookies/deleteCookie";

const Dashboard: React.FC = () => {
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

  const navigate = useNavigate();

  const handleCloseSesion = () => {
    deleteCookie("user");
    navigate("/");
  };

  const [userEmail, setUserEmail] = useState("");

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const emailUser = getCookies("user");
      let emailFormatted =
        emailUser.charAt(0).toUpperCase() + emailUser.slice(1);
      setUserEmail(emailFormatted);
    }
  }, []);

  const events = useAppSelector((state) => state.events.value);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddEvent = (event: any) => {
    const { title, content, date, place } = event;
    const newEvent: listCardsMUI = {
      title: title,
      content: `${content} - ${date} - ${place}`,
    };
    dispatch(addEvent(newEvent));
    handleClose();
  };

  const formInfo: Field[] = [
    {
      name: "title",
      type: "text",
      message: "Title is required",
      label: "Title",
    },
    {
      name: "content",
      type: "text",
      message: "Description is required",
      label: "Description",
    },
    {
      name: "date",
      type: "text",
      message: "Date is required",
      label: "Date",
    },
    {
      name: "place",
      type: "text",
      message: "Place is required",
      label: "Place",
    },
  ];

  return (
    <main className="flex flex-col w-full h-screen relative overflow-hidden">
      <div className="h-16 w-full bg-white border-[1px] flex justify-between items-center px-4">
        <Text text="Event Manager" size="large" weight="bold" color="#111" />
        <Avatar
          alt="user-icon"
          sx={{ backgroundColor: "#444", cursor: "pointer" }}
          onClick={() => handleCloseSesion()}
        >
          {userEmail ? userEmail.slice(0, 2) : "Gu"}
        </Avatar>
      </div>
      <aside className="w-full h-full flex flex-row">
        <div className="w-3/4 h-[calc(100vh-4rem)] overflow-hidden relative flex justify-center items-center">
          <ListCardsMUI
            maxHeight={"calc(100vh - 4rem)"}
            listCardsMUI={events}
            activeHover={true}
          />
          <ButtonMUI
            label="Add Event"
            size="large"
            styles={{ position: "absolute", bottom: "1rem", width: "70%" }}
            onClick={() => handleOpen()}
          />
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
        </div>
        <div className="w-full h-full bg-blue-200">
          <MapEmbed styles={{ width: "100%", height: "100%" }} />
        </div>
      </aside>
    </main>
  );
};

export default Dashboard;
