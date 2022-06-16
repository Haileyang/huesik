// SELECT ALL
function selectAll(selectAll)  {
    const checkboxes = document.getElementsByName('agree-post');
    const checkAll = document.querySelector('.check-all')
    checkAll.classList.toggle('on')
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    })
}

// MODAL
function modalClose(event){
    console.log('ho')
    let target = event.target;
    let modal = target.closest('.modal')
    modal.classList.remove('.show')

}
function test(){
    alert('hi')
}
// $("div[id^='modal-agree']").each(function () {
//     $(' .close, .btn-confirm, .btn-default .modal-backdrop, .modal-new').click(function () {
//         $('.modal').removeClass('show');
//         $('.modal').css('display', 'none');
//         $('.modal-backdrop').removeClass('show');
//     });
// });