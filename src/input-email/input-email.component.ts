import {Component} from 'angular2/core';
import {PersonService} from '../shared/person.service';
import {InviteService} from '../shared/invite.service';
import {StatusObservable} from '../shared/status.observable';

@Component({
  selector: 'input-email',
  templateUrl: './input-email/input-email.html',
  styleUrls: ['./input-email/input-email.css'],
  providers: [PersonService, InviteService]
})

export class InputEmailCmp {
	public email: string;
	public disabled: boolean;

	constructor(private person_service: PersonService, private invite_service: InviteService,
		private status_observable: StatusObservable) {
		this.email = '';
		this.disabled = false;
	}

	on_key(email_from_user: string) {
		this.person_service.find_person_with_email_like(email_from_user)
			.subscribe(person_data => {
				if ( person_data.length === 1 ) {
					// Found the person
					this.invite_service.check_already_invited(email_from_user)
						.subscribe(invite_already_check_data => {
							if (invite_already_check_data.length === 1) {
								this.status_observable.change_status(3, 'already sent an invite to you with love');
								this.email = invite_already_check_data[0].email.substring(0, invite_already_check_data[0].email.indexOf('@'));
								console.log('invite already sent ' + this.email);
								this.disabled = true;
							} else {
								this.status_observable.change_status(3, 'invite sent with love');
								this.invite_service.invite(person_data[0].email)
									.subscribe(post_invite_data => {
										this.email = post_invite_data.email.substring(0, post_invite_data.email.indexOf('@'));
										console.log('invite sent ' + this.email);
										this.disabled = true;
									}, error => console.error('INVITE SERVICE', error));
							}
						}, error => console.error('INVITE SERVICE',error));
				} else if ( person_data.length < 1) {
					// Could not find
					this.status_observable.change_status(2, 'could not find you on earth, may be check your email address');
					console.log('person not found');
				} else {
					// still searching
					this.status_observable.change_status(1, 'searching you');
					console.log('still searching');
				}
			}, error => console.error('PERSON SERVICE',error));
	}

}
