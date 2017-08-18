'use strict';

function getNum(str) {
    if(str.length === 1)
        return 1;
    else
        return parseInt(str.match(/[0-9]+/));
}

module.exports = function countSameElements(collection) {
    return collection.reduce( (result , item)=>{
        let site = result.findIndex( (obj)=>{
            return obj.key === item[0];
        })

        if( site === -1 )
            result.push({key:item[0] , count:getNum(item)});
        else
            result[site].count += 1;
        
        return result;

    } , []);
}
