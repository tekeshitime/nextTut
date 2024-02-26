import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ProductsList() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>商品一覧</h2>
        <ul>
          <li>
            <Link href="/products/smartphone">smartphone</Link>
          </li>
          <li>
            <Link href="/products/pc">PC</Link>
          </li>
          <li>
            <Link href="/products/headphone">headPhone</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
