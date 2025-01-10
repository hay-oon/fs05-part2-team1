import styles from "./page.module.css";

export default function IntroductionPage() {
  return (
    <div className={styles.container}>
      <section className={styles.mainContent}>
        <div className={styles.featuredSection}>
          <h2 className={styles.featuredTitle}>Hayoon Jeong</h2>
          <p className={styles.featuredSubtitle}>(be) Frontend Developer</p>
        </div>

        <div className={styles.grayBackground}>
          <div className={styles.graySectionCard}>
            <h2 className={styles.graySectionTitle}>About Me</h2>
            <p className={styles.featuredSubtitle}>
              웹 개발의 즐거움을 찾아가는 프론트엔드 개발자입니다.
            </p>
          </div>
          <div className={styles.interSection}>
            <div className={styles.interSectionInner}>
              <div className={styles.interSectionLeft}>
                <h3 className={styles.interSectionTitle}>Get Support</h3>
                <p className={styles.interSectionSubtitle}>
                  Give us a few details and we'll offer the best solution.
                  Connect by phone, chat, email, and more.
                </p>
                <a href="#" className={styles.interSectionLink}>
                  Start now
                </a>
              </div>
              <div className={styles.interSectionRight}>
                <h3 className={styles.interSectionTitle}>Portfolio App</h3>
                <p className={styles.interSectionSubtitle}>
                  Get help for all of your projects in one place.
                </p>
                <a href="#" className={styles.interSectionLink}>
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className={styles.graySectionCard}>
            <h2 className={styles.graySectionTitle}>About Me</h2>
            <p className={styles.featuredSubtitle}>
              웹 개발의 즐거움을 찾아가는 프론트엔드 개발자입니다.
            </p>
          </div>

          <div className={styles.graySectionCard}>
            <h2 className={styles.graySectionTitle}>About Me</h2>
            <p className={styles.featuredSubtitle}>
              웹 개발의 즐거움을 찾아가는 프론트엔드 개발자입니다.
            </p>
          </div>

          <h2 className={styles.featuredTitle}>Featured Projects</h2>
          <p className={styles.featuredSubtitle}>
            최근 작업한 주요 프로젝트들을 확인해보세요.
          </p>
          <div className={styles.graySection}>
            <div className={styles.featuredGrid}></div>
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
