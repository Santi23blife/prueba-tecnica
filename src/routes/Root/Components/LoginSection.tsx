import { Link, useNavigate } from "react-router-dom";
import { ButtonMUI } from "../../../stories/Button";
import Form, { Field } from "../../../stories/Form";
import { Text } from "../../../stories/Text";

const LoginSection: React.FC = () => {
  const formInfo = [
    {
      name: "email",
      type: "email",
      message: "Email is required",
      label: "Email",
    } as Field,
    {
      name: "password",
      type: "text",
      message: "Password is required",
      label: "Password",
    } as Field,
  ];
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <section className="w-full h-full flex flex-col justify-center items-center">
      <Text text="Event Manager" size="2xlarge" variant="h1" weight="medium" />
      <div className="w-1/2 flex flex-col justify-center items-center gap-8">
        <Text text="Sign in to your account" size="medium" variant="h2" />
        <Form
          fields={formInfo}
          handleSubmit={() => console.log("hola")}
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
      </div>
      <div className="w-2/3 flex flex-col justify-center items-center gap-8 mt-8">
        <Text text="or enter as a guest" size="medium" variant="h3" />
        <ButtonMUI
          label="Enter"
          color="info"
          styles={{ width: "80%" }}
          onClick={() => handleLogin()}
        />
      </div>
    </section>
  );
};

export default LoginSection;
