# ionic-virtualscroll
A small example to try out the ion-virtual-scroll component.

This app shows a list of 1000 elements while still scrolling extremely smooth thanks to ion-virtual-scroll.
For now there still is a problem with the list not updating after filtering. It only updates later when you scroll through it. 

To show this behaviour I added a button that will toggle showing only the even items in the list.

How to run?

- clone repository
- move into the app directory
- git remote rm origin
- npm install
- because of a know problem with ionic and stencil for now you will have to edit the following file: 
    in /yannick/code/ionic-virtualscroll/node_modules/@ionic/core/dist/types/utils/overlays.d.ts: change `keyof B` on line 9 to `string`
- npm start

