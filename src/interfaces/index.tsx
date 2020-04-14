export interface IBigCard {
  id: number,
  poster_path: string,
  title: string,
  vote_average: number
}

export interface ISmallCard extends IBigCard {
  genre: {
    id: number,
    name: string
  }[]
}

