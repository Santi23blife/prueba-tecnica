import CardsAnimation from "./Components/CardsAnimation";
import LoginSection from "./Components/LoginSection";
import styles from "./styles.module.css";

const Root: React.FC = () => {
  return (
    <main className="flex flex-row w-full h-full min-h-screen relative overflow-hidden">
      <div className={"flex flex-col w-[50vw] " + styles.container}>
        <CardsAnimation />
      </div>
      <div className="absolute right-0 w-[52vw] h-full flex flex-col bg-white rounded-l-3xl shadow-2xl">
        <LoginSection />
      </div>
    </main>
  );
};

export default Root;
