// alan-ai-setup.js
import React, { useEffect } from 'react';

const AlanAIProjectKey = "b65ec1671e0e235364a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage";

function AlanAIComponent() {
  useEffect(() => {
    // Load Alan AI script asynchronously when the component mounts on the client side
    
    const additionalStyles = `
    .alanBtn-root {
      right: 46px !important;
      bottom: 150px !important;
    }
  `;

  const styleTag = document.createElement('style');
  styleTag.innerHTML = additionalStyles;
  document.head.appendChild(styleTag);

    // Initialize Alan AI and handle commands once the script is loaded
       /* global alanBtn */
      var alanBtnInstance = alanBtn({
        key: AlanAIProjectKey,
        onCommand: function (commandData) {
          if (commandData && commandData.command === 'openURL') {
            if (commandData.target === '_blank') {
              window.open(commandData.url, '_newtab' + Math.floor(Math.random() * 999999));
            } else {
              window.location.href = commandData.url;
            }
          }
        }
      });
 
  }, []);
 

  return <div id="alan-btn"  />; // This div will serve as the mount point for the Alan AI button
}

export default AlanAIComponent;
