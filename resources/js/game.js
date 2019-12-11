function onDrop(event, group) {
    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);
    if (validationDrop(draggableElement, group)) {
        openModal('Grupo no correcto');
        return;
    }


    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event
        .dataTransfer
        .clearData();
}

function onDragOver(event) {
    event.preventDefault();
}

function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);
}

function validationDrop(element, group) {
    var elementValue = element.attributes["group"].value;
    return elementValue !== group;
}