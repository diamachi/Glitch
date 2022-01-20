import React,{useEffect} from 'react';
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>Hello</div>
  );
}

export default Home;
