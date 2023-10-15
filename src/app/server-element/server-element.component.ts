import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None, // css defined globally
  // encapsulation: ViewEncapsulation.ShadowDom, // css defined
})
export class ServerElementComponent implements OnInit {
  // @Input('srvElement') // property binding alias is srvElement
  @Input()
  element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
