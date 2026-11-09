/* 1.Check if a String is a Palindrome 
Problem Statement: 
Write a JS Program to check if a string is a palindrome. 
Sample Input: 
str = "madam" 
Sample Output: 
madam is a palindrome.  */

let str = "madam";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}

if (str === rev) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}


/* 

2. Count Vowels and Consonants 
Problem Statement: 
Write a Java program that counts vowels in a given string. 
Sample Input: 
str = "Hello World" 
Sample Output: 
Vowels: 3  */

let strr = "Hello World";
let count = 0;

for (let i = 0; i < strr.length; i++) {
    if (
        strr[i] === 'a' || strr[i] === 'e' || strr[i] === 'i' ||
        strr[i] === 'o' || strr[i] === 'u' ||
        strr[i] === 'A' || strr[i] === 'E' || strr[i] === 'I' ||
        strr[i] === 'O' || strr[i] === 'U'
    ) {
        count++;
    }
}

console.log("Vowels:", count);

/* 
3. Find Duplicate Words in a Sentence 
Problem Statement: 
Write a JS program that reads a sentence (string), splits it into words (array), and finds duplicate 
words along with their counts. 
Sample Input: 
"Java is great and Java is powerful"
 */

// Input sentence
let str2 = "Java is great and Java is powerful and and Java wow.";

// Convert sentence into an array of words
let words = str2.split(" ");

// Loop through each word
for (let i = 0; i < words.length; i++) {

    // Flag to check whether the word was already processed
    let alreadyChecked = false;

    // Check all previous words
    for (let k = 0; k < i; k++) {

        // If current word already appeared before
        if (words[i] === words[k]) {
            alreadyChecked = true;
            break; // No need to check further
        }
    }

    // Skip duplicate occurrences already counted
    if (alreadyChecked) {
        continue;
    }

    // Count starts from 1 because current word exists once
    let count = 1;

    // Compare current word with remaining words
    for (let j = i + 1; j < words.length; j++) {

        // If same word found again
        if (words[i] === words[j]) {
            count++;
        }
    }

    // Print only duplicate words
    if (count > 1) {
        console.log(words[i] + " : " + count);
    }
}


/* 
4. Convert a Sentence to Word Array and Sort Alphabetically 
Problem Statement: 
Given a string sentence, split it into words and return them sorted alphabetically. 
Sample Input: 
"zebra apple mango banana" 
Sample Output: 
[apple, banana, mango, zebra] 
Hint: Use Arrays.sort(array to sort) */



// Input sentence
let str3 = "zebra apple mango banana aditya";

// Convert string into array
let wordss = str3.split(" ");

// Sort words alphabetically
wordss.sort();

// Print result
console.log(wordss);