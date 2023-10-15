import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None, // css defined globally
  // encapsulation: ViewEncapsulation.ShadowDom, // css defined
})
export class ServerElementComponent implements OnInit, OnChanges, AfterContentInit {
  // @Input('srvElement') // property binding alias is srvElement
  @Input()
  element: { type: string, name: string, content: string };

  @ViewChild('heading', { static: true })
  heading: ElementRef;

  @ContentChild('contentParagraph', { static: true })
  paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('ngOnInit called this.heading', this.heading.nativeElement.textContent);
    console.log('ngOnInit called this.paragraph', this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called', changes);
  }

  ngAfterContentInit(): void {
    console.log('ngOnInit called this.heading', this.heading.nativeElement.textContent);
    console.log('ngOnInit called this.paragraph', this.paragraph.nativeElement.textContent);
  }
}
