var accordion = document.querySelectorAll('.accordion-list__item');
var title = document.querySelectorAll('.accordion-list__item--title');
var activeTitle = document.querySelector('.active-title');
var content = document.querySelectorAll('.accordion-innerlist');
var contentActive = document.querySelector('.active-accordion');

for(var i = 0; i < title.length; i++) {
    title[i].onclick = function() {
        if(!this.classList.contains('active-title')) {
            for(var i = 0; i < title.length; i++) {
                title[i].classList.remove('active-title');
            }

            this.classList.add('active-title');

            for (var i = 0; i < content.length; i++) {
                content[i].classList.remove('active-accordion');
            }
        } else {
            this.classList.remove('active-title');
        }

        for (var i = 0; i < content.length; i++) {
            if(this.nextElementSibling.classList.contains('active-accordion')) {
                this.nextElementSibling.classList.remove('active-accordion');
            } else {
                this.nextElementSibling.classList.add('active-accordion');
            }
        }
    }
}