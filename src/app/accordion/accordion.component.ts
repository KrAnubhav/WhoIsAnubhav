import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [
    AccordionModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
  providers: [BrowserAnimationsModule]
})
export class AccordionComponent {
  customClass = 'customClass';
}

// import { Component } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AccordionModule } from 'ngx-bootstrap/accordion';

// @Component({
//   selector: 'app-accordion',
//   standalone: true,
//   imports: [
//     AccordionModule
//   ],
//   templateUrl: './accordion.component.html',
//   styleUrls: ['./accordion.component.css'],
//   providers: [BrowserAnimationsModule]
// })
// export class AccordionComponent {
//   customClass = 'customClass';

//   flip(event: any) {
//     const element = event.currentTarget;
//     element.classList.toggle('flipped');
//   }
// }

