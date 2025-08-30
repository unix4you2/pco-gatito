// Game Data from provided JSON
const gameData = {
  "levels": [
    {
      "level": 1,
      "name": "Jardín de Aventuras",
      "totalGifts": 6,
      "starThresholds": {"1star": 2, "2star": 4, "3star": 6},
      "theme": "garden",
      "backgroundColor": "#87CEEB",
      "platforms": [
        {"x": 0, "y": 350, "width": 200, "height": 20},
        {"x": 250, "y": 280, "width": 100, "height": 20},
        {"x": 400, "y": 200, "width": 150, "height": 20},
        {"x": 600, "y": 330, "width": 200, "height": 20}
      ],
      "gifts": [
        {"x": 100, "y": 320, "type": "gift"},
        {"x": 280, "y": 250, "type": "star"},
        {"x": 450, "y": 170, "type": "heart"},
        {"x": 500, "y": 170, "type": "gift"},
        {"x": 650, "y": 300, "type": "coin"},
        {"x": 750, "y": 300, "type": "gift"}
      ],
      "enemies": []
    },
    {
      "level": 2,
      "name": "Sendero del Bosque",
      "totalGifts": 8,
      "starThresholds": {"1star": 3, "2star": 5, "3star": 8},
      "theme": "forest",
      "backgroundColor": "#228B22",
      "platforms": [
        {"x": 0, "y": 350, "width": 150, "height": 20},
        {"x": 200, "y": 280, "width": 80, "height": 20},
        {"x": 320, "y": 200, "width": 100, "height": 20},
        {"x": 480, "y": 250, "width": 120, "height": 20},
        {"x": 650, "y": 180, "width": 150, "height": 20}
      ],
      "gifts": [
        {"x": 75, "y": 320, "type": "gift"},
        {"x": 230, "y": 250, "type": "coin"},
        {"x": 350, "y": 170, "type": "star"},
        {"x": 370, "y": 170, "type": "gift"},
        {"x": 520, "y": 220, "type": "heart"},
        {"x": 680, "y": 150, "type": "gift"},
        {"x": 720, "y": 150, "type": "coin"},
        {"x": 760, "y": 150, "type": "gift"}
      ],
      "enemies": [
        {"x": 240, "y": 260, "type": "bug", "movement": "stationary"},
        {"x": 500, "y": 230, "type": "slug", "movement": "patrol", "range": 80}
      ]
    },
    {
      "level": 3,
      "name": "Desafío de Montaña",
      "totalGifts": 10,
      "starThresholds": {"1star": 4, "2star": 7, "3star": 10},
      "theme": "mountain",
      "backgroundColor": "#8B7355",
      "platforms": [
        {"x": 0, "y": 350, "width": 120, "height": 20},
        {"x": 170, "y": 300, "width": 80, "height": 20},
        {"x": 300, "y": 220, "width": 100, "height": 20},
        {"x": 450, "y": 280, "width": 80, "height": 20},
        {"x": 580, "y": 200, "width": 100, "height": 20},
        {"x": 720, "y": 320, "width": 80, "height": 20}
      ],
      "gifts": [
        {"x": 60, "y": 320, "type": "gift"},
        {"x": 200, "y": 270, "type": "coin"},
        {"x": 330, "y": 190, "type": "star"},
        {"x": 350, "y": 190, "type": "gift"},
        {"x": 370, "y": 190, "type": "heart"},
        {"x": 480, "y": 250, "type": "coin"},
        {"x": 610, "y": 170, "type": "gift"},
        {"x": 630, "y": 170, "type": "star"},
        {"x": 650, "y": 170, "type": "gift"},
        {"x": 750, "y": 290, "type": "gift"}
      ],
      "enemies": [
        {"x": 180, "y": 280, "type": "bug", "movement": "stationary"},
        {"x": 460, "y": 260, "type": "slug", "movement": "patrol", "range": 60},
        {"x": 340, "y": 200, "type": "spider", "movement": "jump"}
      ]
    },
    {
      "level": 4,
      "name": "Patio del Castillo",
      "totalGifts": 12,
      "starThresholds": {"1star": 5, "2star": 8, "3star": 12},
      "theme": "castle",
      "backgroundColor": "#696969",
      "platforms": [
        {"x": 0, "y": 350, "width": 100, "height": 20},
        {"x": 150, "y": 280, "width": 70, "height": 20},
        {"x": 270, "y": 200, "width": 80, "height": 20},
        {"x": 400, "y": 250, "width": 60, "height": 20},
        {"x": 510, "y": 180, "width": 90, "height": 20},
        {"x": 650, "y": 240, "width": 70, "height": 20},
        {"x": 750, "y": 300, "width": 50, "height": 20}
      ],
      "gifts": [
        {"x": 50, "y": 320, "type": "gift"},
        {"x": 180, "y": 250, "type": "coin"},
        {"x": 300, "y": 170, "type": "star"},
        {"x": 320, "y": 170, "type": "gift"},
        {"x": 430, "y": 220, "type": "heart"},
        {"x": 540, "y": 150, "type": "coin"},
        {"x": 560, "y": 150, "type": "gift"},
        {"x": 580, "y": 150, "type": "star"},
        {"x": 680, "y": 210, "type": "gift"},
        {"x": 775, "y": 270, "type": "coin"},
        {"x": 125, "y": 250, "type": "gift"},
        {"x": 350, "y": 170, "type": "gift"}
      ],
      "enemies": [
        {"x": 160, "y": 260, "type": "bug", "movement": "stationary"},
        {"x": 420, "y": 230, "type": "slug", "movement": "patrol", "range": 40},
        {"x": 290, "y": 180, "type": "spider", "movement": "jump"},
        {"x": 670, "y": 220, "type": "bird", "movement": "fly"}
      ]
    },
    {
      "level": 5,
      "name": "Templo del Cielo",
      "totalGifts": 15,
      "starThresholds": {"1star": 6, "2star": 10, "3star": 15},
      "theme": "sky",
      "backgroundColor": "#87CEFA",
      "platforms": [
        {"x": 0, "y": 350, "width": 80, "height": 20},
        {"x": 120, "y": 300, "width": 60, "height": 20},
        {"x": 220, "y": 230, "width": 70, "height": 20},
        {"x": 330, "y": 180, "width": 60, "height": 20},
        {"x": 430, "y": 240, "width": 80, "height": 20},
        {"x": 550, "y": 170, "width": 60, "height": 20},
        {"x": 650, "y": 220, "width": 70, "height": 20},
        {"x": 750, "y": 280, "width": 50, "height": 20}
      ],
      "gifts": [
        {"x": 40, "y": 320, "type": "gift"},
        {"x": 150, "y": 270, "type": "coin"},
        {"x": 250, "y": 200, "type": "star"},
        {"x": 270, "y": 200, "type": "gift"},
        {"x": 360, "y": 150, "type": "heart"},
        {"x": 460, "y": 210, "type": "coin"},
        {"x": 480, "y": 210, "type": "gift"},
        {"x": 500, "y": 210, "type": "star"},
        {"x": 580, "y": 140, "type": "gift"},
        {"x": 680, "y": 190, "type": "coin"},
        {"x": 700, "y": 190, "type": "heart"},
        {"x": 775, "y": 250, "type": "gift"},
        {"x": 100, "y": 270, "type": "gift"},
        {"x": 380, "y": 150, "type": "coin"},
        {"x": 170, "y": 270, "type": "star"}
      ],
      "enemies": [
        {"x": 140, "y": 280, "type": "bug", "movement": "stationary"},
        {"x": 240, "y": 210, "type": "slug", "movement": "patrol", "range": 50},
        {"x": 450, "y": 220, "type": "spider", "movement": "jump"},
        {"x": 570, "y": 150, "type": "bird", "movement": "fly"},
        {"x": 690, "y": 200, "type": "bee", "movement": "circle"}
      ]
    },
    {
      "level": 6,
      "name": "Parque de Perros",
      "totalGifts": 18,
      "starThresholds": {"1star": 7, "2star": 12, "3star": 18},
      "theme": "park",
      "backgroundColor": "#90EE90",
      "platforms": [
        {"x": 0, "y": 350, "width": 100, "height": 20},
        {"x": 150, "y": 280, "width": 80, "height": 20},
        {"x": 280, "y": 220, "width": 90, "height": 20},
        {"x": 420, "y": 180, "width": 70, "height": 20},
        {"x": 540, "y": 240, "width": 100, "height": 20},
        {"x": 680, "y": 200, "width": 80, "height": 20},
        {"x": 600, "y": 320, "width": 120, "height": 20},
        {"x": 750, "y": 280, "width": 50, "height": 20}
      ],
      "gifts": [
        {"x": 50, "y": 320, "type": "gift"},
        {"x": 180, "y": 250, "type": "coin"},
        {"x": 310, "y": 190, "type": "star"},
        {"x": 330, "y": 190, "type": "gift"},
        {"x": 350, "y": 190, "type": "heart"},
        {"x": 450, "y": 150, "type": "coin"},
        {"x": 470, "y": 150, "type": "gift"},
        {"x": 570, "y": 210, "type": "star"},
        {"x": 590, "y": 210, "type": "gift"},
        {"x": 710, "y": 170, "type": "heart"},
        {"x": 730, "y": 170, "type": "coin"},
        {"x": 630, "y": 290, "type": "gift"},
        {"x": 650, "y": 290, "type": "star"},
        {"x": 670, "y": 290, "type": "gift"},
        {"x": 690, "y": 290, "type": "coin"},
        {"x": 775, "y": 250, "type": "gift"},
        {"x": 25, "y": 320, "type": "heart"},
        {"x": 75, "y": 320, "type": "gift"}
      ],
      "enemies": [
        {"x": 200, "y": 260, "type": "dog", "movement": "chase"},
        {"x": 400, "y": 160, "type": "sleeping_dog", "movement": "sleep_wake"},
        {"x": 500, "y": 220, "type": "slug", "movement": "patrol", "range": 80},
        {"x": 650, "y": 180, "type": "bird", "movement": "fly"},
        {"x": 720, "y": 280, "type": "dog", "movement": "patrol", "range": 60}
      ]
    },
    {
      "level": 7,
      "name": "Jungla Salvaje",
      "totalGifts": 20,
      "starThresholds": {"1star": 8, "2star": 14, "3star": 20},
      "theme": "jungle",
      "backgroundColor": "#006400",
      "platforms": [
        {"x": 0, "y": 350, "width": 90, "height": 20},
        {"x": 130, "y": 280, "width": 70, "height": 20},
        {"x": 240, "y": 200, "width": 80, "height": 20},
        {"x": 360, "y": 260, "width": 60, "height": 20},
        {"x": 460, "y": 180, "width": 90, "height": 20},
        {"x": 590, "y": 240, "width": 70, "height": 20},
        {"x": 700, "y": 160, "width": 80, "height": 20},
        {"x": 550, "y": 320, "width": 100, "height": 20},
        {"x": 300, "y": 320, "width": 80, "height": 20}
      ],
      "gifts": [
        {"x": 45, "y": 320, "type": "gift"},
        {"x": 160, "y": 250, "type": "coin"},
        {"x": 270, "y": 170, "type": "star"},
        {"x": 290, "y": 170, "type": "gift"},
        {"x": 310, "y": 170, "type": "heart"},
        {"x": 390, "y": 230, "type": "coin"},
        {"x": 490, "y": 150, "type": "gift"},
        {"x": 510, "y": 150, "type": "star"},
        {"x": 530, "y": 150, "type": "gift"},
        {"x": 620, "y": 210, "type": "heart"},
        {"x": 730, "y": 130, "type": "coin"},
        {"x": 750, "y": 130, "type": "gift"},
        {"x": 580, "y": 290, "type": "star"},
        {"x": 600, "y": 290, "type": "gift"},
        {"x": 620, "y": 290, "type": "coin"},
        {"x": 330, "y": 290, "type": "gift"},
        {"x": 350, "y": 290, "type": "heart"},
        {"x": 15, "y": 320, "type": "coin"},
        {"x": 75, "y": 320, "type": "gift"},
        {"x": 370, "y": 290, "type": "star"}
      ],
      "enemies": [
        {"x": 150, "y": 260, "type": "monkey", "movement": "jump_platforms"},
        {"x": 380, "y": 240, "type": "snake", "movement": "slither"},
        {"x": 480, "y": 160, "type": "bird", "movement": "fly"},
        {"x": 610, "y": 220, "type": "bee", "movement": "circle"},
        {"x": 320, "y": 300, "type": "frog", "movement": "hop"},
        {"x": 570, "y": 300, "type": "dog", "movement": "chase"},
        {"x": 720, "y": 140, "type": "spider", "movement": "jump"}
      ]
    },
    {
      "level": 8,
      "name": "Castillo Final",
      "totalGifts": 25,
      "starThresholds": {"1star": 10, "2star": 18, "3star": 25},
      "theme": "final_castle",
      "backgroundColor": "#2F4F4F",
      "platforms": [
        {"x": 0, "y": 350, "width": 80, "height": 20},
        {"x": 120, "y": 300, "width": 60, "height": 20},
        {"x": 220, "y": 240, "width": 70, "height": 20},
        {"x": 330, "y": 180, "width": 50, "height": 20},
        {"x": 420, "y": 220, "width": 60, "height": 20},
        {"x": 520, "y": 160, "width": 70, "height": 20},
        {"x": 630, "y": 200, "width": 60, "height": 20},
        {"x": 720, "y": 260, "width": 80, "height": 20},
        {"x": 600, "y": 320, "width": 90, "height": 20},
        {"x": 400, "y": 320, "width": 80, "height": 20},
        {"x": 200, "y": 320, "width": 70, "height": 20}
      ],
      "gifts": [
        {"x": 40, "y": 320, "type": "gift"},
        {"x": 150, "y": 270, "type": "coin"},
        {"x": 250, "y": 210, "type": "star"},
        {"x": 270, "y": 210, "type": "gift"},
        {"x": 290, "y": 210, "type": "heart"},
        {"x": 360, "y": 150, "type": "coin"},
        {"x": 450, "y": 190, "type": "gift"},
        {"x": 470, "y": 190, "type": "star"},
        {"x": 550, "y": 130, "type": "gift"},
        {"x": 570, "y": 130, "type": "heart"},
        {"x": 590, "y": 130, "type": "coin"},
        {"x": 660, "y": 170, "type": "star"},
        {"x": 680, "y": 170, "type": "gift"},
        {"x": 750, "y": 230, "type": "coin"},
        {"x": 770, "y": 230, "type": "gift"},
        {"x": 630, "y": 290, "type": "heart"},
        {"x": 650, "y": 290, "type": "star"},
        {"x": 670, "y": 290, "type": "gift"},
        {"x": 430, "y": 290, "type": "coin"},
        {"x": 450, "y": 290, "type": "gift"},
        {"x": 470, "y": 290, "type": "star"},
        {"x": 230, "y": 290, "type": "gift"},
        {"x": 250, "y": 290, "type": "heart"},
        {"x": 10, "y": 320, "type": "coin"},
        {"x": 70, "y": 320, "type": "gift"}
      ],
      "enemies": [
        {"x": 140, "y": 280, "type": "dog", "movement": "chase"},
        {"x": 240, "y": 220, "type": "monkey", "movement": "jump_platforms"},
        {"x": 350, "y": 160, "type": "bird", "movement": "fly"},
        {"x": 440, "y": 200, "type": "snake", "movement": "slither"},
        {"x": 540, "y": 140, "type": "spider", "movement": "jump"},
        {"x": 650, "y": 180, "type": "bee", "movement": "circle"},
        {"x": 740, "y": 240, "type": "sleeping_dog", "movement": "sleep_wake"},
        {"x": 620, "y": 300, "type": "frog", "movement": "hop"},
        {"x": 420, "y": 300, "type": "slug", "movement": "patrol", "range": 60},
        {"x": 220, "y": 300, "type": "dog", "movement": "patrol", "range": 50}
      ]
    }
  ],
  "enemyTypes": {
    "bug": {"color": "#8B0000", "size": 15, "speed": 0},
    "slug": {"color": "#4B0082", "size": 18, "speed": 1},
    "spider": {"color": "#006400", "size": 20, "speed": 2},
    "dog": {"color": "#8B4513", "size": 25, "speed": 2.5},
    "sleeping_dog": {"color": "#654321", "size": 25, "speed": 3},
    "bird": {"color": "#FF4500", "size": 18, "speed": 2},
    "monkey": {"color": "#D2691E", "size": 22, "speed": 1.5},
    "snake": {"color": "#228B22", "size": 16, "speed": 1.8},
    "bee": {"color": "#FFD700", "size": 14, "speed": 2.2},
    "frog": {"color": "#32CD32", "size": 20, "speed": 1}
  },
  "gameSettings": {
    "playerSpeed": 3,
    "jumpPower": 12,
    "gravity": 0.5,
    "lives": 3,
    "canvasWidth": 800,
    "canvasHeight": 400,
    "touchControlHeight": 80,
    "isMobile": false
  },
  "audioSettings": {
    "musicEnabled": true,
    "soundEnabled": true,
    "musicVolume": 0.3,
    "soundVolume": 0.5
  }
};

// Global variables
let game = null;
let audioSystem = null;

// Audio System
class AudioSystem {
  constructor() {
    this.audioContext = null;
    this.musicEnabled = true;
    this.soundEnabled = true;
    this.musicVolume = 0.3;
    this.soundVolume = 0.5;
    this.backgroundMusic = null;
    this.musicGainNode = null;
    this.soundGainNode = null;
    this.isInitialized = false;
    
    // In-memory storage for audio preferences
    this.audioPrefs = {
      musicEnabled: true,
      soundEnabled: true
    };
  }

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create gain nodes
      this.musicGainNode = this.audioContext.createGain();
      this.soundGainNode = this.audioContext.createGain();
      
      this.musicGainNode.connect(this.audioContext.destination);
      this.soundGainNode.connect(this.audioContext.destination);
      
      // Set initial volumes
      this.musicGainNode.gain.value = this.musicVolume;
      this.soundGainNode.gain.value = this.soundVolume;
      
      this.isInitialized = true;
      console.log('Audio system initialized');
    } catch (error) {
      console.warn('Audio initialization failed:', error);
    }
  }

  async resumeContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume();
      } catch (error) {
        console.warn('Failed to resume audio context:', error);
      }
    }
  }

  playSound(type) {
    if (!this.soundEnabled || !this.isInitialized || !this.audioContext) return;
    
    try {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.soundGainNode);

      let frequency = 440;
      let duration = 0.1;
      let waveType = 'sine';

      switch (type) {
        case 'jump':
          frequency = 800;
          duration = 0.1;
          waveType = 'square';
          break;
        case 'collect':
          frequency = 1200;
          duration = 0.15;
          waveType = 'sine';
          break;
        case 'levelComplete':
          frequency = 600;
          duration = 0.5;
          waveType = 'triangle';
          break;
        case 'gameOver':
          frequency = 200;
          duration = 0.3;
          waveType = 'sawtooth';
          break;
        case 'enemyHit':
          frequency = 150;
          duration = 0.2;
          waveType = 'square';
          break;
        case 'button':
          frequency = 1000;
          duration = 0.05;
          waveType = 'sine';
          break;
      }

      oscillator.type = waveType;
      oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
      
      // Create envelope
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

      oscillator.start(this.audioContext.currentTime);
      oscillator.stop(this.audioContext.currentTime + duration);
    } catch (error) {
      console.warn('Sound playback failed:', error);
    }
  }

  startBackgroundMusic() {
    if (!this.musicEnabled || !this.isInitialized || !this.audioContext || this.backgroundMusic) return;
    
    try {
      // Create a simple background music loop with oscillators
      this.backgroundMusic = {
        oscillators: [],
        gainNodes: [],
        isPlaying: true
      };

      // Create a simple melody
      const melody = [440, 494, 523, 494, 440, 392, 349, 392]; // A4, B4, C5, B4, A4, G4, F4, G4
      const baseTime = this.audioContext.currentTime;
      
      melody.forEach((freq, index) => {
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.musicGainNode);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(freq, baseTime);
        
        // Create a gentle envelope for each note
        const noteStart = baseTime + index * 0.5;
        const noteDuration = 0.4;
        
        gainNode.gain.setValueAtTime(0, noteStart);
        gainNode.gain.linearRampToValueAtTime(0.05, noteStart + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, noteStart + noteDuration);
        
        oscillator.start(noteStart);
        oscillator.stop(noteStart + noteDuration);
        
        this.backgroundMusic.oscillators.push(oscillator);
        this.backgroundMusic.gainNodes.push(gainNode);
      });

      // Schedule the next loop
      setTimeout(() => {
        if (this.backgroundMusic && this.backgroundMusic.isPlaying && this.musicEnabled) {
          this.backgroundMusic = null;
          this.startBackgroundMusic();
        }
      }, melody.length * 500);

    } catch (error) {
      console.warn('Background music failed:', error);
    }
  }

  stopBackgroundMusic() {
    if (this.backgroundMusic) {
      this.backgroundMusic.isPlaying = false;
      try {
        this.backgroundMusic.oscillators.forEach(osc => {
          osc.stop();
        });
      } catch (error) {
        console.warn('Error stopping background music:', error);
      }
      this.backgroundMusic = null;
    }
  }

  toggleMusic() {
    this.musicEnabled = !this.musicEnabled;
    this.audioPrefs.musicEnabled = this.musicEnabled;
    
    if (this.musicEnabled) {
      this.startBackgroundMusic();
    } else {
      this.stopBackgroundMusic();
    }
    
    this.updateAudioUI();
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.audioPrefs.soundEnabled = this.soundEnabled;
    this.updateAudioUI();
  }

  updateAudioUI() {
    const musicButtons = document.querySelectorAll('[id^="musicToggle"]');
    const soundButtons = document.querySelectorAll('[id^="soundToggle"]');
    
    musicButtons.forEach(btn => {
      if (this.musicEnabled) {
        btn.classList.add('active');
        btn.innerHTML = btn.id.includes('Game') ? '🎵' : '🎵 Música';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = btn.id.includes('Game') ? '🔇' : '🔇 Música';
      }
    });
    
    soundButtons.forEach(btn => {
      if (this.soundEnabled) {
        btn.classList.add('active');
        btn.innerHTML = btn.id.includes('Game') ? '🔊' : '🔊 Sonidos';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = btn.id.includes('Game') ? '🔇' : '🔇 Sonidos';
      }
    });
  }
}

// Mobile Detection
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         ('ontouchstart' in window) ||
         (navigator.maxTouchPoints > 0);
}

// Game State
class GameState {
  constructor() {
    this.currentLevel = 1;
    this.lives = 3;
    this.giftsCollected = 0;
    this.isPaused = false;
    this.isGameOver = false;
    this.levelComplete = false;
    this.unlockedLevels = 1; // Always start with level 1 unlocked
    this.levelStars = {};
  }

  unlockLevel(level) {
    if (level > this.unlockedLevels && level <= gameData.levels.length) {
      this.unlockedLevels = level;
    }
  }

  calculateStars(level, giftsCollected) {
    const levelData = gameData.levels[level - 1];
    if (!levelData) return 0;
    
    const thresholds = levelData.starThresholds;
    
    if (giftsCollected >= thresholds['3star']) return 3;
    if (giftsCollected >= thresholds['2star']) return 2;
    if (giftsCollected >= thresholds['1star']) return 1;
    return 0;
  }

  saveStars(level, stars) {
    this.levelStars[level] = Math.max(this.levelStars[level] || 0, stars);
  }
}

// Player Class
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.velocityX = 0;
    this.velocityY = 0;
    this.onGround = false;
    this.speed = gameData.gameSettings.playerSpeed;
    this.jumpPower = gameData.gameSettings.jumpPower;
    this.facingRight = true;
    this.animationFrame = 0;
  }

  update() {
    // Apply gravity
    this.velocityY += gameData.gameSettings.gravity;
    
    // Update position
    this.x += this.velocityX;
    this.y += this.velocityY;
    
    // Update animation
    this.animationFrame += 0.2;
    
    // Reset horizontal velocity (will be set by input)
    this.velocityX *= 0.8; // Add some friction
    
    // Boundary checks
    if (this.x < 0) {
      this.x = 0;
      this.velocityX = 0;
    }
    if (this.x + this.width > gameData.gameSettings.canvasWidth) {
      this.x = gameData.gameSettings.canvasWidth - this.width;
      this.velocityX = 0;
    }
    
    // Death boundary
    if (this.y > gameData.gameSettings.canvasHeight + 50) {
      if (game) game.playerDie();
    }
  }

  moveLeft() {
    this.velocityX = -this.speed;
    this.facingRight = false;
  }

  moveRight() {
    this.velocityX = this.speed;
    this.facingRight = true;
  }

  jump() {
    if (this.onGround) {
      this.velocityY = -this.jumpPower;
      this.onGround = false;
      audioSystem.playSound('jump');
    }
  }

  draw(ctx) {
    // Save context for transformations
    ctx.save();
    
    // Draw cat body (orange circle)
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(this.x + this.width/2, this.y + this.height/2, this.width/2, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw cat stripes
    ctx.fillStyle = '#FF7F50';
    ctx.fillRect(this.x + 5, this.y + 8, this.width - 10, 3);
    ctx.fillRect(this.x + 5, this.y + 15, this.width - 10, 3);
    ctx.fillRect(this.x + 5, this.y + 22, this.width - 10, 3);
    
    // Draw ears
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    // Left ear
    ctx.moveTo(this.x + 5, this.y + 5);
    ctx.lineTo(this.x + 12, this.y - 5);
    ctx.lineTo(this.x + 15, this.y + 8);
    ctx.fill();
    
    // Right ear
    ctx.beginPath();
    ctx.moveTo(this.x + 15, this.y + 8);
    ctx.lineTo(this.x + 18, this.y - 5);
    ctx.lineTo(this.x + 25, this.y + 5);
    ctx.fill();
    
    // Inner ears
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.moveTo(this.x + 8, this.y + 3);
    ctx.lineTo(this.x + 12, this.y - 2);
    ctx.lineTo(this.x + 13, this.y + 6);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(this.x + 17, this.y + 6);
    ctx.lineTo(this.x + 18, this.y - 2);
    ctx.lineTo(this.x + 22, this.y + 3);
    ctx.fill();
    
    // Draw face
    // Eyes
    ctx.fillStyle = '#000';
    const eyeOffset = Math.sin(this.animationFrame) * 1;
    ctx.beginPath();
    ctx.arc(this.x + 10, this.y + 12 + eyeOffset, 2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(this.x + 20, this.y + 12 + eyeOffset, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Eye shine
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(this.x + 10.5, this.y + 11.5 + eyeOffset, 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(this.x + 20.5, this.y + 11.5 + eyeOffset, 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Nose
    ctx.fillStyle = '#FF69B4';
    ctx.beginPath();
    ctx.moveTo(this.x + 15, this.y + 16);
    ctx.lineTo(this.x + 13, this.y + 19);
    ctx.lineTo(this.x + 17, this.y + 19);
    ctx.fill();
    
    // Mouth
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this.x + 11, this.y + 20, 3, 0, Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(this.x + 19, this.y + 20, 3, 0, Math.PI);
    ctx.stroke();
    
    // Whiskers
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    // Left whiskers
    ctx.moveTo(this.x + 2, this.y + 15);
    ctx.lineTo(this.x - 5, this.y + 12);
    ctx.moveTo(this.x + 2, this.y + 18);
    ctx.lineTo(this.x - 5, this.y + 18);
    
    // Right whiskers  
    ctx.moveTo(this.x + 28, this.y + 15);
    ctx.lineTo(this.x + 35, this.y + 12);
    ctx.moveTo(this.x + 28, this.y + 18);
    ctx.lineTo(this.x + 35, this.y + 18);
    ctx.stroke();
    
    // Tail (animated)
    const tailWag = Math.sin(this.animationFrame * 2) * 5;
    ctx.fillStyle = '#FF8C00';
    if (this.facingRight) {
      ctx.fillRect(this.x - 15, this.y + 10 + tailWag, 20, 8);
      ctx.fillRect(this.x - 20, this.y + 5 + tailWag, 10, 8);
    } else {
      ctx.fillRect(this.x + 25, this.y + 10 + tailWag, 20, 8);
      ctx.fillRect(this.x + 40, this.y + 5 + tailWag, 10, 8);
    }
    
    ctx.restore();
  }
}

// Enemy Class with enhanced behaviors
class Enemy {
  constructor(x, y, type, movement, range = 0) {
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.width = gameData.enemyTypes[type]?.size || 20;
    this.height = gameData.enemyTypes[type]?.size || 20;
    this.type = type;
    this.movement = movement;
    this.range = range;
    this.direction = 1;
    this.timer = 0;
    this.speed = gameData.enemyTypes[type]?.speed || 1;
    this.color = gameData.enemyTypes[type]?.color || '#8B0000';
    this.isAwake = movement !== 'sleep_wake';
    this.circleAngle = 0;
    this.hopTimer = 0;
    this.platformIndex = 0;
  }

  update() {
    this.timer += 0.016;
    
    switch (this.movement) {
      case 'stationary':
        // Stay in place, maybe add small animations
        break;
        
      case 'patrol':
        this.x += this.direction * this.speed;
        if (Math.abs(this.x - this.startX) > this.range) {
          this.direction *= -1;
        }
        break;
        
      case 'jump':
        if (Math.floor(this.timer * 3) % 2 === 0) {
          this.y = this.startY - 15;
        } else {
          this.y = this.startY;
        }
        break;
        
      case 'fly':
        this.y = this.startY + Math.sin(this.timer * 2) * 10;
        this.x += Math.cos(this.timer) * 0.5;
        if (Math.abs(this.x - this.startX) > 50) {
          this.x = this.startX;
        }
        break;
        
      case 'circle':
        this.circleAngle += 0.05;
        this.x = this.startX + Math.cos(this.circleAngle) * 30;
        this.y = this.startY + Math.sin(this.circleAngle) * 15;
        break;
        
      case 'chase':
        if (game && game.player) {
          const dx = game.player.x - this.x;
          const dy = game.player.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) { // Chase range
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed * 0.5; // Less vertical movement
          }
        }
        break;
        
      case 'sleep_wake':
        if (game && game.player) {
          const distance = Math.abs(game.player.x - this.x);
          if (distance < 60) {
            this.isAwake = true;
          } else if (distance > 100) {
            this.isAwake = false;
          }
          
          if (this.isAwake) {
            const dx = game.player.x - this.x;
            this.x += (dx > 0 ? 1 : -1) * this.speed;
          }
        }
        break;
        
      case 'slither':
        this.x += this.direction * this.speed;
        this.y = this.startY + Math.sin(this.x * 0.1) * 5;
        if (Math.abs(this.x - this.startX) > this.range || this.range === 0) {
          if (this.x < 0 || this.x > gameData.gameSettings.canvasWidth - this.width) {
            this.direction *= -1;
          }
        }
        break;
        
      case 'hop':
        this.hopTimer += 0.016;
        if (this.hopTimer > 1) {
          this.y = this.startY - 20;
          if (this.hopTimer > 1.3) {
            this.y = this.startY;
            this.hopTimer = 0;
            this.x += (Math.random() - 0.5) * 40;
          }
        }
        break;
        
      case 'jump_platforms':
        // Simple platform jumping behavior
        this.timer += 0.016;
        if (this.timer > 2) {
          this.x += (Math.random() - 0.5) * 60;
          this.timer = 0;
        }
        this.y = this.startY + Math.sin(this.timer * 4) * 10;
        break;
    }
    
    // Keep enemies within bounds
    if (this.x < 0) this.x = 0;
    if (this.x > gameData.gameSettings.canvasWidth - this.width) {
      this.x = gameData.gameSettings.canvasWidth - this.width;
    }
  }

  draw(ctx) {
    ctx.save();
    
    // Add sleeping indicator for sleeping dogs
    if (this.type === 'sleeping_dog' && !this.isAwake) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.font = '12px Arial';
      ctx.fillText('💤', this.x + this.width, this.y - 10);
    }
    
    switch (this.type) {
      case 'bug':
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // Bug details
        ctx.fillStyle = '#A0522D';
        ctx.fillRect(this.x + 2, this.y + 2, this.width - 4, this.height - 4);
        // Antennae
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x + 5, this.y);
        ctx.lineTo(this.x + 3, this.y - 8);
        ctx.moveTo(this.x + this.width - 5, this.y);
        ctx.lineTo(this.x + this.width - 3, this.y - 8);
        ctx.stroke();
        break;
        
      default:
        // Default enemy rendering
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        break;
    }
    
    ctx.restore();
  }
}

// Collectible Class
class Collectible {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.type = type;
    this.collected = false;
    this.bobOffset = Math.random() * Math.PI * 2;
  }

  update() {
    this.bobOffset += 0.1;
  }

  draw(ctx) {
    if (this.collected) return;
    
    const bobY = this.y + Math.sin(this.bobOffset) * 3;
    const sparkle = Math.sin(this.bobOffset * 2) * 0.5 + 0.5;
    
    ctx.save();
    
    switch (this.type) {
      case 'gift':
        // Gift box
        ctx.fillStyle = '#FF69B4';
        ctx.fillRect(this.x, bobY, this.width, this.height);
        // Ribbon
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(this.x + 2, bobY + 2, this.width - 4, 3);
        ctx.fillRect(this.x + 8, bobY - 3, 4, this.height + 6);
        // Bow
        ctx.fillStyle = '#FF1493';
        ctx.fillRect(this.x + 6, bobY - 5, 8, 4);
        break;
        
      case 'coin':
        // Coin
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(this.x + 10, bobY + 10, 8, 0, Math.PI * 2);
        ctx.fill();
        // Inner circle
        ctx.fillStyle = '#FFA500';
        ctx.beginPath();
        ctx.arc(this.x + 10, bobY + 10, 5, 0, Math.PI * 2);
        ctx.fill();
        // Dollar sign
        ctx.fillStyle = '#FFD700';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('$', this.x + 10, bobY + 15);
        break;
        
      case 'star':
        this.drawStar(ctx, this.x + 10, bobY + 10, 8, '#FFD700');
        break;
        
      case 'heart':
        // Heart shape
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.moveTo(this.x + 10, bobY + 18);
        ctx.bezierCurveTo(this.x + 10, bobY + 14, this.x + 5, bobY + 9, this.x + 10, bobY + 13);
        ctx.bezierCurveTo(this.x + 15, bobY + 9, this.x + 20, bobY + 14, this.x + 10, bobY + 18);
        ctx.fill();
        break;
    }
    
    // Sparkle effect
    if (sparkle > 0.7) {
      ctx.fillStyle = `rgba(255, 255, 255, ${sparkle})`;
      ctx.font = '8px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('✨', this.x + this.width + 5, bobY + 5);
    }
    
    ctx.restore();
  }

  drawStar(ctx, x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5;
      const r = i % 2 === 0 ? radius : radius * 0.5;
      const xPos = x + Math.cos(angle - Math.PI / 2) * r;
      const yPos = y + Math.sin(angle - Math.PI / 2) * r;
      if (i === 0) {
        ctx.moveTo(xPos, yPos);
      } else {
        ctx.lineTo(xPos, yPos);
      }
    }
    ctx.closePath();
    ctx.fill();
  }
}

// Touch Controls
class TouchControls {
  constructor() {
    this.activeKeys = new Set();
    this.initializeTouchControls();
  }

  initializeTouchControls() {
    const touchLeft = document.getElementById('touchLeft');
    const touchRight = document.getElementById('touchRight');
    const touchJump = document.getElementById('touchJump');

    if (touchLeft) {
      this.setupTouchButton(touchLeft, 'ArrowLeft');
    }
    if (touchRight) {
      this.setupTouchButton(touchRight, 'ArrowRight');
    }
    if (touchJump) {
      this.setupTouchButton(touchJump, 'ArrowUp');
    }
  }

  setupTouchButton(button, keyCode) {
    const startEvent = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.activeKeys.add(keyCode);
      if (game && game.keys) {
        game.keys[keyCode] = true;
      }
      audioSystem.playSound('button');
    };

    const endEvent = (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.activeKeys.delete(keyCode);
      if (game && game.keys) {
        game.keys[keyCode] = false;
      }
    };

    // Touch events
    button.addEventListener('touchstart', startEvent, { passive: false });
    button.addEventListener('touchend', endEvent, { passive: false });
    button.addEventListener('touchcancel', endEvent, { passive: false });

    // Mouse events for desktop testing
    button.addEventListener('mousedown', startEvent);
    button.addEventListener('mouseup', endEvent);
    button.addEventListener('mouseleave', endEvent);

    // Prevent context menu
    button.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  isPressed(keyCode) {
    return this.activeKeys.has(keyCode);
  }
}

// Game Class
class Game {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = null;
    this.state = new GameState();
    this.player = null;
    this.platforms = [];
    this.collectibles = [];
    this.enemies = [];
    this.particles = [];
    this.keys = {};
    this.lastTime = 0;
    this.isRunning = false;
    this.touchControls = null;
    this.canvasScale = 1;
    this.isMobile = isMobile();
    
    this.initializeCanvas();
    this.initializeControls();
  }

  initializeCanvas() {
    try {
      if (!this.canvas) {
        console.error('Canvas element not found');
        return;
      }

      this.ctx = this.canvas.getContext('2d');
      if (!this.ctx) {
        console.error('Failed to get canvas context');
        return;
      }

      // Set canvas size
      this.canvas.width = gameData.gameSettings.canvasWidth;
      this.canvas.height = gameData.gameSettings.canvasHeight;
      
      console.log('Canvas initialized successfully');
    } catch (error) {
      console.error('Canvas initialization failed:', error);
    }
  }

  initializeControls() {
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
      if (this.isRunning) {
        this.keys[e.code] = true;
        
        // Prevent default behavior for game keys
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
          e.preventDefault();
        }
      }
    });

    document.addEventListener('keyup', (e) => {
      if (this.isRunning) {
        this.keys[e.code] = false;
      }
    });

    // Touch controls
    if (this.isMobile) {
      this.touchControls = new TouchControls();
      
      // Prevent scrolling on mobile
      document.body.addEventListener('touchstart', (e) => {
        if (e.target.closest('.game-container')) {
          e.preventDefault();
        }
      }, { passive: false });
      
      document.body.addEventListener('touchend', (e) => {
        e.preventDefault();
      }, { passive: false });
      
      document.body.addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, { passive: false });
    }
  }

  async loadLevel(levelNumber) {
    try {
      const levelData = gameData.levels[levelNumber - 1];
      if (!levelData) {
        console.error('Level not found:', levelNumber);
        return;
      }

      this.state.currentLevel = levelNumber;
      this.state.giftsCollected = 0;
      this.state.lives = 3;
      this.state.levelComplete = false;
      this.state.isGameOver = false;
      this.isRunning = true;

      // Initialize player
      this.player = new Player(50, 300);

      // Initialize platforms (add ground level)
      this.platforms = [...levelData.platforms];
      // Add invisible ground
      this.platforms.push({x: 0, y: 380, width: gameData.gameSettings.canvasWidth, height: 20});

      // Initialize collectibles
      this.collectibles = levelData.gifts.map(g => new Collectible(g.x, g.y, g.type));

      // Initialize enemies
      this.enemies = levelData.enemies ? levelData.enemies.map(e => 
        new Enemy(e.x, e.y, e.type, e.movement, e.range || 0)
      ) : [];

      this.particles = [];
      this.updateUI();
      
      console.log(`Level ${levelNumber} loaded successfully`);
    } catch (error) {
      console.error('Failed to load level:', error);
    }
  }

  update(deltaTime) {
    if (!this.isRunning || this.state.isPaused || this.state.levelComplete || this.state.isGameOver) return;

    try {
      this.handleInput();
      if (this.player) this.player.update();
      this.handleCollisions();
      this.updateEnemies();
      this.updateCollectibles();
      this.updateParticles(deltaTime);
      this.checkLevelComplete();
    } catch (error) {
      console.error('Game update error:', error);
    }
  }

  handleInput() {
    if (this.keys['ArrowLeft'] || this.keys['KeyA'] || (this.touchControls && this.touchControls.isPressed('ArrowLeft'))) {
      if (this.player) this.player.moveLeft();
    }
    if (this.keys['ArrowRight'] || this.keys['KeyD'] || (this.touchControls && this.touchControls.isPressed('ArrowRight'))) {
      if (this.player) this.player.moveRight();
    }
    if ((this.keys['ArrowUp'] || this.keys['Space'] || (this.touchControls && this.touchControls.isPressed('ArrowUp'))) && this.player && this.player.onGround) {
      this.player.jump();
    }
  }

  handleCollisions() {
    if (!this.player) return;
    
    // Platform collisions
    this.player.onGround = false;
    
    for (const platform of this.platforms) {
      if (this.checkCollision(this.player, platform)) {
        // Landing on top
        if (this.player.velocityY > 0 && 
            this.player.y + this.player.height - this.player.velocityY <= platform.y) {
          this.player.y = platform.y - this.player.height;
          this.player.velocityY = 0;
          this.player.onGround = true;
        }
        // Side collisions
        else if (this.player.velocityX > 0 && this.player.x < platform.x) {
          this.player.x = platform.x - this.player.width;
          this.player.velocityX = 0;
        }
        else if (this.player.velocityX < 0 && this.player.x > platform.x) {
          this.player.x = platform.x + platform.width;
          this.player.velocityX = 0;
        }
      }
    }

    // Collectible collisions
    for (const collectible of this.collectibles) {
      if (!collectible.collected && this.checkCollision(this.player, collectible)) {
        collectible.collected = true;
        this.state.giftsCollected++;
        this.createParticle(collectible.x + 10, collectible.y + 10, collectible.type);
        audioSystem.playSound('collect');
        this.updateUI();
      }
    }

    // Enemy collisions
    for (const enemy of this.enemies) {
      if (this.checkCollision(this.player, enemy)) {
        this.playerDie();
        break;
      }
    }
  }

  checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
  }

  updateEnemies() {
    for (const enemy of this.enemies) {
      enemy.update();
    }
  }

  updateCollectibles() {
    for (const collectible of this.collectibles) {
      collectible.update();
    }
  }

  updateParticles(deltaTime) {
    this.particles = this.particles.filter(particle => {
      particle.life -= deltaTime * 2;
      particle.y -= particle.velocityY * deltaTime * 60;
      particle.x += particle.velocityX * deltaTime * 60;
      particle.velocityY *= 0.98;
      return particle.life > 0;
    });
  }

  createParticle(x, y, type) {
    const colors = ['#FFD700', '#FF69B4', '#00FF00', '#FF4500', '#9370DB'];
    
    for (let i = 0; i < 8; i++) {
      this.particles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        velocityX: (Math.random() - 0.5) * 6,
        velocityY: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 4 + 2,
        life: 1
      });
    }
  }

  playerDie() {
    if (this.state.lives <= 0) return;
    
    this.state.lives--;
    audioSystem.playSound('enemyHit');
    
    if (this.state.lives <= 0) {
      this.state.isGameOver = true;
      this.isRunning = false;
      audioSystem.playSound('gameOver');
      setTimeout(() => showGameOverScreen(), 500);
    } else {
      this.respawnPlayer();
    }
    this.updateUI();
  }

  respawnPlayer() {
    if (this.player) {
      this.player.x = 50;
      this.player.y = 300;
      this.player.velocityX = 0;
      this.player.velocityY = 0;
    }
  }

  checkLevelComplete() {
    const allCollected = this.collectibles.every(c => c.collected);
    if (allCollected && !this.state.levelComplete) {
      this.state.levelComplete = true;
      this.isRunning = false;
      const stars = this.state.calculateStars(this.state.currentLevel, this.state.giftsCollected);
      this.state.saveStars(this.state.currentLevel, stars);
      audioSystem.playSound('levelComplete');
      setTimeout(() => {
        showLevelCompleteScreen(stars);
      }, 1000);
    }
  }

  draw() {
    if (!this.ctx) return;
    
    try {
      // Clear canvas with level background
      const currentLevel = gameData.levels[this.state.currentLevel - 1];
      const bgColor = currentLevel?.backgroundColor || '#87CEEB';
      
      // Create gradient background
      const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
      gradient.addColorStop(0, bgColor);
      gradient.addColorStop(1, this.adjustColor(bgColor, -30));
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Draw clouds
      this.drawClouds();

      // Draw platforms
      for (const platform of this.platforms) {
        // Skip drawing the invisible ground platform
        if (platform.y >= 380) continue;
        
        // Platform shadow
        this.ctx.fillStyle = '#654321';
        this.ctx.fillRect(platform.x + 2, platform.y + 2, platform.width, platform.height);
        
        // Platform
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        
        // Grass on top
        this.ctx.fillStyle = '#32CD32';
        this.ctx.fillRect(platform.x, platform.y - 5, platform.width, 5);
        
        // Grass details
        this.ctx.fillStyle = '#228B22';
        for (let i = platform.x; i < platform.x + platform.width; i += 8) {
          this.ctx.fillRect(i, platform.y - 8, 2, 3);
          this.ctx.fillRect(i + 3, platform.y - 6, 2, 3);
        }
      }

      // Draw collectibles
      for (const collectible of this.collectibles) {
        collectible.draw(this.ctx);
      }

      // Draw enemies
      for (const enemy of this.enemies) {
        enemy.draw(this.ctx);
      }

      // Draw player
      if (this.player) {
        this.player.draw(this.ctx);
      }

      // Draw particles
      for (const particle of this.particles) {
        this.ctx.fillStyle = particle.color;
        this.ctx.globalAlpha = particle.life;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
      }
      
    } catch (error) {
      console.error('Draw error:', error);
    }
  }

  adjustColor(color, amount) {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;
    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = (num >> 8 & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;
    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
  }

  drawClouds() {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.drawCloud(100, 50, 40);
    this.drawCloud(300, 30, 30);
    this.drawCloud(600, 60, 35);
    this.drawCloud(450, 80, 25);
  }

  drawCloud(x, y, size) {
    this.ctx.save();
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 0.8, 0, Math.PI * 2);
    this.ctx.arc(x + size * 0.6, y, size * 0.6, 0, Math.PI * 2);
    this.ctx.arc(x + size * 1.2, y, size * 0.8, 0, Math.PI * 2);
    this.ctx.arc(x + size * 0.6, y - size * 0.4, size * 0.5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  updateUI() {
    try {
      // Update lives display
      const hearts = document.querySelectorAll('.heart');
      hearts.forEach((heart, index) => {
        if (index < this.state.lives) {
          heart.classList.remove('lost');
        } else {
          heart.classList.add('lost');
        }
      });

      // Update gifts display
      const currentLevel = gameData.levels[this.state.currentLevel - 1];
      const giftsCountEl = document.querySelector('.gifts-count');
      const giftsTotalEl = document.querySelector('.gifts-total');
      const currentLevelEl = document.querySelector('.current-level');
      
      if (giftsCountEl) giftsCountEl.textContent = this.state.giftsCollected;
      if (giftsTotalEl) giftsTotalEl.textContent = currentLevel ? currentLevel.totalGifts : 0;
      if (currentLevelEl) currentLevelEl.textContent = this.state.currentLevel;
    } catch (error) {
      console.error('UI update error:', error);
    }
  }

  gameLoop(currentTime) {
    try {
      const deltaTime = Math.min((currentTime - this.lastTime) / 1000, 0.016);
      this.lastTime = currentTime;

      this.update(deltaTime);
      this.draw();

      requestAnimationFrame((time) => this.gameLoop(time));
    } catch (error) {
      console.error('Game loop error:', error);
    }
  }

  start() {
    try {
      console.log('Starting game...');
      this.gameLoop(0);
    } catch (error) {
      console.error('Game start error:', error);
    }
  }

  stop() {
    this.isRunning = false;
  }
}

// UI Functions
window.showStartScreen = function() {
  hideAllScreens();
  document.getElementById('startScreen').classList.remove('hidden');
  if (game) {
    game.stop();
  }
}

window.showLevelSelect = function() {
  hideAllScreens();
  document.getElementById('levelSelectScreen').classList.remove('hidden');
  updateLevelSelectUI();
  if (game) {
    game.stop();
  }
}

window.showGameScreen = function() {
  hideAllScreens();
  document.getElementById('gameScreen').classList.remove('hidden');
}

window.showLevelCompleteScreen = function(stars) {
  hideAllScreens();
  const screen = document.getElementById('levelCompleteScreen');
  screen.classList.remove('hidden');
  
  // Update stars display
  const starElements = screen.querySelectorAll('.big-star');
  starElements.forEach((star, index) => {
    if (index < stars) {
      star.classList.add('earned');
    } else {
      star.classList.remove('earned');
    }
  });
  
  const earnedStarsEl = screen.querySelector('.earned-stars');
  const finalGiftsEl = screen.querySelector('.final-gifts');
  const finalTotalEl = screen.querySelector('.final-total');
  
  if (earnedStarsEl) earnedStarsEl.textContent = stars;
  if (finalGiftsEl && game) finalGiftsEl.textContent = game.state.giftsCollected;
  if (finalTotalEl && game) finalTotalEl.textContent = gameData.levels[game.state.currentLevel - 1]?.totalGifts || 0;
  
  // Unlock next level
  if (game && game.state.currentLevel < gameData.levels.length) {
    game.state.unlockLevel(game.state.currentLevel + 1);
  }
}

window.showGameOverScreen = function() {
  hideAllScreens();
  document.getElementById('gameOverScreen').classList.remove('hidden');
}

window.showPauseScreen = function() {
  document.getElementById('pauseScreen').classList.remove('hidden');
}

window.hidePauseScreen = function() {
  document.getElementById('pauseScreen').classList.add('hidden');
}

function hideAllScreens() {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.add('hidden'));
}

function updateLevelSelectUI() {
  const levelCards = document.querySelectorAll('.level-card');
  levelCards.forEach((card, index) => {
    const level = index + 1;
    if (game && level <= game.state.unlockedLevels) {
      card.classList.remove('locked');
      card.onclick = () => startLevel(level);
    } else {
      card.classList.add('locked');
      card.onclick = null;
    }
  });
}

async function startLevel(levelNumber) {
  try {
    await audioSystem.resumeContext();
    await game.loadLevel(levelNumber);
    showGameScreen();
    
    if (audioSystem.musicEnabled) {
      audioSystem.startBackgroundMusic();
    }
  } catch (error) {
    console.error('Failed to start level:', error);
  }
}

window.nextLevel = function() {
  const nextLevelNumber = game.state.currentLevel + 1;
  if (nextLevelNumber <= gameData.levels.length) {
    startLevel(nextLevelNumber);
  } else {
    showLevelSelect();
  }
}

window.restartLevel = function() {
  startLevel(game.state.currentLevel);
}

window.togglePause = function() {
  if (game.state.isPaused) {
    game.state.isPaused = false;
    hidePauseScreen();
    if (audioSystem.musicEnabled) {
      audioSystem.startBackgroundMusic();
    }
  } else {
    game.state.isPaused = true;
    showPauseScreen();
    audioSystem.stopBackgroundMusic();
  }
}

// Audio control functions
window.toggleMusic = async function() {
  await audioSystem.resumeContext();
  audioSystem.toggleMusic();
  audioSystem.playSound('button');
}

window.toggleSound = async function() {
  await audioSystem.resumeContext();
  audioSystem.toggleSound();
  audioSystem.playSound('button');
}

// Initialize Game
document.addEventListener('DOMContentLoaded', async () => {
  try {
    console.log('Initializing game...');
    
    // Initialize audio system
    audioSystem = new AudioSystem();
    
    // Initialize game
    game = new Game();
    
    // Update audio UI
    audioSystem.updateAudioUI();
    
    // Start game loop
    game.start();
    
    // Show start screen
    showStartScreen();
    
    console.log('Game initialized successfully');
  } catch (error) {
    console.error('Game initialization failed:', error);
  }
});

// Level selection event handlers
document.addEventListener('click', async (e) => {
  // Initialize audio on first user interaction
  if (!audioSystem.isInitialized) {
    await audioSystem.initialize();
  }
  
  if (e.target.closest('.level-card') && !e.target.closest('.level-card').classList.contains('locked')) {
    const levelNumber = parseInt(e.target.closest('.level-card').dataset.level);
    if (levelNumber && !isNaN(levelNumber)) {
      audioSystem.playSound('button');
      startLevel(levelNumber);
    }
  }
});

// Handle window resize for mobile
window.addEventListener('resize', () => {
  if (game && game.canvas) {
    // Handle canvas resize if needed
    setTimeout(() => {
      game.initializeCanvas();
    }, 100);
  }
});

// Prevent zoom on mobile
document.addEventListener('gesturestart', (e) => {
  e.preventDefault();
});

document.addEventListener('gesturechange', (e) => {
  e.preventDefault();
});

document.addEventListener('gestureend', (e) => {
  e.preventDefault();
});

console.log('Game script loaded successfully');