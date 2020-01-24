

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    return arr.concat().sort((a, b) => (a.year > b.year) ? 1 : -1)
 }
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
    return arr.filter(movie =>  movie.director == "Steven Spielberg"  && movie.genre.includes('Drama')).length;
   }
const orderAlphabetically = (arr) => {
    let newArr = arr.concat().sort((a, b) => a.title.localeCompare(b.title))
    let anotherArr = []
    newArr.forEach(element => {
      anotherArr.push(element.title)
    })
    return anotherArr.slice(0,20);
    }
    orderAlphabetically(movies)
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
//     let anotherArr = []
//     arr.concat().forEach(element => {
//         anotherArr.push(element.rate)
//       })
//     let round = anotherArr.reduce((a,b) => a + b) / 250
//     return round.toFixed(2)
//   }
let averrate = 0
let newArr = arr.filter(obj => Object.keys(obj).includes('rate'))
if (arr.length === 0) return averrate
newArr.forEach(movie => averrate += movie.rate)
return Math.round(100*averrate/arr.length)/100
}
ratesAverage(movies)
// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
