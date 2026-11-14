const button = document.getElementById('show-button');
const modelInfo = document.getElementById('modelInfo');
const modelName = document.getElementById('model-name');
const modelColor = document.getElementById('model-color');
const modelSize = document.getElementById('model-size');

const model = {
    name: 'Cube',
    color: 'Blue',
    size: 2
};

button.addEventListener('click', () => {
    const modeltype = button.dataset.model;

    modelName.textContent = '';
    modelColor.textContent = '';
    modelSize.textContent = '';

    if (modeltype === 'cube') {
        modelInfo.classList.remove('hidden');
        modelName.textContent = model.name;
        modelColor.textContent = model.color;
        modelSize.textContent = model.size;
    } else {
        modelInfo.classList.add('hidden');
    }
});