export function Footer() {
  return (
    <footer>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Amperium" className={styles.logoImage} />
      </Link>
    </footer>
  );
}
