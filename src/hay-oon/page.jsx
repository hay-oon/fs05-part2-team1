import styles from "./page.module.css";

export default function IntroductionPage() {
  return (
    <div className={styles.container}>
      <section className={styles.mainContent}>
        <div className={styles.featuredSection}>
          <h2 className={styles.featuredTitle}>Hayoon Jeong</h2>
          <p className={styles.featuredSubtitle}>(be) Frontend Developer</p>
        </div>

        <div className={styles.featuredSection}>
          <h2 className={styles.featuredTitle}>About Me</h2>
          <p className={styles.featuredSubtitle}>
            웹 개발의 즐거움을 찾아가는 프론트엔드 개발자입니다.
          </p>
        </div>

        <div className={styles.featuredSection}>
          <h2 className={styles.featuredTitle}>Featured Projects</h2>
          <p className={styles.featuredSubtitle}>
            최근 작업한 주요 프로젝트들을 확인해보세요.
          </p>

          <div className={styles.featuredGrid}>
            <div className={styles.featuredCard}>
              <div className={styles.projectIcon}>{/* 프로젝트 아이콘 */}</div>
              <div className={styles.projectInfo}>
                <h3>프로젝트 제목</h3>
                <p>"프로젝트에 대한 간단한 설명이 들어갑니다..."</p>
                <div className={styles.projectMeta}>
                  <span className={styles.projectType}>React</span>
                  <span className={styles.projectDate}>2024</span>
                </div>
                <a href="#" className={styles.readMore}>
                  자세히 보기 ›
                </a>
              </div>
            </div>
            {/* 추가 프로젝트 카드들 */}
          </div>

          <a href="#" className={styles.seeAllLink}>
            모든 프로젝트 보기 ›
          </a>
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
