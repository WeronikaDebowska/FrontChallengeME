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
  challengeRealization: number;
  tagList: string[];
  participants: IParticipant [];
  exercises: IExercise [];
  status: boolean;
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
  challengeRealization: number;
  challengeRole: string;
}

export interface IExecution {
  // execId: number;
  exerId: number;
  date: string;
  repeats: number;
}

export interface ITag {
  id: number;
  name: string;
}

