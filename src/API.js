const baseUrl = 'http://localhost:3000';
const loginUrl = baseUrl + '/login';

const getToken = (url,token) => (
    fetch(url,{ headers: {'Authorization':token}})
        .then(resp => resp.json())
)

const post = (url,obj) => {
   
}

const login = (body) => (
    post(loginUrl,body)
)