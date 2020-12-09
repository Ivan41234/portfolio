$(document).ready(function(){


    $('[data-modal=call]').on('click', function() {
        $('.overlay, #call').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #call, #thanks').fadeOut('slow')
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Введите свой номер телефона",
                email: {
                  required: "Введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
    
    new WOW().init();
});

