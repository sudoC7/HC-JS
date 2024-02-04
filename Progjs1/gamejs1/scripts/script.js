
// Etape 4
/*  
*/











        //Fonction affiche les propositions du tableau
        function afficherProposition(leMotDuListe){
            let motAfficher = document.querySelector('.zoneProposition')           
            motAfficher.innerText = leMotDuListe
        }

        //Fonction affiche le nombre de score final
        function afficheResultat(nombre, liste) {
            let spanScore = document.querySelector(".zoneScore span")
            let afficheScore = nombre + " / "  + liste
            spanScore.innerText = afficheScore
        }

        //Fonction du lancement de jeu 
        function lancerJeu() {
            let score = 0
            let i = 0
            let leTableau = listeMots

            
            
            let lInputButton1 = document.getElementById('inputEcriture')
            let bouttonValider = document.getElementById('button1')
            afficherProposition(leTableau[i])
            
            bouttonValider.addEventListener('click', () => {
                console.log(lInputButton1.value)

                if(lInputButton1.value === leTableau[i]) {
                    score++
                }
                i++
                afficheResultat(score, i)                   
                lInputButton1.value = ''
                afficherProposition(leTableau[i])
                
                if(i === leTableau.length) {
                    afficherProposition("Le jeu est fini")
                    bouttonValider.disabled = true        
                }
            })      
            
            let listeRadio = document.querySelectorAll(".optionSource input")
            for(let tour = 0; tour < listeRadio.length; tour++) {
                listeRadio[tour].addEventListener('change', (event) => {
                    
                    if(event.target.value === "1") {
                        leTableau = listeMots
                    } else {
                        leTableau = listePhrases
                    }
                    afficherProposition(leTableau[i])
                })
            }
            
        }


   
