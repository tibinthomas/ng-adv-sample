import { Component, Input } from '@angular/core';
import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h1>{{data.headline}}</h1> 
      
      {{data.body}}
    </div>
  `
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}

