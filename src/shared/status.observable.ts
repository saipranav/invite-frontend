import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import {Injectable} from 'angular2/core';

@Injectable()
export class StatusObservable {
	status$: Observable<any>;
	private _status_observer: any;
	private _data_store: {
		// 1 -> searching person
		// 2 -> sending / could not find person
		// 3 -> sent invite
		status: number,

		// 1 -> searching you
		// 2 -> sending invite / could not find you on earth
		// 3 -> invite sent with love / already sent an invite with love
		status_msg: string;
	};

	constructor() {
		this.status$ = new Observable(observer =>
			this._status_observer = observer).share();
		this._data_store = { status: 0, status_msg: '' };
	}

	change_status(status: number, status_msg: string) {
		this._data_store.status = status;
		this._data_store.status_msg = status_msg;
		this._status_observer.next(this._data_store);
	}

}
