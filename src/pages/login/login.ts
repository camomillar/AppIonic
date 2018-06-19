import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {Service} from "../../service";
import {HomePage} from "../home/home";
import {PostPage} from "../post/post";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, private service: Service) {
  }

  signin(){
    console.log(this.email, this.senha)
    this.service.signin(this.email, this.senha).subscribe(
      res => {
        console.log(res);
        let u = {
          id: res.id,
          token: res.token
        }
        this.service.saveUser(u)
        this.navCtrl.setRoot(HomePage);
      },
      err => {
        console.log(err)
      }
    )
  }

}
