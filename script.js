let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const input = document.querySelector("input")
const button = document.querySelector("[type=button]")
const word = document.querySelector(".word")
const trans = document.querySelector(".trans")
const sound = document.querySelector(".fa-sound")
const text = document.querySelector(".text")
const example = document.querySelector(".example")




let getWord = () => {
    let inputWord = input.value
    fetch(`${url}${inputWord}`)
    .then(data => data.json())
    .then(item => {
        word.textContent = input.value
        text.textContent = item[0].meanings[0].partsOfSpeech
    } );

}



button.addEventListener("click", getWord)



