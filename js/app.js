// const container = document.querySelector(".container");
// const coffees = [
//   {
//     name: "Perspiciatis",
//     image: "images/coffee1.jpg"
//   },
//   {
//     name: "Voluptatem",
//     image: "images/coffee2.jpg"
//   },
//   {
//     name: "Explicabo",
//     image: "images/coffee3.jpg"
//   },
//   {
//     name: "Rchitecto",
//     image: "images/coffee4.jpg"
//   },
//   {
//     name: " Beatae",
//     image: "images/coffee5.jpg"
//   },
//   {
//     name: " Vitae",
//     image: "images/coffee6.jpg"
//   },
//   {
//     name: "Inventore",
//     image: "images/coffee7.jpg"
//   },
//   {
//     name: "Veritatis",
//     image: "images/coffee8.jpg"
//   },
//   {
//     name: "Accusantium",
//     image: "images/coffee9.jpg"
//   }
// ];
// const showCoffees = () => {
//   let output = "";
//   coffees.forEach(
//     ({ name, image }) =>
//       (output += `
//               <div class="card">
//                 <img class="card--avatar" src=${image} />
//                 <h1 class="card--title">${name}</h1>
//                 <a class="card--link" href="#">Taste</a>
//               </div>
//               `)
//   );
//   container.innerHTML = output;
// };

// document.addEventListener("DOMContentLoaded", showCoffees);


  //var namahost="http://localhost";
  //var namahost="http://192.168.1.140";
  var namahost="http://ummibagus.com";
  document.getElementById("idusername").value = localStorage.getItem("datalogin");
  function cekLogin(){
    var vusername=document.getElementById("idusername").value
     localStorage.setItem("datalogin",vusername);
     document.getElementById("masuk").text = "Selamat Datang";
    // window.location='Line Chart.html#';  
    // window.location='http://'+vusername+':3030/appny/Line%20Chart.html'; 
    window.location='http://'+vusername+':3030/appny/Nurul%20Huda.html#'+vusername; 
  }


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}