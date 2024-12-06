const checkBox = document.getElementById('divStyle');
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('#btn');
const dynamicDisplay = document.getElementById('dynamicDisplay');
const form = document.getElementById('settings');

function handleTextInput(e) {
    console.log('TextField');  
}

textFields.forEach((field)=> {
    field.addEventListener('input', handleTextInput);
});
    
button.addEventListener('click', function(){
    e.preventDefault();
    dynamicDisplay.querySelector('.new-element')?.remove();  
}); 

checkBox.addEventListener('change', function(e) {

    const colorField = settings.color;
    const contentField = settings.content; 

    const existingDiv = dynamicDisplay.querySelector('.new-element');
    if (existingDiv) {
    existingDiv.remove();
    }

    if(e.target.id === 'divStyle') {
        const newElement = document.createElement('div');
        newElement.classList.add('new-element');
        newElement.style.backgroundColor = colorField.value;
        newElement.innerHTML = contentField.value;   
        dynamicDisplay.insertAdjacentElement('beforeend', newElement);      
    }
});