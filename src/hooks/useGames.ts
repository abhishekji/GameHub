import React, { useState, useEffect } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Game{
    id: number;
    name: string;
    background_image: string;
}

interface FetchGameRes {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGameRes>('/games', {signal: controller.signal})
            .then(res => setGames(res.data.results))
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message)
            });
        return () => controller.abort();
    },[]);

    return { games, error };
}

export default useGames;
