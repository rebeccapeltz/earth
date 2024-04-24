window.addEventListener("load", (e) => {
  const body = document.querySelector("body");
  if (screen.width > 768) {
    const header = document.querySelector("header");
    const video = document.createElement("video");
    const source = document.createElement("source");
    source.src = "./earth.mp4";
    source.type = "video/mp4";
    video.appendChild(source);
    video.id = "bg-video";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.poster = "./earth.png";
    video.style["width"] = "100%";
    video.style["height"] = "100%";
    video.style["object-fit"] = "cover";
    video.style["position"] = "fixed";
    video.style["left"] = "0";
    video.style["right"] = "0";
    video.style["bottom"] = "0";
    video.style["top"] = "0";
    video.style["z-index"] = "-1";
    body.insertBefore(video, header);
  } else {
    body.style.backgroundImage = "url('./earth-mobile.jpg')";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
  }
});
