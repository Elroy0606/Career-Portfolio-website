import React from 'react';
import './ConstructionTape.css'; // If using standard CSS

const ConstructionTape = () => {
    return (
        <div className="caution-container">
            <div className="caution-tape">
                <div className="tape-content">
                    <span> 🚧 CAUTION: SITE UNDER CONSTRUCTION 🚧 </span>
                    <span> 🚧 PLEASE MIND THE MESS 🚧 </span>
                    <span> 🚧 WORK IN PROGRESS 🚧 </span>
                    <span>🚧 SOME FUNCTIONS UNAVAILABLE 🚧</span>
                    {/* Duplicate for seamless looping */}
                    <span> 🚧 CAUTION: SITE UNDER CONSTRUCTION 🚧 </span>
                    <span> 🚧 PLEASE MIND THE MESS 🚧 </span>
                    <span> 🚧 WORK IN PROGRESS 🚧 </span>
                    <span>🚧 SOME FUNCTIONS UNAVAILABLE 🚧</span>

                    <span> 🚧 CAUTION: SITE UNDER CONSTRUCTION 🚧 </span>
                    <span> 🚧 PLEASE MIND THE MESS 🚧 </span>
                    <span> 🚧 WORK IN PROGRESS 🚧 </span>
                    <span>🚧 SOME FUNCTIONS UNAVAILABLE 🚧</span>
                </div>
            </div>
        </div>
    );
};

export default ConstructionTape;