export interface IUser {
  username: string;
  id: string;
  challenges: IChallenge[];
}

export interface IChallenge {
  challengeName: string;
  challengeId: number;
  userRole: string;
  challengeStatus: string;
  start: string;
  finish: string;
  challengeRealisation: number;
  tagList: string[];
}

export interface IExercise {
  exerciseId: number;
  exerciseName: string;
  exerciseDescription: string;
  challengeExerciseSet: number;
  executionsSet: number;
}

export interface IParticipant {
  username: string;
  challengeRealisation: number;
  challengeRole: string;
}

