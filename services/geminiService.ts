import { GoogleGenAI } from "@google/genai";
import { Era } from '../types';

let ai: GoogleGenAI | null = null;

try {
  if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
} catch (e) {
  console.warn("Environment variable access failed, running in offline mode.");
}

export const generateCosmicFlavorText = async (era: Era, context: string): Promise<string> => {
  if (!ai) return `Simulation: ${era} - ${context}`;

  try {
    const prompt = `
      Tu es le narrateur d'un jeu de simulation d'univers.
      L'univers est dans l'ère : "${era}". Contexte : "${context}".
      Génère une description très courte (1 phrase), poétique mais scientifique.
      Réponds uniquement en Français.
    `;
    const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
    return response.text.trim();
  } catch (error) {
    return "L'univers continue son expansion...";
  }
};

export const generateCharacterReaction = async (persona: string, eventName: string, type: 'upgrade' | 'era'): Promise<string> => {
  if (!ai) return `${eventName} acquis. Intéressant.`;

  try {
    const prompt = `
      CONTEXTE: Jeu incrémental "Cosmos Genesis".
      PERSONA: ${persona}
      ÉVÉNEMENT: Le joueur vient de débloquer ${type === 'upgrade' ? 'l\'amélioration' : 'l\'ère'} "${eventName}".
      
      TÂCHE: Écris un commentaire COURT (max 15 mots) réagissant à cet événement avec la personnalité définie ci-dessus.
      Sois drôle, profond ou cynique selon la persona.
    `;
    const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt });
    return response.text.trim();
  } catch (e) {
    return "Données indisponibles.";
  }
};

export const generateCivilizationDetails = async (age: number): Promise<{name: string, trait: string}> => {
  if (!ai) return { name: "Inconnu", trait: "Mode hors ligne" };
  try {
    const prompt = `Génère un nom de civ alien et un trait court. Univers: ${age} Mds années. JSON: {"name": "Nom", "trait": "Trait"}`;
    const response = await ai.models.generateContent({ model: 'gemini-2.5-flash', contents: prompt, config: { responseMimeType: "application/json" } });
    return JSON.parse(response.text.trim());
  } catch (e) { return { name: "Xylophian", trait: "Constructeurs" }; }
}