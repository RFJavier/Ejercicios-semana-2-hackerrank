function lonelyinteger(a) {
    // Write your code here
  let result = 0;
    for (let i = 0; i < a.length; i++) {
        result ^= a[i];
    }
    return result;
 
 
}

function gradingStudents(grades) {
    // Write your code here
 const roundedGrades = [];

  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];
    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

    if (grade < 38 || nextMultipleOfFive - grade >= 3) {
      roundedGrades.push(grade);
    } else {
      roundedGrades.push(nextMultipleOfFive);
    }
  }

  return roundedGrades;
}

function flippingBits(n) {
    // Write your code here

  let binary = n.toString(2);

  
  while (binary.length < 32) {
    binary = "0" + binary;
  }

  
  let inverted = "";
  for (let i = 0; i < 32; i++) {
    if (binary.charAt(i) === "0") {
      inverted += "1";
    } else {
      inverted += "0";
    }
  }

 
  return parseInt(inverted, 2);
    

}

function diagonalDifference(arr) {
    // Write your code here
let diagona = 0
    let diagonal = 0
    
    for(let i = 0; i < arr.length ; i++){
        diagona += arr [i][i]
        diagonal += arr [i] [arr.length-i-1]
    }
 let result = Math.abs(diagona - diagonal)
 return result;
}

function countingSort(arr) {
    // Write your code here

 const frequency = new Array(100).fill(0);

  
  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]]++;
  }

  return frequency;
  

}

function countingValleys(steps, path) {
    // Write your code here
let altitude = 0; 
  let valleys = 0; 
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      altitude++;
     
      if (altitude === 0) {
        valleys++;
      }
    } else {
      altitude--;
    }
  }
  return valleys;
}

function pangrams(s) {
    // Write your code here

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const set = new Set();
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();
    if (alphabet.includes(char)) {
      set.add(char);
    }
  }
  
  return set.size === 26 ? "pangram" : "not pangram";
}

function marsExploration(s) {
    // Write your code here
let count = 0;
    for (let i = 0; i < s.length; i += 3) {
        if (s[i] !== "S") count++;
        if (s[i + 1] !== "O") count++;
        if (s[i + 2] !== "S") count++;
    }
    return count;
}



