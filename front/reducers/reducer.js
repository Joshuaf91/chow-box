import data from '../data';
import {browserHistory} from 'react-router';
import {REGISTER, LOGIN, DONATE, SUBMIT_DONATION} from '../actions/actions';

const defaultState = data;

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case REGISTER:
      let newUserList = [...state.users];
      newUserList.push(action.data);

      return Object.assign({}, state, {users: newUserList, userId});
    case LOGIN:
      let user
      state.users.forEach((ele,idx)=>{
        console.log(ele)
        console.log(action.data)
        if(ele.email == action.data.email && ele.password == action.data.password){

          if(ele.type === "doner"){
            browserHistory.push(`/donor/${idx}`);
          }else {
            //this a place holder for recipient
            browserHistory.push(`/something/${idx}`);
          }
        }
      })

      Object.assign({}, state, {loggedIn: user})
    case DONATE:
      return Object.assign({}, state, {donation, numOfItems});
    case SUBMIT_DONATION:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

export default reducer;
