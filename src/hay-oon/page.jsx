import styles from "./page.module.css";

export default function IntroductionPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Hay-oon</h1>
        <p className={styles.subtitle}>프론트엔드 개발자</p>
      </header>

      <section className={styles.mainContent}>
        <div className={styles.profileSection}>
          <h2>About Me</h2>
          <p>웹 개발의 즐거움을 찾아가는 프론트엔드 개발자입니다.</p>
        </div>

        <div className={styles.skillsGrid}>
          <div className={styles.skillCard}>
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className={styles.skillCard}>
            <h3>Projects</h3>
            <ul>
              <li>프로젝트 A</li>
              <li>프로젝트 B</li>
              <li>프로젝트 C</li>
            </ul>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h2>Contact</h2>
          <ul>
            <li>GitHub</li>
            <li>Email</li>
            <li>Blog</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
