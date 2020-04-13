
var rickAndMorty = document.querySelector('ul');
let error = console.log("Error");

fetch(' https://api.spacexdata.com/v3/launches/latest') 
.then(function(response) {   
  return response.json(); 
})
.then(function(json) {
    let people = json.results;

    for (p of people) {
        console.log(p);
    }

    for(p of people) {
        let listItem = document.getElement('li');
        listItem.innerHTML = '<p>' + p.name + '<p>';
        rickAndMorty.appendChild(listItem);
    }
})
.catch (err => {
    console.log(error);
});