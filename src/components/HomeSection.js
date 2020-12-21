import React, { useState, useRef } from "react";
import {
  Button,
  Form,
  Card,
  Container,
  Jumbotron,
  CardDeck,
  Dropdown,
} from "react-bootstrap";
import { getPlayerURL, getPlayerStatsURL, currentYear } from "../nbaAPI";
import positionHandler from "./positionHandler";
import axios from "axios";
import ComparisonSection from "./ComparisonSection";
import "../styles/_home.scss";

const HomeSection = () => {
  const [searchedPlayers, setSearchedPlayers] = useState(null);
  const [playerList, setPlayerList] = useState([]);
  const [season, setSeason] = useState("2019");
  const [playerActive, setPlayerActive] = useState(false);

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
      playerStats: (await axios.get(getPlayerStatsURL(playerId, season))).data
        .data,
    };

    initialPlayerList.push(playerInfo);
    setPlayerList(initialPlayerList);
  };

  const setSeasonHandler = async (e, playerId) => {
    setSeason(e.target.text);
    playerSeasonTester(playerId);
  };

  const playerSeasonTester = async (playerId) => {
    if (
      (await axios.get(getPlayerStatsURL(playerId, season))).data.data.length >
      0
    ) {
      setPlayerActive(true);
    } else {
      setPlayerActive(false);
    }
  };

  return (
    <Container>
      <Jumbotron>
        <h1>Welcome to Tipoff!</h1>
        <p>Search up NBA players and compare their stats!</p>
      </Jumbotron>
      {playerList.length > 0 ? (
        <ComparisonSection
          playerList={playerList}
          setPlayerList={setPlayerList}
        />
      ) : (
        ""
      )}

      <Form>
        <Form.Group>
          <Form.Label>Search for a player by Name</Form.Label>
          <Form.Control ref={nameInputValue} type="text" placeholder="Lebron" />
        </Form.Group>
        <Button onClick={playerSearchHandler}>Search</Button>
      </Form>

      <div>
        <CardDeck className="mt-5">
          {searchedPlayers
            ? searchedPlayers.map((player) => (
                <Card key={player.id} id={player.id} style={{ width: "18rem" }}>
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
                    {playerActive ? (
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
                        className="mt-3 mb-3"
                      >
                        Compare
                      </Button>
                    ) : (
                      <Button variant="outline-danger" className="mt-3 mb-3">
                        No Stats
                      </Button>
                    )}

                    <Button onClick={() => playerSeasonTester(player.id)}>
                      Did they play?
                    </Button>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="outline-success"
                        id="dropdown-basic"
                      >
                        {season}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2020
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2019
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2018
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2017
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2016
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2015
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2014
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2013
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2012
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2011
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2010
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2009
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2008
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2007
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2006
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2005
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2004
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2003
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2002
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2001
                        </Dropdown.Item>
                        <Dropdown.Item onClick={setSeasonHandler}>
                          2000
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
