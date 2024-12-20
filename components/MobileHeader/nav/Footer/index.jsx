import styles from "./style.module.scss";

export default function index() {
  return (
    <div className={styles.footer}>
      <a className="text-white" href="">
        Instagram
      </a>
      <a
        className="text-white"
        href="https://www.facebook.com/profile.php?id=61568671321317"
      >
        Facebook
      </a>

      <a className="text-white" href="">
        Line
      </a>
    </div>
  );
}
