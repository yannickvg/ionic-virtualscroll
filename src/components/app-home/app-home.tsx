import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Ionic Virtual Scroll</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        content
      </ion-content>
    ];
  }
}
