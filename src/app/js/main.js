/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';

(function () {

    let btn = document.querySelectorAll('a[href^="tel:"]');

    let resizeWindow = function (evt) {
        if (window.innerWidth <= 1023) {
            evt.stopPropagation();
        } else {
            evt.preventDefault();
        }
    };

    btn.forEach(function (item) {
        item.addEventListener('click', resizeWindow);
    });

    btn.forEach(function (item) {
        item.addEventListener('resize', resizeWindow);
    });

})();
'use strict';

(function () {

    var headerMenu = document.querySelector('.main-header__nav');

    if (headerMenu && window.innerWidth <= 1023) {

        var burgerBtn = document.querySelector('.main-header__burger');
        var burgerSocial = document.querySelector('.main-header__link');
        var headerSocial = document.querySelector('.main-header__tel');
        var headerWrapMenu = document.querySelector('.main-header__wrap-menu');
        var headerWrapActive = document.querySelector('.main-header__wrap')

        var activeMenu = function () {

            if (burgerBtn.classList.contains('main-header__burger--closed')) {
                burgerBtn.classList.remove('main-header__burger--closed');
                burgerBtn.classList.add('main-header__burger--active');
                headerMenu.classList.add('main-header__nav--active');
                headerSocial.classList.remove('main-header__tel--active');
                headerSocial.classList.add('main-header__tel--closed');
                document.body.style.overflow = 'hidden';
            } else {
                burgerBtn.classList.add('main-header__burger--closed');
                burgerBtn.classList.remove('main-header__burger--active');
                headerMenu.classList.remove('main-header__nav--active');
                document.body.style.overflow = '';
            }

        };

        var activeSocial = function (evt) {
            evt.preventDefault();

            if (headerSocial.classList.contains('main-header__tel--closed')) {
                headerSocial.classList.remove('main-header__tel--closed');
                headerSocial.classList.add('main-header__tel--active');
                burgerBtn.classList.remove('main-header__burger--active');
                burgerBtn.classList.add('main-header__burger--closed');
                headerMenu.classList.remove('main-header__nav--active');
                document.body.style.overflow = 'hidden';
            } else {
                headerSocial.classList.add('main-header__tel--closed');
                headerSocial.classList.remove('main-header__tel--active');
                document.body.style.overflow = '';
            }

        };

        var activeWrapMenu = function (evt) {
            evt.preventDefault();

            headerWrapMenu.classList.toggle('main-header__wrap-menu--active');
            headerWrapActive.classList.toggle('main-header__wrap--active');
        };

        burgerBtn.addEventListener('click', activeMenu);
        burgerSocial.addEventListener('click', activeSocial);
        headerWrapMenu.addEventListener('click', activeWrapMenu);

    }

})();
'use strict';


(function () {

    var serviceSlider = document.querySelector('.service-slider__wrapper')
    var feedbackSlider = document.querySelector('.feedback__swiper-container');

    var servicesSliderDesk = function (el) {
        return new Swiper(el, {
            loop: true,
            speed: 1000,
            effect: 'fade',
            slidesPerView: 1,
            allowTouchMove: false,
            autoplay: {
                delay: 7000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    };

    if (serviceSlider) {
        servicesSliderDesk(serviceSlider);
    }

    var feedbackSliderDesk = function (el) {
        return new Swiper(el, {
            loop: true,
            speed: 1000,
            slidesPerView: 2,
            spaceBetween: 30,
            // autoplay: {
            //   delay: 5000,
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });
    };

    if (feedbackSlider) {
        feedbackSliderDesk(feedbackSlider);
    }

})();
"use strict";

(function () {

    var formOrder = document.querySelector('.form-order__box--delivery');

    if (formOrder) {

        var btnRevers = document.querySelector('.button-revers');
        var number = 0
        var formReverse = function () {
            number = number + 180;
            btnRevers.style.transform = 'rotate(' + number + 'deg)';
        };


        if (btnRevers) {
            btnRevers.addEventListener('click', formReverse);
        }


        $("#point-1").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });

        $("#point-2").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });

        $("#point-3").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });

        $("#weight").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });

        $("#volume").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });
        $("#text").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });
        $("#email").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });
        $("#name").keyup(function () {
            if ($(this).val()) {
                $(this).addClass("not-empty");
            } else {
                $(this).removeClass("not-empty");
            }
        });
        var inputmask_options;

        inputmask_options = {
            mask: "99/99/9999",
            alias: "date",
            showMaskOnHover: false,
            showMaskOnFocus: true,
        };

        $("#point-3").inputmask("99/99/9999", inputmask_options);
        $("#point-3").datepicker();

    }

})();
'use strict';

(function () {

    var questions = document.querySelector('.questions');

    if (questions) {

        var questionsText = questions.querySelectorAll('.questions__box-left li');
        var questionsBox = document.querySelectorAll('.questions__box-right article');

        var removeActive = function (array, activeClass) {
            array.forEach(function (item) {
                item.classList.remove(activeClass);
            });
            return;
        };

        if (questionsText) {
            questionsText.forEach(function (item, i) {
                item.addEventListener('click', function (evt) {
                    evt.preventDefault();

                    removeActive(questionsText, 'questions__item-active');
                    removeActive(questionsBox, 'questions__text-active');
                    questionsText[i].classList.add('questions__item-active');
                    questionsBox[i].classList.add('questions__text-active');
                });
            });
        }
    }

})();
"use strict";

(function () {

})();


var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
        center: [53.900448, 27.600602], // координаты центра на карте
        zoom: 16, // коэффициент приближения карты
        controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([53.900448, 27.600602], {
        balloonContent: "переулок Козлова, 24А",
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: '../images/map-marker.png',
        // Размеры метки.
        iconImageSize: [50, 50],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function () {
        // Скрываем индикатор загрузки после полной загрузки карты
        spinner.removeClass('is-active');
    });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
        var tc = getTileContainer(layer), readyAll = true;
        tc.tiles.each(function (tile, number) {
            if (!tile.isReady()) {
                readyAll = false;
            }
        });
        if (readyAll) {
            resolve();
        } else {
            tc.events.once("ready", function () {
                resolve();
            });
        }
    });
}

function getTileContainer(layer) {
    for (var k in layer) {
        if (layer.hasOwnProperty(k)) {
            if (
                layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
                || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
            ) {
                return layer[k];
            }
        }
    }
    return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) {  // IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  // Другие браузеры
        script.onload = function () {
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function () {
    $('.ymap-container').mouseenter(function () {
            if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

                // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
                check_if_load = true;

                // Показываем индикатор загрузки до тех пор, пока карта не загрузится
                spinner.addClass('is-active');

                // Загружаем API Яндекс.Карт
                loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
                    // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
                    ymaps.load(init);
                });
            }
        }
    );
}

$(function () {

    //Запускаем основную функцию
    ymap();

});


"use strict";


(function () {
    const height = (elem) => {
        return elem.getBoundingClientRect().height
    }
    const distance = (elemA, elemB, prop) => {
        const sizeA = elemA.getBoundingClientRect()[prop]
        const sizeB = elemB.getBoundingClientRect()[prop]
        return sizeB - sizeA
    }
    const factor = (elemA, elemB, prop) => {
        const sizeA = elemA.getBoundingClientRect()[prop]
        const sizeB = elemB.getBoundingClientRect()[prop]
        return sizeB / sizeA
    }
    document.querySelectorAll('.card').forEach((elem) => {
        const head = elem.querySelector('.card__head')
        const image = elem.querySelector('.card__image')
        const author = elem.querySelector('.card__author')
        const body = elem.querySelector('.card__body')
        const foot = elem.querySelector('.card__foot')
        elem.onmouseenter = () => {
            elem.classList.add('hover')
            const imageScale = 1 + factor(head, body, 'height')
            image.style.transform = `scale(${imageScale})`
            const bodyDistance = height(foot) * 1
            body.style.transform = `translateY(${bodyDistance}px)`
            const authorDistance = distance(head, author, 'height')
            author.style.transform = `translateY(${authorDistance}px)`
        }
        elem.onmouseleave = () => {
            elem.classList.remove('hover')
            image.style.transform = `none`
            body.style.transform = `none`
            author.style.transform = `none`
        }
    })


    var acc = document.getElementsByClassName("show-more");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {

            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }




    // var inputFile = document.querySelector('.file');
    // inputFile.addEventListener('change', function () {
    //
    //      var element = inputFile;
    //      console.log(element.value.length);
    //     //
    //     // for (var x = 0; x < result.length; x++) {
    //     //     var file = result[x],
    //     //
    //     //     li.className = "list-group-item";
    //     //
    //     //     document.querySelector('.file-res').appendChild(li);
    //     // }
    //     var result = element.files;
    //     var li = document.createElement("span");
    //     li.innerHTML = "Количество файлов: " + result.length;
    //     document.querySelector('.file-res').appendChild(li);
    // });
    //
    // var resetFile = document.querySelector('.reset-file');
    // resetFile.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     inputFile.value='';
    // })
})();
$("input[type='file']").on("change", function(){
    var numFiles = $(this).get(0).files.length;
    $('.file-res span').text('Выбрано файлов:' + ' ' + numFiles);
});


$('.reset-file').click(function (e) {
    e.preventDefault();
    $('input[type="file"]').val(this.val == '');
})