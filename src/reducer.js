const initialState = {
    page: [],
    projects: [],
    project: {title:"title"},
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
        default:
        return state 
    }
   
}
 
export default reducer