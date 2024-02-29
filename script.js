// Declare variables below
let image = document.querySelector(".image");
let songName = document.querySelector(".title");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".link");
let lengthOfSong = document.querySelector(".length");


let display = document.querySelector(".display");
let imageURL = document.querySelector(".images");
let SongName = document.querySelector(".songs");
let artists = document.querySelector(".artists");
let SongLink = document.querySelector(".links");
let lengths = document.querySelector(".lengths");

let songNames = ["a lot", "No Role Modelz", "Roses", "Some"];
let artistNames = ["21 Savage", "J. Cole", "Kanye West", "Steve Lacy"];
let songLinks =  ["https://www.youtube.com/watch?v=DmWWqogr_r8&pp=ygUFYSBsb3Q%3D", "https://www.youtube.com/watch?v=0EnRK5YvBwU&pp=ygUObm8gcm9sZSBtb2RlbHo%3D", "https://www.youtube.com/watch?v=Qxlnb1lEdEs&pp=ygUQcm9zZXMga2FueWUgd2VzdA%3D%3D", "https://www.youtube.com/watch?v=Wz_5AFguGCU"];
let songLengths = ["4:49", "4:53", "4:06", "3:01"];
let imageURLS = ["https://i.ytimg.com/vi/VbrEsOLu75c/maxresdefault.jpg", "https://images.genius.com/60c766f8fdc616c8d358ec781d584129.1000x1000x1.png", "https://i.ytimg.com/vi/Qxlnb1lEdEs/maxresdefault.jpg", "https://i.scdn.co/image/ab67616d00001e027c0c6c1cfac7464b6211587d"];

// Use the body of this function to display your playlist.
let itemsLen = songNames.length-1;
function displaySongInfo() {
  for (i = 0; i <= itemsLen; i++){
    add(songNames[i], SongName);
  }
  
  for (i = 0; i <= itemsLen; i++){
    add(artistNames[i], artists);
  }
  
  for (i = 0; i <= itemsLen; i++){
    let temp = document.createElement("a");
    temp.innerHTML = songLinks[i];
    SongLink.appendChild(temp);
  }
  
  for (i = 0; i <= itemsLen; i++){
    add(songLengths[i], lengths);
  }
  
  for (i = 0; i <= itemsLen; i++){
    let temp = document.createElement("img");
    temp.src = imageURLS[i];
    imageURL.appendChild(temp);
  }

  }
  function add(item, div){
    let temp = document.createElement("p");
    temp.innerHTML = item;
    div.appendChild(temp);
  }



  // This function empties the divs each time the button is clicked.
  // This prevents the playlist from repeatedly adding data.
  // Try commenting out this function call to see what happens without it!
  function emptySongInfo() {
    $(".songs").empty();
    $(".images").empty();
    $(".artists").empty();
    $(".lengths").empty();
    $(".links").empty();
  }
  

// Use the body of this function to add new songs to your playlist.
function addSongInfo() {
  songNames.push(songName.value);
  artistNames.push(artist.value);
  songLinks.push(songLink.value);
  songLengths.push(lengthOfSong.value);
  imageURLS.push(image.value);
  }
  
  
  document.querySelector(".add-input").addEventListener("click", function () {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
  });
  
  displaySongInfo();