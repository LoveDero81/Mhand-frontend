export function utils(){
    let burger=document.querySelector('.header-section__info-block__item__burger-logo__burger ')
    let body=document.querySelector('body')
    burger.addEventListener('click',function(event){
        body.classList.toggle('test')
    })
}
