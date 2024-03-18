function makeAlbum(artist : string , title : string , tracks ?: number) : {artist : string , title : string , tracks ?: number} {
    if (tracks !== undefined) {
        return {artist, title, tracks};
    }
    return {artist , title};
}

console.log(makeAlbum("taylor Swift", "1989"));

console.log(makeAlbum("Ed Sheeran", "Divide"));

console.log(makeAlbum("Adele", "21", 3));


// Album 1
// const album1 = {
//     artist: "Taylor Swift",
//     title: "1989"
//   };
  
//   // Album 2
//   const album2 = {
//     artist: "Ed Sheeran",
//     title: "÷ (Divide)"
//   };
  
//   // Album 3
//   const album3 = {
//     artist: "Adele",
//     title: "21",
//     tracks: ["Rolling in the Deep", "Someone Like You", "Set Fire to the Rain"]
//   };
  
//   console.log(album1);
//   console.log(album2);
//   console.log(album3);
  