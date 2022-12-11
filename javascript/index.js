function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let timeRightNow = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = timeRightNow.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = timeRightNow.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let timeNow = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = timeNow.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = timeNow.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
