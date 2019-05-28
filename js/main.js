//Functions
//
function enterClick() {
    let elem_pos = $('.main-text p.post-title:focus').caret('pos'); //gets position of caret
    let text = $('.main-text p.post-title:focus').text(); //gets text from focused element
    let text_next = text.slice(elem_pos); //contains text after caret
    let text_prev = text.slice(0, elem_pos);  //contains text before caret

    $('.main-text p.post-title:focus').empty().text(text_prev); //puts text before caret into focused element

    $('<p class="post-title" contenteditable="true">'+ String(text_next) + '</p>').insertAfter($(".main-text" +
        " p.post-title:focus")); //insert paragraph after focused element with text after caret
    $('.main-text p.post-title:focus').next().focus(); //focus on next element
}

//function with deletes paragraph if it's empty
function deleteParagraph() {
    $('.main-text p.post-title:focus').prev().focus();
    let el = $('.main-text p.post-title:focus').text().length;
    $('.main-text p.post-title:focus').caret('pos', el); //set caret position on last char of string
    $('.main-text p.post-title:focus').next().detach(":empty"); //deleting element if empty
}


jQuery(function($){
    let keys = {
        'BACKSPACE': 8,
        'TAB': 9,
        'ENTER': 13,
        'ESCAPE': 27,
        'LEFT': 37,
        'UP': 38,
        'RIGHT': 39,
        'DOWN': 40,
        'DELETE': 46
    };

    let id_elem = 1;

    //Реализация holderplace
    $(".post-title").focusout(function(){
        var element = $(this);
        if (!element.text().replace(" ", "").length) {
            element.empty();
        }
    });


    //Обработка нажатий кнопок
    $(document).on('keydown',function(e) {
        switch (e.which) {

            case (keys['ENTER']):
                e.preventDefault();
                enterClick();
                break;

            case (keys['BACKSPACE']):
                if($('.main-text p.post-title:focus').attr('id') == 'first_el' ){
                    return;
                } else if ($('.main-text p.post-title:focus').is(':empty')){
                    e.preventDefault();
                    delete_paragraph();
                }
                break;

            case (keys['UP']):
                $('.main-text p.post-title:focus').prev().focus();

                let el = $('.main-text p.post-title:focus').text().length;
                $('.main-text p.post-title:focus').caret('pos', el);//set caret position on last char of string
                break;

            case (keys['DOWN']):
                if ($('.main-text p.post-title:focus').next()){
                    $('.main-text p.post-title:focus').next().focus();
                }
                break;
        }
    });




//    Выделение теста
    $(document).on('select', function (e) {

    })


});


