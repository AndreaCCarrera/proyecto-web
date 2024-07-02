
// Cambiar el contenido de un idioma a otro

function idioma() {

        
        //Títulos
        var titulo= document.getElementsByTagName("h1")[0];
        titulo.innerHTML = "The story started here";

        var titulo2= document.getElementsByTagName("h2")[0];
        titulo2.innerHTML = "Inspiration";

        var parrafos = document.getElementsByTagName("p");

        for (var i = 0; i < parrafos.length; i++) {
          var parrafo = parrafos[i];

          switch (parrafo.id) {
            case "parrafo1":
              parrafo.innerHTML = '<img id="bandera" src="images/spanish.jpg" width="10%" alt="Bandera España" title="Cambiar idioma" onclick="restaurarIdioma()"/>Before magic disappeared from the known world, it flowed through all living creatures, and a few chosen ones could harness it to create both the best and the worst. Jan Lin is one of them, the essence of fire runs through her veins, but a plague of unknown origin threatens to destroy everything she holds dear.';
              break;
            case "parrafo2":
              parrafo.innerHTML = "Jan Lin is a young and talented apprentice mage who lives in a small village on the edge of the forest. Her mentor, the elderly mage Hanzo, has taught her everything he knows about controlling fire magic, but she feels that she still has much to learn. However, her life takes an unexpected turn when a strange illness begins to affect the villagers.";
              break;
            case "parrafo3":
              parrafo.innerHTML = "On her own, she decides to investigate the cause of the plague and discovers that a mysterious creature is behind it. This being, known as the World Devourer, feeds on the energy that flows through living beings and has been growing in power and size thanks to the magic it has consumed. The young woman senses that she must stop it before it's too late, but she will need more than just her fire magic skills to do so.";
              break;
            case "parrafo4":
              parrafo.innerHTML = "In their quest for a solution, they will encounter other wizards and apprentices who are also fighting against the plague, and they join them in a dangerous adventure. Together, they will face powerful magical creatures and uncover secrets that have been hidden for a long time.";
              break;
            case "parrafo5":
              parrafo.innerHTML = "The third installment of the bestselling saga is not a sequel but a prequel to the story that has captivated millions of readers and has been translated into more than 15 languages.";
              break;
            case "parrafo6":
              parrafo.innerHTML = "The author has acknowledged that this story came to him four years ago when he started playing the Korean version of the RPG MMO video game <em>Lost Ark</em>. Although both stories may not seem related at first glance, they share an air of epicness that leaves fans wanting more.";
              break;
            case "parrafo7":
              parrafo.innerHTML = "You can find a summary that compares the story of the video game with this new collective work by the author.";
              break;

            }

        }

        //Menú
        var menus = document.getElementsByTagName("a");

        for (var i = 0; i < menus.length; i++) {
          var menu = menus[i];

          switch (menu.id) {
            case "uno":
              menu.innerHTML = "HOME";
              break;
            case "dos":
              menu.innerHTML = "SINOPSIS";
              break;
            case "tres":
              menu.innerHTML = "UNIVERSE";
              break;
            case "cuatro":
              menu.innerHTML = "Characters";
              break;
            case "cinco":
              menu.innerHTML = "Scenaries";
              break;
            case "seis":
              menu.innerHTML = "Criatures";
              break;
            case "siete": menu.innerHTML = "SAGA";
              break;
            case "ocho":
                menu.innerHTML = "Finis Mare";
                break;
            case "nueve":
                menu.innerHTML = "Supra Caelum";
                break;
            case "diez":
                menu.innerHTML = "Trailers";
                break;
            case "once":
              menu.innerHTML = "BOOKING";
              break;

            }

          }
        }
        
          function restaurarIdioma() {
        
              //Títulos
              var titulo = document.getElementsByTagName("h1")[0];
              titulo.innerHTML = "La historia empezó aquí";
        
              var titulo2 = document.getElementsByTagName("h2")[0];
              titulo2.innerHTML = "Inspiración";
      
              var parrafos = document.getElementsByTagName("p");
      
              for (var i = 0; i < parrafos.length; i++) {
                var parrafo = parrafos[i];
      
                switch (parrafo.id) {
                  case "parrafo1":
                    parrafo.innerHTML = '<img id="bandera" src="images/english.jpg" width="10%" alt="Bandera UK" title="Cambiar idioma" onclick="idioma()"/>Antes de que la magia desapareciera de todo mundo conocido, fluía a través de todas las criaturas vivas y unos pocos elegidos podían dominarla y ser capaces de crear lo mejor y lo peor. Jan Lin es una de ellas, la esencia del fuego corre por sus venas, pero una plaga de origen desconocido amenaza con acabar todo aquello que aprecia..';
                    break;
                  case "parrafo2":
                    parrafo.innerHTML = "Jan Lin es una joven y talentosa aprendiz de maga que vive en una pequeña aldea al borde del bosque. Su mentor, el anciano mago Hanzo, le ha enseñado todo lo que sabe sobre el manejo de la magia del fuego, pero ella siente que aún le queda mucho por aprender. Sin embargo, su vida da un giro inesperado cuando una extraña enfermedad comienza a afectar a los habitantes de su aldea..";
                    break;
                  case "parrafo3":
                    parrafo.innerHTML = "Por su cuenta, decide investigar la causa de la plaga y descubre que una misteriosa criatura está detrás de ella. Este ser, conocido como el Devorador de Mundos, se alimenta de la energía que fluye a través de los seres vivos y ha estado creciendo en poder y tamaño gracias a la magia que ha consumido. La joven presiente que debe detenerlo antes de que sea demasiado tarde, pero para hacerlo necesitará algo más que su habilidad con la magia del fuego..";
                    break;
                  case "parrafo4":
                    parrafo.innerHTML = "En su búsqueda de una solución, se encontrará con otros magos y aprendices que también están luchando contra la plaga y se une a ellos en una peligrosa aventura. Juntos, enfrentarán a criaturas mágicas poderosas y descubrirán secretos que han estado ocultos por mucho tiempo..";
                    break;
                  case "parrafo5":
                    parrafo.innerHTML = "La tercera entrega de la saga bestseller no es su continuación, sino la precuela de la historia que ha cautivado a millones de lectores y que ha sido traudcida a más de 15 idiomas.";
                    break;
                  case "parrafo6":
                    parrafo.innerHTML = "El autor ha reconocido que esta historia se le ocurrió hace 4 años, cuando comenzó a jugar la versión coreana del videojuego RPG MMO Lost Ark, y aunque ambas historias no tengan a simple vista nada que ver, ambas tienen un aire de epicidad que hace que los fans se queden con ganas de más..";
                    break;
                  case "parrafo7":
                    parrafo.innerHTML = "Puedes ver un resumen que compara la historia del videojuego con la de esta nueva obra coral del escritor..";
                    break;
      
                  }
      
                }

                var menus = document.getElementsByTagName("a");

                for (var i = 0; i < menus.length; i++) {
                  var menu = menus[i];
        
                  switch (menu.id) {
                    case "uno":
                      menu.innerHTML = "HOME";
                      break;
                    case "dos":
                      menu.innerHTML = "SINOPSIS";
                      break;
                    case "tres":
                      menu.innerHTML = "UNIVERSO";
                      break;
                    case "cuatro":
                      menu.innerHTML ="Personajes";
                      break;
                    case "cinco":
                      menu.innerHTML = "Escenarios";
                      break;
                    case "seis":
                      menu.innerHTML = "Criaturas";
                      break;
                    case "siete": menu.innerHTML = "SAGA";
                      break;
                    case "ocho":
                        menu.innerHTML = "Finis Mare";
                        break;
                    case "nueve":
                        menu.innerHTML = "Supra Caelum";
                        break;
                    case "diez":
                        menu.innerHTML = "Trailers";
                        break;
                    case "once":
                      menu.innerHTML = "RESERVA";
                      break;
        
                    }
        
                  }
                }
            

   /* function cambiarBandera() {
    var imagenActual = document.getElementById("bandera").getAttribute("src");
    var nuevaImagen = "";
      
        if (imagenActual.includes("english.jpg")) {
          nuevaImagen = "images/spanish.jpg";
        } else {
          nuevaImagen = "images/english.jpg";
        }
      
        document.getElementById("bandera").setAttribute("src", nuevaImagen);
      }*/

        