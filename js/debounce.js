var timerId;

let movies_div=document.getElementById("movies");

async function searchMovies(n){

    let res = await fetch(`https://api.pexels.com/v1/search?query=${n}`,{
        method: 'GET',
        headers:{
              'Authorization': '563492ad6f91700001000001adba6b0101c949d1800c44a2fa4a38df',         
             }
    });
    let data=await res.json();
    //  console.log("data:",data);

    var results=(data.photos);
    return results
}


function appendMovies(m){
    movies_div.innerHTML=null;
    document.getElementById("movies").style.display = "block";
    document.getElementById("query").addEventListener("click", function(){
    document.getElementById("movies").style.display = "none";
});
    m.forEach(({photographer}) =>{
        console.log("div:",photographer);
        let val=document.createElement("p");
        val.innerText=photographer;
        // val.style.color="red";
        movies_div.append(val);
        
    });
}


async function main(){

    let nam=document.getElementById("query").value;
    let movies= await searchMovies(nam);
    if(movies===undefined){
        return false;
    }
    appendMovies(movies);

    console.log("movies:",movies);
}

function debounce(func, delay){
    let nam=document.getElementById("query").value;
    if(timerId){
        clearTimeout(timerId);
    }
    timerId=setTimeout(()=>{
        func();
    },delay);
}