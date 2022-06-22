function alphanumeric(string) {
    string = string.toLowerCase()
    let alphanum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    for (let i = 0; i < string.length; i++) {
        if (alphanum.indexOf(string[i]) == -1) {
            return false
        }
    }
    if(string.length < 1){
        return false
    }
    return true
}
