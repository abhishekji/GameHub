// import React, { useState, useEffect } from 'react'
// import apiClient from '../services/api-client';

import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
// interface Game{
//     id: number;
//     name: string;
// }

// interface FetchGameRes {
//     count: number;
//     results: Game[];
// }

export const GameGrid = () => {
    const {games, error} = useGames();
    // const [games, setGames] = useState<Game[]>([]);
    // const [error, setError] = useState('');

    // useEffect(() => {
    //     apiClient.get<FetchGameRes>('/games')
    //         .then(res => setGames(res.data.results))
    //         .catch(err => setError(err.message))
    // },[]);

  return (
    <>
    {error && {error}}
    <SimpleGrid columns={3} spacing={10}>
        {games && games.map(game => <GameCard key={game.id} game={game}/>)}
    </SimpleGrid>
    </>
  )
}
