import { FunctionComponent, useCallback } from "react";
import CardWithCTA from "../components/CardWithCTA";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DesignerCard from "../components/DesignerCard";
import GigCard from "../components/GigCard";
import FilterType from "../components/FilterType";
import styles from "./Frame.module.css";
import FileUpload from "../components/FileUpload";
import ReviewCard from "../components/ReviewCard";

const onCardClick = () => {
  // Add Action
  console.log("LOG");
}

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.cardwithctaParent}>
      <Header />
      <Footer />
      <DesignerCard description="I will design the best logo for your business  the best logo for your business"/>
      <GigCard
        image="/image2@2x.png"
        avatar="/avatar1@2x.png"
        userName="John Wick"
        rating="5.0"
        price="$10.00"
        description="I will design the best logo for your business"
      />
      <div className={styles.container}>
        <FilterType text={`Video & Animation`} icon="/icon1.svg" />
        <FilterType icon="/icon1.svg" text="Website" />
      </div>
      <FileUpload text="Video & Animation" />
      <ReviewCard />
    </div>
  );
};

export default Frame;
