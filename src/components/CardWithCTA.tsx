import { FunctionComponent } from "react";
import styles from "./CardWithCTA.module.css";

export type CardWithCTAType = {
  image?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
};

const CardWithCTA: FunctionComponent<CardWithCTAType> = ({
  image = "/image@2x.png",
  title = "Title",
  description = "Description",
  buttonText = "Text",
  onClick
}) => {
  return (
    <div className={styles.cardwithcta}>
      <div className={styles.container}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.content}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <button className={styles.outlinedbutton} onClick={onClick}>
        <div className={styles.text}>{buttonText}</div>
      </button>
    </div>
  );
};

export default CardWithCTA;
