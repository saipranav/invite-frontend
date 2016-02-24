import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class PersonService {
	private _http: Http;

	constructor(http: Http) {
		this._http = http;
	}

	find_person_with_email_like(email: string) {
		return this._http.get('http://localhost:3001/api/persons?filter[where][email][like]=^' + email)
			.map( response => response.json());
	}
}
