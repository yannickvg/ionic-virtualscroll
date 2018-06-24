import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'list-item',
  styleUrl: 'list-item.css'
})
export class ListItem {

  @Prop()
  private count:number

  render() {
    return [
      <div>Item #{this.count}</div>
    ];
  }
}
