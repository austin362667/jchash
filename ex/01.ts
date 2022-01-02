import * as JCH from "../src/jc.ts"

function getRandomInt(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


let buckets:Map<number, number> =new Map()
let count = 10
  for (var i = 0; i < 75000; i++ ){
    const n = i//getRandomInt(2**0, 2**64)
    let b = JCH.ch(n, count)
    const tmp = buckets.get(b)
if (tmp !== undefined){
  buckets.set(b, tmp+1)
}else{
  buckets.set(b, 1)
}
}
console.log("buckets: ")
console.table(buckets)
// add two new buckets
for (var i = 0; i < 75000; i++ ){
  const n = i//getRandomInt(2**0, 2**64)
  let oldBucket = JCH.ch(n, count)
  let newBucket = JCH.ch(n, count+2)
  // if need, move data from oldBucket to newBucket.
  if (oldBucket != newBucket) {
    const obTmp = buckets.get(oldBucket)
    const nbTmp = buckets.get(oldBucket)
    if (obTmp !== undefined && nbTmp !== undefined){
      buckets.set(oldBucket, obTmp-1)
      buckets.set(newBucket, nbTmp+1)
    }
  }
}
console.log("buckets after add two nodes: ")
console.table(buckets)