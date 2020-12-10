import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import BarGraph from "./BarGraph";
import "../styles/_comparisonSection.scss";

const ComparisonSection = ({ playerList, setPlayerList }) => {
  const [chartKey, setChartKey] = useState("");

  const setChartKeyHandler = (e) => {
    setChartKey(e.target.innerText);
  };

  const removePlayerListHandler = (playerId) => {
    let removePlayerList = playerList.filter(
      (player) => playerId !== player.playerId
    );

    setPlayerList(removePlayerList);
  };

  return (
    <div>
      <div>
        {playerList && chartKey ? (
          <BarGraph playerList={playerList} chartKey={chartKey} />
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
            <th onClick={setChartKeyHandler} className="click-me">
              PTS
            </th>
            <th>MIN</th>
            <th onClick={setChartKeyHandler} className="click-me">
              FG%
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              FG-M
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              FG-A
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              3%
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              3-M
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              3-A
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              FT%
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              FT-M
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              FT-A
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              REB
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              O-REB
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              D-REB
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              AST
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              STL
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              BLK
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              TO
            </th>
            <th onClick={setChartKeyHandler} className="click-me">
              PF
            </th>
          </tr>
        </thead>
        <tbody>
          {playerList.map((player) => (
            <tr key={player.playerId}>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removePlayerListHandler(player.playerId)}
                >
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
