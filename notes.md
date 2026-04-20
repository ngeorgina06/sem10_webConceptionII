<!-- #RETOUR SUR LA FENETRE MODALE# -->

##### Façon simple (examens, tous les jours):

**HTML**
Mettre div avec le mot modale dedans (div.modale avec un p)

**CSS .modale**
bg noir ave transparence
width/height: 100vw 100vh
position: absolute top: 0
flexbox center
flex direction column
apparence typo
display: none

**CSS .visible**
display: flex

**JS**
const 1: aller chercher les boutons (doc.querySelectorAll(.bouton))
const 2: aller chercher la classe .modale
const 3: paragraphe dans la div modale

eventListener
openmodale

function
rend la modale visible avec une classe .visible
sur le paragrahe, ajouter classe .imagemodale (avoir la mise en forem)

function
removchild image
removechild par
classlistremove visible

##### Façon complète (tp final) car section employé, image + nom/poste:

**HTML**
div.modale vide
alt sur les img avant boutons

**CSS .imgmodale**
bg colour
padding
border radius

**CSS .modale**
meme code

**CSS .visible**
display: flex

**JS**
const 1: aller chercher les boutons (doc.querySelectorAll(.bouton))
const 2: aller chercher la classe .modale (pour img + nom)

boucle for sur chacun des boutons du tableau

function (parcourir le chemin pour le bouton)
openmodale
previos element sibling (frere/soeur bouton = img)
this(bouton cliqué)
creer virtuellement balise image

faire la meme chose pour le paragraphe
récpérer l'attribut alt
créer un p avec l'alt comme texte

ajouter à la div modale la balise image et paragraphe (visible)

function fermer
enlever les balises
enlever classe visible

##### vérifier code avec console.log toutes les étapes
