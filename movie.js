class Movie {
  //1 & 2
  constructor(title, studio, rating = 'PG') {
    this.title = title
    this.studio = studio
    this.rating = rating
  }

  //3
  getPG() {
    if (this.rating === 'PG') {
      return this
    }
  }
}

//4
let casinoRoyale = new Movie('Casino Royale', 'Eon Productions', 'PG-13')

let movies = [
  new Movie('GodFather', 'Paramount Pictures', 'PG'),
  new Movie('SkyFall', 'Sony Pictures', 'PG-13'),
  new Movie('Oppenheimer', 'Universal Pictures', 'R'),
  new Movie('Dunkirk', 'Warner Bros', 'PG'),
]

//3
let pgMovies = movies.filter((movie) => movie.getPG())
console.log(pgMovies)
