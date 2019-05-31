$(document).ready(function($) {

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



    //Реализация holderplace
    $(".post-title, .title").focusout(function(){
        var element = $(this);
        if (!element.text().replace(" ", "").length) {
            element.empty();
        }
    });


    //Обработка нажатий кнопок

    $(document).on('keydown', function (e) {
        switch (e.which) {

            case (keys['ENTER']):
                e.preventDefault();
                enterClick();
                break;

            case (keys['BACKSPACE']):
                if ($('.maintext .post-title:focus').attr('id') == 'first_el') {
                    return;
                } else if ($('.maintext .post-title:focus').is(':empty')) {
                    e.preventDefault();
                    deleteParagraph()
                }
                break;

            case (keys['UP']):

                e.preventDefault();
                $('.maintext .post-title:focus').prev().focus();
                caretPos();

                break;

            case (keys['DOWN']):
                if ($('.maintext .post-title:focus').next()) {
                    $('.maintext .post-title:focus').next().focus();
                    caretPos();
                }
                break;
        }
    });


    /*$('.maintext').on('mouseover', function () {
        selection = getSelectionText();
        if (selection != '' || ($('aside.sidebar').mouseover() != false) ){
            $('.sidebar').show();
        } else {
            $('.sidebar').hide();
        }
    });*/


    $(document).on('mousemove', function () {
        if ($('.post-title:focus')) {
            let target = $('.post-title:focus');
            $('.h-btns span').on('click', function (e) {
                $('.h-btns').children().removeClass('active');
                $(this).addClass('active');
                let text = target.text();
                switch (e.target.id) {
                    case 'h2':
                        $('<h2 class="post-title" contenteditable="true">' + text + '</h2>').insertAfter(target);
                        target.remove();
                        break;
                    case 'h3':
                        $('<h3 class="post-title" contenteditable="true">' + text + '</h3>').insertAfter(target);
                        target.remove();

                        break;
                    case 'h4':
                        $('<h4 class="post-title" contenteditable="true">' + text + '</h4>').insertAfter(target);
                        target.remove();

                        break;
                    case 'h5':
                        $('<h5 class="post-title" contenteditable="true">' + text + '</h5>').insertAfter(target);
                        target.remove();

                        break;
                    case 'h6':
                        $('<h6 class="post-title" contenteditable="true">' + text + '</h6>').insertAfter(target);
                        target.remove();

                        break;
                    case 'p':
                        $('<p class="post-title" contenteditable="true">' + text + '</p>').insertAfter(target);
                        target.remove();

                        break;

                }
            });
        }
    });

    //Определяет какой тег у нас выделен и делает активной нужную кнопку
    $('.post-title').on('click', function () {
        if ($('.post-title').is(':focus')) {
            let target = $('.post-title:focus');
            let tag = get_tag_name(target);
            $('.h-btns').children().removeClass('active');
            $('#' + tag).addClass('active');
        }

    });














});


