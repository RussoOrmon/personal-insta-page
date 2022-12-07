$(document).ready(function(){

    let slideIndex=0;

    showPhotos()
    
    function showPhotos(){
        let slides = $('.photo img');

        //Запускаем цикл для скрытия фотографий
        let i;
        for(i=0; i<slides.length; i++){
            $(slides[i]).hide();
        }

        // Считаем slideIndex  для показа фотографий
        slideIndex++;

        // проверяем slideIndex если она больше длины slides то обнуляем до 1
        if (slideIndex>slides.length) {
            slideIndex=1
        }
        // Показываем фотографий
        $(slides[slideIndex-1]).show();
        // Показ через 1 сек
        setTimeout(showPhotos, 1000);

    }




    

});