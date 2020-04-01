const initialState = {
    page: [{
        website_name:"loading...",
        nav_link_1:"loading...",
        nav_link_2:"loading..."
    }],
    aboutme: [{
        name: "name"
    }],
    projects: [],
    project: {
        project:{
            title: "title"},
        pictures:"#"},
    user: null
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case "SET_PAGE":
            return {
            ...state,
            page: action.payload.page
            } 
        break;
        case "SET_USER":
            return {
                ...state,
                user: action.payload.user
            }
        case "SET_PROJECTS":
                return {
                    ...state,
                    projects: action.payload.projects
                }
        case "SET_PROJECT":
                return {
                    ...state,
                    project: action.payload.project
                }
        case "SET_ABOUTME":
            return {
                ...state,
                aboutme: action.payload.about
            }
        default:
        return state 
    }
   
}
 
export default reducer