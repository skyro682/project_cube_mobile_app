import * as SecureStore from 'expo-secure-store';

const API_URL = 'http://192.168.1.121/project_cube/public/api/';

export function getRessources() {
    const url = API_URL + 'ressource';
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function getPost(idPost) {
    const url = API_URL + 'ressource/' + idPost;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export async function storeToken(token, username) {
    await SecureStore.setItemAsync('token', token);
    await SecureStore.setItemAsync('username', username);
    return true;
}

export const login = (email, password) => {
    var data = {
        email: 'test@test.fr',
        password: '12345678'
    };
    return fetch(
        API_URL + 'login',
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
    .then((response) => response.json())
    .catch((error) => console.log(error)); 
};

export const createAccount = (email, password, verif_password, first_name, last_name, username) => {
    var data = {
        email: 'test@test.fr',
        password: '12345678',
        password_confirmation: '12345678',
        username: 'skyro682',
        first_name: 'Alexis',
        last_name: 'Milano',
    };
    return fetch(
        API_URL + 'register',
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export function logout() {
    SecureStore.deleteItemAsync('token');
    SecureStore.deleteItemAsync('username');
    return true;
}