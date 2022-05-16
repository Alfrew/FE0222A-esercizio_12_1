import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[highlight]",
})
export class HighlightDirective {
  constructor(private ref: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.ref.nativeElement, "background-color", "yellow");
    this.render.setStyle(this.ref.nativeElement, "color", "black");
  }
}
