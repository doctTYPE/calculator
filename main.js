

const result = document.getElementById('text')



let calculate = (num) =>{ 
  
  result.value += num;
  
};






function cance(){
  result.value = result.value.slice(0 , -1)

}


function cancel() {
  // body...
  result.value = " "
  
}
function egual(){
  try{
    result.value = eval(result.value)
  };
  catch(err){
    alert("invalid imput")
  }
}

