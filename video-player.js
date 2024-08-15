document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const rewindBtn = document.getElementById('rewindBtn');
    const fastForwardBtn = document.getElementById('fastForwardBtn');
    const stopBtn = document.getElementById('stopBtn');
    const muteUnmuteBtn = document.getElementById('muteUnmuteBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeDisplay = document.querySelector('.current-time');
    const durationDisplay = document.querySelector('.duration');
    const speedBtn = document.getElementById('speedBtn');
    const qualityBtn = document.getElementById('qualityBtn');
    const captionsBtn = document.getElementById('captionsBtn');

    // Speed options
    const speedOptions = [0.5, 1, 1.5, 2];
    let currentSpeedIndex = 1;
    speedBtn.textContent = `${speedOptions[currentSpeedIndex]}x`;

    // Quality options
    const qualityOptions = ['360p', '480p', '720p', '1080p'];
    let currentQualityIndex = 0;
    qualityBtn.textContent = qualityOptions[currentQualityIndex];

    // Captions toggle
    let captionsEnabled = false;
    captionsBtn.textContent = 'CC Off';

    function updateTimeline() {
        const value = (video.currentTime / video.duration) * 100;
        progressBar.value = value;
        currentTimeDisplay.textContent = formatTime(video.currentTime);
        durationDisplay.textContent = formatTime(video.duration);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
        }
    }

    function handleKeyPress(event) {
        switch (event.key) {
            case ' ':
            case 'k':
                event.preventDefault();
                togglePlayPause();
                break;
            case 'ArrowLeft':
                video.currentTime -= 10;
                break;
            case 'ArrowRight':
                video.currentTime += 10;
                break;
            case 'm':
                video.muted = !video.muted;
                muteUnmuteBtn.innerHTML = video.muted ? '<i class="fa fa-volume-mute"></i>' : '<i class="fa fa-volume-up"></i>';
                break;
            case 'f':
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    video.requestFullscreen();
                }
                break;
            case 'ArrowUp':
                video.volume = Math.min(video.volume + 0.1, 1);
                break;
            case 'ArrowDown':
                video.volume = Math.max(video.volume - 0.1, 0);
                break;
        }
    }

    function handleFullscreenChange() {
        const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        document.querySelector('.controls').classList.toggle('hidden', isFullscreen);
    }

    playPauseBtn.addEventListener('click', togglePlayPause);

    rewindBtn.addEventListener('click', () => {
        video.currentTime -= 10;
    });

    fastForwardBtn.addEventListener('click', () => {
        video.currentTime += 10;
    });

    stopBtn.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
    });

    muteUnmuteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        muteUnmuteBtn.innerHTML = video.muted ? '<i class="fa fa-volume-mute"></i>' : '<i class="fa fa-volume-up"></i>';
    });

    fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            video.requestFullscreen();
        }
    });

    progressBar.addEventListener('input', () => {
        const value = progressBar.value;
        video.currentTime = (value / 100) * video.duration;
    });

    video.addEventListener('timeupdate', updateTimeline);

    speedBtn.addEventListener('click', () => {
        currentSpeedIndex = (currentSpeedIndex + 1) % speedOptions.length;
        video.playbackRate = speedOptions[currentSpeedIndex];
        speedBtn.textContent = `${speedOptions[currentSpeedIndex]}x`;
    });

    qualityBtn.addEventListener('click', () => {
        currentQualityIndex = (currentQualityIndex + 1) % qualityOptions.length;
        qualityBtn.textContent = qualityOptions[currentQualityIndex];
        // Implement quality change if possible
    });

    captionsBtn.addEventListener('click', () => {
        captionsEnabled = !captionsEnabled;
        captionsBtn.textContent = captionsEnabled ? 'CC On' : 'CC Off';
        // Implement captions toggle if captions are available
    });

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
});
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('videoPlayer');
    const volumeControl = document.createElement('div');
    volumeControl.className = 'volume-control';
    document.body.appendChild(volumeControl);

    function updateVolumeControl() {
        volumeControl.textContent = `Volume: ${Math.round(video.volume * 100)}%`;
        volumeControl.classList.add('show');
        setTimeout(() => {
            volumeControl.classList.remove('show');
        }, 1000);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            video.volume = Math.min(video.volume + 0.1, 1);
            updateVolumeControl();
        } else if (event.key === 'ArrowDown') {
            video.volume = Math.max(video.volume - 0.1, 0);
            updateVolumeControl();
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let lastTap = 0;

    function handleDoubleTap(event) {
        const now = Date.now();
        const tapLength = now - lastTap;

        if (tapLength < 500 && tapLength > 0) {
            const rect = video.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const newTime = (x / video.clientWidth) * video.duration;
            video.currentTime = newTime;
        }

        lastTap = now;
    }

    video.addEventListener('click', handleDoubleTap);
});
