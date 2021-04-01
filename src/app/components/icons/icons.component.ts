import { Component, OnInit, Input } from '@angular/core';
import {faPen, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Input() iconName: String;

  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
