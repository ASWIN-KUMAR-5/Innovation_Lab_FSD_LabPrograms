        function loaddata(){

            const output = document.getElementById('output');

        fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then((data) =>{

  const list = data.map(
    (user)=>
    `<li> ${user.username} - ${user.password} - ${user.email}</li>`
  ).join("");

  output.innerHTML=`<ul> ${list} </ul>`;
        

    })
}