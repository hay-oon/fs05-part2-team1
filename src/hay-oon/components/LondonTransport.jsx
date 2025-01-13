import { useState, useEffect } from "react";

export default function LondonTransport() {
  const [tubeStatus, setTubeStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const getStatusColor = (status) => {
    if (status.toLowerCase().includes("good service")) {
      return "status-good";
    } else if (
      status.toLowerCase().includes("minor") ||
      status.toLowerCase().includes("reduced")
    ) {
      return "status-minor";
    }
    return "status-severe";
  };

  // 지하철 상태 가져오기
  useEffect(() => {
    const fetchTubeStatus = async () => {
      try {
        const response = await fetch(
          "https://api.tfl.gov.uk/line/mode/tube/status"
        );
        const data = await response.json();
        setTubeStatus(data);
      } catch (error) {
        console.error("지하철 정보를 가져오는데 실패했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTubeStatus();

    const interval = setInterval(fetchTubeStatus, 300000); // 5분마다 갱신
    return () => clearInterval(interval);
  }, []);

  // 현재 시간 갱신
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // 1초마다 갱신

    return () => clearInterval(timer);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="londonInfoItem">
      <h4>London Transport Status</h4>
      <div className="tubeStatusList">
        {tubeStatus?.map((line) => (
          <a
            href={`https://tfl.gov.uk/tube-dlr-overground/status/#line-lul-${line.id}`}
            key={line.id}
            className="tubeLineStatus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`statusIndicator ${getStatusColor(
                line.lineStatuses[0].statusSeverityDescription
              )}`}
            />
            <div>
              <p className="tubeLineName">
                {line.name} Line :{" "}
                {line.lineStatuses[0].statusSeverityDescription}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="timeDisplay">
        London Time:{" "}
        {currentTime.toLocaleTimeString("en-GB", {
          // new Date() -> currentTime : 매 초마다 변경상태 반영하기위해 state 변경
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })}
      </div>
      <p className="update-time">Updated every 5 minutes</p>
    </div>
  );
}
