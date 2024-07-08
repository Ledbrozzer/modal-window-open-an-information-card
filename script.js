function openWindow(){
    const modal = document.getElementById('modal-window')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'close' || e.target.id == 'modal-window'){
            modal.classList.remove('open')
        }
    });
};