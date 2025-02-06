let latitude = ''; 
let longitude = '';

const arr = [];
const arr2 = [];


function locate() {
    try {
        navigator.geolocation.getCurrentPosition((position) => {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude; 

            console.log(`${latitude} and ${longitude}`)

    });
    } catch(error) {
        alert(` error : ${error}`)
    }



}


document.getElementById("form").addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  console.log(name);
  let contact = document.getElementById('phn').value;
  console.log(contact);
  arr.push(name);
  arr2.push(contact);
  console.log(`${arr} ${arr2}`);

document.getElementById('name1').textContent = arr[0]
   document.getElementById('name2').textContent = arr[1];
   document.getElementById('name3').textContent = arr[2];
  document.getElementById('name4').textContent = arr[3];


  

});