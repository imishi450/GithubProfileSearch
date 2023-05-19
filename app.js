


const url= "https://api.github.com/users"
const v=document.querySelector("#search-btn")
const x=document.querySelector("#searchbar");
const z=document.querySelector(".profile-container");
const load=document.querySelector(".loading");


const fetchprofile = async() => {
 const name =x.value;
 z.innerHTML="";
 load.innerHTML="Loading..."
    try { 
        let response = await fetch(`${url}/${name}`);
        let data = await response.json(); 
        console.log(data);
        if(data.id){
        z.innerHTML=changeProfileCard(data);
        load.innerHTML=""
    }
    else{
        z.innerHTML=" "
        load.style.fontWeight = "600";
        load.innerText=data.message+"! Please enter correct username";
    }
    }
     catch (error) {
        z.innerHTML="";
        console.log(error);
    }
  }
  const changeProfileCard = (temp)=>{
    let profiledata=``
       profiledata+=`<div class="profile">
        <div class="top-sec">
            <div class="left">
                <div class="avtar">
                  <img src="${temp.avatar_url}" alt="">
                </div>
                <div class="self">
                    <h1 id="n">${temp.login}</h1>`

                   if(temp.name!==null) 
                   profiledata+= `<h1>${temp.name}</h1>`
                   else profiledata+= `<h1>No name</h1>`
                   profiledata+=  `</div>
            </div>
            <a href="${temp.html_url}">
            <button class="primary-btn">Check Profile</button>
            </a>
        </div>
        <div class="about">
            <h2>About</h2>
            `
            if(temp.bio!==null)
            profiledata+=`<p>${temp.bio}</p>`
            else  profiledata+=`<p>No bio</p>`

 profiledata+=`</div>
        <div class="status">
            <div class="status-item">
                <h3>Follower</h3>
                <p>${temp.followers}</p>
            </div>
            <div class="status-item">
                <h3>Following</h3>
                <p>${temp.following}9</p>
            </div>
            <div class="status-item">
                <h3>Repos</h3>
                <p>${temp.public_repos}</p>
            </div>
        </div>
    </div>`

return profiledata
     }
     v.addEventListener("click", fetchprofile);
 document.addEventListener("keypress", function(event){
        if(event.keyCode == 13){
            // event.preventDefault();
           v.click();
        }
    });
    
    
