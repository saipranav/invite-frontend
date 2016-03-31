import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';
require('rxjs/add/operator/mergeMap');

@Injectable()
export class PersonService {
	private _http: Http;

	constructor(http: Http) {
		this._http = http;
	}

	find_person_with_email_like(email: string) {
		var url: any = 'http://{host}:{port}/api/persons?filter[where][email][like]=^' + email;

		return this.discoverService()
					.map( discoverData => {
						url = url.replace( '{host}' , discoverData[0].ServiceAddress )
						 		 .replace('{port}' , discoverData[0].ServicePort.toString());
						return url;
					} )
					.flatMap(url => this._http.get(url))
					.map( personResponse => personResponse.json() );
	}

	discoverService() {
		return this._http.get('http://localhost:8500/v1/catalog/service/person-lb')
							.map( discoverData => discoverData.json() );
	}

}
