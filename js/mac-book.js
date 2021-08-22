// memory update cost 
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
function getTotal() {
    const memoryValue = parseFloat(memoryCost.innerText);
    const storageValue = parseFloat(storageCost.innerText);
    const deliveryValue = parseFloat(deliveryCost.innerText);
    const total = memoryValue + storageValue + deliveryValue + 1299;
    document.getElementById('mac-total-price').innerText = total;
    document.getElementById('promo-code').addEventListener('click', function () {
        document.getElementById('input-value').value = total.innerText * 0.2;
    })
    // document.getElementById('input-value').value = total * 0.2;
    // return total;
    // promoCode()
}
function promoCode() {
    const memoryValue = parseFloat(memoryCost.innerText);
    const storageValue = parseFloat(storageCost.innerText);
    const deliveryValue = parseFloat(deliveryCost.innerText);
    const total = memoryValue + storageValue + deliveryValue + 1299;
    document.getElementById('promo-code').addEventListener('click', function () {
        const promo = document.getElementById('input-value');
        promo.value = total * 0.2;
    })
}
function memoryCostUpdate(update) {
    const memoryCost = document.getElementById('memory-cost');

    if (update == true) {
        memoryCost.innerText = 180;
    }
    else {
        memoryCost.innerText = 0;
    }
    // return memoryCost;
}

document.getElementById('memory-16').addEventListener('click', function () {
    memoryCostUpdate(true)
    getTotal()
    promoCode()
})
document.getElementById('memory-8').addEventListener('click', function () {
    memoryCostUpdate(false)
    getTotal()
    promoCode()

})
// storage Update cost 
function storageCostUpdate(update) {
    const storageCost = document.getElementById('storage-cost');

    if (update == 100) {
        storageCost.innerText = 100;
    }
    else if (update == 180) {
        storageCost.innerText = 180;
    }
    else {
        storageCost.innerText = 0;
    }
    // return storageCost;
}
document.getElementById('storage-25').addEventListener('click', function () {
    storageCostUpdate(0)
    getTotal()
    promoCode()

})
document.getElementById('storage-256').addEventListener('click', function () {
    storageCostUpdate(100)
    getTotal()
    promoCode()
})
document.getElementById('storage-1').addEventListener('click', function () {
    storageCostUpdate(180)
    getTotal()
    promoCode()
})
// delivery cost 
function deliveryCostAdd(onTime) {
    const deliveryCost = document.getElementById('delivery-cost');

    if (onTime == true) {
        deliveryCost.innerText = 20;
    }
    else {
        deliveryCost.innerText = 0;
    }
    // return deliveryCost;
}
document.getElementById('delivery-cost-25').addEventListener('click', function () {
    deliveryCostAdd(false)
    getTotal()
    promoCode()
    // const deliveryCost = document.getElementById('delivery-cost');
    // deliveryCost.innerText = '00';
})
document.getElementById('delivery-cost-21').addEventListener('click', function () {
    deliveryCostAdd(true)
    getTotal()
    promoCode()
})

