import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import {PostPage} from "../post/post";
import {Service} from "../../service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public service: Service) {
    this.fetchPosts()
  }

  fetchPosts(){
    this.service.fetchPosts().subscribe(
      (res) => {
        console.log(res)
        this.posts = res
      }
    )
  }

  criarPost(){
    const modal = this.modalCtrl.create(PostPage)
    modal.present()
  }

  like(post,like){
    let p = {
      uid: post.uid._id,
      texto: post.texto,
      likes: post.likes+like,
      _id: post._id,
      token: this.service.getUser().token
    }
    this.service.editarPost(p).subscribe(
      (res) => {
        this.fetchPosts()
      },
      (err) => {
        this.fetchPosts()
      }
    )
  }

}
