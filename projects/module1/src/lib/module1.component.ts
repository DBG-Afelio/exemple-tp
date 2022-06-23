import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-module1',
  template: `
    <p>
      module1 works!
    </p>
  `,
  styles: [
  ]
})
export class Module1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
