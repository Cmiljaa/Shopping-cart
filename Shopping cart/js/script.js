let sum = 0;

function addToCart(dugme){

    let nadklasa = dugme.closest('.single-item');
    let quantity = dugme.previousElementSibling.value;
    let price = nadklasa.querySelector('.single-item .si-content .price').innerText;
    let vege = nadklasa.querySelector('.single-item .si-content h3').innerText;
    let cartitems = document.querySelector('.cart-items');
    if(quantity > 0)
    {
        let ukupna = parseFloat((price.slice(1))) * parseFloat(quantity);
        sum += ukupna;
        dugme.innerHTML = 'Dodato';
        dugme.setAttribute('disabled','true');
        cartitems.innerHTML += `<div class=cart-single-item><h3><b>${vege}</b></h3> <p>${price} x ${quantity} = $<span>${ukupna}</span></p>
        <button onclick="removefromCart(this)" class="remove-item">Ukloni</button></div>`;
        document.querySelector('.total').innerHTML=`Total : ${sum}$`; 
    }
    else if (quantity == 0)
    {
        alert('Odaberi kolicinu!');
    }
}

function removefromCart(dugme){
    let nadklasa = dugme.closest('.cart-single-item');
    let vegetables = document.querySelectorAll('.single-item');
    for (let index = 0; index < vegetables.length; index++)
    {
        if(vegetables[index].querySelector('h3').innerText == nadklasa.querySelector('h3').innerText)
        {
            let button = vegetables[index].querySelector('button');
            vegetables[index].querySelector('input').value = 0;
            button.innerHTML = 'Dodaj';
            button.disabled = false;
            console.log(button);
        }
    }
    
    let price = nadklasa.querySelector('p span');
    price = parseFloat(price.innerText);
    sum -= price;
    if(sum > 0)
            document.querySelector('.total').innerHTML=`Total : ${sum}$`; 
    else
            document.querySelector('.total').innerHTML=``;
    
    nadklasa.remove();
}