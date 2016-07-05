import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {Despesas} from './pages/despesas/despesas';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>

  constructor(platform: Platform) {

  this.pages = [
   { title: 'Inicial', component: HomePage },
   { title: 'Despesas', component: Despesas }
 ];

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage =(page.component);
  }

}

ionicBootstrap(MyApp);
