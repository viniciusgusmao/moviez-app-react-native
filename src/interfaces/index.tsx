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
  homepage: string,
}

export interface ICreators {
  id: number,
  name: string,
  profile_path: string
}

export interface ISeason {
  air_date: string,
  episode_count: number,
  name: string,
  poster_path: string,
  season_number: number
}

export interface ITv {  
  name: string,
  first_air_date: string,
  original_name: string,
  vote_average: number,
  genres: IGenre,
  overview: string,
  backdrop_path: string,
  created_by: ICreators[],
  homepage: string,
  seasons: ISeason[],
  status: string,
  number_of_seasons: number
}

export interface IPhoto {
  aspect_ratio: number,
  file_path: string,
  height: number,
  iso_639_1: string,
  vote_average: number,
  vote_count: number,
  width: number
}

