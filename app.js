var btnTransalte = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTraslationURL(text)
{
    return serverURL + "?" + "text=" + text
}
function errorHandler(error)
{
    console.log("error occured" , error);
    alert("something wrong with the server ! try again after sometime "); 
}

btnTransalte.addEventListener("click", function clickEventHandler()
{
   // outputDiv.innerText = "ohh! " + txtInput.value;
   var inputText = txtInput.value;
   fetch(getTraslationURL(inputText))
   .then(Response => Response.json())
   .then(json => {
       var trasalatedText = json.contents.translated;
    outputDiv.innerText = trasalatedText;  
   })
   .catch(errorHandler)
})