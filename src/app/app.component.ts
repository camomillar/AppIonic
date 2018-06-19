import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Service} from '../service'
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';


import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public service:Service) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      if(service.hasUser()){
        this.rootPage = HomePage
      }else {
        this.rootPage = LoginPage
      }
    });
  }

  isLogged(){
    return this.service.hasUser()
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
    this.service.clearToken()
  }goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CadastroPage);
  }
}
