# HemoLink — plan d’implémentation

## Source design

- Superdesign project: `ca8cca8d-d594-4df3-ac53-7a0ede351f06`
- Active draft: `90178eb8-9ade-43ef-8dec-ea0c976b53ea`
- Active design version: `8`
- Product: landing page HemoLink destinée à informer et orienter les donneurs de sang au Bénin.
- Direction visuelle: minimalisme chaleureux, fond crème `#FAFAF8`, rouge HemoLink `#A84C3D`, rose `#E8D5D0`, texte `#2D2A26`, cartes et ombres douces.
- Typographie: `Zodiak` pour les titres, `Plus Jakarta Sans` pour le corps.
- Référence récupérée: HTML/Tailwind généré par le draft Superdesign. Le code final doit être React natif et ne doit pas dépendre du CDN Tailwind ou d’Iconify.

## État actuel du dépôt

Le dépôt est un starter React 19 + Vite 8 sans routeur ni composants métier. Toute l’interface est actuellement dans `src/App.tsx`, avec les styles dans `src/App.css` et `src/index.css`. La migration doit donc commencer par une décomposition de l’écran plutôt que par une modification ponctuelle du compteur Vite.

## Architecture cible

```text
src/
  App.tsx
  App.css
  index.css
  components/
    BrandLogo.tsx
    SiteNav.tsx
    SectionHeading.tsx
    TrustSignals.tsx
    DonationScene.tsx
    FeatureCard.tsx
    EligibilityForm.tsx
    EligibilityResult.tsx
    ProcessSteps.tsx
    PreparationCards.tsx
    BloodReserveCard.tsx
    BloodReserves.tsx
    CenterCard.tsx
    CentersSection.tsx
    FaqAccordion.tsx
    ToastRegion.tsx
    SiteFooter.tsx
  data/
    centers.ts
    faqs.ts
    bloodReserves.ts
  hooks/
    useToast.ts
  types/
    hemolink.ts
```

## Découpage fonctionnel

1. **Shell et navigation**
   - Remplacer le starter Vite par une page pleine largeur.
   - Navigation fixe avec logo goutte, ancres `Pourquoi ?`, `Critères`, `Test`, `Le parcours`, et bouton `Trouver un centre`.
   - Ajouter scroll fluide, états focus clavier et comportement responsive.

2. **Hero**
   - Titre « Un geste simple, une vie sauvée. » et texte d’introduction en français.
   - CTA principal vers `#eligibility-test`.
   - Signaux de confiance: sécurisé, gratuit, confidentiel.
   - Créer `DonationScene.tsx` avec le SVG line-art médecin/donneur et les animations de flottement, aiguille, remplissage de seringue et flux dans le tube.

3. **Sections de contenu**
   - `WhyDonate`: trois cartes urgences, malades, solidarité.
   - `WhoCanDonate`: quatre critères âge, poids, délais, état de santé.
   - `ProcessSteps`: quatre étapes accueil, test de santé, prélèvement, repos, avec durées et durée totale d’environ 45 minutes.
   - `PreparationCards`: trois cartes AVANT, PENDANT, APRÈS.

4. **Test d’éligibilité**
   - Formulaire contrôlé avec genre, âge et poids; inputs `number` avec bornes sûres (`age min=1 max=65`, `weight min=50`).
   - Validation visuelle par champ et messages explicites.
   - Calculer le délai selon le genre et afficher une carte résultat éligible/non éligible.
   - Le bouton `Réserver` doit faire défiler vers `#centres`.
   - Ajouter une région de toast accessible (`role="status"` ou `role="alert"`) avec fermeture manuelle et disparition automatique après 4 secondes.

5. **Réserves sanguines**
   - Données séparées pour `O-`, `O+`, `A-`, `A+`, `B-`, `B+`, `AB-`, `AB+`.
   - Carte réutilisable avec statut URGENT/NORMAL/BON, couleur et jauge de progression.
   - Ne pas présenter les valeurs comme des données médicales temps réel sans source backend: les garder comme données de démonstration clairement remplaçables.

6. **Centres et FAQ**
   - Afficher les trois centres du draft actif: CTS Cotonou, CRTS Parakou, Centre Porto-Novo.
   - Chaque carte comporte l’icône bâtiment/hôpital, adresse, téléphone et horaires.
   - Bouton `Voir tous les centres` conservé comme lien externe configurable.
   - FAQ débutant avec accordéon clavier accessible, une seule réponse ouverte à la fois.

7. **Footer**
   - Réutiliser le logo goutte, les rappels de navigation et les informations HemoLink.

## Styles et dépendances

- Remplacer les tokens Vite dans `src/index.css` par les tokens HemoLink.
- Utiliser CSS variables, CSS Grid/Flexbox et media queries; conserver une largeur fluide de 390px à 1440px.
- Ajouter les polices Google uniquement si le produit accepte cette dépendance réseau; sinon prévoir des fallbacks serif/sans-serif proches.
- Remplacer Iconify par des SVG inline ou un petit set d’icônes local pour éviter une dépendance CDN.
- Conserver les animations CSS légères et respecter `prefers-reduced-motion`.

## Ordre d’exécution

1. Créer les types et données statiques.
2. Mettre en place les tokens CSS et le shell responsive.
3. Construire navigation, hero et illustration SVG.
4. Construire les sections informatives et les cartes réutilisables.
5. Implémenter le formulaire, la validation, les résultats et les toasts.
6. Ajouter réserves, centres, FAQ et footer.
7. Supprimer les imports/assets du starter Vite devenus inutiles.
8. Vérifier `npm run lint`, `npm run build`, le clavier, les ancres et les largeurs mobile/desktop.

## Critères d’acceptation

- L’écran ne contient plus de contenu Vite/React starter.
- Les neuf zones du draft actif sont présentes: hero, pourquoi donner, critères, test, déroulement, préparation, réserves, centres, FAQ/footer.
- La palette, les polices, les rayons, les ombres et les animations correspondent au draft.
- Le formulaire donne un retour utile pour les valeurs invalides et valides sans rechargement.
- Les toasts sont lisibles, temporisés, fermables et accessibles.
- Les ancres de navigation fonctionnent et la mise en page reste exploitable sur mobile.
- `npm run lint` et `npm run build` passent sans erreur.

## Hors périmètre de cette étape

- Authentification, comptes donneurs, réservation persistée, carte interactive et synchronisation réelle des stocks.
- Ces éléments pourront être branchés après validation de la landing page et du contrat API.

