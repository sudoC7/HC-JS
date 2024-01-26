
        
        //Fonction va permetre de choisir entre 'phrases' et 'mots'
        function choisirPhrasesOuMots() {
            let choix = prompt("Veuillez saisir un mot de la liste : mots ou phrases ")
        
            while(choix !== "mots" && choix !== "phrases") {
                choix = prompt("Veuillez saisir un mot de la liste : mots ou phrases ")
            }   
            return choix
        }
       
        //Fonction du jeu principal
        function lancerBoucleDeJeu(listeDeProposition) {
            let score = 0
            let choix

            for(let i = 0; i < listeDeProposition.length;i++){
                choix = prompt("Entrez le mot : " + listeDeProposition[i])
                if(choix === listeDeProposition[i]) {
                    ++score
                }        
            }
          
            return score 
        }
        
        //La Fonction va afficher le nombre de score final
        function afficheResultat(nombre, liste) {
            console.log('Votre score est de ' + nombre +  ' sur '  + liste)
        }

        //Fonction du lancement de jeu 
        function lancerJeu() {
            let choix = choisirPhrasesOuMots()
            let score = 0
            let tailleTableau = 0

            if(choix === "mots") {
                score = lancerBoucleDeJeu(listeMots)
                tailleTableau = listeMots.length
            }
            else {
                score = lancerBoucleDeJeu(listePhrases)
                tailleTableau = listePhrases.length
            }
            
            afficheResultat(score, tailleTableau)

        }

     