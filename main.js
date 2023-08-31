function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/giA0KWYvq/model.json",modelready)
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
    }
    document.getElementById("resultadoNome").innerHTML="posso ouvir "+results[0].label
    document.getElementById("resultadoPrecisao").innerHTML="precisão"+results[0].confidence.toFixed(2)

    
    woah=document.getElementById("woah")
    nootnoot=document.getElementById("nootnoot")
    windows=document.getElementById("windows")
    mario=document.getElementById("mario")

    if(results[0].label == "yeah"){
        woah.style.filter="grayscale(0)"
        nootnoot.style.filter="grayscale(1)"
        windows.style.filter="grayscale(1)"
        mario.style.filter="grayscale(1)"
    } 
    else  if(results[0].label == "Pingu"){
        woah.style.filter="grayscale(1)"
        nootnoot.style.filter="grayscale(0)"
        windows.style.filter="grayscale(1)"
        mario.style.filter="grayscale(1)"
    } 
    else  if(results[0].label == "windows"){
        woah.style.filter="grayscale(1)"
        nootnoot.style.filter="grayscale(1)"
        windows.style.filter="grayscale(0)"
        mario.style.filter="grayscale(1)"
    } 
    else  if(results[0].label == "mauro"){
        woah.style.filter="grayscale(1)"
        nootnoot.style.filter="grayscale(1)"
        windows.style.filter="grayscale(1)"
        mario.style.filter="grayscale(0)"
    }
}