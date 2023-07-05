
//2
function  ascDesNone(arr, str) {
    if (str === "Asc") {
      return arr.sort((a, b) => a - b);
    } else if (str === "Des") {
      return arr.sort((a, b) => b - a);
    } else {
      return arr;
    }
  }
  

const arr = [6, 7, 3, 8, 1, 7, 2, 6];
console.log( ascDesNone(arr, "Asc")); 
console.log( ascDesNone(arr, "Des")); 
console.log( ascDesNone(arr));

//3

function indexMultiplier(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i] * i;
    }
    return sum;
  }
  
  //4

function isSpecialArray(a) {
    for (let i = 0; i < a.length; i++) {
      if (i% 2 != a[i] % 2 ) {
        return false;
      } else if (i % 2 !== 0 && a[i] % 2 === 0) {
        return false;
      }
    }
    return true;
  }
  