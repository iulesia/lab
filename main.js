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

function showDeveloperInfo(lastName, firstName, position ) {
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
    const newText = document.createTextNode('A gift that inspires, motivates, or reminds of something pleasant will always be appreciated more. Remember what a person dreams of?');
    newParagraph.appendChild(newText);
	newParagraph.classList.add('added-content');
    document.getElementById('name-list').after(newParagraph);
}

function removeContentButton() {
    const addedContent = document.querySelector('.added-content'); 
    if (addedContent) {
        addedContent.remove();
    } else {
        alert("No content added to remove.");
    }
}


function handleClick(event) {
    alert('Button clicked!');
}

function handleClickAttribute() {
    alert('Button clicked!');
}


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButtonProperty');
    button.onclick = handleClick;
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Button');


    function handleClick1(event) {
        alert('Button clicked! Handler 1');
    }

    function handleClick2(event) {
        console.log('Button clicked! Handler 2');
    }

    button.addEventListener('click', handleClick1);
    button.addEventListener('click', handleClick2);
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('my');
    const removeButton = document.getElementById('removeHandler');    
    const handler = {
        handleEvent: function(event) {
            alert(`Button clicked! Event on: ${event.currentTarget.tagName}`);
        }
    };  
    button.addEventListener('click', handler);
    removeButton.addEventListener('click', function() {
        button.removeEventListener('click', handler);
        alert('Event handler removed');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let selectedli;

    document.getElementById('myList').addEventListener('click', function(event) {
        var target = event.target;
        highlight(target);
    });

    function highlight(li) {
        if (selectedli) {
            selectedli.classList.remove('highlight');
        }
        selectedli = li;
        selectedli.classList.add('highlight');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    var menu = document.getElementById('menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    var menuButtons = document.querySelectorAll('.menuButton');

    menuButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var action = this.getAttribute('data-action');
            executeAction(action, event);
        });
    });

    function executeAction(action, event) {
       
        switch (action) {
            case 'showBirthdayGifts':
                showBirthdayGifts(event);
                break;
            case 'showNewYearGifts':
                showNewYearGifts(event);
                break;
            case 'showValentinesDayGifts':
                showValentinesDayGifts(event);
                break;
           
            default:
                console.log('Unknown action:', action);
        }
    }

    function showBirthdayGifts(event) {
        var confirmMsg = "Do you want to proceed to Birthday gifts page?";
        if (confirm(confirmMsg)) {
            window.location.href = "birthday presents.html";
        } else {
            event.preventDefault();
        }
        menu.classList.remove('open');
    }

    function showNewYearGifts(event) {
        var confirmMsg = "Do you want to proceed to New Year gifts page?";
        if (confirm(confirmMsg)) {
            window.location.href = "New Year presents.html";
        } else {
            event.preventDefault();
        }
        menu.classList.remove('open');
    }

    function showValentinesDayGifts(event) {
        var confirmMsg = "Do you want to proceed to Valentine's Day gifts page?";
        if (confirm(confirmMsg)) {
            window.location.href = "Valentine's day presents.html";
        } else {
            event.preventDefault();
        }
        menu.classList.remove('open');
    }

});

document.addEventListener('DOMContentLoaded', function() {
    const highlightOnHoverElements = document.querySelectorAll('.highlight-on-hover');

    highlightOnHoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const highlightColor = this.getAttribute('data-highlight-color');
            this.style.backgroundColor = highlightColor;
        });

        element.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const counterButton = document.getElementById('counterButton');  
    let count = parseInt(counterButton.getAttribute('data-count'));
    counterButton.addEventListener('click', function() {
        
        count++;
        counterButton.setAttribute('data-count', count);
        counterButton.textContent = `Click Me (${count})`;
    });
});



/*document.addEventListener('DOMContentLoaded', function() {
    const gifts = document.querySelectorAll('.gift');

    gifts.forEach(gift => {
        gift.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = '#bee1e6';
        });

        gift.addEventListener('mouseout', function(event) {
            event.target.style.backgroundColor = '#dbbee6';
        });
    });

    let draggedElement = null;

    document.addEventListener('mousedown', function(event) {
        if (event.target.classList.contains('gift')) {
            draggedElement = event.target;
            draggedElement.style.position = 'absolute';
        }
    });

    document.addEventListener('mousemove', function(event) {
        if (draggedElement) {
            draggedElement.style.left = (event.pageX - draggedElement.offsetWidth / 2) + 'px';
            draggedElement.style.top = (event.pageY - draggedElement.offsetHeight / 2) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        draggedElement = null;
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const gifts = document.querySelectorAll('.gift');

    gifts.forEach(gift => {
        gift.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = '#bee1e6';
        });

        gift.addEventListener('mouseout', function(event) {
            const relatedTarget = event.relatedTarget;
            if (!relatedTarget || !gift.contains(relatedTarget)) {
                event.target.style.backgroundColor = '#dbbee6';
            }
        });
    });

    let draggedElement = null;

    document.addEventListener('mousedown', function(event) {
        if (event.target.classList.contains('gift')) {
            draggedElement = event.target;
            draggedElement.style.position = 'absolute';
        }
    });

    document.addEventListener('mousemove', function(event) {
        if (draggedElement) {
            draggedElement.style.left = (event.pageX - draggedElement.offsetWidth / 2) + 'px';
            draggedElement.style.top = (event.pageY - draggedElement.offsetHeight / 2) + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        draggedElement = null;
    });
});

