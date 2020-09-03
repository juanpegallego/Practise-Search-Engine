
btnNuevo.addEventListener('click', e=> {
 const form = document.createElement('form')
 form.innerHTML = `
        
        Nombre Empresa <input type="text"> <br>

        Ingrese el CUIT  <input type="number"> <br>

        Ingrese nombre Firmante  <input type="text"> <br>

        Ingrese nombre Firmante 2 <input type="text"><br>

        <p>calificacion: </p>
            true <input type="radio" name="true" id="">

            false <input type="radio" name="false" id=""><br>

        <p>condiciones: </p>

            true <input type="radio" name="true" id="">

            false <input type="radio" name="false" id=""><br>

        Ingrese telefono fijo <input type="number" name="" id=""> <br>

        Ingrese telefono celular <input type="number" name="" id=""> <br>

        Ingrese email  <input type="email">   

        <button>Enviar</button>
`
 nuevo.appendChild(form)
 
})