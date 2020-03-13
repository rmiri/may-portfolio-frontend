const baseUrl = 'http://localhost:3000';
const loginUrl = baseUrl + '/login';
const pagesUrl = baseUrl + '/pages';
const projectsUrl = baseUrl + '/projects';
const validateURL = baseUrl + '/validate';




const validate = (token) => {
    return fetch(validateURL,{ headers: {'Authorization':token}})
             .then(resp => resp.json())
}

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

const getPage = () => (
    get(pagesUrl)
)
const getProjects = () => (
    get(projectsUrl)
)

const getProject = (id) => (
    get(projectsUrl+"/"+id)
)

export default {login,getPage,getProjects,getProject,validate}