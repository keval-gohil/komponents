"use client"
import React, { useState } from 'react';

const DemoEditor = () => {


    const [showBody1, setShowBody1] = useState(true);
    const [showBody2, setShowBody2] = useState(false);
  
    const handlePreviewClick = () => {
      setShowBody1(true);
      setShowBody2(false);
    };
  
    const handleViewCodeClick = () => {
      setShowBody1(false);
      setShowBody2(true);
    };

    
  return (
    <>
        <div className="demo-editor">

            <div className="editor-look">
                <div className="editor-head">
                    <div className="editor-head-row">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="editor-head-row2">
                        <button onClick={handlePreviewClick} className={showBody1 ? 'active' : ''}>Preview</button>
                        <button onClick={handleViewCodeClick} className={showBody2 ? 'active' : ''}>View Code</button>
                    </div>
                </div>

            <div className="editor-body1" style={{ display: showBody1 ? 'block' : 'none' }}>
                this is body1
            </div>

            <div className="editor-body2" style={{ display: showBody2 ? 'block' : 'none' }}>
                this is body2
            </div>

            </div>
            
        </div>
    </>
  )
}

export default DemoEditor
