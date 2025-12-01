import client from './client';

const endpoint = '/News';

const version = '/V1'; 

const gteNews = () => client.get(`${version}${endpoint}`);
const gteNew = () => client.get(`/v1/News?Page=1&PostsPerPage=50`);


export default {
    gteNews,
    gteNew
}