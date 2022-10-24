var cardone= document.querySelectorAll(".card");
function monuseHover(){
    cardone[0].style.backgroundColor='gray';
    cardone[1].style.backgroundColor='gray';
    
};
function func1()
{  
    cardone[0].style.backgroundColor='orange';
    cardone[1].style.backgroundColor='orange';
};

cardone[0].addEventListener('mouseover',monuseHover)
cardone[1].addEventListener("mouseout", func1)