// initialising our API URL
const url = "https://jsonplaceholder.typicode.com/users";
// fetch user from the API url
function fetchUsers()
{
  //make use of the brower fetch API
    fetch(url)
    .then((response) => response.json())
    .then((data) =>

    {
        // passing the user data to the render function. 
        renderUser(data);

    });
}
//render the API in the DOM
function renderUser(usersData)
{   
    //console.log(usersData);
    const ul = document.getElementById("user-list-container");
   // console.log(ul);

    // render li tag for each of the user
  usersData.forEach((user,index) => {
   // console.log(user,index+1);
    const li = document.createElement("li");
    li.innerHTML = `
    <span>${index+1}.</span>
    <span>${user.name}</span>
    <span>-</span>
    <span class="username">${user.username}</span>
    
    `;
    //append the current li tag for the ul tag
    ul.appendChild(li);
  });

}
//Add a search fuction to the dom
function searchUserByUsername()
{
const input = document.getElementById("search");
const ul = document.getElementById("user-list-container");
const inputValue = input.value.toUpperCase();
const userList = ul.querySelectorAll("li");
// loop through all the li and render the one that matches
for (let index = 0; index < userList.length; index++)
{
const usernameSpanTag = userList[index].querySelector(".username");
const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;
if (isMatch)
{
    userList[index].style.display = "block";
}
else
{
    userList[index].style.display = "none";
}
}
}
fetchUsers();
