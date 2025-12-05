import { Achievement, Era, ResourceType } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'big_bang', name: 'Que la lumière soit', description: 'Commencez l\'univers.',
    icon: '💥', condition: (s) => s.resources[ResourceType.ENTROPY] > 1,
  },
  {
    id: 'first_matter', name: 'C\'est du solide', description: 'Produisez votre première unité de matière.',
    icon: '⚛️', condition: (s) => s.resources[ResourceType.MATTER] >= 1,
  },
  {
    id: 'life_finds_a_way', name: 'La vie trouve un chemin', description: 'Entrez dans l\'ère biologique.',
    icon: '🧬', condition: (s) => s.era === Era.BIOLOGICAL,
  },
  {
    id: 'hello_world', name: 'Hello World', description: 'Une civilisation a atteint le stade interstellaire.',
    icon: '🛸', condition: (s) => s.era === Era.INTERSTELLAR,
  },
  {
    id: 'god_mode', name: 'Omnipotence', description: 'Atteignez le Point Oméga.',
    icon: '👁️', condition: (s) => s.era === Era.OMEGA,
  },
  {
    id: 'red_pill', name: 'La Pilule Rouge', description: 'Découvrez que l\'univers est une simulation.',
    icon: '💊', condition: (s) => s.era === Era.SIMULATION,
  },
  {
    id: 'segfault', name: 'Segmentation Fault', description: 'Provoquez un crash de réalité (Glitch).',
    icon: '👾', condition: (s) => s.era === Era.GLITCH,
  },
  {
    id: 'sudo_user', name: 'Sudo User', description: 'Accédez au Code Source de l\'univers.',
    icon: '💻', condition: (s) => s.era === Era.SOURCE_CODE,
  },
  {
    id: 'lucid_dreamer', name: 'Rêveur Lucide', description: 'Réveillez-vous du rêve cosmique.',
    icon: '💤', condition: (s) => s.era === Era.DREAM,
  },
  {
    id: 'beyond_infinity', name: 'Vers l\'Infini et au-delà', description: 'Atteignez l\'ère finale : L\'Infini.',
    icon: '🌌', condition: (s) => s.era === Era.INFINITE
  }
];