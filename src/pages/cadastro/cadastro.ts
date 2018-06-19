import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Service} from "../../service";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  constructor(public navCtrl: NavController, private service: Service) {
  }

  nome: string;
  email: string;
  senha: string;

  cadastrar(){
    this.service.cadastrar(this.nome, this.email, this.senha).subscribe(
      res => {
        console.log(res)
        this.navCtrl.setRoot(LoginPage)
        this.nome = ''
        this.email = ''
        this.senha = ''
      },
      err => {
        console.log(err)
      }
    )
  }

}
