"use client"
import React, { useState } from 'react';

const CopyIcon = () => {

    const [tooltipText, setTooltipText] = useState('Copy Path');

    const copyUrlToClipboard = () => {
      // Copy the current web URL to the clipboard
      navigator.clipboard.writeText(window.location.href)
        .then(() => {
          // Set tooltip text to "Copied" after successful copy
          setTooltipText('Copied');
          // Reset tooltip text to "Copy Path" after 2 seconds
          setTimeout(() => {
            setTooltipText('Copy Path');
          }, 2000);
        })
        .catch((error) => {
          console.error('Failed to copy: ', error);
        });
    };

  return (
   <>
        <i className='akar-icons--copy' onClick={copyUrlToClipboard}></i>
        <span className="tooltip-text">{tooltipText}</span>
   </>
  )
}

export default CopyIcon
