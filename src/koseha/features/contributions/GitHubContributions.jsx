import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

const YOUR_GITHUB_PERSONAL_ACCESS_TOKEN =
  process.env.REACT_APP_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN;

const mock = [
  { date: "2024-11-28", contributionCount: 2 },
  { date: "2024-11-29", contributionCount: 0 },
  { date: "2024-11-30", contributionCount: 0 },
  { date: "2024-12-01", contributionCount: 0 },
  { date: "2024-12-02", contributionCount: 0 },
  { date: "2024-12-03", contributionCount: 0 },
  { date: "2024-12-04", contributionCount: 1 },
  { date: "2024-12-05", contributionCount: 0 },
  { date: "2024-12-06", contributionCount: 4 },
  { date: "2024-12-07", contributionCount: 3 },
  { date: "2024-12-08", contributionCount: 2 },
  { date: "2024-12-09", contributionCount: 6 },
  { date: "2024-12-10", contributionCount: 13 },
  { date: "2024-12-11", contributionCount: 4 },
  { date: "2024-12-12", contributionCount: 4 },
  { date: "2024-12-13", contributionCount: 4 },
  { date: "2024-12-14", contributionCount: 1 },
  { date: "2024-12-15", contributionCount: 0 },
  { date: "2024-12-16", contributionCount: 14 },
  { date: "2024-12-17", contributionCount: 16 },
  { date: "2024-12-18", contributionCount: 4 },
  { date: "2024-12-19", contributionCount: 0 },
  { date: "2024-12-20", contributionCount: 0 },
  { date: "2024-12-21", contributionCount: 1 },
  { date: "2024-12-22", contributionCount: 0 },
  { date: "2024-12-23", contributionCount: 1 },
  { date: "2024-12-24", contributionCount: 6 },
  { date: "2024-12-25", contributionCount: 1 },
  { date: "2024-12-26", contributionCount: 11 },
  { date: "2024-12-27", contributionCount: 0 },
  { date: "2024-12-28", contributionCount: 0 },
  { date: "2024-12-29", contributionCount: 3 },
  { date: "2024-12-30", contributionCount: 0 },
  { date: "2024-12-31", contributionCount: 0 },
  { date: "2025-01-01", contributionCount: 0 },
  { date: "2025-01-02", contributionCount: 1 },
  { date: "2025-01-03", contributionCount: 0 },
  { date: "2025-01-04", contributionCount: 0 },
  { date: "2025-01-05", contributionCount: 46 },
  { date: "2025-01-06", contributionCount: 9 },
  { date: "2025-01-07", contributionCount: 0 },
  { date: "2025-01-08", contributionCount: 0 },
  { date: "2025-01-09", contributionCount: 0 },
  { date: "2025-01-10", contributionCount: 4 },
  { date: "2025-01-11", contributionCount: 1 },
  { date: "2025-01-12", contributionCount: 1 },
  { date: "2025-01-13", contributionCount: 0 },
];

function GitHubYearContributions() {
  const [contributions, setContributions] = useState([]);
  const [arr, setArr] = useState([]);
  const [todo, setTodo] = useState([]);

  const fetchContributions = async (username, from, to) => {
    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const variables = {
      username,
      from,
      to,
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${YOUR_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    };

    try {
      const response = await axios.post(
        "https://api.github.com/graphql",
        { query, variables },
        { headers }
      );

      const weeks =
        response.data.data.user.contributionsCollection.contributionCalendar
          .weeks;
      const dailyContributions = weeks.flatMap((week) => week.contributionDays);

      // console.log(dailyContributions);
      // setContributions(dailyContributions);
      const date = new Date(mock[0].date);
      const startDay = date.getDay();
      setArr([
        ...Array.from({ length: startDay }).fill(null),
        ...dailyContributions,
      ]);
      setTodo(
        Array.from({
          length: 215 - (startDay + dailyContributions.length),
        }).fill(null)
      );
    } catch (error) {
      console.error("Error fetching contributions:", error.response.data);
    }
  };

  useEffect(async () => {
    const today = new Date().toISOString().split(".")[0] + "Z";
    await fetchContributions("koseha", "2024-11-28T00:00:00Z", today);
  }, []);

  return (
    <div className="contributions-wrapper">
      <div className="contributions">
        {arr &&
          arr.map((item, i) => {
            if (item === null) return <div></div>;
            return (
              <div
                className={`data-item data-item-${item.contributionCount}`}
              ></div>
            );
          })}
        {arr &&
          todo.map((item, i) => (
            <div className="data-item data-item-todo"></div>
          ))}
      </div>
    </div>
  );
}

export default GitHubYearContributions;
