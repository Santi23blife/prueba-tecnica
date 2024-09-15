import { CardMUI, CardProps } from "../../../stories/CardMUI";
import styles from ".//CardsAnimation.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const CardsAnimation: React.FC = () => {
  const cardsExample: CardProps[] = [
    {
      title: "Team Meeting",
      content: "09/13/2024 9:00 AM",
      color: "red",
    },
    {
      title: "Project Deadline",
      content: "09/14/2024 11:59 PM",
      color: "yellow",
    },
    {
      title: "Date with Dani",
      content: "Today 5:00 PM",
    },
    {
      title: "Meet with Caro",
      content: "10/12/2024 10:00 AM",
    },
    {
      title: "Gym Session",
      content: "09/15/2024 7:00 AM",
      color: "red",
    },
    {
      title: "Conference Call",
      content: "09/16/2024 3:00 PM",
      color: "yellow",
    },
    {
      title: "Lunch with Sarah",
      content: "09/17/2024 12:30 PM",
    },
  ];

  const carrouselElements = [...cardsExample, ...cardsExample];

  return (
    <section className="bg-red w-full h-full flex justify-center items-center">
      <div
        className={
          "flex justify-center items-center w-full h-3/4 " + styles.fade_overlay
        }
      >
        <ul className={"w-2/3 flex flex-col gap-3 relative z-10 "}>
          <Swiper
            direction="vertical"
            effect={"coverflow"}
            grabCursor={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -4,
              depth: 100,
              modifier: 1,
              slideShadows: false,
              scale: 0.9,
            }}
            pagination={true}
            modules={[EffectCoverflow, Autoplay]}
            className="w-full h-full overflow-visible"
          >
            {carrouselElements.map(
              ({ title, content, color = "white" }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CardMUI
                      content={content}
                      title={title}
                      color={color}
                      styles={{ height: "100px", width: "100%" }}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default CardsAnimation;
