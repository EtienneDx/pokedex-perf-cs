import Link from "next/link";
import styles from "./Layout.module.css";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/pokeball.png"
            alt="pokedex logo"
            width={100}
            height={100}
            priority
          />{" "}
          Pokedex
        </Link>
      </div>
      <div className={styles.heroImageContainer}>
        <Image
          src="/pokemon-hero-image-alt.png"
          alt=""
          fill
          className={styles.heroBanner}
          priority
        />
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
