 

 
function changeImage(){
    
    var myImage = document.querySelector('img');
    
    
        var mysrc = myImage.getAttribute('src');
        
        if (mysrc === "images/JS1.jpg") {
            myImage.setAttribute ('src',"images/JS2.png");
        }
        else {
            myImage.setAttribute = ('src', "images/JS1.jpg");
           
        }
 
}

function getUser(){
     var myHeading = document.querySelector('h1');
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = "Welcome " + myName;
}