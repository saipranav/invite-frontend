import {Component} from 'angular2/core';
import {InputEmailCmp} from '../input-email/input-email.component';
import {StatusCmp} from '../status/status.component';

@Component({
  selector: 'app',
  templateUrl: './app/app.html',
  styleUrls: ['./app/app.css'],
  directives: [StatusCmp, InputEmailCmp]
})

export class AppCmp {

}
