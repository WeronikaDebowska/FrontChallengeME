export interface IUser {
  username: string;
  id: string;
  challenges: IChallenge[];
}

export interface IChallenge {
  challengeName: string;
  challengeId: number;
  // ToDo enum
  userRole: string;
  challengeStatus: string;
  start: string;
  finish: string;
  accomplishmentPercentage: number;
  tagList: string[];
}
