import { Component } from '@angular/core';
import { faFacebookF, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year:number = new Date().getFullYear()
  faFacebookF=faFacebookF
  faTwitter=faTwitter
  faGoogle=faGoogle
  fainsta=faInstagram
}
