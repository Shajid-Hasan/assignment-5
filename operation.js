
function getElement(id){
    const element = document.getElementById(id)
    return element 
}

// get available coin & heart & copy

// Coin
function getAvilableCoin(id){
    const balanceCoin = document.getElementById(id)
    const balanceCoinConvertToNumber = parseInt(balanceCoin.innerText)
    
    return balanceCoinConvertToNumber
}

// Heart
function getAvilableHeart(id){
    const balanceHeart = document.getElementById(id)
    const balanceHeartConvertToNumber = parseInt(balanceHeart.innerText)
    
    return balanceHeartConvertToNumber
}

// Copy
function getAvilableCopy(id){
    const balanceCopy = document.getElementById(id)
    const balanceCopyConvertToNumber = parseInt(balanceCopy.innerText)
    
    return balanceCopyConvertToNumber
}

// set innerText Available ( Heart & Coin & Copy )

function setInnerText (value){
    const availableCoin = document.getElementById('coin')
    availableCoin.innerText = value
}
function setInnerTextHeart (value){
    const availableHeart = document.getElementById('heart-count')
    availableHeart.innerText = value
}
function setInnerTextCopy (value){
    const availableCopy = document.getElementById('copy-count')
    availableCopy.innerText = value
}

// Copy Button click

const copyBtns = document.getElementsByClassName('copy-btn')
for(let copy of copyBtns){
    console.log(copy)
    copy.addEventListener('click', function(){
        const availableCopy = getAvilableCopy('copy-count')
        
        const totalCopy = availableCopy + 1

        setInnerTextCopy(totalCopy)
    })
}

// Heart Ssection

const heartIcon = document.getElementsByClassName('heart')
for(let heart of heartIcon){
    console.log(heart)
    heart.addEventListener('click', function(){
        const availableHeart = getAvilableHeart('heart-count')
        
        const totalHeart = availableHeart + 1

        setInnerTextHeart(totalHeart)
    })
}

// Call button secction

const cartBtns = document.getElementsByClassName('cart-btn')
for(let cartButton of cartBtns){
    cartButton.addEventListener('click', function(){
        alert('Calling National emergency service 999..')
        const callBtn1 = cartButton.parentNode.parentNode.children[1].children[0]
        const callBtn2 = cartButton.parentNode.parentNode.children[1].children[2]
        
        console.log(callBtn1,callBtn2)
        
        
        
        const availableCoins = getAvilableCoin('coin')
        console.log(availableCoins)

        const totalAvailableCoin = availableCoins - 20
        
        if(totalAvailableCoin == 0){
            alert('not enough coin for call')
        }

        const now = new Date();

        setInnerText(totalAvailableCoin)

        // Asside Section

        const cartHistory = getElement('history-section')
        
        const newCart = document.createElement('div');
        newCart.innerHTML = `
            <div class="bg-[#fafafa] shadow-sm my-5 p-4 flex justify-between">
                    <div><h4 class="text-[13px] text-[#111111] my-1">জাতীয় জরুরি সেবা</h4>
                    <p class="text-[10px] text-[#111111]">999</p>
                    </div>
                    <div><p id="clock">${now.toLocaleTimeString()}</p></div>

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



