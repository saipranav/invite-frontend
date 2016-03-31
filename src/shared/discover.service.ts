/*var request = require( 'request' );

export class DiscoverService {
	private service : {
			serviceAddress : string,
			servicePort : number
		};

	public getService ( serviceName : string ) {
		this.service = { 'serviceAddress': '', 'servicePort': 0 };
		// Hit consul service rest endpint
	    request( 'http://localhost:8500/v1/catalog/service/' + serviceName + '-lb', function ( err: any , res: any , body: any ) {
	      if ( err ) {
	        console.error( 'Service Discovery is down\n' , err );
	      }

	      if ( JSON.parse( body )[ 0 ].ServiceName ) {
	        this.service.serviceAddress = JSON.parse( body )[ 0 ].ServiceAddress;
	        this.service.servicePort = JSON.parse( body )[ 0 ].ServicePort;
	        return this.service;
	      } else {
	      	console.error( serviceName + 'Service is down\n' , err );
	      }

	    } );
	}
}*/
