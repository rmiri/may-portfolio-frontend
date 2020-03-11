const baseUrl = 'http://localhost:3000';
const loginUrl = baseUrl + '/login';

const getToken = (url,token) => (
    fetch(url,{ headers: {'Authorization':token}})
        .then(resp => resp.json())
)

const get = (url) => (
    fetch(url)
    .then(resp => resp.json())
)

const post = (url,obj) => {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(obj) 
    }
    return fetch(url,configObject)
            .then(resp => resp.json())
}

const login = (body) => (
    post(loginUrl,body)
)

export default {login}