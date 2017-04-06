$(document).ready(function(){

    //---------------------------- фильтры для проверки полей на недопустимые символы
    //---------------------------- https://www.sitepoint.com/expressions-javascript/
    var filterUsername  = /^([a-zA-Z0-9_\-])+$/;
    var filterPassword = /^[a-zA-Z0-9!%&@#$\^*?_~+]+$/;

    $('#pass').on('keyup', function(e){
        //---------------------------- если пользователь нажал enter
        if (e.keyCode == 13){
            $('.b-login').click();
        }
    });

    //=========================== Кнопка войти ==========================//

    $('.button').on("click", function(){

        //---------------------------- параметры для авторизации
        var data = {};
        data.username = $('#username').val();
        data.password = $('#pass').val();

        if (data.username == ''){
            //-------------------- showError(text, top) функция для отображения ошибки
            //-------------------- text - текст сообщения
            //-------------------- top - отступ от верха страницы
            showError('Пожалуйста введите свое имя!', 50);
        } else if (data.password == ''){
            showError('Пожалуйста введите свой пароль!', 50);
        } else if (!filterUsername.test(data.username)){
            showError('Недопустимые символы в имени', 50);
        } else if(!filterPassword.test(data.password)) {
            showError('Недопустимые символы в пароле', 50);
        } else {

            //----------------------- ajax-запрос на авторизацию
            showSuccess('Авторизация', 50);
            console.log(JSON.stringify(data));
        }
    })
});