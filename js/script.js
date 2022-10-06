let equalPress = 0;
let buttonInput = document.querySelectorAll(".input-button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

buttonInput.forEach((buttonClass)=>{
  buttonClass.addEventListener("click", ()=>{
    if(equalPress == 1){
      input.value = "";
      equalPress = 0;
    }
    input.value += buttonClass.value;
  });
});

equal.addEventListener("click",()=>{
  equalPress = 1;
  let inputValue = input.value;
  try {
    let solution = eval(inputValue);

    if(Number.isInteger(solution)){
      input.value = solution;
    }else{
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    alert("Invalid input");
    input.value = "";
  }
});

clear.addEventListener("click",()=>{
  input.value = "";
});

erase.addEventListener("click",()=>{
  input.value = input.value.substr(0, input.value.length - 1);
})