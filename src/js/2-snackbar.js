import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const fieldset = document.querySelector("fieldset")
const delayInput = document.querySelector("input[type=number]")
const form = document.querySelector(".form")
let isSuccess;
let delay;


fieldset.addEventListener("change", function (event) {
    
    if (event.target.value === "fulfilled") {
        isSuccess = true
    } else { isSuccess = false }
    console.log(isSuccess);
    
})

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(delayInput);
    delay = delayInput.value;
    console.log(delay);
    
    if (!delayInput) { return }
    console.log("tes");
    
  
    if (isSuccess) {
        setTimeout(() => {
            return new Promise(resolve => {
                iziToast.show({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    messageColor: "#fff",
                    backgroundColor: '#59a10d',
                    position:'topRight'
                })
            })
        }, delay);
    } else {
        setTimeout(() => {
            return new Promise(reject => {
                iziToast.show({
                    message: `❌ Rejected promise in ${delay}ms`,
                    messageColor: "#fff",
                    backgroundColor: '#ef4040',
                    position:'topRight'
                })
            })
        }, delay);
    };
    delayInput.value = ""
});