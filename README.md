# session-10

## Les différents types

Vous l'avez vu la semaine dernière: en programmation pour mémoriser une valeur
on utilise des variables. Ces variables peuvent avoir plus types de données.

Voici les types de données primitifs :

* Nombre entier (*Integer*): `1`
* Nombre décimal (*Float*): `3.1415`
* Texte (*String*): `"Jonathan !"`
* Booléen (*Boolean*): `true` ou `false`

Voici les types de données composites :

* Tableau (*Array*): `[1, 2, 3, 4]`
* Objet (*Objets*): `{ nom: "Romera", prenom: "Pierre", age: 28 }`

## Des types dans d'autres types

Les types composites (tableaux et objets) énumèrent chacun à leur manières des
valeurs. Ces valeurs peuvent être de n'importe quel type (primitif ou composite).

Ici un objet qui sert à définir une personne:

```javascript
var prof = {
  nom: "Romera",
  prenom: "Pierre",
  age: 28,
  pointure: 39.5,
  cheveux: 'brun',
  chauve: false,
  myope: true
}
```

Ou alors une collection de personnes:

```javascript
var profs = [   
  {
    nom: "Bonnard",
    prenom: "Jules",
    age: 26,
    pointure: 42.5,
    cheveux: 'blonds',
    chauve: false,
    myope: false
  },
  {
    nom: "Romera",
    prenom: "Pierre",
    age: 28,
    pointure: 39.5,
    cheveux: 'bruns',
    chauve: false,
    myope: true
  }
]
```

Les possibilités sont infinies:

```javascript
var chat = {
  prenom: "Yoko",
  couleurs: ["blanc", "marron", "noir"],
  age: 2,
  proprietaire: {
    prenom: "Pierre",
    nom: "Romera",
    metiers: ["Développeur", "Journaliste"],
    animaux: 1,
    employeur: {
      nom: "ICIJ",
      localisation: "Washington DC, USA"
    }
  }
}
```

## Accédez au données des types composites

Pour lire les valeurs d'un tableur on utilise un index qui commence à 0.

```javascript
var couleurs = ["blanc", "marron", "noir"]

couleurs[0] // => "blanc"
couleurs[2] // => "noir"
couleurs[10] // => undefined!
```

Pour les lire les valeurs d'un objet on utilise le nom de chaque propriété:

```javascript
chat.prenom // => "Yoko"
chat.age // => 2
```

On peut utiliser une notation différente pour obtenir les mêmes valeurs:

```javascript
chat["prenom"] // => "Yoko"

var ma_cle = "age"
chat[ma_cle] // 2
```

Pour atteindre une valeur qui n'est pas au premier niveau d'un objet composite
on peut suit la même logique mais en enchaînant les notations:

```javascript
chat.couleurs[0] // => "blanc"
chat.couleurs[1] // => "marron"
chat.proprietaire.prenom // => "Pierre"
chat.proprietaire.metiers[0] // => "Développeur"
chat.proprietaire.employeur.nom // => "ICIJ"
```
