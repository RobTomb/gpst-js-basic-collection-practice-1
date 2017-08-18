'use strict';


function getNum(str) {
    if(str.length === 1)
        return 1;
    else
        return parseInt(str.match(/[0-9]+/));
}

function countSameItem(collectionA) {
    return collectionA.reduce( (result , item)=>{
        let site = result.findIndex( (obj)=>{
            return obj.key === item[0];
        })
        if(site === -1)
            result.push({key:item[0] , count:getNum(item)});
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
