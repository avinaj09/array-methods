let terra ={favMovie:`Willy's Wonderland`, favSong:'Bohemian Rhapsody', songRating:5, movieRating: 6 };
let archer = {favMovie: 'Hot Rod',favSong: 'Stairway to Heaven', songRating: 10,movieRating: 10};
let grant = {favMovie: 'The Secret Life of Walter Mitty', favSong: 'Dreams', songRating: '8.5', movieRating: '9'};
let andrew = {favMovie:'Repo!', favSong:'A Secret Door', songRating:10, movieRating: 10}
let thad = {favMovie: "Logan", favSong: "The Quiet Things That No One Ever Knows", songRating: 4.5, movieRating: 8.1, };
let martin = {favMovie: "Silent Voice", favSong: "Deadlocked", songRating: 9, movieRating: 10,}
let Dylan2 = {favMovie: 'Akira', favSong: 'Let it be', songRating: 9.5, movieRating: 5}
let Dylan = {favMovie: 'Akira', favSong: 'Let it be', songRating: 9.5, movieRating: 10}
let Juan = {favMovie: "Forgetting Sarah Marshall", favSong: "Invisible String", songRating: 4, movieRating: 7.1};
let antonella = {favMovie:'Shrek', favSong: 'Dreamer', songRating: 8, movieRating: 9};
let patrick ={favMovie: 'Ice Age', favSong: 'Tub Thumpin by Chumbawumba', songRating: 8, movieRating: 8};

let arr = [terra, archer,grant, andrew, thad, martin, Dylan,Dylan2, Juan, antonella, patrick];

let found = arr.find(item=>{
    return item.favMovie==='Akira'
});

//console.log(found);
for (const item of arr) {
    if(item.favMovie==='Akira'){
        //return item;
    }   
}

let akiras = arr.filter(item=> item.favMovie==='Akira' && item.movieRating>5);
for (const item of arr) {
    if(item.favMovie==='Akira' && item.movieRating>5){
        //return item;
    }   
}
//console.log(akiras);

let favMovies =  arr.map(({favSong,favMovie})=>{
    return {favSongRating:favSong.toString(), favMovieRating: favMovie.toString()};
});
//console.log(favMovies)


let lowRatings = arr.some(item=>item.favMovie==='Avatar the Last Airbender');
//console.log(lowRatings);

let highRatings = arr.every(item => Number(item.movieRating)>4);
//console.log(highRatings);

/*let acc=0;
for (const item of arr) {
    acc+= Number(item.movieRating);
}
console.log(acc);*/

let totalRatings = arr.reduce((acc,item)=>{
    return acc+Number(item.movieRating);
},0);
//console.log(totalRatings);

let newArr=[5.6,63,2.52,85,59];
let sum = newArr.reduce((acc,num)=>acc+num,0);
//console.log(sum);

//Sort

arr.sort((a,b)=>{
    if(a.movieRating>b.movieRating){
        return -1;
    } else {
        return 1;
    }
})
console.log(arr);