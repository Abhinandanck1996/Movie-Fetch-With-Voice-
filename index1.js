let b = document.getElementById("demo")
b.addEventListener("click", () => {
  if (a.value==="") {
  alert("Please Select")
  }
  else {
    a.value=""
  }
})


let a = document.getElementById("movies");
async function movies() {
  let resp = await fetch(
    `http://www.omdbapi.com/?s=${a.value}&apikey=4fa0f3b3`
  );
  let data = await resp.json();
  let data1 = data.Search;
  console.log(data1);
    let b = document.getElementById("movie1");
    b.style.color="white"
    b.innerHTML = '';
  data1.map(res => {
    b.innerHTML += `<div>
        <h1>Movie Name:${res.Title}</h1>
            <img src=${res.Poster} alt=${res.Title}>
        <h2>Year:${res.Year}</h2>
    </div>`;
  });
}


  function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-8";

    recognition.onresult = function (event) {
      // console.log(event);
      document.getElementById("movies").value = event.results[0][0].transcript;
    };
    recognition.start();
  }