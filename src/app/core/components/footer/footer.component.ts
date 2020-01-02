import { Component, OnInit, ElementRef, Renderer2, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChildren('theme') themes:QueryList<ElementRef>;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  //Toggle theme change panel
  configTrigger(el: any, configPanel:ElementRef) {
    if (el.classList.contains('config-panel-open')) {
      this.renderer.addClass(el, 'config-panel-hide');;
      this.renderer.removeClass(el, 'config-panel-open');
      this.renderer.removeClass(configPanel, 'slide-in');
    } else {
      this.renderer.addClass(el, 'config-panel-open');
      this.renderer.removeClass(el, 'config-panel-hide');
      this.renderer.addClass(configPanel, 'slide-in');
    }
  }

  // Close the theme change panel
  closeConfig(el: ElementRef, configPanel:ElementRef) {
    this.renderer.addClass(el, 'config-panel-hide');;
    this.renderer.removeClass(el, 'config-panel-open');
    this.renderer.removeClass(configPanel, 'slide-in');
  }

  // Set the Style href url when user clicks on user theme change buttons
  setStyleSheet(link:string, curEl:ElementRef) {
    document.getElementById("theme-style").setAttribute('href', link);
    this.themes.forEach(el => {
      let styleAttrUrl = el.nativeElement.getAttribute('data-styleUrl');
      if(styleAttrUrl === link) {
        this.renderer.addClass(el.nativeElement, 'active');
      } else {
        this.renderer.removeClass(el.nativeElement, 'active');
      }
    });
  }

}
