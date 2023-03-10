"use client";
import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import styles from './styles/Home.module.css'

function Display({ children }) {
  const [theme, setTheme] = useState("light");
  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setLocalTheme("dark");
    } else {
      setTheme("light");
      setLocalTheme("light");
    }
  }
  function setLocalTheme(value) {
    localStorage.setItem("theme", value);
  }
  useEffect(() => {
    const defaultTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const storageTheme = localStorage.getItem("theme");
    if (storageTheme) {
      setTheme(storageTheme);
    } else if (defaultTheme) {
      setTheme("dark");
      setLocalTheme("dark");
    } else {
      setTheme("light");
      setLocalTheme("light");
    }
  }, []);

  return (
    <main className={theme}>
      <SideBar></SideBar>
      <div className={styles.content}>{children}</div>
    </main>
  );
}

export default Display;
