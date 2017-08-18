'use strict';


module.exports = function countSameElements(collection) {
    return collection.reduce( (result , item)=>{
        let site = result.findIndex( (obj)=>{
            return obj.key === item;
        })

        if( site === -1 )
            result.push({key:item , count:1})
        else
            result[site].count += 1;
        
        return result;

    } , []);
}
