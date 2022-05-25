import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {

  switch(action.type){

    case SET_LOADING:
      return {...state, isLoading: true}

    case SET_STORIES:
      return{
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
      }

    case HANDLE_SEARCH:
      const query = action.payload
      return {...state, searchTerm: query}

    case REMOVE_STORY:
      const id = action.payload
      const remainingHits = state.hits.filter(story => story.objectID !== id)
      return {...state, hits:remainingHits};

    case HANDLE_PAGE:
      const direction = action.payload;

        let newPage = state.page;
        if (direction === "next"){
          newPage + 1 < state.nbPages ? newPage += 1 : newPage = 0
        } else if (direction === "prev"){
          newPage - 1 < 0 ? newPage = state.nbPages - 1 : newPage -= 1;
        }

      return {...state, page:newPage}

    default:
      throw new Error(`no matching "${action.type}" action type`)
  }

}
export default reducer
