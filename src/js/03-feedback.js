// import throttle from 'lodash.throttle';
const mainKeyName = "feedback-form-state";
const obj ={
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
function saveKey (){
    obj.email = mainFormEl.elements.email.value;
    obj.message = mainFormEl.elements.message.value;
    localStorage.setItem(mainKeyName, JSON.stringify(obj));
}
function clearForm(event){
    event.preventDefault();
    console.log( `email: ${mainFormEl.elements.email.value} message: ${mainFormEl.elements.message.value}`)
    mainFormEl.reset();
    localStorage.removeItem(mainKeyName);
}   



  if(localStorage.getItem(mainKeyName)!==null){
    if(mainFormEl.elements.email.value===""||mainFormEl.elements.message.value===""){
        const tempObj = load(mainKeyName);
        mainFormEl.elements.email.value = tempObj.email;
        mainFormEl.elements.message.value = tempObj.message;
    }
}
 
mainFormEl.addEventListener('input',saveKey);
mainFormEl.addEventListener('submit',clearForm);