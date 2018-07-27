import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

/**
 * Generated class for the LogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log',
  templateUrl: 'log.html'
})
export class LogPage {
  username = '';
  password= '';
  constructor(public navCtrl: NavController,
    private socket: Socket,public toastCtrl:ToastController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LogPage');
  }

  joinPresentaion() {
    if (this.username !== '') {

      this.navCtrl.push('PresentationRoomPage',
        {
          username: this.username,
          socket: this.socket
        });
    }
  }
}
