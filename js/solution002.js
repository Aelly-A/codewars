function accum(s) {
	let final = ''
    s.split('').forEach((x,i) => {
    let temp = ''
    x = x.toLowerCase()
    for(let j = -1; j < i; j++){
        temp += x
    }
    if(final.length != 0){
        final += '-' + capitalizeFirstLetter(temp)
    } else{
        final += capitalizeFirstLetter(temp)
    }
  })
  return final
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}