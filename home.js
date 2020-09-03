
      const endeudamiento = document.getElementById("endeudamiento");
      const telefonos = document.getElementById("litelefonos");
      const calif = document.getElementById("licalificacion");
      const condiciones = document.getElementById("licondiciones");
      const cheque = document.getElementById("DescuentoCheque");
      const prestamo = document.getElementById("prestamo");
      const nombreEmpresa = document.getElementById("liNombreEmpresa");
      const cuit = document.getElementById("liCuit");
      const firmantes = document.getElementById("liFirmantes");
      const tarjeta = document.getElementById("tarjeta");
      const boton = document.getElementById("btn");
      const clienteConsultado = "";
      const input = document.getElementById("input");
      const container = document.getElementById("container1");
      const datos = "";
      const form = document.getElementById("form");
      const btnListado = document.getElementById('btnListado')
      const btnHome = document.getElementById('btnHome')
      const listado = document.getElementById('listado')
      const home = document.getElementById('home')
      const btnNuevo = document.getElementById('btnNuevo')
      const nuevo = document.getElementById('nuevo') 
      
      input.focus();

      function traerDatos() {
        event.preventDefault();
        fetch("tabla.json")
          .then((res) => res.json())
          .then((Clientes) => {
            const empresa = input.value.toLowerCase();
            const n = Clientes.find((i) => {
                const z = i.nombre.toLowerCase();
                return empresa == z;
            });

            if (n) {
              container.style.display = "block";
              pintar(n);
              botonRecarga();
            } else {
              
              pintarFalse();
            }
                      });
      }

      function pintarFalse (){
        input.style.backgroundColor='black';
        boton.style.color='red';
        boton.innerText = "Empresa no existe";
        boton.style.height='75px'
        boton.setAttribute("onclick", "location.reload()");
        const cambio =  (setInterval(cambioBotonFalse =>
           (boton.innerText = "Nueva Consulta" ,boton.style.color='black',input.style.backgroundColor='white'), 2500))
           
      }

      function pintar(n) {
            nombreEmpresa.innerHTML = `Nombre Empresa : ${n.nombre}`;
            cuit.innerHTML = `CUIT: ${n.cuit}`;
            firmantes.innerHTML = `Firmantes :  ${n.firmantes}`;
            telefonos.innerHTML = `Telefonos contacto :  ${n.telefono}`;
            calif.innerHTML = `Calificacion :  ${
              n.calificacion ? "Vigente" : "Vencida"
            }`;
            condiciones.innerHTML = `Condiciones: ${
              n.condiciones ? "Vigente" : "Vencida"
            }`;
            endeudamiento.innerHTML = `Endeudamiento:`;
            prestamo.innerHTML = `Monto prestamo :  $ ${n.endeudamiento.prestamo}.- `;
            cheque.innerHTML = `Monto cheques :  $ ${n.endeudamiento.descuentodecheque}.-`;
            tarjeta.innerHTML = `Limite tarjeta :  $ ${n.endeudamiento.tarjeta}.- `;

            if (!(n.calificacion)) {
              calif.setAttribute("class", "badge badge-danger badge-pill");
            } else if (n.calificacion) {
              calif.setAttribute("class", "badge badge-success badge-pill");
            }

            if (!(n.condiciones)) {
              condiciones.setAttribute("class", "badge badge-danger badge-pill");
            } else if (n.condiciones) {
              condiciones.setAttribute("class", "badge badge-success badge-pill");
            }
          }
      function botonRecarga() {
        boton.innerText = "Nueva Consulta";
        boton.setAttribute("onclick", "location.reload()");
      }

      //---- cambios de hash -----//
      window.addEventListener('hashchange', e => {
            mostrarContenido();
        });

        btnListado.addEventListener('click', e=> {
        location.hash = 'listado';
        home.style.display = 'none';
        nuevo.style.display = 'none';
        listado.style.display = 'block';
        listado.setAttribute('href','listado')
        mostrarContenido()
      })

      btnHome.addEventListener('click', e=>{
        location.hash = 'home';
        home.style.display = 'block';
        listado.style.display = 'none';
        nuevo.style.display = 'none';
      })

      btnNuevo.addEventListener('click', e=>{
        location.hash = 'nuevaempresa';
        home.style.display = 'none';
        listado.style.display = 'none';
        nuevo.style.display = 'block';
      })

      if (location.hash === '') {
            location.hash = 'home';
            home.style.display = 'block';
            listado.style.display = 'none'
            nuevo.style.display = 'none'}
        else if (location.reload){
            location.hash = 'home';
            home.style.display = 'block';
            listado.style.display = 'none';
            nuevo.style.display= 'none';     
        } else {
            mostrarContenido();
        }

      function mostrarContenido() {
            switch(location.hash) {
                case '#home':
                    home.style.display = 'block';
                    listado.style.display = 'none';
                    nuevo.style.display='none'
                    break;
                case '#listado':
                    home.style.display = 'none';
                    nuevo.style.display = 'none'
                    listado.style.display = 'block';
                    break;
                case '#nuevaempresa':
                  home.style.display = 'none';
                  listado.style.display = 'none';
                  nuevo.style.display = 'block';
                  break
       }
      }


