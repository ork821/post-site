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
                $(".main-text").append('<p class="post-title" contenteditable="true"></p>');
                $('.main-text p.post-title:focus').next().focus();
                break;

            case (keys['BACKSPACE']):
                if($('.main-text p.post-title:focus').attr('id') == 'first_el' ){
                    return;
                } else if ($('.main-text p.post-title:focus').is(':empty')){
                    e.preventDefault();
                    $('.main-text p.post-title:focus').prev().focus();
                    let el = $('.main-text p.post-title:focus').text().length;
                    $('.main-text p.post-title:focus').caret('pos', el);
                    $('.main-text p.post-title:focus').next().detach(":empty");
                }

                break;
        }
    });




//    Выделение теста
    $(document).on('select', function (e) {

    })


});
