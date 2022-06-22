function accum(s) {
	let n = ''
    s.split('').forEach((x,i) => {
    let temp = ''
    x = x.toLowerCase()
    for(let j = -1; j < i; j++){
        temp += x
    }
    if(n.length != 0){
        n += '-' + capitalizeFirstLetter(temp)
    } else{
        n += capitalizeFirstLetter(temp)
    }
  })
  return n
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}