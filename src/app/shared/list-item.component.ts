import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <p>
      list-item works!
    </p>
  `,
  styles: [
  ]
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
