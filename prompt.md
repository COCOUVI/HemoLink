# Traçabilité des prompts — HemoLink

## Outils d’IA sollicités

- **Codex** : analyse du codebase, génération et modification du code React/Vite, création des composants, débogage et validation avec ESLint/Vite.
- **Superdesign** : récupération du design HemoLink, génération de la direction visuelle et consultation du draft actif.

## Séquence des prompts significatifs

1. Lecture de `execute.md` pour récupérer le projet et le draft Superdesign HemoLink.
2. Création d’un plan d’implémentation à partir du design récupéré.
3. Implémentation de la landing page HemoLink en React avec une architecture par composants.
4. Ajout d’une page `/centres` contenant les 8 centres de collecte.
5. Remplacement du toast initial par `react-toastify`, avec animation, jauge synchronisée et style vert/blanc pour les succès.

## Ajustements manuels effectués

- Ajout d’une option « C’est mon premier don » afin d’appliquer correctement le délai post-don uniquement aux donneurs ayant déjà donné.
- Modification de l’accroche du hero en « Une communauté qui sauve des vies » pour permettre une attirance cote utilisateur
- Modification du min du input a 1 pour l'age et pour le poids pour eviter que l'utilisateur  rentre des valeurs negatif ou nulle

## Limites rencontrées avec l'outil

- L'outil ne comprend pas toujours correctement les instructions, même lorsque la demande est formulée de manière précise.
- Il est parfois nécessaire de lui fournir une capture d'écran ou une image pour lui montrer visuellement le résultat attendu.
- Après avoir fourni une référence visuelle, l'outil comprend généralement mieux la demande et produit un résultat plus conforme aux attentes.
