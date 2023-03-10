// "use client";

import Image from "next/image";
import React from "react";
import styles from "./SideBarCard.module.css";
import { motion } from "framer-motion";
function SideBarCard() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0,  }}
      whileInView={{ opacity: 1,}}
      viewport={{ once: true }}
    >
      <div className={styles.img_container}>
        <Image
          src={
            "https://i.pinimg.com/564x/ef/fd/da/effdda7ff113e96a6587570663d855f3.jpg"
          }
          width={50}
          height={50}
          alt={"description iiw"}
        ></Image>
      </div>
      <div className={styles.text_container}>
        <h2 className={styles.text}>Daniel Mosvich sssssssasddddddddddddd</h2>
      </div>
    </motion.div>
  );
}

export default SideBarCard;
