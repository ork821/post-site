//Functions

function enterClick() {
    if ($('.maintext .post-title').is(':focus')) {
        let elem_pos = $('.maintext .post-title:focus').caret('pos'); //gets position of caret
        let text = $('.maintext .post-title:focus').text(); //gets text from focused element
        let text_next = text.slice(elem_pos); //contains text after caret
        let text_prev = text.slice(0, elem_pos);  //contains text before caret

        $('.maintext .post-title:focus').empty().text(text_prev); //puts text before caret into element

        $('<p class="post-title" contenteditable="true">' + String(text_next) + '</p>').insertAfter($(".maintext" +
            " .post-title:focus")); //insert paragraph after focused element with text after caret
        $('.maintext .post-title:focus').next().focus(); //focus on next element

        $('.h-btns').children().removeClass('active').addClass('disabled');
    }
}

//function with deletes paragraph if it's empty
function deleteParagraph() {
    $('.maintext .post-title:focus').prev().focus();
    let el = $('.maintext .post-title:focus').text().length;
    $('.maintext .post-title:focus').caret('pos', el); //set caret position on last char of string
    $('.maintext .post-title:focus').next().detach(":empty"); //deleting element if empty
}


function caretPos() {
    let el = $('.maintext .post-title:focus').text().length;
    $('.maintext .post-title:focus').caret('pos', el);
}

function getSelectionText() {
    var txt = '';
    if (txt = window.getSelection) { // Не IE, используем метод getSelection
        txt = window.getSelection().toString();
    } else { // IE, используем объект selection
        txt = document.selection.createRange().text;
    }
    return txt;
}


function get_tag_name(target) {
    let tag = $(target).get(0).tagName;
    return tag.toLowerCase();
}

