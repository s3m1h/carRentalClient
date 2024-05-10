import React from "react";
import MainHeader from "../layout/MainHeader";
import CarSearch from "../common/CarSearch";
import CarCarousel from "../common/CarCarousel";
import Jumbotrons from "../common/Jumbotrons";

const Home = () => {
  return (
    <>
      <MainHeader />
      <CarSearch />
      <Jumbotrons />
      <CarCarousel />
    </>
  );
};

export default Home;
