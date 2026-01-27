import React, { useState } from 'react';
import './ContactButton.css';

const ContactButton = () => {
    const [stage, setStage] = useState('static'); // 'static', 'alert', 'spiraling'

    const handleClick = (e) => {
        e.preventDefault();
        if (stage === 'static') setStage('alert');
    };

    const startSpiral = () => {
        if (stage === 'alert') setStage('spiraling');
    };

    return (
        <div className="contact-wrapper">
            {/* Your Original Button Structure */}
            <a
                href="#contact"
                className={`contact-btn group ${stage}`}
                onClick={handleClick}
            >
                <div className="inner">
                    <span>{stage === 'spiraling' ? 'OOPS!' : 'Contact me'}</span>
                </div>
            </a>

            {/* The Game-Style Alert */}
            {stage === 'alert' && (
                <div className="under-construction-popup" onMouseMove={startSpiral}>
                    <div className="pixel-box">
                        <p>You clicked it... but it's under construction!</p>
                        <p className="subtext">My dev thinks it's a stupid idea to have this live yet. Let's bin it.</p>
                        <div className="hint">MOVE MOUSE TO DISPOSE</div>
                    </div>
                </div>
            )}

            {/* The Trash Bin - Bottom Center */}
            <div className={`bin-container ${stage === 'spiraling' ? 'active' : ''}`}>
                <span className="bin-lid"></span>
                <div className="bin-body">🗑️</div>
            </div>
        </div>
    );
};

export default ContactButton;