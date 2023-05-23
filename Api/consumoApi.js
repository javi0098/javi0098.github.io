
const request= async()=>
    {
       
            
            try{
                const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=balde%20pochoclos%20guardianes%20de%20la%20galaxia&limit=3").then(res=>res.json())
                console.log(response);
                document.getElementById("Titulo").innerHTML= response.results[0].title
                var imagen = document.getElementById("Imagen");
			    // Actualizar el src de la imagen
			    imagen.setAttribute('src', response.results[0].thumbnail);
                document.getElementById("Precio").innerHTML= response.results[0].currency_id + "$"+ response.results[0].price

                document.getElementById("Titulo1").innerHTML= response.results[1].title
                var imagen = document.getElementById("Imagen1");
			    // Actualizar el src de la imagen
			    imagen.setAttribute('src', response.results[1].thumbnail);
                document.getElementById("Precio1").innerHTML= response.results[1].currency_id + "$"+ response.results[1].price

                document.getElementById("Titulo2").innerHTML= response.results[2].title
                var imagen = document.getElementById("Imagen2");
			    // Actualizar el src de la imagen
			    imagen.setAttribute('src', response.results[2].thumbnail);
                document.getElementById("Precio2").innerHTML= response.results[2].currency_id + "$"+ response.results[2].price
               
                        
               
              }catch(e){
                console.log(e)
                 
              }
        
        
    }
            
    request()      