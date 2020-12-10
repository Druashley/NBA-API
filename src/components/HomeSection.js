import React, { useState, useRef } from "react";
import {
  Button,
  Form,
  Card,
  Container,
  Jumbotron,
  CardDeck,
} from "react-bootstrap";
import { getPlayerURL, getPlayerStatsURL } from "../nbaAPI";
import positionHandler from "./positionHandler";
import axios from "axios";
import ComparisonSection from "./ComparisonSection";
import "../styles/_home.scss";

const HomeSection = () => {
  const [searchedPlayers, setSearchedPlayers] = useState(null);
  const [playerList, setPlayerList] = useState([]);

  const nameInputValue = useRef(null);

  const playerSearchHandler = async () => {
    const playerSearchData = await axios.get(
      getPlayerURL(nameInputValue.current.value)
    );
    setSearchedPlayers(playerSearchData.data.data);
  };

  const setPlayerListHandler = async (
    playerId,
    playerFirstName,
    playerLastName,
    playerTeamName
  ) => {
    let initialPlayerList = playerList.slice();
    const playerInfo = {
      playerId: playerId,
      playerFirstName: playerFirstName,
      playerLastName: playerLastName,
      playerTeamName: playerTeamName,
      playerStats: (await axios.get(getPlayerStatsURL(playerId))).data.data,
    };
    initialPlayerList.push(playerInfo);
    setPlayerList(initialPlayerList);
  };

  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to Tipoff!</h1>
        <p>Search up NBA players and compare their stats!</p>
      </Jumbotron>
      {playerList.length > 0 ? (
        <ComparisonSection playerList={playerList} />
      ) : (
        ""
      )}

      <Form>
        <Form.Group>
          <Form.Label>Search for a player by Name</Form.Label>
          <Form.Control ref={nameInputValue} type="text" placeholder="Lebron" />
        </Form.Group>
      </Form>
      <Button onClick={playerSearchHandler}>Search</Button>
      <div>
        <CardDeck className="mt-5">
          {searchedPlayers
            ? searchedPlayers.map((player) => (
                <Card key={player.id} id={player.id}>
                  <Card.Body>
                    <Card.Title>
                      {player.first_name} {player.last_name}
                    </Card.Title>
                    <Card.Text>Team {player.team.full_name}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                      {player.position
                        ? `Postion: ${positionHandler(player.position)}`
                        : ""}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      {player.height_feet
                        ? `Height: ${player.height_feet} foot ${player.height_inches} `
                        : ""}
                    </Card.Subtitle>
                    <Button
                      variant="outline-primary"
                      onClick={() =>
                        setPlayerListHandler(
                          player.id,
                          player.first_name,
                          player.last_name,
                          player.team.full_name
                        )
                      }
                      className="mt-3"
                    >
                      Compare
                    </Button>
                    <Button className="mt-3" variant="outline-success">
                      See Stats
                    </Button>
                  </Card.Body>
                </Card>
              ))
            : ""}
        </CardDeck>
      </div>
    </Container>
  );
};

export default HomeSection;
