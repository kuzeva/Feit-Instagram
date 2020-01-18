import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feit-Instagram';

  constructor(iconRegistry:MatIconRegistry , sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(
      'instagram',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg')
    );
    iconRegistry.addSvgIcon(
      'search-bar',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg')
    );
    iconRegistry.addSvgIcon(
      'settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/settings.svg')
    );
  }

  
}
