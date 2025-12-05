
// This file defines the neural pathways between Synapses.
// Key = The ID of the current Synapse
// Value = Array of IDs of related Synapses to suggest

export const SYNAPTIC_CONNECTIONS: { [key: string]: string[] } = {
    // --- ORIGINS ---
    'syn_entropy': ['syn_thermo', 'syn_arrow_time', 'syn_chaos', 'syn_boltzmann', 'syn_maxwell_demon', 'syn_shannon'],
    'syn_big_bang': ['syn_inflation', 'syn_nucleosynthesis', 'syn_cmb', 'syn_big_crunch', 'syn_big_bounce'],
    'syn_inflation': ['syn_multiverse', 'syn_dark_energy', 'syn_big_bang', 'syn_false_vacuum', 'syn_monopole'],

    // --- PHYSICS ---
    'syn_atom': ['syn_proton', 'syn_electron', 'syn_quantum', 'syn_fusion', 'syn_planck_const'],
    'syn_relativity': ['syn_gravity', 'syn_time_dilation', 'syn_black_hole', 'syn_wormhole', 'syn_alcubierre', 'syn_lens', 'syn_non_euclid'],
    'syn_heisenberg': ['syn_quantum', 'syn_observer', 'syn_schrodinger', 'syn_quantum_foam', 'syn_planck_const'],
    'syn_fission': ['syn_fusion', 'syn_radioactivity', 'syn_bomb'],
    'syn_doppler': ['syn_expansion', 'syn_sound', 'syn_light'],
    'syn_string': ['syn_m_theory', 'syn_dimensions', 'syn_lqg', 'syn_supersymmetry'],
    'syn_antimatter': ['syn_fission', 'syn_fusion', 'syn_big_bang'],
    'syn_quantum_foam': ['syn_planck_const', 'syn_heisenberg', 'syn_lqg'],
    'syn_maxwell_demon': ['syn_entropy', 'syn_shannon', 'syn_thermo'],
    'syn_time_crystal': ['syn_symmetry', 'syn_thermo', 'syn_perpetual'],

    // --- COSMOLOGY ---
    'syn_stars': ['syn_fusion', 'syn_supernova', 'syn_nebula', 'syn_black_hole', 'syn_neutron_star', 'syn_shkadov'],
    'syn_black_hole': ['syn_relativity', 'syn_event_horizon', 'syn_hawking', 'syn_white_hole', 'syn_wormhole', 'syn_accretion', 'syn_spaghettification', 'syn_kugelblitz'],
    'syn_fermi': ['syn_drake', 'syn_filter', 'syn_panspermia', 'syn_von_neumann_probe', 'syn_berserker', 'syn_dark_forest_web'],
    'syn_nebula': ['syn_stars', 'syn_dust', 'syn_accretion'],
    'syn_pulsar': ['syn_neutron_star', 'syn_lighthouse', 'syn_supernova'],
    'syn_dyson': ['syn_kardashev', 'syn_matrioshka', 'syn_energy', 'syn_shkadov'],
    'syn_big_rip': ['syn_dark_energy', 'syn_expansion', 'syn_void'],
    'syn_laniakea': ['syn_attractor_great', 'syn_galaxy', 'syn_void', 'syn_south_wall'],
    'syn_wormhole': ['syn_relativity', 'syn_black_hole', 'syn_white_hole', 'syn_alcubierre'],

    // --- BIOLOGY ---
    'syn_dna': ['syn_rna', 'syn_mutation', 'syn_crispr', 'syn_evolution', 'syn_designer_baby', 'syn_telomeres'],
    'syn_cell': ['syn_mitochondria', 'syn_membrane', 'syn_neuron', 'syn_silicon'],
    'syn_evolution': ['syn_darwin', 'syn_adaptation', 'syn_extinction', 'syn_uplift'],
    'syn_neuron': ['syn_brain', 'syn_synapse', 'syn_consciousness', 'syn_bci', 'syn_neural_lace', 'syn_hive'],
    'syn_homeostasis': ['syn_regulation', 'syn_fever', 'syn_stress'],
    'syn_cyborg': ['syn_bci', 'syn_neural_lace', 'syn_exocortex', 'syn_transhumanism'],
    'syn_upload': ['syn_ship_theseus', 'syn_immortality', 'syn_simulation', 'syn_metaverse'],
    'syn_silicon': ['syn_alien', 'syn_chemistry', 'syn_ai'],
    'syn_grey_goo': ['syn_nanotech', 'syn_von_neumann_probe', 'syn_virus'],

    // --- PHILOSOPHY ---
    'syn_cogito': ['syn_consciousness', 'syn_simulation', 'syn_solipsism', 'syn_brain_vat', 'syn_zombie'],
    'syn_nihilism': ['syn_entropy', 'syn_existentialism', 'syn_absurd', 'syn_neg_util'],
    'syn_qualia': ['syn_consciousness', 'syn_color', 'syn_uncanny', 'syn_mary_room', 'syn_chinese_room', 'syn_panpsychism'],
    'syn_ship_theseus': ['syn_identity', 'syn_teleport', 'syn_cell', 'syn_upload', 'syn_open_ind'],
    'syn_simulation': ['syn_matrix', 'syn_glitch', 'syn_cave_code', 'syn_brain_vat', 'syn_omphalos', 'syn_last_thursday'],
    'syn_determinism': ['syn_chaos', 'syn_laplace', 'syn_free_will', 'syn_newcomb', 'syn_clockwork'],
    'syn_utilitarian': ['syn_neg_util', 'syn_trolley', 'syn_ethics'],
    'syn_black_swan': ['syn_chaos', 'syn_prediction', 'syn_turkey'],

    // --- HUMANITY ---
    'syn_fire': ['syn_cooking', 'syn_energy', 'syn_civilization'],
    'syn_writing': ['syn_history', 'syn_printing', 'syn_internet', 'syn_exocortex'],
    'syn_agriculture': ['syn_sedentary', 'syn_city', 'syn_population'],
    'syn_democracy': ['syn_greece', 'syn_vote', 'syn_republic', 'syn_overton'],
    'syn_internet': ['syn_network', 'syn_dead_internet', 'syn_dark_forest_web', 'syn_metaverse', 'syn_cyberwar', 'syn_blockchain'],
    'syn_moore': ['syn_amdahl', 'syn_transistor', 'syn_singularity', 'syn_hard_takeoff'],

    // --- CS / AI ---
    'syn_turing': ['syn_halting', 'syn_computer', 'syn_enigma', 'syn_chinese_room', 'syn_captcha'],
    'syn_ai': ['syn_neural_net', 'syn_friendly_ai', 'syn_paperclip', 'syn_roko', 'syn_asimov', 'syn_algo_bias'],
    'syn_dead_internet': ['syn_bot', 'syn_fake', 'syn_deepfake', 'syn_turing'],
    'syn_blockchain': ['syn_money', 'syn_crypto', 'syn_zk_proof', 'syn_trust'],
    'syn_metaverse': ['syn_vr', 'syn_ar', 'syn_simulation', 'syn_upload'],
    'syn_smart_dust': ['syn_sensor', 'syn_surveillance', 'syn_iot']
};
