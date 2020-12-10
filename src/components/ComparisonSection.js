import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import ChartTest from "./ChartTest";

const ComparisonSection = ({ playerList }) => {
  const [chartKey, setChartKey] = useState("");

  const setChartKeyHandler = (e) => {
    setChartKey(e.target.innerText);
  };
  return (
    <div>
      <div>
        {playerList && chartKey ? (
          <ChartTest playerList={playerList} chartKey={chartKey} />
        ) : (
          ""
        )}
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>Remove?</th>
            <th>Name</th>
            <th>Games Played</th>
            <th onClick={setChartKeyHandler}>PTS</th>
            <th>MIN</th>
            <th onClick={setChartKeyHandler}>FG%</th>
            <th>FG-M</th>
            <th>FG-A</th>
            <th>3%</th>
            <th>3-M</th>
            <th>3-A</th>
            <th>FT%</th>
            <th>FT-M</th>
            <th>FT-A</th>
            <th>REB</th>
            <th>O-REB</th>
            <th>D-REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>TO</th>
            <th>PF</th>
          </tr>
        </thead>
        <tbody>
          {playerList.map((player) => (
            <tr key={player.playerId}>
              <td>
                <Button variant="danger" size="sm">
                  X
                </Button>
              </td>
              <td>
                {player.playerFirstName} {player.playerLastName}
              </td>
              <td>{player.playerStats[0].games_played}</td>
              <td>{player.playerStats[0].pts}</td>
              <td>{player.playerStats[0].min}</td>
              <td>{player.playerStats[0].fg_pct}</td>
              <td>{player.playerStats[0].fgm}</td>
              <td>{player.playerStats[0].fga}</td>
              <td>{player.playerStats[0].fg3_pct}</td>
              <td>{player.playerStats[0].fg3m}</td>
              <td>{player.playerStats[0].fg3a}</td>
              <td>{player.playerStats[0].ft_pct}</td>
              <td>{player.playerStats[0].ftm}</td>
              <td>{player.playerStats[0].fta}</td>
              <td>{player.playerStats[0].reb}</td>
              <td>{player.playerStats[0].oreb}</td>
              <td>{player.playerStats[0].dreb}</td>
              <td>{player.playerStats[0].ast}</td>
              <td>{player.playerStats[0].stl}</td>
              <td>{player.playerStats[0].blk}</td>
              <td>{player.playerStats[0].turnover}</td>
              <td>{player.playerStats[0].pf}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ComparisonSection;
