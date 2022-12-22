const slider_line = document.querySelector('.slider-line')
let offset = 0
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 512;
    if(offset > 1536){
        offset = 0
    }
    slider_line.style.left = - offset + 'px'
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 512;
    if(offset <0){
        offset = 1536
    }
    slider_line.style.left = - offset + 'px'
});
