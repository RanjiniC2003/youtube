var videoList = document.getElementById("video-list");
var smalllistrelatedmain = document.getElementById("video-list-related-container");
var index1 = 0;
var smallListPlay = document.getElementsByClassName("smallListPlay");
let pagetop=document.getElementById("top");
let smallListDiv=document.getElementById("smallListDiv");
let playMode="normal";
function listCreate(argument) {
  videoList.innerText = "";
  var random;
  arrays["array1"] = [videoid];
  while (arrays["array1"].length != arrays["array"].length) {
    random = Math.floor((Math.random() * arrays["array"].length - 1) + 1);
    if (!arrays["array1"].includes(arrays["array"][random])) {
      arrays["array1"].push(arrays["array"][random]);
    }
  }
  videoSmallist("array1")
}

function videoSmallist(listName) {
  videoList.innerText = "";
  arrays["currentPlayList"] = listName;
  let listArray = arrays[listName];
  // console.log(listArray)
  for (var i = 0; i < listArray.length; i++) {
    var videoListContainer = document.createElement("div");
    videoList.appendChild(videoListContainer);
    videoListContainer.classList.add("videoListContainer");
    if (listArray[i]==videoid) {
      videoListContainer.classList.add("playVideo");
    }
    

    // videoListContainer.addEventListener("mousedown", (e) => {e.preventDefault()})

    var smallVideoImgIcon = document.createElement("div");
    smallVideoImgIcon.classList.add("smallVideoImgIcon");
    videoListContainer.appendChild(smallVideoImgIcon);
    smallVideoImgIcon.setAttribute("onclick", "videoClick('" + listArray[i] + "')");



    var videoplayImg = document.createElement("span");
    smallVideoImgIcon.appendChild(videoplayImg);
    videoplayImg.classList.add("smallListPlay");
    if (listArray[i]==videoid) {
      videoplayImg.classList.add("playButtonVisible");
    }
    videoplayImg.classList.add("material-symbols-outlined");
    videoplayImg.classList.add("icon-filled");
    videoplayImg.textContent = "play_arrow";

    var smallListVideoImg = document.createElement("img");
    smallVideoImgIcon.appendChild(smallListVideoImg);
    smallListVideoImg.src = "thumbnails/" + videoDetails[listArray[i]].thumbnail_file;
    smallListVideoImg.classList.add("smallListVideoImg");
    if (listArray[i]==videoid) {
      smallListVideoImg.classList.add("imgBgVisible");
    }

    var songchannel = document.createElement("div");
    smallVideoImgIcon.appendChild(songchannel);
    songchannel.classList.add("songchannel");

    var videoLength = document.createElement("p");
    videoListContainer.appendChild(videoLength);
    videoLength.classList.add("videoLength");

    var videomin1 = Math.floor((videoDetails[listArray[i]].length) / 60);
    var videosec1 = Math.round((videoDetails[listArray[i]].length) % 60);
    if (videosec1 < 10) {
      videoLength.textContent = videomin1 + ":" + "0" + videosec1;
    } else {
      videoLength.textContent = videomin1 + ":" + videosec1;
    }


    var videoSongName = document.createElement("p");
    songchannel.appendChild(videoSongName);
    videoSongName.classList.add("videoSongName");
    videoSongName.textContent = videoDetails[listArray[i]].title;
    videoSongName.title = videoDetails[listArray[i]].title;

    var videoChannelName = document.createElement("p");
    songchannel.appendChild(videoChannelName);
    videoChannelName.classList.add("videoChannelName");
    videoChannelName.textContent = videoDetails[listArray[i]].channel_name;
    videoChannelName.title = videoDetails[listArray[i]].channel_name;
    index1++;
  }
}



var videotagplay = document.getElementById("video-tag-play");


function videoClick(params) {


   if (thumbsup.classList.contains("icon-filled")) {
      thumbsup.classList.remove("icon-filled");
      thumbsup.classList.add("icon-stroked")
   }
  let listName = arrays["currentPlayList"];
  let playlist = arrays[listName];

  videoid = params;
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
    localStorage.setItem("likeVideos",JSON.stringify(arrays["likeVideos"]));
  }
 if(arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.remove("icon-stroked");
    thumbdown.classList.add("icon-filled");
  } 
  else if(!arrays["dislikeVideos"].includes(videoid)){
    thumbdown.classList.add("icon-stroked");
    thumbdown.classList.remove("icon-filled");
  }
  smallListSongTitle.textContent = videoDetails[params].title;
  smallListSongTitle.title = videoDetails[params].title;
  LikesCount(params)
  disLikeCount(params)
  smallListSongChannel.textContent = videoDetails[params].channel_name;
  smallListSongChannel.title = videoDetails[params].channel_name;
  var videoListContainer = document.getElementsByClassName("videoListContainer");
  videotagplay.src = "videos/" + videoDetails[params].video_file;
  listPlaySongImg.src = "thumbnails/" + videoDetails[params].thumbnail_file;

  var songIndexValue = playlist.indexOf(params);
  let indexVal=arrays["relatedList"].indexOf(params);
  console.log(indexVal)
  var playVideo = document.getElementsByClassName("playVideo");
  var playButtonVisible = document.getElementsByClassName("playButtonVisible");
  var smallListVideoImg = document.getElementsByClassName("smallListVideoImg");
  let relatedVideosDivs=document.getElementsByClassName("relatedVideosDiv")
  let relatedVideosPlay=document.getElementsByClassName("relatedVideosPlayIcon");
  let relatedVideosImage=document.getElementsByClassName("relatedVideosImg")
  var imgBgVisible = document.getElementsByClassName("imgBgVisible");
  let imageBgVisible=document.getElementsByClassName("imageBgVisible");
  let playIconVisible=document.getElementsByClassName("playIconVisible");
  let clickVideoplay=document.getElementsByClassName("clickVideoplay");
  if (playVideo.length > 0) {

    playVideo[0].classList.remove("playVideo");
  }
  if (playButtonVisible.length > 0) {
    playButtonVisible[0].classList.remove("playButtonVisible");
  }
  if (imgBgVisible.length > 0) {
    imgBgVisible[0].classList.remove("imgBgVisible");
  }
  if(imageBgVisible.length>0){
    imageBgVisible[0].classList.remove("imageBgVisible");
  }
  if (playIconVisible.length>0) {
    playIconVisible[0].classList.remove("playIconVisible")
  }
  if (clickVideoplay.length>0) {
    clickVideoplay[0].classList.remove("clickVideoplay")
  }
  if (songIndexValue>-1) {
    videoListContainer[songIndexValue].classList.add("playVideo");
    smallListPlay[songIndexValue].classList.add("playButtonVisible");
    smallListVideoImg[songIndexValue].classList.add("imgBgVisible");
  }
  if (indexVal>-1) {
    relatedVideosDivs[indexVal].classList.add("clickVideoplay");
    relatedVideosPlay[indexVal].classList.add("playIconVisible");
    relatedVideosImage[indexVal].classList.add("imageBgVisible")
  }
  

  if (playPauseIcon.textContent == "play_arrow") {
    playPauseIcon.textContent = "pause";
    videoTagPlay.play();
  }
}

let listHeads=document.getElementsByClassName("listHeads");
let listItemchange=document.getElementsByClassName("listItemchange");

function clickListItems(argument) {

  if (listItemchange.length>0) {
    // listHeads[argument].style.pointerEvents="all";
    listItemchange[0].classList.remove("listItemchange");
    
  }
  listHeads[argument].classList.add("listItemchange");
  // listHeads[argument].style.pointerEvents="none";
}


function discover(argument) {
  clickListItems(argument);

  videoList.innerText = "";
  var arrdis = [];
  arrays["discover"] = [videoid];
  for (var value in videoDetails) {
    if (videoDetails[videoid].channel_name == videoDetails[value].channel_name) {
      arrdis.push(value);
    }
  }
  while (arrays["discover"].length != arrdis.length) {
    randis = Math.floor((Math.random() * arrdis.length));
    if (!arrays["discover"].includes(arrdis[randis])) {
      arrays["discover"].push(arrdis[randis]);
    }
  }
  videoSmallist("discover");
}


function allList(argument) {
  clickListItems(argument);


  let tempArray=arrays["array1"];
  let index=tempArray.indexOf(videoid);
  if (index>0) {
    tempArray.splice(index,1);
    tempArray.unshift(videoid);
    arrays["array1"]=tempArray;
  }

  videoSmallist("array1");
  // if (clickList=="all") {

  // }
}

function Popular(argument) {
  clickListItems(argument);
  videoList.innerText = "";
  arrays["Popular"] = []
  let arrPopular = [];
  let arrayPopular = [];
  let arraypush = [];
  for (var value in videoDetails) {
    arrPopular.push({
      "id": value,
      "views": videoDetails[value].views
    });
  }
  let arrPopularSort = arrPopular;
  arrPopularSort.sort((a, b) => {
    return b.views - a.views;

  })
  arrPopularSort.forEach((e) => {
    arrayPopular.push(e.id);
  });


  for (var i = 0; i < 15; i++) {
    arraypush.push(arrayPopular[i]);
  }

  while (arrays["Popular"].length != 15) {
    ranpopular = Math.floor((Math.random() * 15));
    if (!arrays["Popular"].includes(arraypush[ranpopular])) {
      arrays["Popular"].push(arraypush[ranpopular]);
    }
  }


  videoSmallist("Popular");
}





function Newreleases(argument) {
  clickListItems(argument)
  videoList.innerText = "";
  arrays["Newreleases"] = []
  let arrNewreleases = [];
  for (var value in videoDetails) {
    var yearDetails = new Date(videoDetails[value].publish_date);
    var findYear = yearDetails.getFullYear();
    if (findYear >= 2020) {
      arrNewreleases.push(value);
    }
  }
  while (arrays["Newreleases"].length != arrNewreleases.length) {
    ranNewreleases = Math.floor((Math.random() * arrNewreleases.length));
    if (!arrays["Newreleases"].includes(arrNewreleases[ranNewreleases])) {
      arrays["Newreleases"].push(arrNewreleases[ranNewreleases]);
    }
  }
  videoSmallist("Newreleases");

}




function year1(argument) {
  clickListItems(argument)
  videoList.innerText = "";
  arrays["year1"] = []
  let arryear1 = [];
  for (var value in videoDetails) {
    var yearDetails = new Date(videoDetails[value].publish_date);
    var findYear = yearDetails.getFullYear();
    if (findYear >= 2020) {
      arryear1.push(value);
    }
  }
  while (arrays["year1"].length != arryear1.length) {
    ranyear1 = Math.floor((Math.random() * arryear1.length));
    if (!arrays["year1"].includes(arryear1[ranyear1])) {
      arrays["year1"].push(arryear1[ranyear1]);
    }
  }
  videoSmallist("year1");
}

function year2(argument) {
  clickListItems(argument)
  videoList.innerText = "";
  arrays["year2"] = []
  let arryear2 = [];
  for (var value in videoDetails) {
    var yearDetails = new Date(videoDetails[value].publish_date);
    var findYear = yearDetails.getFullYear();
    if (findYear >= 2010 && findYear <= 2020) {
      arryear2.push(value);
    }
  }
  while (arrays["year2"].length != arryear2.length) {
    ranyear2 = Math.floor((Math.random() * arryear2.length));
    if (!arrays["year2"].includes(arryear2[ranyear2])) {
      arrays["year2"].push(arryear2[ranyear2]);
    }
  }
  videoSmallist("year2");
}

function year3(argument) {
  clickListItems(argument)
  videoList.innerText = "";
  arrays["year3"] = []
  let arryear3 = [];
  for (var value in videoDetails) {
    var yearDetails = new Date(videoDetails[value].publish_date);
    var findYear = yearDetails.getFullYear();
    if (findYear >= 2000 && findYear <= 2010) {
      arryear3.push(value);
    }
  }
  while (arrays["year3"].length != arryear3.length) {
    ranyear3 = Math.floor((Math.random() * arryear3.length));
    if (!arrays["year3"].includes(arryear3[ranyear3])) {
      arrays["year3"].push(arryear3[ranyear3]);
    }
  }
  videoSmallist("year3");
}
// function smallVideoListHead1(argument) {
//   allList(argument)

 
// }

function shuffleSongs(){
  videoList.innerText = "";
  listCreate();
}
let scrollRecVideos=document.getElementById("videos-container");
let moveArrowLeft=document.getElementById("moveArrowLeft");
let moveArrowRight=document.getElementById("moveArrowRight");
let quickPicksVideoContainer=document.getElementById("quickPicksVideos");
let quickmoveArrowRight=document.getElementById("QuickmoveArrowRight");
let quickmoveArrowLeft=document.getElementById("QuickmoveArrowLeft");
let lovesongsAllList=document.getElementById("lovesongsAllList");
// let trendVideos=document.getElementById("trendingVideos")

function moveListForward(id) {
  element=document.getElementById(id);
  element.scrollLeft+=(element.offsetWidth-100);
}
function moveListBack(id) {
  element=document.getElementById(id);
  element.scrollLeft-=(element.offsetWidth-100);
}





function repeat(argument) {
  let repeat=document.getElementById("repeat");
  if (playMode=="normal") {
    repeat.textContent="repeat_one";
    playMode="repeat";
  }
  else if(playMode=="repeat"){
    playMode="normal";
    repeat.textContent="repeat";
  }


}
var elem = document.documentElement;
let closeFullscreen=document.getElementById("closeFullscreen");
let videofullScreen=document.getElementById("videoFullScreen");
let togglearr=document.getElementById("toggle_arrow");

let vidTag=document.getElementById("v-t");

function toggleFullScreen() {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { 
      document.msExitFullscreen();
    }
  } else {
    
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
      elem.msRequestFullscreen();
    }
  }
}

function fullScreenChanged() {
  if (document.fullscreenElement) {

    if (setVideoMiddle.classList.contains("miniPlayer")) {
      videoSize();
    }

    let footer=document.getElementById("footer");
    // footer.classList.add("videoBar");
    setVideomiddle=document.getElementById("setVideo-middle");
    // videofullScreen.style.display="none"
    closeFullscreen.style.display="block"
    togglearr.style.display="none";
    videoPlayPage.style.height="100%";
    videoPlayPage.style.top="0px";
    pagetop.style.display="none";
    smallListDiv.style.display="none";
    vidTag.style.height="100%";
    videotagplay.style.height="100%";
    videotagplay.style.objectFit="cover";
    videotagplay.style.width="100%";
    setVideomiddle.style.padding="0px";
    setVideomiddle.style.height="100%";

  } 
  else {
    videofullScreen.style.display="block"
    closeFullscreen.style.display="none"
    togglearr.style.display="block"
    pagetop.style.display="block";
    smallListDiv.style.display="block";
    videoPlayPage.style="";
    vidTag.style="";
    videotagplay.style="";
    // videotagplay.style.width="";
    setVideomiddle.style="";
    // setVideomiddle.style.height="";
  }
}

elem.addEventListener("fullscreenchange", fullScreenChanged)




function videoSize(){
  let miniPlay=document.getElementById("miniPlay");
  setVideoMiddle.classList.toggle("miniPlayer");
   toggleVideoPage();
  // videotagplay.classList.toggle("videoply");


}

let videoupnextrelated=document.getElementById("video-list-upnext-related");
let smallVideoListHead2=document.getElementById("smallVideoListHead2");
let smallVideoListHead1=document.getElementById("smallVideoListHead1");
let smallVideoListHead3=document.getElementById("smallVideoListHead3");
let relatedVideosDetails=document.getElementById("relatedVideosDetails")
let relatedVideos=document.getElementById("relatedVideos");
let lyricslist=document.getElementById("lyricslist");

function lyrics(argument) {
  relatedVideos.style.display="none";
  videoupnextrelated.style.display="none";
  lyricslist.style.display="block";
   smallVideoListHead1.style.borderBottom="none";
    smallVideoListHead2.style.borderBottom="none";
  smallVideoListHead3.style.borderBottom="1px solid white";

}


function related(argument) {
  videoupnextrelated.style.display="none";
  smallVideoListHead1.style.borderBottom="none";
  smallVideoListHead2.style.borderBottom="1px solid white";
   smallVideoListHead3.style.borderBottom="none";
  lyricslist.style.display="none"
  relatedVideos.style.display="block";
 arrays["relatedList"]=[];

  console.log(videoid);
  console.log();

  for (var value in videoDetails) {
    if(videoDetails[videoid].song_type==videoDetails[value].song_type){
      arrays["relatedList"].push(value);
      let relatedVideosDiv=document.createElement("div");
      relatedVideosDetails.appendChild(relatedVideosDiv);
      relatedVideosDiv.classList.add("relatedVideosDiv");

      let relatedVideosImgIcon=document.createElement("div");
      relatedVideosDiv.appendChild(relatedVideosImgIcon);
      relatedVideosImgIcon.classList.add("relatedVideosImgIcon");
      relatedVideosImgIcon.setAttribute("onclick","videoClick('"+value+"')")

      let relatedVideosPlayIcon=document.createElement("span");
      relatedVideosImgIcon.appendChild(relatedVideosPlayIcon);
      relatedVideosPlayIcon.classList.add("material-symbols-outlined");
      relatedVideosPlayIcon.classList.add("relatedVideosPlayIcon")
      relatedVideosPlayIcon.classList.add("icon-filled");
      relatedVideosPlayIcon.textContent="play_arrow";

      let relatedVideosImg=document.createElement("img");
      relatedVideosImgIcon.appendChild(relatedVideosImg);
      relatedVideosImg.classList.add("relatedVideosImg");
      relatedVideosImg.setAttribute("src","thumbnails/"+videoDetails[value].thumbnail_file);


      let relatedVideosheads=document.createElement("div");
      relatedVideosImgIcon.appendChild(relatedVideosheads);
      relatedVideosheads.classList.add("relatedVideosheads");
      

      let relatedVideostitle=document.createElement("p");
      relatedVideosheads.appendChild(relatedVideostitle);
      relatedVideostitle.classList.add("relatedVideostitle");
      relatedVideostitle.textContent=videoDetails[value].title;
      relatedVideostitle.title=videoDetails[value].title;

      let relatedVideoschannel=document.createElement("p");
      relatedVideosheads.appendChild(relatedVideoschannel);
      relatedVideoschannel.classList.add("relatedVideoschannel");
      relatedVideoschannel.title=videoDetails[value].channel_name;
      relatedVideoschannel.textContent=videoDetails[value].channel_name;


      let relatedVideoslength=document.createElement("p");
      relatedVideosDiv.appendChild(relatedVideoslength)
      relatedVideoslength.classList.add("relatedVideoslength");


      var videomin1 = Math.floor((videoDetails[value].length) / 60);
      var videosec1 = Math.round((videoDetails[value].length) % 60);
      if (videosec1 < 10) {
        relatedVideoslength.textContent = videomin1 + ":" + "0" + videosec1;
      } 
      else {
        relatedVideoslength.textContent = videomin1 + ":" + videosec1;
      }

    }
  }

}


function upNext(){
  videoupnextrelated.style.display="block";
  smallVideoListHead1.style.borderBottom="1px solid white";
   smallVideoListHead3.style.borderBottom="none";
  smallVideoListHead2.style.borderBottom="none";
  lyricslist.style.display="none";
  relatedVideos.style.display="none";
}

// videotagplay.addEventListener('keydown',escape);
// function escape(e) {
//   // e.stopPropagation();

//   // if (e.key==="Enter") {
//   //   searchSong();
//   // }
//   console.log(e.key);
// }


function homePage(argument) {
pageHeadColorChange(argument)
  homePages.style.display="block";
  explorePage.style.display="none"
  libraryPage.style.display="none"
  // quickPicksVideos.innerText=""
  // quickPicks();

  // sad();
  // happy();
  // melody();
  // rock();
  // love();
  if (toggle_Video_Page.textContent=="arrow_drop_down") {
    toggle_Video_Page.textContent="arrow_drop_up";
    
    if (!setVideoMiddle.classList.contains("miniPlayer")) {
      setVideoMiddle.classList.add("video_close");
    }

    setVideoMiddle.classList.remove("video_show");
    main_Page.classList.add("show_main_videoImg");
    main_Page.classList.remove("hide_main_videoImg");

  }
}

function explore(argument){
  pageHeadColorChange(argument)
  homePages.style.display="none";
  explorePage.style.display="block"
  libraryPage.style.display="none"
  if (toggle_Video_Page.textContent=="arrow_drop_down") {
    toggle_Video_Page.textContent="arrow_drop_up";
    
    if (!setVideoMiddle.classList.contains("miniPlayer")) {
      setVideoMiddle.classList.add("video_close");
    }

    setVideoMiddle.classList.remove("video_show");
    main_Page.classList.add("show_main_videoImg");
    main_Page.classList.remove("hide_main_videoImg");

  }
}
let libraryVideos=document.getElementById("libraryVideos")
let likeVideosCount=document.getElementById("likeVideosDiv");
let emptyRecentVideo=document.getElementById("emptyRecent")
let emptyLikeVideo=document.getElementById("emptyLike")

function library(argument){
  pageHeadColorChange(argument)

  homePages.style.display="none";
  explorePage.style.display="none"
  libraryPage.style.display="block"
  if (toggle_Video_Page.textContent=="arrow_drop_down") {
    toggle_Video_Page.textContent="arrow_drop_up";
    
    if (!setVideoMiddle.classList.contains("miniPlayer")) {
      setVideoMiddle.classList.add("video_close");
    }

    setVideoMiddle.classList.remove("video_show");
    main_Page.classList.add("show_main_videoImg");
    main_Page.classList.remove("hide_main_videoImg");
  }
  if (arrays["playVideoAdd"].length==0) {
    libraryVideos.innerHTML=""
    let emptyRecent=document.createElement("h3");
    libraryVideos.appendChild(emptyRecent);
    emptyRecent.setAttribute("id","emptyRecent")
    emptyRecent.textContent="It looks a bit empty here!";
  }

  if (arrays["likeVideos"].length==0) {
    likeVideosCount.innerHTML="";
    let emptyLike=document.createElement("h3");
    likeVideosCount.appendChild(emptyLike);
    emptyLike.setAttribute("id","emptyLike");
    emptyLike.textContent="It looks a bit empty here!";
  }
  if (arrays["playVideoAdd"].length>=1) {
    libraryVideos.innerHTML="";
    if (arrays["playVideoAdd"].length<20) {
      for (var i = 0; i <arrays["playVideoAdd"].length; i++) {
        ListVideosLibrary(i,libraryVideos,"playVideoAdd")
      }
    }
    else if (arrays["playVideoAdd"].length>=20) {
      for (var i = 0; i <20; i++) {
        ListVideosLibrary(i,libraryVideos,"playVideoAdd")
      }
    }   
  }
  if (arrays["likeVideos"].length>=1) {
    likeVideosCount.innerHTML="";
    for (var i = 0; i <arrays["likeVideos"].length; i++) {
      ListVideosLibrary(i,likeVideosCount,"likeVideos")
    }   
  }

}


function ListVideosLibrary(i,mainDiv,array) {
  let playVideosPlay=document.createElement("div");
  mainDiv.appendChild(playVideosPlay);
  playVideosPlay.classList.add("playVideosPlay");

  let playVideoImgIcon=document.createElement("div");
  playVideosPlay.appendChild(playVideoImgIcon);
  playVideoImgIcon.classList.add("playVideoImgIcon");
  playVideoImgIcon.setAttribute("onclick","clickPlay('"+arrays[array][i]+"')")

  let playVideoIcon=document.createElement("span");
  playVideoImgIcon.appendChild(playVideoIcon);
  playVideoIcon.classList.add("material-symbols-outlined");
  playVideoIcon.classList.add("icon-filled")
  playVideoIcon.setAttribute("id","playVideoIcon")
  playVideoIcon.textContent="play_arrow";

  let playVideoImg=document.createElement("img");
  playVideoImgIcon.appendChild(playVideoImg);
  playVideoImg.classList.add("playVideoImg");
  playVideoImg.setAttribute("src","thumbnails/"+videoDetails[arrays[array][i]].thumbnail_file)


  let playVideoName=document.createElement("p");
  playVideosPlay.appendChild(playVideoName);
  playVideoName.classList.add("playVideoName");
  playVideoName.textContent=videoDetails[arrays[array][i]].title;
  playVideoName.title=videoDetails[arrays[array][i]].title;

  let playVideoChannelName=document.createElement("p");
  playVideosPlay.appendChild(playVideoChannelName);
  playVideoChannelName.classList.add("playVideoChannelName")
  playVideoChannelName.textContent=videoDetails[arrays[array][i]].channel_name;
  playVideoChannelName.title=videoDetails[arrays[array][i]].channel_name;


  var playVideodot=document.createElement("span");
   playVideoChannelName.appendChild(playVideodot);
   playVideodot.textContent="•";

   var playVideoviews=document.createElement("span");
   playVideoChannelName.appendChild(playVideoviews);
   playVideoviews.classList.add("video-views");
   let viewsChange;
   if (videoDetails[arrays[array][i]].views>=1000 && videoDetails[arrays[array][i]].views<=100000) {
      viewsChange=Math.floor((videoDetails[arrays[array][i]].views)/1000);
      playVideoviews.textContent=viewsChange+"K"+" Views";
   }
   else if (videoDetails[arrays[array][i]].views>=100000 && videoDetails[arrays[array][i]].views<=1000000) {
      viewsChange=Math.floor((videoDetails[arrays[array][i]].views)/100000);
      playVideoviews.textContent=viewsChange+"L"+" Views";
   }
  else if (videoDetails[arrays[array][i]].views>=1000000) {
      viewsChange=Math.floor((videoDetails[arrays[array][i]].views)/1000000);
      playVideoviews.textContent=viewsChange+"M"+" Views";
  }
   else{
      viewsChange=Math.floor(videoDetails[arrays[array][i]].views);
     playVideoviews.textContent=viewsChange+" Views";
   }
}