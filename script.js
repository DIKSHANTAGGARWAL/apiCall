let p = fetch("https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2023-04-10&end_date=2023-04-15&daily=temperature_2m_max&timezone=GMT")
p.then((value1) => {
    return value1.json( )
}).then((value2)  => {
         const a=value2.daily.time;
         const b=value2.daily.temperature_2m_max;

         for(let i=0;i<6;i++){
         document.getElementsByClassName("dropdown-item")[i].innerHTML=a[i]
         }

        //  for(let i=0;i<6;i++){
        //     document.getElementsByClassName("temp")[i].innerHTML=b[i]
            // }
        })
        // console.log(a[0]);
        // console.log(b);

        // document.createElement(a)
        // append(a.table)
    // });





    // let tabledata=""
    // value2.map((values)=>{
    //     tabledata='<h1>${values.daily.time}</h1>';
    //     document.getElementById("")
    //     innerHTML=tableData
  
    // let timeArray=value2.daily.temperature_2m_max
    // let dateArray=value2.daily.time
// })
// fetch("https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2023-04-10&end_date=2023-04-15&daily=temperature_2m_max&timezone=GMT").then((data)=>{
//     return data.json;
// }).then((objectData)=>{
//     console.log(objectData);
// })
//  var a=value2.daily.time;
//  var b=value2.daily.temperature_2m_max;




// function generateListItems(arg){
// let items ="";
// for(let i=0;i<arg.length;arg++){
//     items += '<li>${arg[i]}</li>';
// }
// return items;
// }

// document.querySelector("main").innerHTML='
// <ol>
// ${generateListItems(a)}
// </ol>
// ';



// function funCall(){
// var dateArray=a;
// var tempArray=b;
// }
// var html="<table border='1|1'>"

// setTimeout(()=> {

//         for(var i=0;i<dataArray.length;i++){
//             html+='<tr>';
//             html+='<td>' +dateArray[i]+'</td>';
//             html+='<tr>';

//         }

//             document.getElementById("table").innerHTML=html
// } ,500 )
// Define the array
// const myArray = a;

// // Get a reference to the container element
// const arrayContainer = document.getElementById("arrayContainer");

// // Create a new unordered list element
// const ul = document.createElement("ul");

// // Loop through the array and add each item to the list
// myArray.forEach(function(item) {
//   const li = document.createElement("li");
//   li.textContent = item;
//   ul.appendChild(li);   
// });

// // Add the list to the container element
// arrayContainer.appendChild(ul);






















// const myArray = ["apple", "banana", "orange"];

// // Get the HTML element to add the array items to
// const arrayElement = document.getElementById("myArray");

// // Create an unordered list element
// const ul = document.createElement("ul");

// // Loop through the array and create list items for each item
// myArray.forEach(item => {
//   const li = document.createElement("li");
//   li.innerText = item;
//   ul.appendChild(li);
// });

// // Add the unordered list to the HTML element
// arrayElement.appendChild(ul);






















