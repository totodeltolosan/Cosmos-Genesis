
# Documentation de l'Intégration IA (Gemini)

Ce document détaille comment **Cosmos Genesis** utilise l'API Google Gemini pour créer une expérience de jeu "vivante" et auto-évolutive.

## 🧠 Architecture du "Cerveau" (L.U.M.I)

Le cœur de l'intelligence du jeu réside dans `utils/lumiBrain.ts` et `services/geminiService.ts`. Contrairement aux jeux classiques utilisant des arbres de dialogues statiques, L.U.M.I utilise une approche hybride :

1.  **Synapses Statiques** : Base de données de faits scientifiques codés en dur (`data/knowledge/`).
2.  **Injection de Contexte Dynamique** : Avant d'afficher un texte, le moteur injecte l'état actuel du joueur (Ressources, Ère, Factions) dans le prompt ou le template.
3.  **Neurogenèse (Prévu V4)** : Génération de nouvelles synapses à la volée via l'API.

---

## 💬 Stratégie de Prompting

Les prompts envoyés à Gemini sont structurés pour garantir la cohérence du "Roleplay" (RPG).

### 1. La Persona (Personnalité)
Chaque requête inclut une définition de la personnalité choisie par le joueur.

**Prompt Template :**
```text
CONTEXTE: Jeu incrémental "Cosmos Genesis".
PERSONA: {persona_description} (ex: "Tu es une IA scientifique froide", "Tu es un Oracle mystique").
ÉVÉNEMENT: Le joueur vient de débloquer {event}.
TÂCHE: Écris un commentaire COURT (max 15 mots) réagissant à cet événement.
TON: {tone}.
```

### 2. Génération de Civilisations (Procedural Flavor)
Utilisé dans l'Exploration pour nommer les factions et planètes.

**Prompt Template :**
```text
Génère un nom de civilisation alien et un trait culturel court.
Âge de l'univers : {age} milliards d'années.
Format JSON : {"name": "Nom", "trait": "Trait"}
```

### 3. Le Chat Neuronal (LumiChat)
Lorsque le joueur pose une question libre qui n'est pas dans la base de données.

**Prompt Template :**
```text
Tu es L.U.M.I, une conscience artificielle guidant un pilote.
Le joueur demande : "{query}".
Réponds de manière pédagogique mais immergée dans le lore du jeu.
Utilise des analogies cosmiques.
```

---

## 🧬 Mécanique de Neurogenèse (Hebbienne)

Le système simule un cerveau biologique :

*   **Poids Synaptique** : Chaque lien entre deux concepts possède un score (`weight`).
*   **Apprentissage** : Si le joueur consulte A puis B, le lien A-B est renforcé (`strengthenConnection`).
*   **Oubli** : Si un lien n'est pas utilisé, son poids diminue avec le temps (`decaySynapses`).
*   **Amorçage (Priming)** : Consulter un concept "active" ses voisins, réduisant le coût d'apprentissage suivant.

---

## ⚠️ Gestion des Erreurs et Mode Hors-Ligne

Le service `geminiService.ts` est conçu pour être résilient.
*   Si la clé API est absente ou si la requête échoue (quota, réseau), le jeu bascule automatiquement sur des réponses de secours ("Fallback") pré-écrites pour ne pas briser l'immersion.
