
//using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
let text = colors.join(";");
console.log(text)
//apply the splice() method to remove the second and third elements from the colors array and replace
colors.splice(1,2,'purple','pink')
console.log(colors)
//utilize the copywithin()method to copy the elements from index1 to index3 within the colors array to index0
colors.copyWithin(0,1,3);
console.log(colors)
//finally,transform all element of the colors array to uppercase using the toUpperCase()method.

console.log(colors.toString().toUpperCase())
 //apply the find()method to find the first element in the colors array that starts with the letter'b'.
let x = colors.find((color)=>color.startsWith("b"));
console.log(x)
//apply the slice()method to create anew array selectedColors containing the elements from index1 to index3(inclusive)from the colors array.

console.log(colors.slice(1,4))


