import Image from "next/image";
import styles from "./page.module.css";
import Generator from "@/components/generator";
import Tools from "@/components/tools";

export default function Home() {
  return <main className={styles.main}>
    <Generator />
    <section>
      <Tools />
    </section>
  </main>;
}
