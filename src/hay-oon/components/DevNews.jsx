import { useState, useEffect } from "react";

export default function DevNews() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?per_page=4");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("뉴스를 가져오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    const interval = setInterval(fetchNews, 3600000); // 1 hour
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="devInfoItem">
      <h4>
        <a href="https://dev.to" target="_blank" rel="noopener noreferrer">
          <img
            src="data:image/jpeg;base64,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"
            style={{ width: "40px" }}
            alt="dev"
          />
        </a>
        <br />
        News
      </h4>
      <div className="newsList">
        {news?.map((article) => (
          <a
            key={article.id}
            href={article.url}
            className="newsItem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="newsContent">
              <h5 className="newsTitle">{article.title}</h5>
              <p className="newsMetadata">
                <span className="newsAuthor">
                  posted by {article.user.name}
                </span>
                <span className="newsReactions">
                  👍🏻 {article.public_reactions_count}
                </span>
              </p>
            </div>
          </a>
        ))}
      </div>
      <p className="update-time">Updated every hour</p>
    </div>
  );
}
