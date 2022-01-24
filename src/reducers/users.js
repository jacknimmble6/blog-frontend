const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  email: '',
  token: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'addInfo': 
      return {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      username: action.payload.username,
      password: action.payload.password,
      email: action.payload.email,
      token: action.payload.token,
      }
    default:
      return state
  }
}
