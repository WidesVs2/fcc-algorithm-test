import * as  Functions  from './utilityFunctions.js'

// FCC Algorithm Code here

// Basic Algorithm Block
// Checking largest values amongst arrays
export function largestOfFour(arr) {
    let test = -10000
    let final = []
    for(let i = 0; i <= arr.length - 1; i++) {
      for(let j = 0; j <= arr[i].length; j++) {
        if (arr[i][j] > test) {
            test = arr[i][j]
        }
        
      }
      final.push(test)
        test = -10000
      
    }
    return final
}

// Checking if str ends with target $=ends with, could use endsWith() method but not allowed by FCC
export function confirmEnding(str, target) {
    let regex = new RegExp(`${target}$`)
    Functions.log(regex)

    return regex.test(str)
}

// Create a script to repeat a given string a given number of times
export function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        str = ''
    } else {
        let addStr = str
        for (let i = 1; i < num; i++) {
            str += addStr
        }
    }
    
    return str
}

export function truncateString(str, num) {
    let end = '...'
    if (str.length > num) {
        let arr = str.split('')
        arr.splice(num)
        Functions.log(arr)
        let finStr = arr.join('')
        finStr+= '...'
        return finStr
    } else {
        return str
    }
}

// Check if any elements of an array pass a function call
export function findElement(arr, func) {
  let result
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
        return arr[i]
    } else {
        result = undefined
    }    
  }
  if (result === undefined) {
      return undefined
  }
}

// Check if value is Boolean primitive
export function booWho(bool) {
   return bool === true || bool === false ? true : false
    
}

// Same as above, just written in a more verbose syntax
export function booWhoVerbose(bool) {
    if (bool === true || bool === false) {
        return true
    } else {
        return false
    }
}

// Returns given str in Title Case, connecting Words included
export function titleCase(str) {
    let final = []
    let lowercase = str.toLowerCase()
    let arr = lowercase.split(' ')
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i]
        let newArr = word.split('')
        let letter = newArr[0]
        let uppercase = letter.toUpperCase()
        newArr.splice(0, 1, uppercase)
        let newWord = newArr.join('')
        final.push(newWord)
    }
    let finalStr = final.join(' ')
    return finalStr
}

// Splice first array into given index of second array
export function frankenSplice(arr1, arr2, n) {
    let newArr = [...arr2]
    for (let i = 0; i < arr1.length; i++) {
        newArr.splice(n, 0, arr1[i])
        n++
    }
    return newArr
}

// Removes falsy elements from given array
// Falsy values: false, null, 0, "", undefined, and NaN
export function bouncer(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i])
    }
    return newArray
}

// Return the index to insert value after array is sorted
export function getIndexToIns(arr, num) {
    arr.sort(function(a, b) {
        return a - b
    })
    if (arr.length <= 0) {
        return 0
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > num) {
                return i
            }
            if (arr[i] === num) {
                return i
            }
        }
        return arr.length++
    }
}

// Check if second element of array is fully present in first element of array
export function mutation(arr) {
    let str1 = arr[0]
    let str2 = arr[1]
    let lower1 = str1.toLowerCase()
    let lower2 = str2.toLowerCase()
    let strArr1 = lower1.split('')
    let strArr2 = lower2.split('')
    let result = []
    Functions.log(str1, str2, lower1, lower2, strArr1, strArr2, result)

    for (let i = 0; i < strArr2.length; i++) {
        result.push(strArr1.indexOf(strArr2[i]))
        Functions.log(result)
    }
    for (let j = 0; j < result.length; j++) {
        if (result[j] === -1) {
            return false
        }
    }
    return true
}

// Splits arg1(Array) into 2d Array Groups of arg2(Size)
export function chunkArrayInGroups(arr, size) {
    let result = []
    if(size === 0) {
        Functions.log('Invalid Parameter: You divided by Zero')
        return arr
    } else {
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size))
            
        }
        return result
    }
}

