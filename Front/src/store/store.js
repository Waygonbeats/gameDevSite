import {makeAutoObservable} from 'mobx'
import AuthService from '../services/AuthService'
export  class Store{
    user = { }
    isAuth = false;

    constructor(){
makeAutoObservable(this)
    }

    setAuth(boolean) {
        this.isAuth = boolean
    }

    setUser(user){
        this.user=user;
    }

    async login(email, password){
        try {
            const responce = await AuthService.login(email, password);
            console.log(responce)
            localStorage.setItem('token', responce.data.accessToken)
            this.setAuth(true)
            this.setUser(responce.data.user)
            
        } catch (e) 
       { console.log(e.responce?.data?.message)
            
        }
    }

    async registration(email, password){
        try {
            const responce = await AuthService.registration(email, password);
            localStorage.setItem('token', responce.data.accessToken)
            this.setAuth(true)
            this.setUser(responce.data.user)
            
        } catch (e) 
       { console.log(e.responce?.data?.message)
            
        }
    }

    async logout(email, password){
        try {
            const responce = await AuthService.logout();
            localStorage.setItem('token' )
            this.setAuth(false)
            this.setUser()
            
        } catch (e) 
       { console.log(e.responce?.data?.message)
            
        }
    }

}