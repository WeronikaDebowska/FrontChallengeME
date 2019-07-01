import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ChallengesComponent} from '../challenges.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  saveChallengeForm;

  constructor(
    private formBuilder: FormBuilder,
    private challenges: ChallengesComponent,
  ) {
    this.saveChallengeForm = this.formBuilder.group({
      name: '',
      start: '',
      finish: '',
    });
  }


  onSubmit(challenge: any): void {
    console.log('Your challenge has been submitted', challenge.name);
    this.challenges.saveChallenge(challenge);
  }
}
