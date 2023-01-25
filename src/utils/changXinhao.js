function changeXinhao(n) {
            $('.box1 li').css('background-color','rgba(166,166,166,0.5)');
            if(n==1){
                $('.box1 li:lt(1)').css('background','#2020207F');
            }else if(n==2){
                $('.box1 li:lt(2)').css('background','#2020207F');
            }else if(n==3){
                $('.box1 li:lt(3)').css('background','#2020207F');
            }else if(n==4){
                $('.box1 li:lt(4)').css('background','#2020207F');
            }else {
                $('.box1 li:lt(5)').css('background','#2020207F');
            }
}
export {
    changeXinhao
}
