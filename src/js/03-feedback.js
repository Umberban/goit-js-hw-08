import throttle from 'lodash.throttle';
const mainKeyName = "feedback-form-state";
let obj ={
    email: "",
    message: "",
};
const mainFormEl = document.querySelector(".feedback-form");
const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };
function saveKey (event){
    obj[event.target.name] = event.target.value;
    localStorage.setItem(mainKeyName, JSON.stringify(obj));
}
function clearForm(event){
    event.preventDefault();
    console.log( obj)
    mainFormEl.reset();
    localStorage.removeItem(mainKeyName);
    for (const key in obj) {obj.key='';}
}   
function dataFromStorage(){
  if(localStorage.getItem(mainKeyName)!==null){
    obj = load(mainKeyName);
    for (const key in obj) {
        mainFormEl.elements[key].value=obj[key];
  }
}}
dataFromStorage();
mainFormEl.addEventListener('input',throttle(saveKey),500);
mainFormEl.addEventListener('submit',clearForm);