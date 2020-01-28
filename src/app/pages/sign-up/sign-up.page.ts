
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { User } from 'src/app/interfaces/UserInt';
=======
import { UserInt } from 'src/app/interfaces/UserInt';
import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';

>>>>>>> 21ee226ecf1a3f71d6fecabaa58daebf1b91a342

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  private userReg: UserInt = {};

  constructor(private servSingUp: SingUpServiceService) { 
    this.servSingUp.$userReg = this.userReg;
  }

  ngOnInit() {
  }

  registrar(){
    if(this.userReg.cpassword==this.userReg.password){
      this.servSingUp.register()
    }else{
      alert("La contraseña no coincide")
    }
    
  }

}
