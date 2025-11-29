var inputData = document.getElementById("input")
console.log(inputData);



function setNum(numb){
    inputData.value+=numb

}
 function Equal(){
    inputData.value = eval(inputData.value)
 }

 function newSet(){
    inputData.value = (-$inputData.value);
 }


 function backSpace(){
    inputData.value = inputData.value.toString().slice(0,inputData.value.length-1)
 }

 function clearAllData(){
    inputData.value=""
 }


 function Square(){
    inputData.value = inputData.value*inputData.value
 } 
 function Cube(){
    inputData.value = inputData.value*inputData.value*inputData.value
 } 

 function Sqrt(){
   inputData.value= Math.sqrt(inputData.value)
 }

 function percentage(){
   var value = inputData.value+"%"
   var result = 0

   
 }



 Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // top or bottom
  position: "left", // left, center or right
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
}).showToast();