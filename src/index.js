module.exports = function reverse (n) {
    if(typeof n !== 'number'){
        return console.log('argument is not a number');
    }
    else if(String(n).length===1){
        return console.log('enter number over +-9');
    }
    else{ 
    if(n<0){n = n*-1}
    numToStr = String(n)
    console.log(result = +(numToStr.split('').reverse().join('')))
    return result = +(numToStr.split('').reverse().join(''))}
}