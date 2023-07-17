// function make_album(artistName : string,title: string,albums : string): object {
//  const album:object ={
//     artist: artistName,
//     title: title
//  }
// }
function make_album(artist: string, title: string, tracks?: number):object {
    const album: { artist: string; title: string; tracks?: number }  = {
      artist: artist,
      title: title
    };
  
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Call the function to create different album objects
  const album1 = make_album("Artist 1", "Album 1");
  const album2 = make_album("Artist 2", "Album 2", 12);
  const album3 = make_album("Artist 3", "Album 3", 8);
  
  // Print each album object
  console.log(album1);
  console.log(album2);
  console.log(album3);
  