

btnListado.addEventListener('click', e => { 
  
    fetch("tabla.json")
      .then((res) => res.json())
      .then((Clientes) => {
        Clientes.forEach(usuario => {
                    const article = document.createElement('article');
                    article.className = 'usuario';
                    const nombre = document.createElement('h2');
                    nombre.style.color='purple';
                    nombre.textContent = usuario.nombre;
                    const ul = document.createElement('ul');
                    ul.innerHTML = `
                        <style> li{color:steelblue} </style>
                        <li>Cobis: ${usuario.id}</li>
                        <li>CUIT: ${usuario.cuit}</li>
                        <li>Integrantes de la cuenta: ${usuario.firmantes}</li>
                        <li> Telefonos : ${usuario.telefono}</li>
                        <li> Email : ${usuario.mail}</li>
                        
                    `;
                    article.appendChild(nombre);
                    article.appendChild(ul);
                    listado.appendChild(article); 
                    
        })})})

     
     
     
  
        
        