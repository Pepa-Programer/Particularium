import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { SingUpServiceService } from 'src/app/servers/singUp/sing-up-service.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.page.html',
  styleUrls: ['./tipo-usuario.page.scss'],
})
export class TipoUsuarioPage implements OnInit {



  constructor() {     }

  ngOnInit() {
  }

  addTeacher(){
    //this.servSingUp.addTeacher();
  }

  addStudent(){
    //this.servSingUp.addStudent();
  }
}
