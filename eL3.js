const card = document.querySelectorAll('.cell')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const score = document.querySelector('.score span')


let flippedCount = 0;


suffleImage()
clicking()
function suffleImage(){


    card.forEach(c=>{

        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}


function clicking(){

    for(let i =0; i<card.length; i++){


        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click' ,()=>{

            front[i].classList.add('flip')
           const filppedCard = document.querySelectorAll('.flip')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setTimeout(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}




function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
        flippedCount += 2
        cardOne.classList.remove('flip') 
        cardTwo.classList.remove('flip') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')
        if (flippedCount === card.length) {
            // Check if all cards are flipped
            showWinPopup();}

    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('flip') 
            cardTwo.classList.remove('flip') 
        }, 1000);
    }
}

function showWinPopup() {
    popupText.textContent = 'Congrats! Level 3 Completed';
    popup.classList.add('active'); // Show the popup
}

function togglePopup() {
    popup.classList.toggle('active'); // Toggle the popup visibility
}