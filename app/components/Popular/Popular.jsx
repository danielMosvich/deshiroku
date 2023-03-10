"use client";
import React from "react";
import Text from "../Text/Text";
import styles from "./Popular.module.css";
import Flickity from "react-flickity-component";

// import "./styles.css";
import "./flickity.css";

function Carousel(){
    return(
        <Flickity>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
            <div><img src="https://i.pinimg.com/236x/67/e4/4a/67e44ad2aee040b297489fa4207ac69f.jpg" /></div>
        </Flickity>
    )
}


function Popular() {
  return (
    <div className={styles.container}>
      <Text h1>Most Popular Today!</Text>
      <Carousel />
    </div>
  );
}

export default Popular;
