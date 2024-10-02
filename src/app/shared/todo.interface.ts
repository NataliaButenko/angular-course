export interface Todo {
  title: string;
  id: string;
  completed: boolean;
}

export enum CompletedFilter {
  ALL = 'all',
  COMPLETED = 'completed',
  NOT_COMPLETED = 'not_completed',
}
