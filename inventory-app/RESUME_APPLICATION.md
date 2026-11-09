# Résumé de l’application Inventory

## Présentation

Inventory est une application web de démonstration destinée à présenter une interface de gestion d’inventaire. Elle est composée uniquement d’un frontend React : aucun backend ni base de données n’est nécessaire. Les pages affichent des données de démonstration définies dans le code.

## Pages de l’application

- **Tableau de bord (`/`)** : présente des indicateurs de stock, de commandes et de revenus, ainsi qu’un tableau des commandes récentes.
- **Produits (`/products`)** : affiche une liste de produits avec leur catégorie, leur prix, leur quantité en stock et leur statut.
- **Commandes (`/orders`)** : présente des exemples de commandes, leurs clients, quantités, montants, dates et statuts.
- **Analytiques (`/analytics`)** : affiche des indicateurs de chiffre d’affaires, de commandes, de valeur moyenne et de conversion.
- **Paramètres (`/settings`)** : propose des champs de configuration pour le magasin, l’adresse e-mail, la devise, la langue, les notifications et le mode sombre.

La navigation entre les pages est gérée avec React Router. L’interface comprend également une barre latérale, des cartes statistiques et des tableaux.

## Technologies

- React
- React Router
- Create React App (`react-scripts`)
- CSS

## Démarrer l’application

Dans un terminal, ouvrir le dossier `frontend`, puis exécuter :

```bash
npm install
npm start
```

L’application sera disponible à l’adresse [http://localhost:3000](http://localhost:3000).

## Limites actuelles

- Les données affichées sont statiques ou simulées et ne sont pas sauvegardées dans une base de données.
- Les boutons d’ajout, de modification et de suppression sont présents dans l’interface, mais les actions de gestion ne sont pas encore implémentées.
- Les paramètres restent dans l’état local de la page et ne sont pas persistés.
- La section des analytiques présente des chiffres de démonstration ; les graphiques ne sont pas encore intégrés.
