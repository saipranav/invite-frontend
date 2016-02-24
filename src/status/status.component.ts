import {Component} from 'angular2/core';
import {NgIf} from 'angular2/common';
import {StatusObservable} from '../shared/status.observable';

@Component({
  selector: 'status',
  templateUrl: './status/status.html',
  styleUrls: ['./status/status.css'],
  directives: [NgIf]
})

export class StatusCmp {
  	status: number;
	status_msg: string;

	constructor(private status_observable: StatusObservable) {
		status_observable.status$.subscribe(updated_data_store => {
			this.status = updated_data_store.status;
			this.status_msg = updated_data_store.status_msg;
		}, error => console.log(error));
	}

}
