import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class InviteService {
	private _http: Http;

	constructor(http: Http) {
		this._http = http;
	}

	check_already_invited(to_be_invited: string) {
		return this._http.get('http://localhost:3002/api/invites/?filter[where][email][like]=^' + to_be_invited)
			.map(response => response.json());
	}

	invite(to_be_invited: string) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		let invite_email = { email : to_be_invited };
		return this._http.post('http://localhost:3002/api/invites/', JSON.stringify(invite_email), { headers: headers })
			.map(response => response.json());
	}

}
