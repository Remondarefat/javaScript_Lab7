var currentImage = document.getElementById('myImage')
console.log(currentImage.src);
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
//! in imageContainer i added localhost to imagepath 
var imagesContainer=["http://127.0.0.1:5500/images/work-7.jpg" ,
"http://127.0.0.1:5500/images/2.jpg","http://127.0.0.1:5500/images/1.jpg"];

btn1.addEventListener('click' , function(){
    var i = imagesContainer.indexOf(currentImage.src)
    //! if condetion to check array boundaries
    if(i != 0){
        currentImage.src = imagesContainer[i-1]
        console.log(currentImage);
    }
})

btn2.addEventListener('click' , function(){
    var i = imagesContainer.indexOf(currentImage.src)
      //! if condetion to check array boundaries
    if(i != imagesContainer.length-1){
        currentImage.src =  imagesContainer[i+1]
        console.log(currentImage);
    }
})

