/* Select Card */
let cards = Array.from(document.querySelectorAll('.modal-back-this-project-card'));
cards.pop();
let input = Array.from(document.querySelectorAll('.rad'));
input.pop();
let popup = Array.from(document.querySelectorAll('.card-select-show'));

input.forEach((dataInput) => {
    dataInput.addEventListener('click', (e) => {
        let cardModal = e.target.closest('.modal-back-this-project-card');
        cards.forEach(x => {
            x.style.borderColor = '#cccbcb';
            x.style.boxShadow = 'none';
            x.children[0].style.borderBottom = 'none';
            
            if(screen.width <= 478){
                x.querySelector('.card-select-show').style.justifyContent ='center';
            x.querySelector('.card-select-show-container').children[0].style.padding = '0rem 0rem 1rem 0rem';
            }else{
                x.querySelector('.card-select-show').style.justifyContent ='space-between';
                x.querySelector('.card-select-show-container').children[0].style.padding = '0rem';
            }
        })
        popup.forEach(x => {
            x.style.display = 'none';
        });
        if(screen.width <= 478){
            cardModal.style.borderColor = 'hsl(176, 50%, 47%)';
            cardModal.style.boxShadow = '0px 0px 1px 1px hsl(176, 50%, 47%)';
            cardModal.querySelector('.modal-back-this-project-card-content').style.borderBottom = '1px solid #cccbcb';
            cardModal.querySelector('.card-select-show').style.display = 'flex';
            cardModal.querySelector('.card-select-show').style.justifyContent ='center';
            cardModal.querySelector('.card-select-show-container').children[0].style.padding = '0rem 0rem 1rem 0rem';
        }else{
            cardModal.style.borderColor = 'hsl(176, 50%, 47%)';
            cardModal.style.boxShadow = '0px 0px 1px 1px hsl(176, 50%, 47%)';
            cardModal.querySelector('.modal-back-this-project-card-content').style.borderBottom = '1px solid #cccbcb';
            cardModal.querySelector('.card-select-show').style.display = 'flex';
        }
    });
})

/* Select Card */

/* Modal Back This Project */

let buttonModal = document.querySelector('.back-this-button');
let close = document.querySelector('.close-modal');

buttonModal.addEventListener('click', () => {
    let modal = document.querySelector('.modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 200);
})

close.addEventListener('click', () => {
    let modal = document.querySelector('.modal');
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
})

window.addEventListener('click', (e) => {
    let modal = document.querySelector('.modal');
    if(e.target === modal){
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
        }, 200) 
    }
})

/* Modal Back this Project*/

/* Bookmark */

let bmButton = document.querySelector('.button-bookmark');
let iconBm = document.querySelector('.button-bookmark-icon');
let bmText = document.querySelector('.button-bookmark-text');

bmButton.addEventListener('click', (e) => {
    if(bmText.textContent === 'Bookmark'){
        iconBm.src = 'images/icon-bookmark-acc.svg';
        bmText.textContent = 'Bookmarked';
    }else{
        iconBm.src = 'images/icon-bookmark.svg';
        bmText.textContent = 'Bookmark';
    }
})

/* Bookmark */

/* Modal Select Reward */

let bmButtonSr = document.querySelector('.select-reward-button-modal');
let bmSr = document.querySelectorAll('.sub-card-button');

bmSr.forEach((el) => {
    el.addEventListener('click', (e) => {
        let modal = document.querySelector('.m-select-reward');
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 200);
    });
});

bmButtonSr.addEventListener('click', (e) => {
    let modal = document.querySelector('.m-select-reward');
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
})

window.addEventListener('click', (e) => {
    let modal = document.querySelector('.m-select-reward');
    if(e.target === modal){
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = 'none';
        }, 200);
    }
})


/* Modal Select Reward */

/* Detail Header Burger */

let burger = document.querySelector('.nav-detail-burger');
let modalRes = document.querySelector('.modal-header-res');

burger.addEventListener('click', (e) => {
    modalRes.style.opacity = 1;
    modalRes.style.display = 'flex';
});

window.addEventListener('click', (e) => {
    if(e.target === modalRes){
        modalRes.style.opacity = 0;
        setTimeout(() => {
            modalRes.style.display = 'none';
        }, 200);
    }
});

/* Detail Header Burger */
