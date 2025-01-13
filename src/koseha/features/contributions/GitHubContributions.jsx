import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";

const YOUR_GITHUB_PERSONAL_ACCESS_TOKEN =
  process.env.REACT_APP_YOUR_GITHUB_PERSONAL_ACCESS_TOKEN;

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
      const date = new Date(dailyContributions[0].date);
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
