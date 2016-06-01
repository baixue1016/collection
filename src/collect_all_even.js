'use strict';

function collect_all_even(collection) {
    var arr = [];

    for(var i in collection){
        if(collection[i]%2 == 0){
            arr.push(collection[i]);
        }
    }

    return arr;
}

module.exports = collect_all_even;
