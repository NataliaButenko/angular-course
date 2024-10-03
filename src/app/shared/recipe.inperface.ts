export interface IRecipe {
  author: string;
  date: Date | string;
  recipe: string;
  id: string;
}

export enum SortByDate {
  None = 'None',
  Ascending = 'Ascending',
  Descending = 'Descending',
}
