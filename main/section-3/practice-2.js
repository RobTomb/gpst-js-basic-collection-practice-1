'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.reduce( (result , item)=>{
        if(objectB.value.includes(item.key))
            item.count = item.count - Math.floor(item.count / 3);
        result.push(item);
        return result;
    } , [])
}
