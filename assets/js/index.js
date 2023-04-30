const casas = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];

const nroCuartos = document.getElementById("cantidad-cuartos").value;
const m2Min = document.getElementById("metros-cuadrados-min").value;
const m2Max = document.getElementById("metros-cuadrados-max").value;

const divPropiedades = document.getElementById("seccion");

const btnBuscar = document.getElementById("btn-buscar"); /* esta demas */

const img = document.getElementsByClassName("img");

let sect = '';


function buscar(nroCuartos = 1, m2Min = 1, m2Max = 1) {



    if (validar(nroCuartos, m2Min, m2Max)) {
        for (let obj of casas) {

            const sect =`
            <section>
                <h5>${obj.name}</h5>
                <div class="img" style="background-image: ${obj.src} ></div>
                    <p>Cuartos: ${obj.rooms}</p>
                    <p>Metros: ${obj.m} m2 </p>
                </div>
                <p class="my-3">${obj.name}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
            `;



            switch (obj.rooms) {
                case 1:
                    if (obj.rooms == 1) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;
                    
                case 2:
                    if (obj.rooms == 2) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;

                case 3:
                    if (obj.rooms == 3) {
                        divPropiedades.innerHTML += sect;
                    }
                break;

                    case 4:
                    if (obj.rooms == 4) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;

                case 5:
                    if (obj.rooms == 5) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;


                case 6:
                    if (obj.rooms == 6) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;

                case 7:
                    if (obj.rooms == 7) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;

                case 8:
                    if (obj.rooms == 8) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;

                case 9:
                    if (obj.rooms == 9) {
                        divPropiedades.innerHTML += sect;
                    }
                    break;

                default:
                    alert("Proporcione datos validos y/o numericos, por favor.");
                    break;
            }
        }
    }
    }

function validar(nroCuartos, m2Min, m2Max)
    {
        if ((nroCuartos <= 0 || isNaN(nroCuartos)) &&
         (m2Min <= 0 || isNaN(m2Min)) &&
         (m2Max <= 0 || isNaN(m2Max)) ) {
            return (alert("Proporcione datos validos y/o numericos, por favor."));

        }

        else {

            return true;
        }
    }



