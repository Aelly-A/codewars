function rot13(message){
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let r = ''
    for(let i = 0; i < message.length; i++){
      if(alpha.indexOf(message[i].toLowerCase()) != -1){
        let temp = alpha.indexOf(message[i].toLowerCase()) + 13
        temp = temp > 25 ? temp - 26 : temp
        if(r.length == 0 && message[0] == message[0].toUpperCase()){
          r += alpha[temp].toUpperCase()
        } else{
          r += alpha[temp]
        }
        } else {
        r += message[i]
      }
    }
    r[0] = r[0].toUpperCase()
    return r
  }