const removeFromArray = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    var arr = args[0];
    args.splice(0,1)
    for(var i =0; i<args.length;i++){
        arr = arr.filter(function(item){
            return item !== args[i];
        })

    }
return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
