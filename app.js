/*
    Jose Silva
    ITPA 2021
    JS Programming Ex 9
*/

let $ = function(id){
    return document.getElementById(id);
}

let paragraphColorChange = function(p, color){
    p.style.color = color;
}

let toggle = function(){
    let h2 = this;
    let toggleButton = h2.getElementsByTagName(`i`)[0];
    let topicDiv = h2.nextElementSibling;

    if(!topicDiv.classList.contains(`close`)){
        topicDiv.classList.add(`close`);
        toggleButton.classList.add(`fa-plus-circle`);
    }else if(topicDiv.classList.contains(`close`)){
        topicDiv.classList.remove(`close`);
        toggleButton.classList.remove(`fa-plus-circle`);
    }
}


window.onload = function(){
    let faqs = $(`faqs`);
    let h2Elements = faqs.getElementsByTagName(`h2`);
    let paragraphs = faqs.getElementsByTagName(`p`);

    for(let i = 0; i< paragraphs.length; i++){
        paragraphs[i].addEventListener(`mouseenter`, function(){
            paragraphColorChange(this, `green`);
        })

        paragraphs[i].addEventListener(`mouseleave`, function(){
            paragraphColorChange(this, `grey`);
        })
    }

    for(let i = 0; i < h2Elements.length; i++){
        h2Elements[i].addEventListener(`click`, toggle);
    }
}