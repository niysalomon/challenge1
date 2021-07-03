function fetchData() {
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {  
        if (!response.ok){
            throw Error("Error");
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const html = data.map(user => {
            return  `
            <div class="container">
           
              <div class="users">
            <div class="user">
             
            <div class="user_title>           
            <h4 class="names"><span>${user.id}</span>.  Names: ${user.name}</h4> &nbsp;
            <span>Email: ${user.email}</span> 
            <div class="button"> <a href="index2.html?https://jsonplaceholder.typicode.com/users/${user.id}/posts" target="blank"> Get User’s Posts</a>
            </div>
            </div>
                       
            </div>
            </div>
            </div>
            
            `;
         }).join("");
        
        console.log(html);
        
        document.querySelector("#users").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error =>{
        console.log(error);
    });
//     .then(response => response.json())
//     .then(json => console.log(json))
}
 

fetchData();
