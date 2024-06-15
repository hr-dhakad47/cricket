import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { useContext } from "react";
import { UserContext } from "..";
function Home() {
  const apiData = useContext(UserContext);

  const [cricketData, setCricketData] = useState([]);
  const [matchType, setMatchType] = useState("odi");

  useEffect(() => {
    apiData.currentMatch().then((res) => {
      const singleType = res.filter((type) => {
        return type.matchType == matchType;
      });

      matchType != "all"
        ? setCricketData(singleType)
        : setCricketData(cricketData)
    })
  }, [matchType])



  return (
    <>
      <label className="ms-3" htmlFor="mType">
        Match Type
      </label>{" "}
      <br />
      <select
        className="ms-3"
        name="mType"
        id="mType"
        value={matchType}
        onChange={(e) => setMatchType(e.target.value)}
      >
        <option value="odi">ODI</option>
        <option value="test">TEST</option>
        <option value="t20">T20</option>
        <option value="all">ALL</option>
      </select>
      <h1 className="text-center text-white bg-success mb-0 mt-2">
        {matchType.toLocaleUpperCase()}
      </h1>
      <div id="box">
        {cricketData.map((cricks, index, arr) => {
          return (
            <Cards
              key={index}
              name={cricks.name}
              date={cricks.date}
              matchType={cricks.matchType}
              status={cricks.status}
              teamInfo={cricks.teamInfo}
              vanue={cricks.venue}
              score={cricks.score}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
