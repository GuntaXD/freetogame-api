import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import SelectList from "./SelectList";
import NavPages from "./NavPages";
import ErrorMessage from "./ErrorMessage";

const Home = ({ data, handleChange, error, selectPlatform, selectGenre }) => {
  const LIMIT = 20;

  const { page } = useParams();

  return (
    <>
      {!error ? (
        <>
          <Form>
            <SelectList
              title="Platform"
              defaultOp={selectPlatform}
              options={["All Platforms", "PC (Windows)", "Web Browser"]}
              handleChange={handleChange}
            />

            <SelectList
              title="Genre"
              defaultOp={selectGenre}
              options={[
                "All Genrers",
                "mmorpg",
                "shooter",
                "strategy",
                "moba",
                "racing",
                "sports",
                "social",
                "card game",
                "mmo",
                "fighting",
              ]}
              handleChange={handleChange}
            />
          </Form>
          <Div>
            {data
              .filter((el, index) => {
                return index < LIMIT * page && index >= LIMIT * (page - 1);
              })
              .map((el) => (
                <Card data={el} key={el.id}></Card>
              ))}
            {data.length === 0 && (
              <NoGamesMessage>no hay juegos</NoGamesMessage>
            )}
          </Div>
          <NavPages page={page} maxLimit={Math.ceil(data.length / LIMIT)} />
        </>
      ) : (
        <ErrorMessage></ErrorMessage>
      )}
    </>
  );
};

export default Home;

const Div = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  background-color: ${(p) => p.theme.bg};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  justify-items: center;
  gap: 1rem;
  padding: 2rem 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 3rem;
  width: 100%;
  background-color: ${(p) => p.theme.bg};
`;

const NoGamesMessage = styled.p`
  font-size: 1.6rem;
  color: ${(p) => p.theme.text};
  grid-column: 1/ 4;
  justify-self: center;
`;
