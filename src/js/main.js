$(document).ready(()=>{
    callHandler();
})

function callHandler(){
    $('.header-contacts__button').on('click', ()=>{
        $('.overlay').show();
    })
    $('.popup-close').on('click', ()=>{
        $('.overlay').hide();
    })
}