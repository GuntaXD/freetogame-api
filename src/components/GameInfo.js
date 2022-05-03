import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { helpHttp } from "../helper/helpHttp";
import ErrorMessage from "./ErrorMessage";
import { Loader } from "./Loader";

import AboutContainer from "./AboutContainer";
import AdditionalInformation from "./AdditionalInformation";
import Aside from "./Aside";
import ScreenShots from "./ScreenShots";
import SystemRequirements from "./SystemRequirements";

const GameInfo = () => {
  let { id } = useParams();

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const data = await helpHttp().get(
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          {
            headers: {
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
              "X-RapidAPI-Key":
                "6882e33334msh53c3bc45159d97cp11d227jsn1c82c247cd0a",
            },
          }
        );

        if (data.err) {
          setError(true);
          throw new Error(data.err, data.statusText, data.status);
        }
        setData(data);
      } catch (error) {
        setError(true);
        return error;
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  return (
    <>
      {loading && <Loader />}
      {!error && !loading && (
        <Div>
          <Aside
            title={data.title}
            thumbnail={data.thumbnail}
            gameUrl={data.game_url}
          />
          <Info>
            <h3>About {data.title}</h3>
            <AboutContainer>{data.description}</AboutContainer>
            <AdditionalInformation
              title={data.title}
              developer={data.developer}
              publisher={data.publisher}
              releaseDate={data.release_date}
              genre={data.genre}
              platform={data.platform}
            />
            <ScreenShots screenshots={data.screenshots} />
            <SystemRequirements data={data.minimum_system_requirements} />
          </Info>
        </Div>
      )}
      {!error || <ErrorMessage />}
    </>
  );
};

export default GameInfo;

const Div = styled.div`
  min-height: calc(100vh - 80px - 60px);
  width: 100%;
  background-color: ${(p) => p.theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media all and (min-width: 768px) {
    padding: 2rem;
    flex-direction: row;
    align-items: flex-start;
  }
  @media all and (min-width: 1024px) {
    padding: 2rem 10%;
  }
`;

const Info = styled.div`
  width: 90%;

  & h3 {
    color: ${(p) => p.theme.subtext};
    opacity: 1;
    margin: 1rem;
  }
  @media all and (min-width: 600px) {
    width: 80%;
  }
`;
