import { CardMUI } from "../../../stories/CardMUI";
import styles from ".//CardsAnimation.module.css";

const CardsAnimation: React.FC = () => {
  const cardsExample = [
    {
      title: "Team Meeting",
      content: "09/13/2024 9:00 AM",
      styles: { translate: "0px 10px", scale: "1", zIndex: "7" },
    },
    {
      title: "Project Deadline",
      content: "09/14/2024 11:59 PM",
      styles: { translate: "60px", scale: "1.15", zIndex: "8" },
    },
    {
      title: "Date with Dani",
      content: "Today 5:00 PM",
      styles: { translate: "100px", scale: "1.2", zIndex: "9" },
    },
    {
      title: "Meet with Caro",
      content: "10/12/2024 10:00 AM",
      styles: { translate: "140px", scale: "1.25", zIndex: "10" },
    },
    {
      title: "Gym Session",
      content: "09/15/2024 7:00 AM",
      styles: { translate: "100px", scale: "1.2", zIndex: "9" },
    },
    {
      title: "Conference Call",
      content: "09/16/2024 3:00 PM",
      styles: { translate: "60px", scale: "1.15", zIndex: "8" },
    },
    {
      title: "Lunch with Sarah",
      content: "09/17/2024 12:30 PM",
      styles: { translate: "0px -10px", scale: "1", zIndex: "7" },
    },
  ];

  return (
    <section className="bg-red w-full h-full flex justify-center items-center">
      <div
        className={
          "flex justify-center items-center w-full h-3/4 " + styles.fade_overlay
        }
      >
        <ul
          className={"w-2/4 flex flex-col gap-3 -translate-x-24 relative z-10 "}
        >
          {cardsExample.map(({ title, content, styles }, index) => (
            <CardMUI
              content={content}
              title={title}
              styles={styles}
              key={index}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CardsAnimation;
