import axios from 'axios';

export const getJournal = () => {
    let data;

    axios.get('/api').then(res => data = res).catch(error => console.error(error));
    console.log(data)
    return data;
} 



export const test = axios.get('/api').then(res => res).catch(err => console.error(err));