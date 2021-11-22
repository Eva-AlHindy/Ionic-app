import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  componentDidLoad() {}
  addNote() {
    const alertCtrl = document.querySelector('ion-alert-controller');
    console.log(alertCtrl);
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Notes</ion-title>
          <ion-buttons slot="end">
            <ion-button>
              <ion-icon slot="icon-only" name="clipboard" />
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-item button detail>
            <ion-label>Title goes here</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
