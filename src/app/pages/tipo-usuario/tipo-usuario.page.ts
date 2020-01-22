import { SingUpServiceService } from './../../servers/singUp/sing-up-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.page.html',
  styleUrls: ['./tipo-usuario.page.scss'],
})
export class TipoUsuarioPage implements OnInit {

  constructor(private sigServ: SingUpServiceService) { }

  ngOnInit() {
  }

  addStudent(){
    console.log(this.sigServ.$userReg)
    this.sigServ.addStudentId();
  }
  addTeacher(){
    this.sigServ.addTeacherId();
  }

}
