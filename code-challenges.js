// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."
console.log("1:\n")

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// create a function that will take in any array. 
const yourOut = (array) => {
    // create an empty array to store the new ones in
    var pleazeWork = []
    // Create a for loop to go through the array
    for (var i = array - 1; i > 0; i--) {
        // Get the randomized to work 
        var i = Math.floor(Math.random() * (i + 1));
        return array.push(pleazeWork)
    }
}
console.log(yourOut(collections))
// This one didn't work but I was on this for hours. So I just honestly don't know what to do. I had it working with the arrays but not with the randomizer but now I have no idea how to even get back to that.

// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
console.log("2:\n")

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// create a function that will take in the array
const getCubed = (arr) => {
    // make another 
    sum = 0;
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*arr[i]*arr[i]
    }
    return arr
}
console.log(getCubed(cubeAndSum1))
console.log(getCubed(cubeAndSum2))

// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
console.log("3:\n")

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

function arrMaxMin(array){
    return [Math.min.apply(null, array), Math.max.apply(null, array)];
}
console.log(arrMaxMin(nums1));
console.log(arrMaxMin(nums2));

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.
console.log("4:\n")

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"


function everyOther (string) {
    var letters = "";
    for (i=0; i < string.length; i++) {
        letters += i % 2 != 0 ? string.charAt(i).toUpperCase() : string.charAt(i);
    }
    return letters;  
}

console.log(everyOther(testString1));
console.log(everyOther(testString2));

// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
console.log("5:\n")

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

console.log(mergeArrays(arr1, arr2))

//  Hey guys, so this assessment was the hardest one I have done. It made me feel like I know nothing, which I know is not true but I do think I need a review on Higher order functions. And I am just lost with some of the array methods. I am going to be studying this a lot more but I felt pretty downcast after this since I had to look up most of my answers or look up how to do them. 