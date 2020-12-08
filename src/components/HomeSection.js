import React, { useState, useRef } from "react";
import { Button, Form, Card, Container } from "react-bootstrap";
import { getPlayerURL } from "../nbaAPI";
import positionHandler from "./positionHandler";
import axios from "axios";

const HomeSection = () => {
  const [players, setPlayers] = useState(null);
  const nameInputValue = useRef(null);

  const playerSearchHandler = async () => {
    const playerSearchData = await axios.get(
      getPlayerURL(nameInputValue.current.value)
    );
    setPlayers(playerSearchData.data.data);
  };

  return (
    <Container fluid="sm">
      <Form>
        <Form.Group>
          <Form.Label>Search for a player by Name</Form.Label>
          <Form.Control ref={nameInputValue} type="text" placeholder="Lebron" />
        </Form.Group>
      </Form>
      <Button onClick={playerSearchHandler}>Search</Button>
      <div className="player-card">
        {players
          ? players.map((player) => (
              <Card key={player.id} id={player.id}>
                <Card.Body>
                  <Card.Title>
                    Name: {player.first_name} {player.last_name}
                  </Card.Title>
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
                  <Card.Text>Team {player.team.full_name}</Card.Text>
                </Card.Body>
              </Card>
            ))
          : ""}
      </div>
    </Container>
  );
};

export default HomeSection;
