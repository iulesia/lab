function giftDialog() {
    let answer;
    do {
        answer = prompt("Are you choosing a gift for a loved one? Enter 'yes' or 'no':");
        answer = answer.toLowerCase(); 
    } while (answer !== 'yes' && answer !== 'no');

    if (answer === 'yes') {
        alert("Then this page will help you with your choice.");
    } else {
        alert("Then we hope that this information will be useful and informative for you.");
    }
}

function showDeveloperInfo(lastName, firstName, position = "Web Developer") {
    let info = "Last Name: " + lastName + "\n" +
               "First Name: " + firstName + "\n" +
               "Position: " + position;
    alert(info);
}


function changeBackground() {
    document.body.style.backgroundColor = '#659DBD';
    setTimeout(function () {
        document.body.style.backgroundColor = '#dddede';
    }, 30000);
}

function redirect(){
    setTimeout(() => {
        location.href = 'https://enjoythewood.ua/blog/layfhak-kak-vybrat-podarok-i-ne-progadat/';
    });
}

function compareStringsPrompt() {
    var str1 = prompt("Enter the first string:");
    var str2 = prompt("Enter the second string:");

    if (str1 === null || str2 === null) {
        return;
    }

    if (str1.trim() === "" || str2.trim() === "") {
        alert("Please enter both strings.");
        return;
    }

    compareStrings(str1, str2);
}

function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`The string "${str1}" is longer than the string "${str2}".`);
    } else if (str2.length > str1.length) {
        alert(`The string "${str2}" is longer than the string "${str1}".`);
    } else {
        alert('The strings have the same length.');
    }
}

function changeStyle() {
   
    var stringElement = document.getElementById("string");
    stringElement.style.fontWeight = "bold";
    stringElement.style.color = "purple";
    stringElement.style.fontSize = "20px";
}



document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll('ul[type="square"] li');
    listItems.forEach(item => {
        console.log('innerHTML:', item.innerHTML);
        console.log('outerHTML:', item.outerHTML);
        console.log('textContent:', item.textContent);
    });
});


function addContentButton() {
    const newParagraph = document.createElement('p');
    const newText = document.createTextNode('new paragraph');
    newParagraph.appendChild(newText);
    document.getElementById('name-list').after(newParagraph);
}

function removeContentButton() {
    document.getElementById('link-list').remove();
}