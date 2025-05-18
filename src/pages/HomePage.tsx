import React from "react";
import Hero from "../components/home/Hero";
import FeaturedPlants from "../components/home/FeaturedPlants";
import CurrentOffers from "../components/home/CurrentOffers";
import NurseryFeatures from "../components/home/NurseryFeatures";
import Testimonials from "../components/home/Testimonials";
import { useAppContext } from "../context/AppContext";
import LoginCard from "../components/common/LoginCard";

const HomePage: React.FC = () => {
  const { login } = useAppContext();
  return (
    <div>
      {login && <LoginCard />}
      <Hero />
      <NurseryFeatures />
      <CurrentOffers />
      <FeaturedPlants />
      <Testimonials />
    </div>
  );
};

export default HomePage;
