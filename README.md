# ZIT Connect

Site professionnel de Jonathan Zambrano, ingénieur systèmes et spécialiste VoIP indépendant à Toulouse. Français et espagnol, sans framework ni dépendance JavaScript.

- Site : https://zitconnect.fr/
- GitHub : https://github.com/Jonathanz03/zitconnect
- Hébergement : Cloudflare Pages, déploiement depuis la branche main.

## Développement

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Ouvrir http://127.0.0.1:4173/. Aucun build ni installation de dépendances n’est nécessaire.

## Fichiers actifs

- index.html : contenu français et traductions espagnoles dans les attributs data-es.
- styles.css : styles adaptatifs et règles d’accessibilité.
- main.js : langue, navigation mobile, sélection de prestation et formulaire.
- assets/brand-original.png : logo d’origine.
- assets/favicon.ico : icône du site.
- robots.txt et sitemap.xml : indexation du domaine public.
- _headers : en-têtes HTTP Cloudflare Pages.

Les anciens dossiers css/ et js/ ne sont plus référencés par la page d’accueil. L’historique Git conserve les versions précédentes.

## Cloudflare Pages

Conserver le projet et les domaines personnalisés existants.

| Paramètre | Valeur |
| --- | --- |
| Dépôt | Jonathanz03/zitconnect |
| Branche de production | main |
| Framework | Aucun |
| Commande de build | Vide ou exit 0 |
| Répertoire de sortie | / (racine du dépôt) |

Un nouveau commit sur main déclenche le déploiement lorsque l’intégration Git est active. Vérifier le déploiement et le contenu de https://zitconnect.fr/ avant de considérer la publication terminée. Ne jamais publier les devis, sauvegardes, configurations privées ou secrets de la copie locale.

Pour revenir à la version précédente, utiliser le rollback Cloudflare Pages ou créer un commit qui rétablit les fichiers de la version souhaitée. Éviter de réécrire l’historique de main.

## Contact

Le formulaire conserve le service Formspree existant et l’adresse jonathan.zambrano@zitconnect.fr. Il inclut une validation native, un champ anti-robot, la prévention des doubles envois et la gestion des erreurs. Aucun envoi réel n’a été effectué pendant la vérification du nouveau design.

La préférence de langue utilise la clé zit-language du stockage local. Le français est la langue par défaut. Le site n’ajoute ni analyse d’audience ni cookies publicitaires.
