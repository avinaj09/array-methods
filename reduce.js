let arr = [
  { title: "COD", genre: "FPS" },
  { title: "Animal Crossing", genre: "Sim" },
  { title: "The Sims", genre: "Sim" },
  { title: "DOOM", genre: "FPS" },
  { title: "Stardew Valley", genre: "Sim" },
  { title: "Horizon-Zero Dawn", genre: "Action" },
  { title: "Nioh 2", genre: "Open World Combat" },
  { title: "Street Fighter", genre: "Fighting" },
  { title: "Mortal Kombat", genre: "Fighting" },
  { title: "Dragon Quest", genre: "JRPG" },
  { title: "Final Fantasy", genre: "MMO" },
  { title: "Minesweeper", genre: "Strategy" },
  { title: "Fortnite", genre: "Battle Royale" },
];


let groupBy = (arr, key) => {
  return arr.reduce((acc, obj) => {
    let genre = obj[key];
    if (acc[genre]) {
      acc[genre].push(obj);
    } else {
      acc[genre] = [obj];
    }
    return acc;
  }, {});
};

let groupByGenre = groupBy(arr,'genre');
let groupByTitle = groupBy(arr,'title');

console.log(groupByGenre);
console.log(groupByTitle);
//console.log(gamesByGenre);
