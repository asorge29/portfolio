import styles from "@/styles/cutCorners.module.css";

export default function CutCorners({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
