import React, { useEffect } from 'react';

const AlanAIProjectKey = "b65ec1671e0e235364a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage";

function AlanAIComponent() {
  useEffect(() => {
    // Load Alan AI script dynamically
    const script = document.createElement("script");
    script.src = "https://studio.alan.app/web/lib/alan_lib.min.js";
    script.async = true;
    script.onload = () => {
      // Ensure alanBtn is available
      if (window.alanBtn) {
        window.alanBtn({
          key: AlanAIProjectKey,
          onCommand: (commandData) => {
            if (commandData && commandData.command === 'openURL') {
              if (commandData.target === '_blank') {
                window.open(commandData.url, '_newtab' + Math.floor(Math.random() * 999999));
              } else {
                window.location.href = commandData.url;
              }
            }
          }
        });
      } else {
        console.error("Alan AI SDK failed to load.");
      }
    };
    document.body.appendChild(script);

    // Additional styles to fix chat wrapper overflow
    const additionalStyles = `
      .alanBtn-root {
        right: 46px !important;
        bottom: 150px !important;
      }
      #alan-text-chat-wrapper {
        height: 95%;
        bottom: 0px;
        position: fixed;
      }
    `;
    const styleTag = document.createElement('style');
    styleTag.innerHTML = additionalStyles;
    document.head.appendChild(styleTag);

  }, []);

  return <div id="alan-btn" />; // Mount point for Alan AI button
}

export default AlanAIComponent;
