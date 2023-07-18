export interface ICard {
  id: string;
  title: string;
  description: string;
}

export interface IBoard {
  id: string;
  title: string;
  cardList: ICard[];
}

export type Position = [number, number]
