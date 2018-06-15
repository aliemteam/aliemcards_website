export interface APIResponse {
  status: number;
  statusText: string;
}

export interface Announcement {
  date: string;
  heading: string;
  message: string;
}

export interface Author {
  id: string;
  name: string;
  cards: Card[];
}

export interface CardSummary {
  slug?: string,
  title: string,
  authors: [string],
  created: string,
  updates: [string],
  categories: Taxonomy[]
}

export interface Card extends CardSummary {
  body: string
}

export interface Taxonomy {
  slug?: string,
  name: string,
  cards?: [Card]
}

// export interface Card {
//   slug: string;
//   authors: Author[];
//   categories: Category[];
//   body: string;
//   created: number;
//   title: string;
//   updates: number[] | null;
// }

export enum OrderBy {
  created = 'created',
  updated = 'updated',
}

export enum Sort {
  asc = 'asc',
  desc = 'desc',
}
