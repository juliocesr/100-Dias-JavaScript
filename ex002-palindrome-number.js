function palindromo (x) {

    let str = x.toString().split('').join('');
    let aux = x.toString().split('').reverse().join('');

    if (aux === str) {
        return true;
    } else {
        return false;
    }
    
}