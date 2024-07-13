const colors =["green","blue","red","purple","skyblue","orange","yellow","pink","black"]

let userInput = parseInt(prompt("Enter The Number:"))

function colorChange(num) {
    for (let i = 0; i < num; i++) {
        let colorindex = i % colors.length
        document.body.style.backgroundColor = colors[colorindex]
    }
}
colorChange(userInput);


