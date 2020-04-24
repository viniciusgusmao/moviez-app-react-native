export interface IBigCard {
  id: number,
  poster_path: string,
  title: string,
  vote_average: number,
  isMovie: boolean
}

export interface IGenre {
  id: number,
  name: string
}

export interface ISmallCard extends IBigCard {
  genre: IGenre[]
}

export interface IProductionCompany {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

export interface IMovie {  
  original_title: string,
  release_date: string,
  vote_average: number,
  runtime: number,
  genre: IGenre,
  budget: number,
  overview: string,
  backdrop_path: string,
  production_companies: IProductionCompany[]  
}


