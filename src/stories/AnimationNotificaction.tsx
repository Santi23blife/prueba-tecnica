import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "./Icon";

interface AnimationNotificationProps {
  iconName: "notification" | "user";
  onClick?: () => void;
}

const AnimationNotification: React.FC<AnimationNotificationProps> = ({
  iconName = "notification",
  onClick = () => {},
}) => {
  const variants = {
    click: { rotate: [0, 45, -45, 45, 0] },
    normal: { rotate: 0 },
  };
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked((prev) => false);
    }, 1000);
    onClick();
  };
  return (
    <motion.div
      animate={isClicked ? "click" : "normal"}
      onClick={handleClick}
      variants={variants}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 0.3, 0.5, 0.7, 1],
        loop: Infinity,
      }}
    >
      <Icon iconName={iconName} />
    </motion.div>
  );
};

export default AnimationNotification;
