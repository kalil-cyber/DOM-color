// Ajouter un écouteur d'événement au bouton pour détecter le clic
 var btn= document.querySelector('#changeColorBtn')
 btn.addEventListener('click',function(){
    document.body.style.backgroundColor=couleurAleatoir()
 })

// Créer une fonction pour changer la couleur de fond du body
function couleurAleatoir(){
    let letter ='0123456789ABCDEF'
    let couleur ='#'
    for (let i=0; i<6;i++){
        couleur+=letter[Math.floor(Math.random()*16)]

    }
    return couleur;

}
// (Optionnel) Créer une fonction auxiliaire pour générer une couleur aléatoire
function couleurAleatoir(){
    const randomcolor = '#'+ Math.floor(Math.random() *16777215).toString(16)
    return randomcolor.padStart(7,'0')
}
console.log(couleurAleatoir())