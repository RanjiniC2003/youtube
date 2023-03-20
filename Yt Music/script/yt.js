 var videosContainer=document.getElementById("videos-container");
 var videoid="";
var index=0;
var arrays={};
var indexValue;
arrays["array"]=[];
arrays["array1"]=[];
arrays["array2"]=[];
arrays["LoveSongs"]=[];
arrays["lovesongsLists"]=[];
arrays["rockSongs"]=[];
arrays["rocksongsLists"]=[];
arrays["happySongs"]=[];
arrays["happysongsLists"]=[];
arrays["melodySongs"]=[];
arrays["melodysongsLists"]=[];
arrays["sadSongs"]=[];
arrays["sadsongsLists"]=[];
arrays["relatedList"]=[];
arrays["trending"]=[];
arrays["NewMusicList"]=[];
arrays["NewMusicListArray"]=[]
let button="normal"



let likeVideos=localStorage.getItem("likeVideos")
if (likeVideos==null) {
  arrays["likeVideos"]=[]
}
else{
  arrays["likeVideos"]=JSON.parse(likeVideos);
}

let dislikeVideos=localStorage.getItem("dislikeVideos")
if (dislikeVideos==null) {
  arrays["dislikeVideos"]=[]
}
else{
  arrays["dislikeVideos"]=JSON.parse(dislikeVideos);
}


let currentPlayVideos=localStorage.getItem("playVideoAdd");
if (currentPlayVideos==null) {
  arrays["playVideoAdd"]=[]
}
else{
  arrays["playVideoAdd"]=JSON.parse(currentPlayVideos);
}


let getPlaylist=localStorage.getItem("createPlaylist");

if (getPlaylist==null) {
  playListObject={};
}
else{
  playListObject=JSON.parse(getPlaylist)
}
console.log(playListObject)
// localStorage.setItem("createPlaylist",JSON.stringify(playListObject));


let homePages=document.getElementById("homePages");
let explorePage=document.getElementById("explorePage")
let libraryPage=document.getElementById("libraryPage")
var volume=document.getElementById("volume");
var videoTagPlay=document.getElementById("video-tag-play");
var listPlaySongImg=document.getElementById("listPlaySongImg");
var smallListSongTitle=document.getElementById("smallListSongTitle");
var smallListSongChannel=document.getElementById("smallListSongChannel");
var volumeChange=document.getElementById("volumeRange");
var playPauseIcon=document.getElementById("play-button");
var playTimeSong=document.getElementById("playTimeSong");
var main_Page=document.getElementById("mainPage");
var searchInput=document.getElementById("search-input");
let scrollRecVideo=document.getElementById("scrollRecVideo");
searchInput.addEventListener("input",searchval);
let checkValue1=document.getElementById("checkValue1");
let checkValue2=document.getElementById("checkValue2");
let user=document.getElementById("user");
let pass=document.getElementById("pass");
let name=document.getElementById("name")
let username=document.getElementById("userName");
let password=document.getElementById("password");
let profile=document.getElementById("profile")
let signPopupPage=document.getElementById("signPopup")
let profileName=document.getElementById("profileName")
let signOut=document.getElementById("signOut")
let playlistOpenPopup=document.getElementById("playlistOpenPopup")
let playlistClosePopup=document.getElementById("playListCancel")
let playListCreate=document.getElementById("playListCreate")
playListCreate.addEventListener("click",playListcreate)
playlistOpenPopup.addEventListener("click",playlistopenPopup)
playlistClosePopup.addEventListener("click",playlistclosePopup)
// playlistClosePopup.addEventListener("click",playlistclosePopup)
checkValue1.addEventListener("click",check1)
checkValue2.addEventListener("click",check2)

function check1(argument) {
  
  
  argument.preventDefault();
  if (username.value==localStorage.getItem("lastName") && password.value==localStorage.getItem("password")) {
    alert("Welcome "+localStorage.getItem("name"));
    profile.style.display="block"
    signPopupPage.style.display="none"
    signOut.style.display="block"
    signInPage.style.display="none"
    profileName.textContent=localStorage.getItem("name")
  }
  else{
    alert("Invalid Email or Password")
  }
  username.value="";
  password.value="";
}

function check2(argument) {
  argument.preventDefault();
   localStorage.setItem("name",name.value);
  localStorage.setItem("lastName",user.value);
  localStorage.setItem("password",pass.value);
  user.value="";
  pass.value="";
  name.value="";

}

function signOutpage(argument) {
  signOut.style.display="none"
  signInPage.style.display="block"
  localStorage.removeItem("lastName");
  localStorage.removeItem("password");
  localStorage.removeItem("name");
  profile.style.display="none"
}
function searchval(argument) {
  var valarray=[];
  // for (var value in videoDetails) {
  //   let searchTitle=videoDetails[value].title.toLowerCase();
  //   let searchInputValue=searchInput.value.toLowerCase();
  //   let searchchannel=videoDetails[value].channel_name.toLowerCase();
  //   if (searchTitle.indexOf(searchInputValue)>-1 || searchchannel.indexOf(searchInput.value)>-1) {
  //     console.log(videoDetails[value].title);
  //     console.log(videoDetails[value].channel_name);
  //     valarray.push(value);
  //   }
  // }
  // console.log(valarray)
}



searchInput.addEventListener('keydown',pressKey);
function pressKey(e) {
  e.stopPropagation();

  if (e.key==="Enter") {
    searchSong();
  }
}

let searchSongDiv=document.getElementById("searchSongDiv");
let searchSongDivContainer=document.getElementById("searchSongDiv-Container");

function searchSong(argument) {
  searchSongDivContainer.innerText="";
  searchSongDiv.classList.add("searchSong");
  if (searchSongDiv.classList.contains("searchsongs")) {
     searchSongDiv.classList.remove("searchsongs");
  }

   arrays["valarray"]=[];
  for (var value in videoDetails) {
    let searchTitle=videoDetails[value].title.toLowerCase();
    let searchInputValue=searchInput.value.toLowerCase();
    let searchchannel=videoDetails[value].channel_name.toLowerCase();
    if (searchTitle.indexOf(searchInputValue)>-1 || searchchannel.indexOf(searchInput.value)>-1) {
      arrays["valarray"].push(value);
    }
  }
  if (searchInput.value!="" && arrays["valarray"].length>0) {
    for(var value of arrays["valarray"]){
    let serchVideo=document.createElement("div");
    searchSongDivContainer.appendChild(serchVideo);
    serchVideo.classList.add("serchVideo");

    let searchVideoPlay=document.createElement("div");
    serchVideo.appendChild(searchVideoPlay);
    searchVideoPlay.classList.add("searchVideoPlay");
    searchVideoPlay.setAttribute("onclick","searchClickPlay('"+value+"')")

    let searchVideoImg=document.createElement("img");
    searchVideoPlay.appendChild(searchVideoImg);
    searchVideoImg.classList.add("searchVideoImg");
    searchVideoImg.setAttribute("src","thumbnails/"+videoDetails[value].thumbnail_file);

    let searchVideoPlayIcon=document.createElement("span");
    searchVideoPlay.appendChild(searchVideoPlayIcon);
    searchVideoPlayIcon.classList.add("material-symbols-outlined");
    searchVideoPlayIcon.classList.add("icon-filled");
    searchVideoPlayIcon.setAttribute("id","searchVideoPlayIcon");
    searchVideoPlayIcon.textContent="play_arrow";

    let searchVideoDetails=document.createElement("div");
    serchVideo.appendChild(searchVideoDetails);
    searchVideoDetails.classList.add("searchVideoDetails");

    let searchVideoTitle=document.createElement("p");
    searchVideoDetails.appendChild(searchVideoTitle);
    searchVideoTitle.classList.add("searchVideoTitle");
    searchVideoTitle.textContent=videoDetails[value].title;
    searchVideoTitle.title=videoDetails[value].title;


    let searchVideoChannel=document.createElement("p");
    searchVideoDetails.appendChild(searchVideoChannel);
    searchVideoChannel.classList.add("searchVideoChannel");
    searchVideoChannel.textContent=videoDetails[value].channel_name;
    searchVideoChannel.title=videoDetails[value].channel_name;
  }
  }
    else{
      let notFound=document.createElement("h1");
      searchSongDivContainer.appendChild(notFound);
      notFound.classList.add("notFound");
      notFound.textContent="Result doesn't find" +" please try agin";
    }
    main_Page.classList.add("hideMainVideoImg")
    if (main_Page.classList.contains("showMainVideoImg")) {
      main_Page.classList.remove("showMainVideoImg");
    }
    if (videoPlayPage.classList.contains("video-Play-animation")) {
      videoPlayPage.classList.remove("video-Play-animation");
    }




    

}
function searchClickPlay(params) {
      videoid=params;
      if (!arrays["playVideoAdd"].includes(videoid)) {
        arrays["playVideoAdd"].unshift(videoid)
        localStorage.setItem("playVideoAdd",JSON.stringify(arrays["playVideoAdd"]));
      } 
      if(arrays["likeVideos"].includes(videoid)){
       thumbsup.classList.remove("icon-stroked");
       thumbsup.classList.add("icon-filled");
      } 
      else if(!arrays["likeVideos"].includes(videoid)){
       thumbsup.classList.add("icon-stroked");
       thumbsup.classList.remove("icon-filled");
      }
     if(arrays["dislikeVideos"].includes(videoid)){
        thumbdown.classList.remove("icon-stroked");
        thumbdown.classList.add("icon-filled");
      } 
      else if(!arrays["dislikeVideos"].includes(videoid)){
        thumbdown.classList.add("icon-stroked");
        thumbdown.classList.remove("icon-filled");
      }
     
// hhj


    videoTagPlay.src="videos/"+videoDetails[params].video_file;
    listPlaySongImg.src="thumbnails/"+videoDetails[params].thumbnail_file;
    smallListSongTitle.textContent=videoDetails[params].title;
    smallListSongTitle.title=videoDetails[params].title;
    LikesCount(params)
    disLikeCount(params)
    smallListSongChannel.textContent=videoDetails[params].channel_name;
    smallListSongChannel.title=videoDetails[params].channel_name;
    if (searchSongDiv.classList.contains("searchSong")) {
      searchSongDiv.classList.remove("searchSong");
    }
     if (!videoPlayPage.classList.contains("video-Play-animation")) {
        videoPlayPage.classList.add("video-Play-animation")
    }
    


    playAddAnimation()
}

function videoPlay(){
   

    for( var id in videoDetails){
       arrays["array"].push(id);
    }
    var arr=[];
    var random;
    while (arr.length!=arrays["array"].length) {
      random= Math.floor((Math.random() *arrays["array"].length-1) + 1);  
      if (!arr.includes(random)) {
         arr.push(random);
         arrays["array2"].push(arrays["array"][random]);
      }  
    }
    for (var i = 0; i < 21; i++) {
      

      var videosDetails=document.createElement("div");
      scrollRecVideo.appendChild(videosDetails);
      videosDetails.classList.add("video-items");
       
       
      var video_img=document.createElement("div");
      videosDetails.appendChild(video_img); 
      video_img.classList.add("video_img");
      video_img.setAttribute("onclick","clickPlay('"+arrays["array2"][index]+"')");


      var videoPlaySpan=document.createElement("span");
      video_img.appendChild(videoPlaySpan);
      videoPlaySpan.classList.add("material-symbols-outlined");
      videoPlaySpan.classList.add("icon-filled");
      videoPlaySpan.textContent="play_arrow";
      videoPlaySpan.setAttribute("id","videoPlayButton")



       var videoImg=document.createElement("img");
       video_img.appendChild(videoImg);
       videoImg.classList.add("video-img");
       videoImg.src="thumbnails/"+videoDetails[arrays["array2"][i]].thumbnail_file;

       var songName=document.createElement("p");
       videosDetails.appendChild(songName);
       songName.classList.add("song-Name");
       songName.textContent=videoDetails[arrays["array2"][i]].title;
       songName.setAttribute("title",videoDetails[arrays["array2"][i]].title);

       var channelName=document.createElement("p");
       videosDetails.appendChild(channelName);
       channelName.classList.add("channel-Name");
       channelName.textContent=videoDetails[arrays["array2"][i]].channel_name;
       
       var dot=document.createElement("span");
       channelName.appendChild(dot);
       dot.textContent="•";

       var views=document.createElement("span");
       channelName.appendChild(views);
       views.classList.add("video-views");
       let viewsChange;
       if (videoDetails[arrays["array2"][i]].views>=1000 && videoDetails[arrays["array2"][i]].views<=100000) {
          viewsChange=Math.floor((videoDetails[arrays["array2"][i]].views)/1000);
          views.textContent=viewsChange+"K"+" Views";
       }
       else if (videoDetails[arrays["array2"][i]].views>=100000 && videoDetails[arrays["array2"][i]].views<=1000000) {
          viewsChange=Math.floor((videoDetails[arrays["array2"][i]].views)/100000);
          views.textContent=viewsChange+"L"+" Views";
       }
      else if (videoDetails[arrays["array2"][i]].views>=1000000) {
          viewsChange=Math.floor((videoDetails[arrays["array2"][i]].views)/1000000);
          views.textContent=viewsChange+"M"+" Views";
       }
       else{
          viewsChange=Math.floor(videoDetails[arrays["array2"][i]].views);
          views.textContent=viewsChange+" Views";
       }
       index++;

    }
}




videoPlay();





let quickPicksVideos=document.getElementById("quickPicksVideos");
let trendingVideos=document.getElementById("trendingVideos");

function gridVideos(index,id){
  let quickPicksVideosDiv=document.createElement("div");
    id.appendChild(quickPicksVideosDiv);
    quickPicksVideosDiv.classList.add("quickPicksVideosDiv");


    let quickPicksVideosImgIcon=document.createElement("div");
    quickPicksVideosDiv.appendChild(quickPicksVideosImgIcon);
    quickPicksVideosImgIcon.classList.add("quickPicksVideosImgIcon");
    quickPicksVideosImgIcon.setAttribute("onclick","clickPlay('"+arrays["array2"][index]+"')");

    let quickPicksVideosIcon=document.createElement("span");
    quickPicksVideosImgIcon.appendChild(quickPicksVideosIcon);
    quickPicksVideosIcon.classList.add("material-symbols-outlined");
    quickPicksVideosIcon.textContent="play_arrow";
    quickPicksVideosIcon.classList.add("icon-filled");
    quickPicksVideosIcon.setAttribute("id","quickVideosPlay");
    
    let quickPicksVideosImg=document.createElement("img");
    quickPicksVideosImgIcon.appendChild(quickPicksVideosImg);
    quickPicksVideosImg.classList.add("quickPicksVideosImg");
    quickPicksVideosImg.src="thumbnails/"+videoDetails[arrays["array2"][index]].thumbnail_file;


    

    let quickPicksVideosDetails=document.createElement("div");
    quickPicksVideosDiv.appendChild(quickPicksVideosDetails);
    quickPicksVideosDetails.classList.add("quickPicksVideosDetails");


    let quickPicksVideosHead=document.createElement("p");
    quickPicksVideosDetails.appendChild(quickPicksVideosHead);
    quickPicksVideosHead.classList.add("quickPicksVideosHead");
    quickPicksVideosHead.textContent=videoDetails[arrays["array2"][index]].title;


    let quickPicksVideosChannel=document.createElement("p");
    quickPicksVideosDetails.appendChild(quickPicksVideosChannel);
    quickPicksVideosChannel.classList.add("quickPicksVideosChannel");
    quickPicksVideosChannel.textContent=videoDetails[arrays["array2"][index]].channel_name;
}

function quickPicks(argument) {
  for (var i =21; i <=40; i++) {
    gridVideos(i,quickPicksVideos)
  }
}
quickPicks();

function trending(){
  arrays["trending"]=[];
  let arrPopular = [];
  let arrayPopular = [];
  let arraypush = [];
  let arrViews=[]
  var yearDetails;
  var findYear
  for (var value in videoDetails) {
    arrPopular.push({
      "id": value,
      "views": videoDetails[value].views
    });
  }
  let arrPopularSort = arrPopular;
  arrPopularSort.sort((a, b) => {
    arrViews.push(b.views - a.views)
    return b.views - a.views;
  })
  arrPopularSort.forEach((e) => {

    arrayPopular.push(e.id);
  });
  var j=0;
   // for(var i=0;i<=)
    for (var value in videoDetails) {
      yearDetails = new Date(videoDetails[value].publish_date);
      findYear = yearDetails.getFullYear();
        if (findYear>2020 &&arrViews[j]>1900000) {
          arrays["trending"].push(value);
        }
      j++;
    }   
    for(var i=0; i<arrays["trending"].length;i++){
      gridVideos(i,trendingVideos);
    }
  }
trending();

function NewMusic(argument) {
  arrays["NewMusic"] = []
  let arrNewMusic = [];
  for (var value in videoDetails) {
    var yearDetails = new Date(videoDetails[value].publish_date);
    var findYear = yearDetails.getFullYear();
    if (findYear >= 2021) {
      arrNewMusic.push(value);
    }
  }
  while (arrays["NewMusic"].length != arrNewMusic.length) {
    ranNewMusic = Math.floor((Math.random() * arrNewMusic.length));
    if (!arrays["NewMusic"].includes(arrNewMusic[ranNewMusic])) {
      arrays["NewMusic"].push(arrNewMusic[ranNewMusic]);
    }
  }
  let newMusicVideosVideos=document.getElementById("newMusicVideosVideos")
  
  for (var i = 0; i <20; i++) {
    let lovesongsMainDiv=document.createElement("div");
    newMusicVideosVideos.appendChild(lovesongsMainDiv);
    lovesongsMainDiv.classList.add("loveVideoPlay");



    let lovesongsImgIcon=document.createElement("div");
    lovesongsMainDiv.appendChild(lovesongsImgIcon);
    lovesongsImgIcon.classList.add("lovesongsImgIcon");
    lovesongsImgIcon.setAttribute("onclick","clickPlay('"+arrays["NewMusic"][i]+"')");

    let lovesongsIcon=document.createElement("span");
    lovesongsImgIcon.appendChild(lovesongsIcon);
    lovesongsIcon.classList.add("material-symbols-outlined");
    lovesongsIcon.textContent="play_arrow"
    lovesongsIcon.classList.add("icon-filled");
    lovesongsIcon.setAttribute("id","lovesongsIcon");


    let lovesongsImg=document.createElement("img");
    lovesongsImgIcon.appendChild(lovesongsImg);
    lovesongsImg.setAttribute("src","thumbnails/"+videoDetails[arrays["NewMusic"][i]].thumbnail_file);
    lovesongsImg.classList.add("lovesongsImg");

    let lovesongsName=document.createElement("p");
    lovesongsMainDiv.appendChild(lovesongsName);
    lovesongsName.classList.add("lovesongsName");
    lovesongsName.textContent=videoDetails[arrays["NewMusic"][i]].title;
    lovesongsName.title=videoDetails[arrays["NewMusic"][i]].title;


    let loveSongsChannelName=document.createElement("p");
    lovesongsMainDiv.appendChild(loveSongsChannelName);
    loveSongsChannelName.classList.add("loveSongsChannelName");
    loveSongsChannelName.textContent=videoDetails[arrays["NewMusic"][i]].channel_name;


    let loveSongsChannelNamedot=document.createElement("span");
    loveSongsChannelName.appendChild(loveSongsChannelNamedot);
    loveSongsChannelNamedot.textContent="•";

    let loveSongsViews=document.createElement("span");
    loveSongsChannelName.appendChild(loveSongsViews);
    loveSongsViews.classList.add("loveSongsViews");
    

    let viewsChange;
    if (videoDetails[arrays["NewMusic"][i]].views>=1000 && videoDetails[arrays["NewMusic"][i]].views<=100000) {
      viewsChange=Math.floor((videoDetails[arrays["NewMusic"][i]].views)/1000);
      loveSongsViews.textContent=viewsChange+"K"+" Views";
    }
    else if (videoDetails[arrays["NewMusic"][i]].views>=100000 && videoDetails[arrays["NewMusic"][i]].views<=1000000) {
      viewsChange=Math.floor((videoDetails[arrays["NewMusic"][i]].views)/100000);
      loveSongsViews.textContent=viewsChange+"L"+" Views";
    }
    else if (videoDetails[arrays["NewMusic"][i]].views>=1000000) {
      viewsChange=Math.floor((videoDetails[arrays["NewMusic"][i]].views)/1000000);
      loveSongsViews.textContent=viewsChange+"M"+" Views";
    }
    else{
      viewsChange=Math.floor(videoDetails[arrays["NewMusic"][i]].views);
      loveSongsViews.textContent=viewsChange+" Views";
    }

  }
  
}
NewMusic()


var videoPlayPage=document.getElementById("videoPlayPage");

var toggle_Video_Page=document.getElementById("toggle_arrow");
var setVideoMiddle=document.getElementById("setVideo-middle");


let footer=document.getElementById("footer");

window.addEventListener('keydown',spaceClick);
function spaceClick(e) {
  if (page=="videoplayPages") {
    if (e.code=="Space") {
      playPause();
      e.preventDefault();
    }
    else if(e.ctrlKey && e.code=="ArrowRight"){
      playforward();
    }
    else if(e.ctrlKey && e.code=="ArrowLeft"){
      playbackward();
    }
    else if(e.code=="ArrowUp"){
      VolumeKey(5);
      e.preventDefault();
    }
    else if(e.code=="ArrowDown"){
      VolumeKey(-5);
      e.preventDefault();
    }
    else if(e.key=="m"){
      volumes();
    }
    else if(e.key=="ArrowRight"){
      ChangeVideo(3);
    }
    else if(e.key=="ArrowLeft"){
      ChangeVideo(-3);
    }

  }
}

// window.addEventListener("keydown", (e) => {e.preventDefault();}, true)

function playAddAnimation(argument) {

  videoTagPlay.play();
  main_Page.classList.add("hide_main_videoImg")
  main_Page.classList.remove("show_main_videoImg");
  toggle_Video_Page.textContent="arrow_drop_down";
  setVideoMiddle.classList.add("video_show");
  if (setVideoMiddle.classList.contains("miniPlayer")) {
      setVideoMiddle.classList.remove("miniPlayer");
    } else {
      setVideoMiddle.classList.remove("video_close");
  }
  main_Page.classList.add("hide_main_videoImg")
  main_Page.classList.remove("show_main_videoImg");
  footer.style.visibility="visible";
  footer.style.bottom="0px";

  if (playPauseIcon.textContent=="play_arrow") {
    playPauseIcon.textContent="pause";
    videoTagPlay.play();
  }
  

  listCreate();
  playBar();
}




function clickPlay(params){
   videoid=params;
    if (!arrays["playVideoAdd"].includes(videoid)) {
        arrays["playVideoAdd"].unshift(videoid)
        localStorage.setItem("playVideoAdd",JSON.stringify(arrays["playVideoAdd"]));
    }   
    if(arrays["likeVideos"].includes(videoid)){
    thumbsup.classList.remove("icon-stroked");
    thumbsup.classList.add("icon-filled");
  } 
  else if(!arrays["likeVideos"].includes(videoid)){
    thumbsup.classList.add("icon-stroked");
    thumbsup.classList.remove("icon-filled");
  }
  if(arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.remove("icon-stroked");
    thumbdown.classList.add("icon-filled");
  } 
  else if(!arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.add("icon-stroked");
    thumbdown.classList.remove("icon-filled");
  }

  // gh
    // window.open("videoPlay.html","_self",);videoDetails[array2[i]].thumbnail_file
    videoTagPlay.src="videos/"+videoDetails[params].video_file;
    listPlaySongImg.src="thumbnails/"+videoDetails[params].thumbnail_file;
    smallListSongTitle.textContent=videoDetails[params].title;
    smallListSongTitle.title=videoDetails[params].title;
    LikesCount(videoid)
    disLikeCount(videoid)
    smallListSongChannel.textContent=videoDetails[params].channel_name;
    smallListSongChannel.title=videoDetails[params].channel_name;
    videoPlayPage.classList.add("video-Play-animation");
    
    setVideoMiddle.classList.add("video_show");
    if (setVideoMiddle.classList.contains("miniPlayer")) {
      setVideoMiddle.classList.remove("miniPlayer");
    } 
    else {
      setVideoMiddle.classList.remove("video_close");
    }

   
    if (main_Page.classList.contains("show_main_videoImg")) {
      main_Page.classList.remove("show_main_videoImg") ;
      main_Page.classList.add("hide_main_videoImg");
      toggle_Video_Page.textContent="arrow_drop_up";
    }
    if (toggle_Video_Page.textContent=="arrow_drop_up"){
      toggle_Video_Page.textContent="arrow_drop_down";
    }
    if (playPauseIcon.textContent=="play_arrow") {
      playPauseIcon.textContent="pause";
      playPauseIcon.title="pause";
    }

  if (page=="home") {
    page="videoplayPages";
    
  } 
  playAddAnimation();
}


var vid=document.getElementById("video-tag-play");
var playVideoBar=document.getElementById("playVideoBar");




function playBar(argument) {
  
  playVideoBar.addEventListener("input",videoPlayTime);
  vid.addEventListener("timeupdate",PlayTime);
  volumeChange.addEventListener("input",VolumeChanges);
  playVideoBar.addEventListener("mousemove",playVideoBarHover);
  playVideoBar.addEventListener("mouseout",playVideoBarHoverHide);


}
var progressBarHover=document.getElementById("progressBarHover");

function playVideoBarHoverHide(argument) {
   progressBarHover.style.visibility="hidden";
}

function playVideoBarHover(e){
  progressBarHover.style.visibility="visible";
  playVideoBar.title="Seek Slider";
  progressBarHover.style.left=e.clientX+"px";
  var length= (e.clientX - e.target.offsetLeft ) / e.target.clientWidth *vid.duration ;
  var videomin1=Math.floor((length/60));
  var videosec1=Math.round(length%60);
  if (videosec1<10) {
    progressBarHover.textContent=videomin1+":"+"0"+videosec1;
  }
  else{
    progressBarHover.textContent=videomin1+":"+videosec1;
  }
  
}

function VolumeKey(value) {
  volumeChange.value=Number(volumeChange.value)+value;
  VolumeChanges();
}
 
function ChangeVideo(value) {
  playVideoBar.value=Number(playVideoBar.value)+value;
  videoPlayTime();
}

function videoPlayTime(){
  var time=vid.duration*(playVideoBar.value/100);
  vid.currentTime=time;
  
  var values = (playVideoBar.value-playVideoBar.min)/(playVideoBar.max-playVideoBar.min)*100;
  playVideoBar.style.background = 'linear-gradient(to right, rgb(255 0 67) 0%, rgb(250 6 30)' + values + '%, rgb(255 255 255 / 55%)' + values + '%, rgb(255 255 255 / 55%) 100%)';

  
}
var vt;
function PlayTime(argument) {

  if(vid.currentTime==vid.duration){
    vid.currentTime=0;
    if ((!arrays["playVideoAdd"].includes(videoid))) {
      arrays["playVideoAdd"].unshift(videoid);
      localStorage.setItem("playVideoAdd",JSON.stringify(arrays["playVideoAdd"]));
    }
    if (playMode=="repeat") {
      vid.currentTime=0;
      vid.play();
    }    
    // if (playMode=="normal") {
      else{
        playforward();
      }
      
    // }
  }

  vt=vid.currentTime*(100/vid.duration);
  if (Object.is(vt,NaN)) {
    vt=0;
  }
  // if (vid.currentTime==vid.duration) {
  //   
  // }
  
  var videomin=Math.floor((vid.duration/60));
  var videosec=Math.round(vid.duration%60);
  var videomin1=Math.floor((vid.currentTime/60));
  var videosec1=Math.round(vid.currentTime%60);
  if (Object.is(videomin,NaN)) {
     videomin=0;
  }
  if (Object.is(videosec,NaN)) {
    videosec=0;
  }
  if (videosec1<10 && videosec<10) {
    playTimeSong.innerText=videomin1+":"+"0"+videosec1+" "+"/"+" "+videomin+":"+"0"+videosec;
  }
  else if(videosec<10){
    playTimeSong.innerText=videomin1+":"+videosec1+" "+"/"+" "+videomin+":"+"0"+videosec;
  }
  else if (videosec1<10) {
    playTimeSong.innerText=videomin1+":"+"0"+videosec1+" "+"/"+" "+videomin+":"+videosec;
  }
  else{
    playTimeSong.innerText=videomin1+":"+videosec1+" "+"/"+" "+videomin+":"+videosec;
  }
  
  playVideoBar.value=vt;
  var values = (playVideoBar.value-playVideoBar.min)/(playVideoBar.max-playVideoBar.min)*100
  playVideoBar.style.background = 'linear-gradient(to right, rgb(255 0 67) 0%, rgb(250 6 30)' + values + '%, rgb(255 255 255 / 55%)' + values + '%, rgb(255 255 255 / 55%) 100%)'
}

var vc;
vid.volume=0.5;

function VolumeKey(value) {
  volumeChange.value=Number(volumeChange.value)+value;
  VolumeChanges();
}


function VolumeChanges(argument) {
  
  vc=(volumeChange.value-volumeChange.min)/(volumeChange.max-volumeChange.min);
  var vcPercentage=vc*100;
  vid.volume=vc;
  if (vid.volume==0) {
    volume.textContent="volume_off";
  }
  if (vid.volume>0) {
    volume.textContent="volume_up";
  }
  volumeChange.style.background = 'linear-gradient(to right, rgb(255 255 255) 0%, rgb(255 255 255)' + vcPercentage + '%, rgb(255 255 255 / 55%)' + vcPercentage + '%, rgb(255 255 255 / 55%) 100%)'
}


//Next Video Page

function toggleVideoPage(){

  if (setVideoMiddle.classList.contains("miniPlayer") && document.fullscreenElement) {
     toggleFullScreen()
  }
  let miniPlay=document.getElementById("miniPlay");
  
  if (setVideoMiddle.classList.contains("miniPlayer")) {
    miniPlay.textContent="magnification_large";
    miniPlay.title="Open player page"
  }
  else if (!setVideoMiddle.classList.contains("miniPlayer")) {
    miniPlay.textContent="magnification_small";
    miniPlay.title="Open mini player"
  }
    
  if (toggle_Video_Page.textContent=="arrow_drop_down") {
    toggle_Video_Page.textContent="arrow_drop_up";
    
    if (!setVideoMiddle.classList.contains("miniPlayer")) {
      setVideoMiddle.classList.add("video_close");
    }

    setVideoMiddle.classList.remove("video_show");
    main_Page.classList.add("show_main_videoImg");
    main_Page.classList.remove("hide_main_videoImg");

  }
  else{
    toggle_Video_Page.textContent="arrow_drop_down";
    setVideoMiddle.classList.add("video_show");

    if (setVideoMiddle.classList.contains("miniPlayer")) {
      setVideoMiddle.classList.remove("miniPlayer");
    } else {
      setVideoMiddle.classList.remove("video_close");
    }

    main_Page.classList.add("hide_main_videoImg")
    main_Page.classList.remove("show_main_videoImg");
  }

  if (main_Page.classList.contains("hideMainVideoImg")) {
    main_Page.classList.remove("hideMainVideoImg")
  }
   
}


//Play Pause


var soungCount=0;

function playPause(){
  if (playPauseIcon.textContent=="pause") {

    playPauseIcon.textContent="play_arrow";
    videoTagPlay.pause();
    playPauseIcon.title="play";
  }
  else{
    playPauseIcon.textContent="pause";
    videoTagPlay.play();
    playPauseIcon.title="pause";
  }
    

}



function VideoClickPlay(argument) {
  playPause();
}


//playBackWard


var smallListVideoImg=document.getElementsByClassName("smallListVideoImg");
var playVideo=document.getElementsByClassName("playVideo");
var playButtonVisible=document.getElementsByClassName("playButtonVisible");
var imgBgVisible=document.getElementsByClassName("imgBgVisible");
var videolistContainer=document.getElementsByClassName("videoListContainer");


function playbackward(params){

  
  let listName=arrays["currentPlayList"];
  let playlist=arrays[listName];

  indexValue=playlist.indexOf(videoid)
  if (indexValue==0) {
    indexValue=playlist.length-1;

  }
  else{
    indexValue--;
  }
  videoid=playlist[indexValue];
  // let val=videoDetails[indexValue];
  console.log(videoid)
  if (!arrays["playVideoAdd"].includes(videoid)) {
    arrays["playVideoAdd"].unshift(videoid)
    localStorage.setItem("playVideoAdd",JSON.stringify(arrays["playVideoAdd"]));
  }   
  if(arrays["likeVideos"].includes(videoid)){
    thumbsup.classList.remove("icon-stroked");
    thumbsup.classList.add("icon-filled");
  } 
  else if(!arrays["likeVideos"].includes(videoid)){
    thumbsup.classList.add("icon-stroked");
    thumbsup.classList.remove("icon-filled");
  }
  if(arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.remove("icon-stroked");
    thumbdown.classList.add("icon-filled");
  } 
  else if(!arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.add("icon-stroked");
    thumbdown.classList.remove("icon-filled");
  }

  // bnm
  videoTagPlay.src="videos/"+videoDetails[videoid].video_file;
  listPlaySongImg.src="thumbnails/"+videoDetails[videoid].thumbnail_file;
  smallListSongTitle.textContent=videoDetails[videoid].title;
  smallListSongChannel.textContent=videoDetails[videoid].channel_name;
  
  if (playPauseIcon.textContent=="play_arrow") {
    playPauseIcon.textContent="pause";
    videoTagPlay.play();
  }
  if (playVideo.length>0) {
    
    playVideo[0].classList.remove("playVideo");
  }
  if (playButtonVisible.length>0) {
     playButtonVisible[0].classList.remove("playButtonVisible");
  }
  if(imgBgVisible.length>0){
    imgBgVisible[0].classList.remove("imgBgVisible");
  }
  smallListPlay[indexValue].classList.add("playButtonVisible");
  smallListVideoImg[indexValue].classList.add("imgBgVisible");
  videolistContainer[indexValue].classList.add("playVideo");
  
}


function playforward(argument) {

  let listName=arrays["currentPlayList"];
  let playlist=arrays[listName];
  indexValue=playlist.indexOf(videoid);
  if (indexValue==playlist.length-1) {
    indexValue=0;
  }
  else{
     indexValue++;
  }
  videoid=playlist[indexValue];
  if (!arrays["playVideoAdd"].includes(videoid)) {
    arrays["playVideoAdd"].unshift(videoid)
    localStorage.setItem("playVideoAdd",JSON.stringify(arrays["playVideoAdd"]));
  }   
  if(arrays["likeVideos"].includes(videoid)){
    thumbsup.classList.remove("icon-stroked");
    thumbsup.classList.add("icon-filled");
  } 
  else if(!arrays["likeVideos"].includes(videoid)){
    thumbsup.classList.add("icon-stroked");
    thumbsup.classList.remove("icon-filled");
  }
 if(arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.remove("icon-stroked");
    thumbdown.classList.add("icon-filled");
  } 
  else if(!arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.add("icon-stroked");
    thumbdown.classList.remove("icon-filled");
  }
 // gvhb
  videoTagPlay.src="videos/"+videoDetails[videoid].video_file;
  listPlaySongImg.src="thumbnails/"+videoDetails[videoid].thumbnail_file;
  smallListSongTitle.textContent=videoDetails[videoid].title;
  smallListSongChannel.textContent=videoDetails[videoid].channel_name;
  LikesCount(videoid)
  disLikeCount(videoid)
  if (playPauseIcon.textContent=="play_arrow") {
    playPauseIcon.textContent="pause";
    videoTagPlay.play();
  }

  if (playVideo.length>0) {
    
    playVideo[0].classList.remove("playVideo");
  }
  if (playButtonVisible.length>0) {
     playButtonVisible[0].classList.remove("playButtonVisible");
  }
  if(imgBgVisible.length>0){
    imgBgVisible[0].classList.remove("imgBgVisible");
  }
  smallListPlay[indexValue].classList.add("playButtonVisible");
  smallListVideoImg[indexValue].classList.add("imgBgVisible");
  videolistContainer[indexValue].classList.add("playVideo");
  
}



function volumes(){
  if (volume.textContent=="volume_up") {
    volume.textContent="volume_off";
    vid.volume=0;
  }
  else{
    volume.textContent="volume_up";
    vid.volume=(volumeChange.value-volumeChange.min)/(volumeChange.max-volumeChange.min);
  }
  
}


var thumbsup=document.getElementById("thumbUp");
var thumbdown=document.getElementById("thumbDown");



function thumbup(argument) {

  if (!arrays["likeVideos"].includes(videoid) &&thumbsup.classList.contains("icon-stroked")) {
    arrays["likeVideos"].unshift(videoid);
    if (arrays["dislikeVideos"].includes(videoid)) {
      arrays["dislikeVideos"].splice(arrays["likeVideos"].indexOf(videoid),1); 
    }
    
  }
  else if(arrays["likeVideos"].includes(videoid) && thumbsup.classList.contains("icon-filled")){
    console.log(arrays["likeVideos"].indexOf(videoid))
    arrays["likeVideos"].splice(arrays["likeVideos"].indexOf(videoid),1);
  }

  
// console.log(arrays["likeVideos"]);
 
   thumbsup.classList.toggle("icon-stroked");
   thumbsup.classList.toggle("icon-filled");
   

   
   if (thumbdown.classList.contains("icon-filled")) {
      thumbdown.classList.add("icon-stroked");
      thumbdown.classList.remove("icon-filled");
      
   }

localStorage.setItem("likeVideos",JSON.stringify(arrays["likeVideos"]));
localStorage.setItem("dislikeVideos",JSON.stringify(arrays["dislikeVideos"]));

}


function thumbDown(argument) {
  if (!arrays["dislikeVideos"].includes(videoid) &&thumbdown.classList.contains("icon-stroked")) {
    arrays["dislikeVideos"].unshift(videoid);
    if (arrays["likeVideos"].includes(videoid)) {
     
      arrays["likeVideos"].splice(arrays["likeVideos"].indexOf(videoid),1); 
    }
    // console.log(typeof(JSON.stringify(arrays["likeVideos"])))
  }
  else if(arrays["dislikeVideos"].includes(videoid) && thumbdown.classList.contains("icon-filled")){
    arrays["dislikeVideos"].splice(arrays["dislikeVideos"].indexOf(videoid),1);
  }
    

   thumbdown.classList.toggle("icon-stroked");
   thumbdown.classList.toggle("icon-filled");

   if (thumbsup.classList.contains("icon-filled")) {
      thumbsup.classList.add("icon-stroked");
      thumbsup.classList.remove("icon-filled");
      
   }
   // else if (thumbsup.classList.contains("icon-stroked")) {
   //  arrays["dislikeVideos"].splice(arrays["dislikeVideos"].indexOf(videoid),1);
   // }
      localStorage.setItem("dislikeVideos",JSON.stringify(arrays["dislikeVideos"]));
      localStorage.setItem("likeVideos",JSON.stringify(arrays["likeVideos"]));
}

var videoFullScreen=document.getElementById("videoFullScreen");

function songs(normalArray,shuffleArray,type,mainId) {
  var random;
  arrays[shuffleArray]=[];
  for (var value in videoDetails){
    // console.log(videoDetails[value].song_type)
    if (videoDetails[value].song_type==type) {
      // console.log(videoDetails[value].song_type)
      arrays[normalArray].push(value)
      // console.log(arrays[normalArray]);
    }
  }
  while (arrays[normalArray].length != arrays[shuffleArray].length){
    random = Math.floor((Math.random() * arrays[normalArray].length - 1) + 1);
    if (!arrays[shuffleArray].includes(arrays[normalArray][random])) {
      arrays[shuffleArray].push(arrays[normalArray][random]);
    }
  }
  // console.log(arrays[shuffleArray])
  for (var i = 0; i < arrays[shuffleArray].length; i++) {
    let lovesongsMainDiv=document.createElement("div");
    mainId.appendChild(lovesongsMainDiv);
    lovesongsMainDiv.classList.add("loveVideoPlay");



    let lovesongsImgIcon=document.createElement("div");
    lovesongsMainDiv.appendChild(lovesongsImgIcon);
    lovesongsImgIcon.classList.add("lovesongsImgIcon");
    lovesongsImgIcon.setAttribute("onclick","clickPlay('"+arrays[shuffleArray][i]+"')");

    let lovesongsIcon=document.createElement("span");
    lovesongsImgIcon.appendChild(lovesongsIcon);
    lovesongsIcon.classList.add("material-symbols-outlined");
    lovesongsIcon.textContent="play_arrow"
    lovesongsIcon.classList.add("icon-filled");
    lovesongsIcon.setAttribute("id","lovesongsIcon");


    let lovesongsImg=document.createElement("img");
    lovesongsImgIcon.appendChild(lovesongsImg);
    lovesongsImg.setAttribute("src","thumbnails/"+videoDetails[arrays[shuffleArray][i]].thumbnail_file);
    lovesongsImg.classList.add("lovesongsImg");

    let lovesongsName=document.createElement("p");
    lovesongsMainDiv.appendChild(lovesongsName);
    lovesongsName.classList.add("lovesongsName");
    lovesongsName.textContent=videoDetails[arrays[shuffleArray][i]].title;
    lovesongsName.title=videoDetails[arrays[shuffleArray][i]].title;


    let loveSongsChannelName=document.createElement("p");
    lovesongsMainDiv.appendChild(loveSongsChannelName);
    loveSongsChannelName.classList.add("loveSongsChannelName");
    loveSongsChannelName.textContent=videoDetails[arrays[shuffleArray][i]].channel_name;


    let loveSongsChannelNamedot=document.createElement("span");
    loveSongsChannelName.appendChild(loveSongsChannelNamedot);
    loveSongsChannelNamedot.textContent="•";

    let loveSongsViews=document.createElement("span");
    loveSongsChannelName.appendChild(loveSongsViews);
    loveSongsViews.classList.add("loveSongsViews");
    

    let viewsChange;
       if (videoDetails[arrays[shuffleArray][i]].views>=1000 && videoDetails[arrays[shuffleArray][i]].views<=100000) {
          viewsChange=Math.floor((videoDetails[arrays[shuffleArray][i]].views)/1000);
          loveSongsViews.textContent=viewsChange+"K"+" Views";
       }
       else if (videoDetails[arrays[shuffleArray][i]].views>=100000 && videoDetails[arrays[shuffleArray][i]].views<=1000000) {
          viewsChange=Math.floor((videoDetails[arrays[shuffleArray][i]].views)/100000);
          loveSongsViews.textContent=viewsChange+"L"+" Views";
       }
      else if (videoDetails[arrays[shuffleArray][i]].views>=1000000) {
          viewsChange=Math.floor((videoDetails[arrays[shuffleArray][i]].views)/1000000);
          loveSongsViews.textContent=viewsChange+"M"+" Views";
       }
       else{
          viewsChange=Math.floor(videoDetails[arrays[shuffleArray][i]].views);
          loveSongsViews.textContent=viewsChange+" Views";
       }

  }
}



function LoveSongs(argument) {

  songs("lovesongsLists","LoveSongs","love",lovesongsList)
}

LoveSongs();

function rockSongs(argument) {
   songs("rockSongs","rocksongsLists","rock",rocksongsList)
}
rockSongs();


function happy(argument) {
  songs("happySongs","happysongsLists","happy",happysongsList)
}

happy()


function melody(argument) {
  songs("melodySongs","melodysongsLists","melody",melodysongsList)
}

melody()


function sad(argument) {
  songs("sadSongs","sadsongsLists","sad",sadsongsList)
}
sad()



let pageHeadColor=document.getElementsByClassName("pageHeadColor");
let headerbutton=document.getElementsByClassName("header-button")
function pageHeadColorChange(argument) {

  if (pageHeadColor.length>0) {
    // listHeads[argument].style.pointerEvents="all";
    pageHeadColor[0].classList.remove("pageHeadColor");
    
  }
  headerbutton[argument].classList.add("pageHeadColor");
  // listHeads[argument].style.pointerEvents="none";
}


function createAccount(argument) {
  signInPage.style.display="none"
  signUpPage.style.display="block"
}


function LikesCount(index) {
  let likeChange;
  if (videoDetails[index].likes>=1000 && videoDetails[index].likes<=100000) {
    likesChange=Math.floor((videoDetails[index].likes)/1000);
   thumbsup.title=likesChange+"K"+" likes";
  }
  else if (videoDetails[index].likes>=100000 && videoDetails[index].likes<=1000000) {
    likesChange=Math.floor((videoDetails[index].likes)/100000);
   thumbsup.title=likesChange+"L"+" likes";
  }
  else if (videoDetails[index].likes>=1000000) {
    likesChange=Math.floor((videoDetails[index].likes)/1000000);
   thumbsup.title=likesChange+"M"+" likes";
  }
  else{
    likesChange=Math.floor(videoDetails[index].likes);
   thumbsup.title=likesChange+" likes";
  }

}

function disLikeCount(index) {
  let dislikeChange;
  if (videoDetails[index].dislikes>=1000 && videoDetails[index].dislikes<=100000) {
    dislikeChange=Math.floor((videoDetails[index].dislikes)/1000);
   thumbdown.title=dislikeChange+"K"+" dislikes";
  }
  else if (videoDetails[index].dislikes>=100000 && videoDetails[index].dislikes<=1000000) {
    dislikeChange=Math.floor((videoDetails[index].dislikes)/100000);
   thumbdown.title=dislikeChange+"L"+" dislikes";
  }
  else if (videoDetails[index].dislikes>=1000000) {
    dislikeChange=Math.floor((videoDetails[index].dislikes)/1000000);
   thumbdown.title=dislikeChange+"M"+" dislikes";
  }
  else{
    dislikeChange=Math.floor(videoDetails[index].dislikes);
   thumbdown.title=dislikeChange+" dislikes";
  }
}

// var playListObject={};

let playListPopup=document.getElementById("playListPopup")
let playlistText=document.getElementById("playlistText");
let playlistDescription=document.getElementById("playlistDescription")
let newPlayList=document.getElementById("newPlayList")
function playlistopenPopup(argument) {
  playListPopup.style.display="block"

}

function playlistclosePopup(argument) {
  playlistText.value="";
  playlistDescription.value=""
  playListPopup.style.display="none"
}
function playListcreate(argument) {

  argument.preventDefault()
  

  var a=Object.keys(playListObject);
  let newKeyWord=playlistText.value;
  if ((Object.keys(playListObject).indexOf(newKeyWord))==-1 && playlistText.value!="") {
    playListObject[playlistText.value]=[]
    playListPopup.style.display="none";
    
    localStorage.setItem("createPlaylist",JSON.stringify(playListObject));
    playlistText.value="";
    playlistDescription.value=""

    createPlayListElements();
    
  }
  else{

    alert("A playlist already exists in this name");
  }
    
  // console.log(playListObject.length)
}

let playlistDivClass=document.getElementsByClassName("playlistDiv")

function deletelist(argument) {
  let keyword=argument;
  var indexval=Object.keys(playListObject).indexOf(argument);
  playlistDivClass[indexval].style.display="none"
  delete playListObject[keyword];
  localStorage.setItem("createPlaylist",JSON.stringify(playListObject));

}

function createPlayListElements() {
  let j=0;

  let lists = document.getElementsByClassName("playlistDiv");

  for (let i = lists.length - 1; i >= 0; i--) {
    lists[i].parentElement.removeChild(lists[i])
  }

  for(var value in playListObject){
      let playlistDiv=document.createElement("div");
      newPlayList.appendChild(playlistDiv);
      playlistDiv.classList.add("playlistDiv");
      playlistDiv.setAttribute("id","playlistDiv"+value)


      // <span class="material-symbols-outlined">playlist_play</span>

      let playListBox=document.createElement("div");
      playlistDiv.appendChild(playListBox);
      playListBox.classList.add("playListBox");
      playListBox.title=value;

      let playlistPlayIcon=document.createElement("span");
      playlistDiv.appendChild(playlistPlayIcon);
      playlistPlayIcon.classList.add("material-symbols-outlined");
      playlistPlayIcon.classList.add("icon-filled");
      playlistPlayIcon.textContent="playlist_play";
      playlistPlayIcon.setAttribute("id","playlistPlayIcon");

      let playlistfooter=document.createElement("div");
      playlistDiv.appendChild(playlistfooter);
      playlistfooter.classList.add("playlistfooter");

      let playListName=document.createElement("p");
      playlistfooter.appendChild(playListName);
      playListName.classList.add("playListName");
      playListName.textContent=value;

      // <span class="material-symbols-outlined">delete</span>

      let playlistDeleteIcon=document.createElement("span");
      playlistfooter.appendChild(playlistDeleteIcon);
      playlistDeleteIcon.classList.add("material-symbols-outlined");
      playlistDeleteIcon.classList.add("icon-filled");
      playlistDeleteIcon.setAttribute("id","playlistDeleteIcon");
      playlistDeleteIcon.textContent="delete";
      playlistDeleteIcon.setAttribute("onclick","deletelist('"+value+"')")

      j++

    }

    console.log(playListObject)
}

createPlayListElements();
let playlistdetailpopup=document.getElementById("playlistdetailpopup")
let playlistdetailpopuphead1=document.getElementById("playlistdetailpopuphead1")
let listsPush=document.getElementById("listsPush")
let newPlayListButton=document.getElementById("newPlayListButton")
function playListIcon(argument) {
  listsPush.textContent="";
  playlistdetailpopup.style.display="block"
  listsPush.style.textAlign="center";
  console.log(Object.keys(playListObject).length);
  if (Object.keys(playListObject).length==0) {
    let listsPushheadicon=document.createElement("span");
    listsPush.appendChild(listsPushheadicon);
    listsPushheadicon.classList.add("material-symbols-outlined");
    listsPushheadicon.classList.add("icon-filled")
    listsPushheadicon.textContent="playlist_play";
    listsPushheadicon.setAttribute("id","listsPushheadicon");

    let listsPushhead1=document.createElement("p");
    listsPush.appendChild(listsPushhead1)
    listsPushhead1.classList.add("listsPushhead1");
    listsPushhead1.textContent="You haven't created any playlists";

    let listsPushhead2=document.createElement("p");
    listsPush.appendChild(listsPushhead2)
    listsPushhead2.classList.add("listsPushhead2");
    listsPushhead2.textContent="All your playlists will show up here";


    // <span class="material-symbols-outlined icon-filled" id="playlistPlayIcon">playlist_play</span>
  }
  else if(Object.keys(playListObject).length>0){
    let allplayList=document.createElement("p")
    listsPush.appendChild(allplayList);
    allplayList.classList.add("allplayList");
    allplayList.textContent="All playlists";
    listsPush.style.textAlign="-webkit-auto";
    newPlayListButton.style.padding="0px";
    playlistdetailpopuphead1.style.padding="0px"
    for(var value in playListObject){
      let allplayListFullDiv=document.createElement("div");
      listsPush.appendChild(allplayListFullDiv);
      allplayListFullDiv.classList.add("allplayListFullDiv");

      let allplayListFullbox=document.createElement("div");
      allplayListFullDiv.appendChild(allplayListFullbox);
      allplayListFullbox.classList.add("allplayListFullbox");

      let allplayListFullboxDiv=document.createElement("div");
      allplayListFullbox.appendChild(allplayListFullboxDiv);
      allplayListFullboxDiv.classList.add("allplayListFullboxDiv");

      let allplayListFullboxIcon=document.createElement("span");
      allplayListFullbox.appendChild(allplayListFullboxIcon)
      allplayListFullboxIcon.classList.add("material-symbols-outlined");
      allplayListFullboxIcon.classList.add("icon-filled")
      allplayListFullboxIcon.textContent="playlist_play";
      allplayListFullboxIcon.setAttribute("id","allplayListFullboxIcon");

      let allplayListFullDetails=document.createElement("div");
      allplayListFullDiv.appendChild(allplayListFullDetails);
      allplayListFullDetails.classList.add("allplayListFullDetails");


      let allplayListFullDetailsHead=document.createElement("p");
      allplayListFullDetails.appendChild(allplayListFullDetailsHead);
      allplayListFullDetailsHead.classList.add("allplayListFullDetailsHead");
      allplayListFullDetailsHead.textContent=value;
    }
  }

}

function playListPopupClose(argument) {
  playlistdetailpopup.style.display="none";


}

function playListBut(argument) {
   playlistopenPopup()
}
