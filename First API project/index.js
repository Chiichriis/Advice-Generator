const iconBtn = document.getElementById("btn");
const adviceId = document.querySelector(".advice-id")
const adviceTxt = document.querySelector(".advice")
const Api = 'https://api.adviceslip.com/advice';


// The API Function
async function AdviceGen(){
    const response = await fetch(Api);
    const data = await response.json();
    const {id, advice} = data.slip;
    adviceId.innerText = `ADVICE #${id}`;
    adviceTxt.innerText = `"${advice}"`;
}


iconBtn.addEventListener("click", (e) => {
    AdviceGen();
})