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
		var url: string = 'http://{host}:{port}/api/invites/?filter[where][email][like]=^' + to_be_invited;

		return this.discoverService()
					.map( discoverData => {
						url = url.replace( '{host}' , discoverData[0].ServiceAddress )
						 		 .replace('{port}' , discoverData[0].ServicePort.toString());
						return url;
					} )
					.flatMap(url => this._http.get(url))
					.map( inviteResponse => inviteResponse.json() );
	}

	invite(to_be_invited: string) {
		var url: string = 'http://{host}:{port}/api/invites/';
		const headers = new Headers({ 'Content-Type': 'application/json' });
		let invite_email = { email : to_be_invited };

		return this.discoverService()
					.map( discoverData => {
						url = url.replace( '{host}' , discoverData[0].ServiceAddress )
						 		 .replace('{port}' , discoverData[0].ServicePort.toString());
						return url;
					} )
					.flatMap(url => this._http.post(url , JSON.stringify(invite_email), { headers: headers }) )
					.map( inviteResponse => inviteResponse.json() );
	}

	discoverService() {
		return this._http.get('http://localhost:8500/v1/catalog/service/invite-lb')
							.map( discoverData => discoverData.json() );
	}

}
