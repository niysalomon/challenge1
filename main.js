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
            <div class="user_title>           
            <h4 class="names"><span>${user.id}</span>.  Names: ${user.name}</h4>
            <div class="button"> <a href="index2.html?https://jsonplaceholder.typicode.com/users/${user.id}/posts" target="blank"> Get User’s Posts</a>
            </div>
            </div>
              <div class="users">
            <div class="user">
            <div class="ovserview">
            <h5>Overview</h5>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            </div>
            <div class="ovserview">
            <h5>Company</h5>
            <p>Campany Name: ${user.company.name}</p>
            <p>BS: ${user.company.bs}</p>
            <p>Catch Phrase: ${user.company.catchPhrase}</p>
            <p>Website: ${user.website}</p>
            </div>
            <div class="ovserview">
            <h5>Address</h5>
            <p>City: ${user.address.city}</p>            
            <p>Street: ${user.address.street}</p>
            <p>Suite: ${user.address.suite}</p>
            <p>Zipcode: ${user.address.zipcode}</p>
            <div class="geo">
            <h5>Geo</h5>
            <p>Lat: ${user.address.geo.lat}</p>
            <p>Lng: ${user.address.geo.lng}</p>
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