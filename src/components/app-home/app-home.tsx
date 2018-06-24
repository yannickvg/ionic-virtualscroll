import { Component, State} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() private filteredItems = []

  private items = []
  private showOnlyEven = false

  componentWillLoad() {
    for(var i=1;i<=1000;i++) {
      this.items.push(i)
    }
    this.filterItems()
  }

  filterItems() {
    this.filteredItems = this.items.filter(count =>  {
      if (this.showOnlyEven) {
          return count % 2 == 0
      }
      return true
    })
  }

  toggleShowOnlyEven() {
    this.showOnlyEven = !this.showOnlyEven
    this.filterItems()
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Ionic Virtual Scroll</ion-title>
          <ion-buttons slot="end">
            <ion-button onClick={ () => this.toggleShowOnlyEven()} >
              Only Even
            </ion-button>
        </ion-buttons>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
          <icon-scroll>
            <ion-virtual-scroll
                              items={this.filteredItems}
                              itemHeight={() => 50}
                              renderItem={(count) => {
                                  return <list-item count={count} />
                              }}/>

            </icon-scroll>
      </ion-content>
    ];
  }
}
