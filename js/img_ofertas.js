/*
The code uses an HTML template to generate dynamic content for a travel offers section. The content is organized in a card structure (div with box class) containing information about each offer, including:

A representative image of the offer
A title with the name of the destination city
A discount percentage (DTO)
A price (COP300,000)
A link to an offer form page (data-url=“/html/form_offer.html”)

Translated with DeepL.com (free version)

The content is organized in a structure of sections (div with center class background-cover) that contain several offer cards each. Each section has an image background and contains several offer cards.


*/



document.getElementById("ofertas_IMG").innerHTML = `
<div class="centro background-cover" >
          <div class="caja" data-url="/html/form_offer.html" >
            <div class="info">
            <div id="info_container">
              <table id="info_1">
              <tr>
                <td class="data-city">Leticia</td>
                
                <td class="two" id="po">5% DTO</td>
                
              </tr>
              <tr>
              <td class="abajo two">Oferta</td>
              <td class="abajo" id="po">COP300.000</td>
              </tr>
              </table>
            </div>
            </div>
            <img src="../IMG/-hcjx640.jpg" alt="">
          </div>
        
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Medellin</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.tomplanmytrip.com/wp-content/uploads/2022/04/medellin.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Arauca</td>
            
            <td class="two" id="po">20% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/Arauquita%205.jpg?h=7b436a88&itok=GjVgO6M2" alt="">
        </div>
      </div>
      
      <div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Barranquilla</td>
            
            <td class="two" id="po">8% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://conectandonegocios.com/uploads/noticias/1648135778.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Cartagena</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.civitatis.com/blog/wp-content/uploads/2023/02/playa-bocagrande-cartagena-indias.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Tunja</td>
            
            <td class="two" id="po">18% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Centro_de_Tunja_en_un_d%C3%ADa_lluvioso.jpg" alt="">
        </div>
       
      </div>
      <div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Manizales</td>
            
            <td class="two" id="po">20% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://regiones.prisamedia.co/wp-content/uploads/2023/07/GettyImages-1466543106-scaled.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Florencia</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.florencia.travel/wp-content/uploads/2013/04/guia_de_florencia_viajes-y-turismo-1024x683.jpeg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Yopal</td>
            
            <td class="two" id="po">14% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://eldiariodelllano.com/wp-content/uploads/2022/07/yopal-80.jpg" alt="">
        </div>
      </div>
      
      <div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Popayan</td>
            
            <td class="two" id="po">10% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://aventurecolombia.com/wp-content/uploads/2020/08/popayan-cauca-colombia-10-%C2%A9-Tristan-Quevilly.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Valledupar</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://i0.wp.com/elperiodico.net.co/wp-content/uploads/2022/01/valledupar-3.jpg?fit=800%2C523&ssl=1" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Quipdo</td>
            
            <td class="two" id="po">10% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/D3DK5L4PUJAY3DOIUF5NIQYOV4.jpg" alt="">
        </div>
       
      </div>
      <div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Monteria</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://larazon.co/wp-content/uploads/2023/03/Monteria-parnoamica-rio-sinu.jpeg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Bogota</td>
            
            <td class="two" id="po">5% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.cepal.org/sites/default/files/styles/1920x1080/public/regionaloffice/images/bogota.jpg?itok=6GS_dObY" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Inrida</td>
            
            <td class="two" id="po">12% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://as1.ftcdn.net/v2/jpg/02/90/17/82/1000_F_290178221_hGMOQiDKHTpjS7I4f5PRJCUhcfBibx99.jpg" alt="">
        </div>
      </div>
      
      <div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Jose del guaviare</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/GPNIURHZQ5E63OJL22M5RGWZLE.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Neiva</td>
            
            <td class="two" id="po">10% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://media.viajando.travel/p/eb00b1868eccfc10bc3767bc10c0a747/adjuntos/236/imagenes/000/640/0000640627/1200x675/smart/neiva-colombiajpg.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Puerto carreño</td>
            
            <td class="two" id="po">10% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.riohacha-laguajira.gov.co/NuestraAlcaldia/SaladePrensa/PublishingImages/WhatsApp%20Image%202022-04-17%20at%205.55.22%20PM.jpeg" alt="">
        </div>
       
      </div><div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Riohacha</td>
            
            <td class="two" id="po">10% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.gobernaciondelmagdalena.gov.co/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-10-at-6.12.47-PM.jpeg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Santa marta</td>
            
            <td class="two" id="po">10% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://content.r9cdn.net/rimg/dimg/df/e3/34edcf6c-city-29137-167c2c40aad.jpg?width=1366&height=768&xhint=1672&yhint=1230&crop=true" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Villavicencio</td>
            
            <td class="two" id="po">12% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://efeagro.com/wp-content/uploads/2022/06/479092.jpg" alt="">
        </div>
      </div>
      
      <div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">San juan de pasto</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://imagenes.eltiempo.com/files/image_1200_600/uploads/2021/12/01/61a79da847572.jpeg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">San jose de cucuta</td>
            
            <td class="two" id="po">12% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://viajaporcolombia.com/images/mocoa.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Mocoa</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://mediaim.expedia.com/destination/1/0850885a4a654a0503241d6136ad6dd9.jpg" alt="">
        </div>
       
      </div><div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Armenia</td>
            
            <td class="two" id="po">18% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://photo620x400.mnstatic.com/a67c75e8996acf5638984fb4cb790904/pereira.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Pereira</td>
            
            <td class="two" id="po">20% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://images.mnstatic.com/48/19/481902d4d03765b5f47361f66d2cdb18.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">San andres</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.upb.edu.co/es/imagenes/img-sobrelaciudadbucaramanga-cam-1464102319822.jpg" alt="">
        </div>
      </div>
      
      <div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Bucaramanga</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.elheraldo.co/sites/default/files/articulo/2023/01/05/whatsapp_image_2023-01-05_at_12.46.26_pm.jpeg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">mitú</td>
            
            <td class="two" id="po">8% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://www.elnuevodia.com.co/nuevodia/sites/default/files/styles/nota_800_x_400_/public/imagenes/2021/04/20/WhatsApp%20Image%202021-04-20%20at%2009.48.54%20copia_1.jpg?itok=CPqzTDAB" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Sincelejo</td>
            
            <td class="two" id="po">30% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://azorhoteles.com/wp-content/uploads/2023/12/Cali-de-Noche.jpg" alt="">
        </div>
       
      </div><div class="centro background-cover">
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Ibague</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
          <img src="https://pbs.twimg.com/media/DZVeMD6VMAAVLby.jpg" alt="">
        </div>
        <div class="caja"  data-url="/html/form_offer.html">
          <div class="info">
          <div id="info_container">
          <table id="info_1">
          <tr>
            <td class="data-city">Cali</td>
            
            <td class="two" id="po">15% DTO</td>
            
          </tr>
          <tr>
          <td class="abajo two">Oferta</td>
          <td class="abajo" id="po">COP300.000</td>
          </tr>
          </table>
        </div>
          </div>
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/3INQYY3LQRCQHIZ3E2CRLQAQ5E.jpg" alt="">
      </div>
`