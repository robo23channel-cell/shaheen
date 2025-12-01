import client from './client';

const endpoint = '/v1/user';



const getUserData = () => client.get(endpoint);
const deactivateUser = () => client.delete(endpoint + "/DeleteMyAccount");

const changePassWord = (oldPass, newPass, id) => client.post(`/V1/Customer/${id}/UpdatePassword`, { newPassword: newPass, confirmNewPassword: newPass});

export default {
    getUserData,
    deactivateUser, 
    changePassWord
}