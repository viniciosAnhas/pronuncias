const speech = new SpeechSynthesisUtterance()

function clickBtnClean(){


    document.getElementById("txtNome").value = ""

}

function clickBtnPortuguese(){

    speech.text = nome()
    speech.lang = "pt-br"

    window.speechSynthesis.speak(speech)

}

function clickBtnEnglish(){

    speech.text = nome()
    speech.lang = "en"

    window.speechSynthesis.speak(speech)

}

function clickBtnSpanish(){

    speech.text = nome()
    speech.lang = "es"

    window.speechSynthesis.speak(speech)

}

function clickBtnItalian(){

    speech.text = nome()
    speech.lang = "it"

    window.speechSynthesis.speak(speech)

}

function clickBtnJapanese(){

    speech.text = nome()
    speech.lang = "ja"

    window.speechSynthesis.speak(speech)

}

function clickBtnChinese(){

    speech.text = nome()
    speech.lang = "zh"

    window.speechSynthesis.speak(speech)

}

function clickBtnFrench(){

    speech.text = nome()
    speech.lang = "fr"

    window.speechSynthesis.speak(speech)

}

function clickBtnGerman(){

    speech.text = nome()
    speech.lang = "de"

    window.speechSynthesis.speak(speech)

}

function clickBtnKorean(){

    speech.text = nome()
    speech.lang = "ko"

    window.speechSynthesis.speak(speech)

}

function clickBtnRussian(){

    speech.text = nome()
    speech.lang = "ru"

    window.speechSynthesis.speak(speech)

}

let nome = () => {
  
    return document.getElementById("txtNome").value

}