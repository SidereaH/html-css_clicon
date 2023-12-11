/*const firstdrop = document.getElementById('myDropDown')
const seconddrop = document.getElementById('myDropDown2')
const thirddrop = document.getElementById('shopcart')
const fourthdrop = document.getElementById('cat')

document.getElementById('manlike')
document.getElementById('manlike')*/
///сердечко избранных
function hover(element) {

    element.setAttribute('src', '/img/HeartFill.svg');
}
function unhover(element) {
    element.setAttribute('src', "/img/Heart.svg");
}

/////корзина
function hoverplace(element) {

    element.setAttribute('src', '/img/placeFill.svg');
}
function unhoverplace(element) {
    element.setAttribute('src', "/img/place.svg");
}
///профиль 
function hoverprof(element) {

    element.setAttribute('src', '/img/userFill.svg');
}
function unhoverprof(element) {
    element.setAttribute('src', "/img/User.svg");
}
function hoverb(element, img) {
    element.setAttribute('src', img );
}
function hovershopitog(whatch, img) {
    whatch.setAttribute('src', img)
}
function hovershopitogoff(whatch, img) {
    whatch.setAttribute('src', img)
}
function hoveradd (button, element, img , color){
    button.setAttribute('style', color,)
    button.firstElementChild.setAttribute('src', img)
    //element.setAttribute('src', img );
}
function show(pip) {
    var sigma = pip.firstElementChild
    sigma.lastElementChild.setAttribute('style' , 'visibility: visible;')
}
function unshow(pip) {
    var sigma = pip.firstElementChild
    sigma.lastElementChild.setAttribute('style' , 'visibility: hidden;')
}
$('#btndr').click(function () {

    document.getElementById('btndr').classList.toggle("activebut");
    document.getElementById('caret').classList.toggle("activeimg")
    
});
function myFunction(div) {
    document.getElementById(div).classList.toggle("show");
    /*
    document.getElementById('manlike').classList.remove('like');
    document.getElementById('englike').classList.remove('like');
    document.getElementById('rulike').classList.remove('like');
    document.getElementById('usdlike').classList.remove('like');
    document.getElementById('eurlike').classList.remove('like');
    if(document.getElementById(div) == firstdrop ){
        seconddrop.classList.remove('show')
        thirddrop.classList.remove('show')
        fourthdrop.classList.remove('show')
    }
    else if(document.getElementById(div) == seconddrop)
    {
        firstdrop.classList.remove('show')
        thirddrop.classList.remove('show')
        fourthdrop.classList.remove('show')
    }
    else if(document.getElementById(div) == thirddrop)
    {
        firstdrop.classList.remove('show')
        seconddrop.classList.remove('show')
        fourthdrop.classList.remove('show')
    }
    else if(document.getElementById(div) == fourthdrop)
    {
        firstdrop.classList.remove('show')
        seconddrop.classList.remove('show')
        thirddrop.classList.remove('show')
    }
    */

}
function myFunctionCat(div) {
    
    document.getElementById(div).classList.toggle("show");
    
    document.getElementById('manlike').classList.remove('like');
    document.getElementById('englike').classList.remove('like');
    document.getElementById('rulike').classList.remove('like');
    document.getElementById('usdlike').classList.remove('like');
    document.getElementById('eurlike').classList.remove('like');
   
    

}
document.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        document.getElementById("myDropdown").classList.remove("show");
        document.getElementById("myDropdown2").classList.remove("show");
        document.getElementById("shopcart").classList.remove("show");
        document.getElementById('manlike').classList.remove('like');
        document.getElementById('englike').classList.remove('like');
        document.getElementById('rulike').classList.remove('like');
        document.getElementById('usdlike').classList.remove('like');
        document.getElementById('eurlike').classList.remove('like');
        
        
    }
});


/*$( ".checkdrop" ).click(function() {
    $( ".js-click" ).css('background', 'green');
  });*/
  function rulike() {
    //var button_name = clickedElement.textContent;
    document.getElementById('rulike').classList.add('like');
    document.getElementById('namebut').textContent = "Ru";

    if (document.getElementById('manlike').classList.contains('like')) {
        document.getElementById('manlike').classList.remove('like')
    }
    if (document.getElementById('englike').classList.contains('like')) {
        document.getElementById('englike').classList.remove('like')
    }

}

function englike() {
    //var button_name = clickedElement.textContent;
    document.getElementById('englike').classList.add('like');
    document.getElementById('namebut').textContent = "Eng";

    if (document.getElementById('manlike').classList.contains('like')) {
        document.getElementById('manlike').classList.remove('like')
    }
    if (document.getElementById('rulike').classList.contains('like')) {
        document.getElementById('rulike').classList.remove('like')
    }


}

function manlike() {
    //var button_name = clickedElement.textContent;
    document.getElementById('manlike').classList.add('like');
    document.getElementById('namebut').textContent = "Man";
    if (document.getElementById('englike').classList.contains('like')) {
        document.getElementById('englike').classList.remove('like');
    }
    if (document.getElementById('rulike').classList.contains('like')) {
        document.getElementById('rulike').classList.remove('like');
    }

}
function usd() {
    let containerElement = document.querySelector('#usd');

    document.getElementById('usdlike').classList.toggle('like');
    document.getElementById('namebut2').textContent = "USD";
    if (document.getElementById('eurlike').classList.contains('like')) {
        document.getElementById('eurlike').classList.remove('like')
    }

}
function eur() {
    let containerElement = document.querySelector('#eur');

    document.getElementById('eurlike').classList.toggle('like');
    document.getElementById('namebut2').textContent = "EUR";
    if (document.getElementById('usdlike').classList.contains('like')) {
        document.getElementById('usdlike').classList.remove('like')
    }
}







function hideDiv(div, btn) {
    // hide the blackfriday div
    document.getElementById(div).style.display = 'none';
    // hide the link
    btn.style.display = 'none';
}

/*if(document.querySelector('#eng')) {
    document.querySelector('#eng').addEventListener('click', () => {
        document.querySelector('#englike').classList.add('like');
      });
}
else if ( document.querySelector('#ru')) {
    document.querySelector('#ru').addEventListener('click', () => {
        document.querySelector('#rulike').classList.add('like');
      });
}
else if ( document.querySelector('#man')) {
    document.querySelector('#man').addEventListener('click', () => {
        document.querySelector('#manlike').classList.add('like');
      });
}
    */

$(function() {
    let header = $('.mainone');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });
   
   $('body').on('click', '.password-control', function(){
	if ($('#password-input').attr('type') == 'password'){
		$(this).addClass('view');
		$('#password-input').attr('type', 'text');
	} else {
		$(this).removeClass('view');
		$('#password-input').attr('type', 'password');
	}
	return false;
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});