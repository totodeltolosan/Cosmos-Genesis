
import { Diploma } from '../types';

export const DIPLOMAS: Diploma[] = [
    { id: 'dip_math_license', title: 'Licence Mathématiques', description: 'Maîtrise des 15 concepts fondamentaux.', color: 'from-blue-600 to-indigo-500', icon: '📐', requiredCategory: 'MATH', requiredCount: 15 },
    { id: 'dip_hist_license', title: 'Licence Histoire', description: 'Savoir temporel complet validé.', color: 'from-amber-600 to-orange-500', icon: '🏛️', requiredCategory: 'HISTORY', requiredCount: 15 },
    { id: 'dip_cs_license', title: 'Licence Informatique', description: 'Expertise binaire et algorithmique.', color: 'from-green-600 to-emerald-500', icon: '💻', requiredCategory: 'CS', requiredCount: 15 },
    { id: 'dip_bio_license', title: 'Licence Biologie', description: 'Connaissance du vivant certifiée.', color: 'from-pink-600 to-rose-500', icon: '🧬', requiredCategory: 'BIO', requiredCount: 15 },
    
    // New Diplomas
    { id: 'dip_phys_license', title: 'Licence Physique', description: 'Maîtrise de la matière et de l\'énergie.', color: 'from-purple-600 to-violet-500', icon: '⚛️', requiredCategory: 'PHYSICS', requiredCount: 15 },
    { id: 'dip_geo_license', title: 'Licence Géographie', description: 'Explorateur du monde certifié.', color: 'from-cyan-600 to-sky-500', icon: '🌍', requiredCategory: 'GEO', requiredCount: 15 },
    { id: 'dip_fr_license', title: 'Licence Lettres', description: 'Érudit de la langue française.', color: 'from-red-600 to-rose-500', icon: '✒️', requiredCategory: 'FRENCH', requiredCount: 15 },
    { id: 'dip_psy_license', title: 'Licence Psychologie', description: 'Expert de l\'esprit humain.', color: 'from-fuchsia-600 to-magenta-500', icon: '🧠', requiredCategory: 'PSYCH', requiredCount: 15 },
    { id: 'dip_civic_license', title: 'Citoyenneté', description: 'Citoyen modèle et éclairé.', color: 'from-indigo-600 to-blue-500', icon: '⚖️', requiredCategory: 'CIVIC', requiredCount: 15 },
    { id: 'dip_logic_license', title: 'Grand Maître Logique', description: 'QI Supérieur certifié.', color: 'from-lime-600 to-green-500', icon: '💡', requiredCategory: 'QI', requiredCount: 15 },

    { id: 'dip_polymath', title: 'Polymathe Universel', description: 'Génie absolu : 150 modules validés.', color: 'from-yellow-400 to-yellow-600', icon: '🎓', requiredCount: 150 }
];
