Webcam.set({
height:300,
width:350,
image_format:"png",
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="capture_image" src="'+ data_uri+'"/>';

});
console.log('ml5 version:',ml5.version);
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/n2l24rsMZ/model.json',modelLoaded);
function modelLoaded(){
console.log(modelLoaded)
}

function check(){
    img=document.getElementById ('capture_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("resultobject").innerHTML= "object : " + results[0].label;
    document.getElementById("resultaccuracy").innerHTML= "accuracy : "  + results[0].confidence.toFixed(3);
}
}

