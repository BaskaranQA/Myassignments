let originalWord = 'level'
let characters=originalWord.split("");
console.log(characters)
let reversedWord=""
for(i=originalWord.length-1;i>=0;i--)
{
    reversedWord+=characters[i]
}
console.log("reverse Word :" + reversedWord)
if (reversedWord === originalWord)
{
    console.log("Its palindrome")
}
else
    {
        console.log("Its not palindrome")
    }