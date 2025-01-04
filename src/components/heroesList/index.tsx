import HeroPicture from "../heroesPicture";

import styles from "./heroesList.module.scss";

import { spidermanFont } from "@/fonts";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  heroes: IHeroData[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <h1 className={`${spidermanFont.className} ${styles.title}`}>
        Personagens
      </h1>
      <section className={styles.heroes}>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            className={`${styles.imageContainer} ${styles[hero.id]}`}
          >
            <HeroPicture hero={hero} />
          </div>
        ))}
      </section>
    </>
  );
}
