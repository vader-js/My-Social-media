// import react from 'react'
// import {useReducer} from 'react'
import { Posts } from '../../data/dataframe'

export const initialState = Posts;

 export const reducer=(state = initialState, action)=> {
  switch (action.type) {
    case 'share':
      return {...state, post: [action.payload, ...state.post]};
    case 'store_value':
      return { ...state, value: action.payload};
      case "like":
        return { ...state, post: action.payload};
    default:
      return state;
  }
}
