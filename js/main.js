// //? Swiper иницилизация и первоначальные настройки ---------------------------------->>>>
document.addEventListener('DOMContentLoaded', () => {


const sliderFloors = document.querySelector('.floors-slider__container');
if (sliderFloors) {
    const mySwiper = new Swiper(sliderFloors, {
        slidesPerView: 1,
        autoplay: false,
        observer: true,
        speed: 1200,
        navigation: {
            nextEl: '.floors-arrows > .swiper-button-next',
            prevEl: '.floors-arrows > .swiper-button-prev',
          },
          pagination: {
            el: '.floors-pagination',
            type: 'bullets',
            clickable: true,
            bulletClass: 'floors-pagination__item',
            bulletActiveClass:  'floors-pagination__item--active',
          },
    });
}

const countSlider = document.querySelectorAll('.floors-pagination__item');
let count = 1;
if (countSlider) {
  countSlider.forEach(item => {
    item.textContent = count++
  })
}

// Select country
let template = function(data) { 
	if (!data.element) 
		return null;  
	
	let flag_name = data.element.dataset.countryflag;
  
	let option = $('<span class="has-countryflag"></span>');
	if (flag_name) {		
		let src = 'img/icon-country-select/' + flag_name + '.svg';
		option.css( 'background-image', 'url(' + src + ')' );
	}
	return option;
};

$('#choice-country').select2({
		minimumResultsForSearch: Infinity, 
		templateSelection: template,      
		templateResult:    template        
});
$('#choice-popup-contry').select2({
  minimumResultsForSearch: Infinity, 
		templateSelection: template,      
		templateResult:    template        
})






// //????? Modal window -------------------------------------------->>>>>>>
;(function() {
    var body = document.querySelector('body');
        var closestItemByClass = function(item, className) {
            var node = item;
            while(node) {
                if (node.classList.contains(className)) {
                    return node;
                }
                node = node.parentElement;
            }
            return null;
        };
        var closestAttr = function(item, attr) {
            var node = item;
            while(node) {
                var attrValue = node.getAttribute(attr);
                if (attrValue) {
                    return attrValue;
                }
                node = node.parentElement;
            }
            return null;
        };
  
  
    //! Открытие попапа
    var showPopup = function (target) {
        target.classList.add('active');
    }
  
    //! Закрытие попапа
    var closePopup = function (target) {
        target.classList.remove('active');
    }
   
    body.addEventListener('click', function (e) {
        var target = e.target;
        var popupClass =  closestAttr(target, 'data-popup');
        if (popupClass === null) {
            return;
        }
        e.preventDefault();
        var popup = document.querySelector('.' + popupClass);
  
        if (popup) {
            showPopup(popup);
            body.classList.add('body-lock')
        } 
    })
    
    //! Закрытие по ESQ
    body.addEventListener('keydown', function (e) {
       if (e.keyCode !==27) {
           return;
       }
       var popup = document.querySelector('.popup.active')
       if (popup)  {
           closePopup(popup);
           body.classList.remove('body-lock');
       }
    })
    
    //! Закрытие вне contenta (по крестики и по области)
    body.addEventListener('click', function (e) {
       var target = e.target;
  
       if (target.classList.contains('popup__btn-close') ||
            target.classList.contains('popup__inner') 
       ) {
            var  popup  = closestItemByClass(target, 'popup');
            closePopup(popup);
            body.classList.remove('body-lock')
       }
     })
  }) ();
//   //????? Modal window END -------------------------------------------->>>>>>>

$(function() {
    $('.map').maphilight( {
        fill: true,
        fillColor: '000000',
        fillOpacity: 0.6,
        stroke: false,
        alwaysOn: true,
    });
    
});
    $('area').on('mouseenter', function() {
        let dataZone = $(this).attr('data-zone');
        $('[data-id="'+ dataZone +'"]').css('display', 'block');
    });
    $('area').on('mouseleave', function() {
        var dataZone = $(this).attr('data-zone');
        $('[data-id="'+ dataZone +'"]').css('display', 'none');
    });
})
