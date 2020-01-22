import { Teacher } from './../../core/model/teacher';
import { Component, OnInit } from '@angular/core';
import { SingUpServiceService } from 'src/app/servicios/singUp/sing-up-service.service';

@Component({
  selector: 'app-profileTeacher',
  templateUrl: './profileTeacher.page.html',
  styleUrls: ['./profileTeacher.page.scss'],
})
export class ProfileTeacherPage implements OnInit {

  private teacher : Teacher = null;

  constructor(private signUp: SingUpServiceService) {
  }

  ngOnInit() {
  }

  save() {
    this.signUp.addTeacher(this.teacher);
  }
}
