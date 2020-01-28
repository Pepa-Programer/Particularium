import { Student } from './../../core/model/student';

import { Authable } from './../../core/model/authable';
import { User } from 'src/app/core/model/user';


export class AuthServiceMock implements Authable{

    private activeUser : User;
    private users : User[];


    constructor(){
        this.users.push(new Student([],"1","Jose","joselito","1234","Almendralejo","josef@gmail.com"));
    }
    //
    signUp(email: string, password: string, cpassword: string) {
        var encontrado: boolean = false;
        var registrado: boolean = false;
        this.users.forEach(user => {
            if(user.$email === email){
                encontrado = true;
            }
        });
        if(encontrado && (password === cpassword)){
            registrado = true;
        }
        return registrado;
    }

    login(email: string, password: string)  {
        var sesionActiva : boolean = false;
        this.users.forEach(user =>{
            if(user.$email === email && user.$password === password){
                this.activeUser = user;
                sesionActiva = true;
            }
        })
        return sesionActiva;
    }


    logout() {
       this.activeUser = new User();
    }


}