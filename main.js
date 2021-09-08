

const result = document.getElementById('text')



let calculate = (num) =>{ 
  
  result.value += num;
  tryy()
};






function cance(){
  result.value = result.value.slice(0 , -1)
  tryy()
}


function cancel() {
  // body...
  result.value = " "
  tryy()
}
function egual(){
  try{
    result.value = eval(result.value)
    tryy()
    
  }
  catch(err){
    alert("invalid imput")
  }
}

function tryy(){
  if(result.value.length>11){
    alert("try to use 11 caracters")
  }
  else{
    pass
  }
}
