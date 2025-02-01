
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }

  log_out(){
    this.storage.remove("isUserLoggedIn");
    this.navCtrl.navigateRoot("/login");
  }

  register(){
    
    this.navCtrl.navigateRoot("/register");
  }
  editar_perfil(){
    
    this.navCtrl.navigateRoot("/account");
  }
  buscar_usuarios(){
    
    this.navCtrl.navigateRoot("/search-user");
  }

}

