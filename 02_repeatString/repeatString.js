const repeatString = function(word,times) {
    if(times <0 ){
        return "ERROR"
    }
    var res="";
    for(var i =0; i<times;i++){
      res = res+word;
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
