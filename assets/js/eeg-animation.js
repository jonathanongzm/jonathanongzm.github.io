/*  EEG scrolling animation
    Save this file as:  assets/js/eeg-animation.js
    It expects a <canvas id="eegCanvas"> element somewhere in the page.
*/
(() => {
  "use strict";

  // Wait until the DOM is ready so the canvas element exists
  document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("eegCanvas");
    if (!canvas) return;                      // fail‑safe
    const ctx = canvas.getContext("2d");

    /* ------------------------------------------------------------
       Configuration
    ------------------------------------------------------------ */
    const channelCount = 5;
    const strokeColor   = "#a472e6";
    const strokeWidth   = 2;

    // Y positions for each channel (evenly spaced)
    const channelYPositions = Array.from({ length: channelCount }, (_, i) =>
      ((i + 1) * canvas.height) / (channelCount + 1)
    );

    // Frequency bands (Hz) & base amplitude (px)
    const bands = [
      { label: "Alpha (8–13 Hz)",  baseAmp: 10, f: 10 },
      { label: "Beta  (13–30 Hz)", baseAmp: 10, f: 20 },
      { label: "Delta (0.5–4 Hz)", baseAmp: 10, f:  2 },
      { label: "Theta (4–8 Hz)",   baseAmp: 10, f:  6 }
    ];

    // Data buffer for scrolling effect
    const eegData = Array.from({ length: channelCount }, () =>
      Array(canvas.width).fill(0)
    );

    let x = 0; // horizontal time index

    /* ------------------------------------------------------------
       Main draw loop
    ------------------------------------------------------------ */
    function drawEEG() {
      // Scroll left by removing first point of each channel
      eegData.forEach(arr => arr.shift());

      // Compute new data points
      for (let ch = 0; ch < channelCount; ch++) {
        const phase = (x / canvas.width) * 2 * Math.PI;
        const alpha = bands[0].baseAmp * Math.sin(bands[0].f * phase);
        const beta  = bands[1].baseAmp * Math.sin(bands[1].f * phase);
        const delta = bands[2].baseAmp * Math.sin(bands[2].f * phase);
        const theta = bands[3].baseAmp * Math.sin(bands[3].f * phase);

        let yOffset;
        switch (ch) {
          case 0: yOffset = alpha; break;
          case 1: yOffset = beta;  break;
          case 2: yOffset = delta; break;
          case 3: yOffset = theta; break;
          default: yOffset = alpha + beta + delta + theta; // combined
        }
        eegData[ch].push(channelYPositions[ch] + yOffset);
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw channels
      for (let ch = 0; ch < channelCount; ch++) {
        ctx.beginPath();
        ctx.moveTo(0, eegData[ch][0]);
        for (let i = 1; i < canvas.width; i++) ctx.lineTo(i, eegData[ch][i]);
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
        ctx.stroke();

        // Labels (15 px above channel)
        ctx.fillStyle = "#333";
        ctx.font = "12px Arial";
        const label =
          ch < bands.length ? bands[ch].label : "Combined (Σ)";
        ctx.fillText(label, 10, channelYPositions[ch] - 15);
      }

      x = (x + 1) % canvas.width; // wrap around
      requestAnimationFrame(drawEEG);
    }

    drawEEG(); // kick off animation
  });
})();
