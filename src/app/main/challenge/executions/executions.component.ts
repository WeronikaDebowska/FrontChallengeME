import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ChallengeService} from '../challenge.service';

@Component({
  selector: 'app-executions',
  templateUrl: './executions.component.html',
  styleUrls: ['./executions.component.css']
})
export class ExecutionsComponent implements OnInit {
  executionForm;
  createMode;

  constructor(
    private formBuilder: FormBuilder,
    private challengeService: ChallengeService,
  ) {
    this.executionForm = this.formBuilder.group({
      date: '',
      exerciseId: '',
      repeats: ''
    });

  }

  ngOnInit(): void {
    if (!this.challengeService.challengeDetails.exercises) {
      this.challengeService.loadExercises();
    }
    this.createMode = false;

  }

  addExecution(executionDetails: any): void {
    console.log(executionDetails);
    const exerId = executionDetails.exerciseId;
    const date = executionDetails.date;
    const repeats = executionDetails.repeats;

    this.challengeService.saveExecution(exerId, date, repeats);
  }

  switchMode(): void {
    this.createMode = !this.createMode;
  }
}
