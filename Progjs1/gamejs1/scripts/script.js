
        let globalScore = 0
        let a = 0

        function afficherEmail(nom, email, score) {
            let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
            location.href = mailto
        }
        
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
            
            //Boutton 'VALIDER'
            //une fois le résultat saisit le joueur appuit sur le boutton "Valider", la barre de saisit se réinitialise et affiche un score 
            bouttonValider.addEventListener('click', () => {

                if(lInputButton1.value === leTableau[i]) {
                    score++
                }
                i++

                // Attribution au score global
                globalScore = score 
                a = i
                afficheResultat(score, i)                   
                lInputButton1.value = ''
                afficherProposition(leTableau[i])
                
                if(i === leTableau.length) {
                    afficherProposition("Le jeu est fini") // 1
                    bouttonValider.disabled = true        
                }
            })      
            //=====================================================
            
            
            //Choix "Radio"
            //liste de choix entre le tableau "mots" et "Phrases" 
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

        // Fonction permet de faire apparaitre le formulaire de partage SCORE 
        let partage = document.getElementById("button2")
        partage.addEventListener('click', () => {
            let popupBack = document.querySelector(".popupBackground").style.display="flex";
        })
   


        //Fonction qui empechera la page de s'actualiser lors de Submit 
        
        let form = document.querySelector('form')

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            console.log("LA page ne s'est pas actualisé !!!")

            const nom = document.getElementById("nom").value
            const email = document.getElementById("email").value

            let leScore = globalScore + "/" + a
            
            afficherEmail(nom, email, leScore)
            
            let popupBack = document.querySelector(".popupBackground").style.display="none"
        })