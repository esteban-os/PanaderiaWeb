
function mensaje(producto) { 
    url ="https://api.whatsapp.com/send?phone=51955502884&text="+ producto
    

    window.open(
        url , '_blank' // <- This is what makes it open in a new window.
    );
    
    return url  
}

