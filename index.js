
(()=>{
    const modalButton = document.getElementById('close-button');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const openModalButton = document.getElementById('dashboard-menu');

    const initialize = () => {
        modalButton.addEventListener('click', closeModal);
        openModalButton.addEventListener('click', openModal);
    };
    const closeModal = (event) => {
        event.preventDefault();
        modalContent.classList.remove('slideIn');
        modal.classList.remove('size-animation', 'modal-overlay');
        modal.classList.add('size-down-animation');
    }

    const openModal = (event) => {
        event.preventDefault();
        modalContent.classList.add('slideIn');
        modal.classList.remove('size-down-animation');
        modal.classList.add('size-animation', 'modal-overlay');
    }


    initialize();
})()