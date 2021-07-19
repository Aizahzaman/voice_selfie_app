var speechrecognotion_api=window.webkitSpeechRecognition;
var new_api= new speechrecognotion_api;

function start(){
    document.getElementById("voice_text").innerHTML="";
    new_api.start();
}

new_api.onresult= function (event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("voice_text").innerHTML=content;
    console.log(content);
    if(content=="take my selfie"){
        Webcam.attach(camera);
        setTimeout(function(){
            speak();
            selfie();
        },3000);
    }
}

function speak(){
    var speak_api=window.speechSynthesis;
    speak_data="Taking Selfie in 3 seconds"
    var speak_this= new SpeechSynthesisUtterance(speak_data);
    speak_api.speak(speak_this);
}

Webcam.set({
    width:360,
    height:360,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("camera");

function selfie(){
    Webcam.snap(function(link){
        document.getElementById("selfie").innerHTML='<img id="img1" src="'+ link +'">';
    })
    download();
}

function download(){
    a_tag_id=document.getElementById("anchor");
    image=document.getElementById("img1").src;
    a_tag_id.href=image;
    a_tag_id.click();
}