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