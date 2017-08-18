'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.reduce( (result , item)=>{
        if(objectB.value.includes(item.key))
            item.count --;
        result.push(item)
        return result;
    } , [])

}
