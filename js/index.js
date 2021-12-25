window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
 
 async  function  Names(){
    let response = await fetch(`https://api.pexels.com/v1/curated?page=2&per_page=500`,{
        method: 'GET',
        headers:{
              'Authorization': '563492ad6f91700001000001adba6b0101c949d1800c44a2fa4a38df',         
             }
    });
    let data = await response.json();
    // console.log("data",data)
     let arr = data.photos
        data.photos.forEach(el => {
            //  console.log(el);
            let imga = document.createElement('img');
            imga.src = el.src.large;
            imga.style.width="98%"  
            let name = document.createElement('p')
            name.innerText = el.photographer;
            let div = document.createElement("div");
            div.style.borderWidth="14px"
            div.style.borderColor="thick solid pink"
            div.style.backgroundColor=el.avg_color
            div.style.color="white"
            div.style.borderRadius="8px"
            div.append(imga,name);
            let container = document.querySelector('.container');
            container.append(div)
        });
}
Names()
