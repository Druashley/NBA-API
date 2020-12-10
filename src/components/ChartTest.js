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

const ChartTest = ({ playerList, chartKey }) => {
  let allData = [];
  let objectKey = "";

  // this switch statements changes the title of a given stat to the correct key the api spits out :)
  switch (chartKey) {
    case "PTS":
      objectKey = "pts";
      break;
    case "FG%":
      objectKey = "fg_pct";
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
        <Legend />
        <Bar dataKey={chartKey} fill="#8884d8" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </div>
  );
};

export default ChartTest;
