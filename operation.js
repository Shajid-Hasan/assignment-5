
function getElement(id){
    const element = document.getElementById(id)
    return element
}

// get available coin
function getAvilableCoin(id){
    const balanceCoin = document.getElementById(id)
    const balanceCoinConvertToNumber = parseInt(balanceCoin.innerText)
    
    return balanceCoinConvertToNumber
}

// set innerText

function setInnerText (value){
    const availableCoin = document.getElementById('coin')
    availableCoin.innerText = value
}

const cartBtns = document.getElementsByClassName('cart-btn')
console.log(cartBtns)

for(let cartButton of cartBtns){
    console.log(cartButton)
    cartButton.addEventListener('click', function(){
        const callBtn1 = cartButton.parentNode.parentNode.children[1].children[0]
        const callBtn2 = cartButton.parentNode.parentNode.children[1].children[2]
        
        console.log(callBtn1,callBtn2)
        
        
        const availableCoins = getAvilableCoin('coin')
        console.log(availableCoins)

        const totalAvailableCoin = availableCoins - 20
        
        if(totalAvailableCoin == 0){
            alert('not enough coin for call')
        }

        setInnerText(totalAvailableCoin)

        const cartHistory = getElement('history-section')

        const newCart = document.createElement('div');
        newCart.innerHTML = `
            <div class="bg-[#fafafa] shadow-sm my-5 p-4 flex justify-between">
                    <div><h4 class="text-[13px] text-[#111111] my-1">জাতীয় জরুরি সেবা</h4>
                    <p class="text-[10px] text-[#111111]">999</p>
                    </div>
                    <div><p id="clock">--:--:--</p></div>
            </div>
`;
    cartHistory.append(newCart)

    })
}

// clear Button
document.getElementById('clear-btn').addEventListener('click', function(){
    const cartHistory = getElement('history-section')
    cartHistory.innerHTML = ''
})


// Cart - 1

// document.getElementById('call-btn-1').addEventListener('click', function(event){
//     event.preventDefault()

//     const availableCoins = getAvilableCoin('coin')
//     console.log(availableCoins)

//     const totalAvailableCoin = availableCoins - 20

    // if(totalAvailableCoin == 0){
    //     alert('not enough coin for call')
    // }

//     setInnerText(totalAvailableCoin)

//     // 

//     const cartHistory = getElement('history-section')
//     // console.log(cartHistory)

//     const newCart = document.createElement('div');
//     newCart.innerHTML = `
//             <div class="bg-[#fafafa] shadow-sm my-5 p-4 flex justify-between">
//                     <div><h4 class="text-[13px] text-[#111111] my-1">জাতীয় জরুরি সেবা</h4>
//                     <p class="text-[10px] text-[#111111]">999</p>
//                     </div>
//                     <div><p id="time">--:--:--</p></div>
//             </div>

            
// `;
//     cartHistory.append(newCart)

// })

// cart -2


// Asside Section



