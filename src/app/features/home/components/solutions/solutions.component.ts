import { Component } from '@angular/core';
import { faCalendarDays, faMagnifyingGlass, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  search=faMagnifyingGlass
  user=faUser
  time=faCalendarDays
  star=faStar
}
