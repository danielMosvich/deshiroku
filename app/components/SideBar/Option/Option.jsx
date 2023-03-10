import Link from "next/link";
import styles from "./Option.module.css";

function Option({ title, icon, url, changePosition, num, position }) {
  return (
    <li
      onClick={() => {
        changePosition(num);
      }}
    >
      <Link
        href={url}
        className={styles.container}
        id={position === num ? styles.active : styles.desactive}
      >
        <div className={styles.icon_container}>{icon}</div>
        {title}
      </Link>
    </li>
  );
}

export default Option;
