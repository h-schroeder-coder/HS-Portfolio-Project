function alertEmailAddress (event) {
    event.preventDefault();
    alert("Please email me at hankorschroeder@gmail.com");
}


let emailElement = document.querySelector(#email);
emailElement.addEventListener('click', alertEmailAddress);