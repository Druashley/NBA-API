import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarGraph = ({ playerList, chartKey }) => {
  let allData = [];
  let objectKey = "";

  // this switch statements changes the title of a given stat to the correct key the api spits out :)
  switch (chartKey) {
    case "PTS":
      objectKey = "pts";
      break;
    case "FG%":
      objectKey = "fg_pct";
      break;
    case "FG-M":
      objectKey = "fgm";
      break;
    case "FG-A":
      objectKey = "fga";
      break;
    case "3%":
      objectKey = "fg3_pct";
      break;
    case "3-M":
      objectKey = "fg3m";
      break;
    case "3-A":
      objectKey = "fg3a";
      break;
    case "FT%":
      objectKey = "ft_pct";
      break;
    case "FT-M":
      objectKey = "ftm";
      break;
    case "FT-A":
      objectKey = "fta";
      break;
    case "REB":
      objectKey = "reb";
      break;
    case "O-REB":
      objectKey = "oreb";
      break;
    case "D-REB":
      objectKey = "dreb";
      break;
    case "AST":
      objectKey = "ast";
      break;
    case "STL":
      objectKey = "stl";
      break;
    case "BLK":
      objectKey = "blk";
      break;
    case "TO":
      objectKey = "turnover";
      break;
    case "PF":
      objectKey = "pf";
      break;
    default:
      break;
  }

  let playerListData = playerList.slice("");
  playerListData.map((player) =>
    allData.push({
      name: `${player.playerFirstName} ${player.playerLastName}`,
      [chartKey]: player.playerStats[0][objectKey],
    })
  );

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={allData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend iconType="star" />
        <Bar dataKey={chartKey} fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </div>
  );
};

export default BarGraph;
