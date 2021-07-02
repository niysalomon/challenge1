function fetchPosts() {
    var url = [];
    var cath_urls=window.location.href;
    var sprit_url=cath_urls.split("?");
    var url = sprit_url[1];
    // const get_final_id=${url};
    
    fetch(url)
    .then(response => {  
        if (!response.ok){
            throw Error("Error");
        }
        return response.json();
    })  
    .then(data => {
        console.log(data);
        const html = data.map(post => {
            return  `
            <div class="posts">
            <div class="ovserview"> 
            <p class="count"> ${post.id}</p>
            <p><h5>Title</h5> ${post.title}</p>
            <p><h5>Body</h5> ${post.body}</p> 
            </div> </div>
            `;
         }).join("");
          console.log(url);
        console.log(html);
        document.querySelector("#users").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error =>{
        console.log(error);
    });
//     .then(response => response.json())
//     .then(json => console.log(json))
}
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

fetchPosts();
