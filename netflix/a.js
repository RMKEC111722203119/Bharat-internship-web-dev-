const api ="api_key=4dc59865cdcdebbb4310a0648116afca";

const baseurl = "https://api.themoviedb.org/3";
const bannerurl="https://image.tmdb.org/t/p/original";
const imageurl= "https://image.tmdb.org/t/p/w300";


const requests = {
    fetchTrending: `${baseurl}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${baseurl}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${baseurl}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${baseurl}/discover/movie${api}&lwith_genres=35`,
    fetchHorrorMovies: `${baseurl}/discover/movie?${api}&with_genres=27`,
    fetchDocumentaries: `${baseurl}/discover/movie?${api}&with_genres=99`,
    fetchRomanceMovies: `${baseurl}/discover/movie?${api}&with_genres=10749`,
    }

function truncate(str,n){
    return str?.length>n ? str.substr(0,n-1)+"...":str;
}

fetch(requests.fetchTrending)
    .then((res)=>res.json())
    .then((data)=>{
        
        const setMovie= data.results[Math.floor(Math.random()*data.results.length-1)]

        var banner=document.getElementById("banner");
        var banner_title=document.getElementById("banner_title");
        var banner_desc=document.getElementById("banner_desc");

        banner.style.backgroundImage=
        "url(" +bannerurl+ setMovie.backdrop_path+ ")";
        banner_desc.innerText=truncate(setMovie.overview,150);
        banner_title.innerText=setMovie.name;

   });
//--------------------------------------------------------------------------------------------------------------------
fetch(requests.fetchTrending)
   .then((res)=>res.json())
   .then((data)=>{

    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="Trending";

    row.appendChild(title);

    const rowposters= document.createElement("div");
    rowposters.className="row_posters";
    row.appendChild(rowposters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className="row_posterLarge";
        var s=movie.id;
        poster.id= s;
        poster.src= imageurl+movie.backdrop_path;
        rowposters.appendChild(poster)

    })
   
   })
//----------------------------------------------------------------------------------------------------------
fetch(requests.fetchNetflixOriginals)
   .then((res)=>res.json())
   .then((data)=>{

    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="NetflixOriginals";

    row.appendChild(title);

    const rowposters= document.createElement("div");
    rowposters.className="row_posters";
    row.appendChild(rowposters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className="row_posterLarge";
        var s=movie.name.replace(/\s+/g, "");
        poster.id= s;
        poster.src= imageurl+movie.backdrop_path;
        rowposters.appendChild(poster)

    })
   })
//-----------------------------------------------------

//----------------------------------------
fetch(requests.fetchActionMovies)
   .then((res)=>res.json())
   .then((data)=>{

    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="ACTION";

    row.appendChild(title);

    const rowposters= document.createElement("div");
    rowposters.className="row_posters";
    row.appendChild(rowposters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className="row_posterLarge";
        var s=movie.id;
        poster.id= s;
        poster.src= imageurl+movie.backdrop_path;
        rowposters.appendChild(poster)

    })
   
   })

   //----------------

fetch(requests.fetchRomanceMovies)
   .then((res)=>res.json())
   .then((data)=>{

    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="ROMANCE";

    row.appendChild(title);

    const rowposters= document.createElement("div");
    rowposters.className="row_posters";
    row.appendChild(rowposters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className="row_posterLarge";
        var s=movie.id;
        poster.id= s;
        poster.src= imageurl+movie.backdrop_path;
        rowposters.appendChild(poster)

    })
   
   })

   //---------------------------------------

   fetch(requests.fetchDocumentaries)
   .then((res)=>res.json())
   .then((data)=>{

    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="DOCUMENTRIES";

    row.appendChild(title);

    const rowposters= document.createElement("div");
    rowposters.className="row_posters";
    row.appendChild(rowposters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className="row_posterLarge";
        var s=movie.id;
        poster.id= s;
        poster.src= imageurl+movie.backdrop_path;
        rowposters.appendChild(poster)

    })
   
   })

   //---------------------------------------------------------

   fetch(requests.fetchHorrorMovies)
   .then((res)=>res.json())
   .then((data)=>{

    const headrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    headrow.appendChild(row);

    const title=document.createElement("h2");

    title.className="row_title";
    title.innerText="HORROR";

    row.appendChild(title);

    const rowposters= document.createElement("div");
    rowposters.className="row_posters";
    row.appendChild(rowposters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className="row_posterLarge";
        var s=movie.id;
        poster.id= s;
        poster.src= imageurl+movie.backdrop_path;
        rowposters.appendChild(poster)

    })
   
   })
   
   