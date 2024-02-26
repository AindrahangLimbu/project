//Script.js

const portfolioitems = document.quaryselectorAll('.portfolio-item-wrapper')

            portfolioitems.foreach(portfolioitem => {
                portfolioitem.addEVentsListener('mouseover', () => {
                    console.log(portfolioitem.childNodes[1].classList);
                    portfolioitem.childNodes[1].classList.add('img-darken');
                })
            })