import axios from 'axios';

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api/games',
        key: '812d47840a7b495ea28248d5bbc2d0ae'
    }
})