'use strict';

function countSameItem(collectionA) {
    return collectionA.reduce( (result , item)=>{
        let site = result.findIndex( (obj)=>{
            return obj.key === item;
        })

        if( site === -1 )
            result.push({key:item , count:1});
        else
            result[site].count += 1;
        return result;
    } , [])
}

function findSameItem(countSameCollection , objectB) {
    return countSameCollection.reduce( (result , item)=>{
        if(objectB.value.includes(item.key))
            item.count -= Math.floor(item.count / 3);
        result.push(item);
        return result;
    } , [])
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let countSameCollection = countSameItem(collectionA);
    return findSameItem(countSameCollection , objectB);
}
