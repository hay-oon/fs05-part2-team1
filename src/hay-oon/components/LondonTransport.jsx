import { useState, useEffect } from "react";

export default function LondonTransport() {
  const [tubeStatus, setTubeStatus] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading...</p>;

  return (
    <div className="londonInfoItem">
      <h4>London Transport Status</h4>
      <div className="tubeStatusList">
        {tubeStatus?.map((line) => (
          <div key={line.id} className="tubeLineStatus">
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
          </div>
        ))}
      </div>
      <p className="update-time">Updated every 5 minutes</p>
    </div>
  );
}
