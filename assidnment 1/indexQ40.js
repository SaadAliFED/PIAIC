// function make_album(artistName : string,title: string,albums : string): object {
//  const album:object ={
//     artist: artistName,
//     title: title
//  }
// }
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the function to create different album objects
var album1 = make_album("Artist 1", "Album 1");
var album2 = make_album("Artist 2", "Album 2", 12);
var album3 = make_album("Artist 3", "Album 3", 8);
// Print each album object
console.log(album1);
console.log(album2);
console.log(album3);
