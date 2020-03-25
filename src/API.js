const baseUrl = 'http://localhost:3000';
const loginUrl = baseUrl + '/login';
const pagesUrl = baseUrl + '/pages';
const projectsUrl = baseUrl + '/projects';
const validateURL = baseUrl + '/validate';
const createURL = baseUrl + '/create';
const aboutMeUrl = baseUrl + '/about_mes';



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

const postPicture = (url,obj) => {
    const configObject = {
        method: "POST",
        headers: {
        },
        body: obj 
    }
    return fetch(url,configObject)
        .then(resp => resp.json())
}
const patch = (url,obj) => {
    const configObject = {
        method: "PATCH",
        headers: {
        },
        body: obj 
    }
    return fetch(url,configObject)
            .then(resp => resp.json())
}

const deleteProject = (id) => {
    const configObject = {
        method: "DELETE",
        headers: {
        },
    }
    return fetch(projectsUrl+'/'+id,configObject)
            .then(resp => resp.json())
}

const login = (body) => (
    post(loginUrl,body)
)

const getPage = () => (
    get(pagesUrl)
)
const getAboutMe = () => (
    get(aboutMeUrl)
)
const getProjects = () => (
    get(projectsUrl)
)

const getProject = (id) => (
    get(projectsUrl+"/"+id)
)

const editPage = (id,obj) => (
    patch(pagesUrl+"/"+id,obj)
)

const editABoutMe = (id,obj) => (
    patch(aboutMeUrl+"/"+id,obj)
)

const postProject = (body) => (
    postPicture(createURL,body)
)


export default {login,getPage,getProjects,getProject,validate,postProject, editPage, deleteProject, getAboutMe, editABoutMe }