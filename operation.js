
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
    copy.addEventListener('click', function(){
        const availableCopy = getAvilableCopy('copy-count')
        
        const totalCopy = availableCopy + 1

        setInnerTextCopy(totalCopy)

        alert('নম্বর কপি হয়েছে 999')

        // document.getElementById('copy-btn').addEventListener('click', function(){
        //     const numberText = document.getElementById('third').innerText
        //     navigator.clipboard.writeText(numberText).then(() => {
        //     alert("Copied number: " + numberText);
        // })
        
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
console.log(cartBtns)

for(let cartButton of cartBtns){
    cartButton.addEventListener('click', function(){
        alert('📞 Calling National emergency service 999..')
        const callBtn1 = cartButton.parentNode.parentNode.children[1].children[0].innerText
        const callBtn2 = cartButton.parentNode.parentNode.children[1].children[2].innerText
        
        console.log(callBtn1,callBtn2)
        
        
        
        const availableCoins = getAvilableCoin('coin')
        console.log(availableCoins)

        const totalAvailableCoin = availableCoins - 20
        
        if(totalAvailableCoin == 0){
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে ২০ কয়েন লাগবে')
        }

        const now = new Date();

        setInnerText(totalAvailableCoin)

        // Asside Section

        const cartHistory = getElement('clear-history')
        
        const newCart = document.createElement('div');
        newCart.innerHTML = `
            <div class="bg-[#fafafa] shadow-sm my-5 p-4 flex justify-between">
                    <div><h4 class="text-[13px] text-[#111111] my-1">${callBtn1}</h4>
                    <p class="text-[10px] text-[#111111]">${callBtn2}</p>
                    </div>
                    <div><p id="clock">${now.toLocaleTimeString()}</p></div>

            </div>
`;
    cartHistory.append(newCart)

    })

}

// clear Button

document.getElementById('clear-btn').addEventListener('click', function(){
    console.log('click clear btn')

    document.getElementById('clear-history').innerHTML = ''
    
})



