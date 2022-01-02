import * as R from "./rand.ts"


// The JS native random function cannot ser seed.
// So, I have implemented some other pseudo random generator.

// function jch1(key:any, m:number) {
//     let b:number = 0
//     for (var j:number = 1; j < m; j++) {
//         if (Math.random() < 1 / (j + 1))
//             b = j
//     }
//     return b
//   }

// function jch2(key:any, m:number) {
//     let b = -1
//     let j = 0
//     while (j < m) {     
//         b = j           
//         let r = Math.random()
//         j = Math.floor((b + 1) / r)  
//     }
//     return b;
// }


// TODO: handle big number in JS. e.g.,2862933555777941757ULL
// However all JS Number type are in 64 bits.

// function jch3(key:any, m:number) {
//     let b = -1, j = 0
//     while (j < m) {
//         b = j
//         key = key * 2862933555777941757 + 1
//         j = (b + 1) * (Number(1 << 31) / Number((key >> 33) + 1))
//     }
//     return b
// }

export function ch(key:any, m:number){
  R.seed(key)
  let b = -1
  let j = 0
  let c = 0
    while (j < m) {     
      c++
      b = j           
      const r = R.random()
      j = Math.floor((b + 1) / r)  
    }
  return b
}
 