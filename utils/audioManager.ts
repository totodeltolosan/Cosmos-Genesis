
// A procedural audio engine using Web Audio API
// Supports Multi-channel mixer (Master, Music, SFX)

import { AudioSettings } from '../types';

let audioCtx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let musicGain: GainNode | null = null;
let sfxGain: GainNode | null = null;

let droneOsc: OscillatorNode | null = null;
let lfoOsc: OscillatorNode | null = null;

export const initAudio = () => {
    if (audioCtx) return;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    
    audioCtx = new AudioContext();
    
    // Create Mixer Channels
    masterGain = audioCtx.createGain();
    musicGain = audioCtx.createGain();
    sfxGain = audioCtx.createGain();

    // Routing: Music/SFX -> Master -> Destination
    musicGain.connect(masterGain);
    sfxGain.connect(masterGain);
    masterGain.connect(audioCtx.destination);

    // Initial Volumes (Safe defaults)
    masterGain.gain.value = 0.5;
    musicGain.gain.value = 0.5;
    sfxGain.gain.value = 0.5;
};

export const updateVolumes = (settings: AudioSettings) => {
    if (!audioCtx || !masterGain || !musicGain || !sfxGain) return;
    
    const now = audioCtx.currentTime;
    
    if (settings.muted) {
        masterGain.gain.setTargetAtTime(0, now, 0.1);
    } else {
        masterGain.gain.setTargetAtTime(settings.masterVolume, now, 0.1);
        musicGain.gain.setTargetAtTime(settings.musicVolume, now, 0.1);
        sfxGain.gain.setTargetAtTime(settings.sfxVolume, now, 0.1);
    }

    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
};

export const startAmbient = () => {
    if (!audioCtx || !musicGain || droneOsc) return;
    
    // Deep Space Drone (FM Synthesis)
    droneOsc = audioCtx.createOscillator();
    droneOsc.type = 'sine';
    droneOsc.frequency.value = 55; // Low A

    lfoOsc = audioCtx.createOscillator();
    lfoOsc.type = 'sine';
    lfoOsc.frequency.value = 0.1; // Slow modulation

    const lfoGain = audioCtx.createGain();
    lfoGain.gain.value = 300; 

    lfoOsc.connect(lfoGain);
    lfoGain.connect(droneOsc.frequency);
    
    // Connect to Music Channel
    droneOsc.connect(musicGain);
    
    lfoOsc.start();
    droneOsc.start();
};

export const playSFX = (type: 'click' | 'success' | 'error' | 'levelUp' | 'type') => {
    if (!audioCtx || !sfxGain) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    // Connect to SFX Channel
    osc.connect(gain);
    gain.connect(sfxGain);

    const now = audioCtx.currentTime;

    switch (type) {
        case 'click':
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
            break;
        case 'success':
            osc.type = 'sine';
            osc.frequency.setValueAtTime(440, now); // A4
            osc.frequency.setValueAtTime(554, now + 0.1); // C#5
            osc.frequency.setValueAtTime(659, now + 0.2); // E5
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
            break;
        case 'error':
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.linearRampToValueAtTime(100, now + 0.2);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
            break;
        case 'levelUp':
            // Arpeggio
            [440, 554, 659, 880, 1108].forEach((freq, i) => {
                const o = audioCtx!.createOscillator();
                const g = audioCtx!.createGain();
                o.connect(g);
                g.connect(sfxGain!); // Use SFX channel
                o.frequency.value = freq;
                g.gain.setValueAtTime(0.1, now + i*0.1);
                g.gain.exponentialRampToValueAtTime(0.001, now + i*0.1 + 0.4);
                o.start(now + i*0.1);
                o.stop(now + i*0.1 + 0.4);
            });
            break;
        case 'type':
            // Subtle high tick
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1200, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
            osc.start(now);
            osc.stop(now + 0.03);
            break;
    }
};
