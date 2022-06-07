/* import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";
const initialState = {
  user: {},
  isAuth: false,
};
export const responceLogin = createAsyncThunk(
  'responceLogin/login',
 async function (_,{email, password}) {
    try {
      const responce = await AuthService.login(email, password);
      console.log(email, password)
      console.log(responce)
      localStorage.setItem("token", responce.data.accessToken);
      setUser(responce.data.user)
      setAuth(true)
       return responce
    } catch (e) {
      return console.log(e.responce?.data?.message);
    }
  },)
  export const responceRegistration = createAsyncThunk(
    'responceRegistration/registration',
  async function (_,{email, password}) {
    try {
      
      const responce = await AuthService.registration(email, password);
      localStorage.setItem("token", responce.data.accessToken);
    
      setUser(responce.data.user)
      setAuth(true)
    
    } catch (e) {
      return console.log(e.responce?.data?.message);
    }
  },)
  export const responceLogout = createAsyncThunk(
    'responceLogout/logout',
  async function (){
    try {
      const responce = await AuthService.logout();
      localStorage.removeItem("token");
      setUser()
      setAuth(false)
      
      
    } catch (e) {
     return console.log(e.responce?.data?.message);
    }
  },
)
const userSlice = createSlice({
  name: "user",
  initialState,
   reducer:{
    setUser(state, action) {
    state.user = action.payload.user;
  },
   setAuth(state) {
      state.isAuth = Boolean;
    }
  }, 
  extraReducers: (builder) => {
    builder
      .addCase({responceLogin, responceRegistration}.fulfilled, (state, action) => {
          state.user.push(action.payload)
          state.isAuth = true
      })
          .addCase(responceLogout.fulfilled, (state, action) => {
              state.user.push(action.payload)
              state.isAuth = false
          })
      }
    
  }); 
export const{setUser, setAuth} = userSlice.actions
export default userSlice.reducer;
 */