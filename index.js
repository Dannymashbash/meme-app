import { catsData } from "./data.js"

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats) {
    const catEmotion = []
    for (let cat of cats) {
        for (let emotions of cat.emotionTags) {
            catEmotion.push(emotions)
        }
    }
    return catEmotion
}

function renderEmotionsRadios(cats) {
    let emotionString = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {

        emotionString += `
    <div class="radio">
         <label for="${emotion}">${emotion}</label>
         <input
         type="radio"
         id= "${emotion}"
         value= "${emotion}"
         name= "emotion"
         >
    </div>
    `
    }
    emotionRadios.innerHTML = emotionString
}

renderEmotionsRadios(catsData)
