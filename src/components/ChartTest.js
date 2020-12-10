import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const ChartTest = (playerList) => {
  //   console.log(playerList.playerList[0].playerStats[0].fg3_pct);

  let playerListData = playerList.playerList.map((player) => [
    { subject: "FG%", A: player.playerStats[0].fg_pct * 100, fullMark: 150 },
    { subject: "3%", A: player.playerStats[0].fg3_pct * 100, fullMark: 100 },
    {
      subject: "FT%",
      A: player.playerStats[0].ft_pct * 100,
      fullMark: 100,
    },
  ]);

  const data = [
    {
      subject: "FG%",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "3%",
      A: 98,
      fullMark: 150,
    },
    {
      subject: "FT%",
      A: 100,
      fullMark: 150,
    },
  ];

  console.log(playerList.playerList);
  console.log(data);
  console.log(playerListData[0]);

  return (
    <RadarChart
      //   cx={300}
      //   cy={250}
      outerRadius={200}
      width={500}
      height={500}
      data={playerListData[0]}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      //{" "}
      <Radar
        name="Lily"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      // <Legend />
      //{" "}
    </RadarChart>
  );
};

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

//   render() {
//     return (
//       <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
//         <PolarGrid />
//         <PolarAngleAxis dataKey="subject" />
//         <PolarRadiusAxis angle={30} domain={[0, 150]} />
//         <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//         <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
//         <Legend />
//       </RadarChart>
//     );
//   }
// }

export default ChartTest;
