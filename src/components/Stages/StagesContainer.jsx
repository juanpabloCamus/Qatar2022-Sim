import React from 'react';
import './StagesContainer.css';

function StagesContainer() {
    return (
        <div className='stagesContainer'>
            <div className='1/8'>
                Octavos
            </div>
            <div className='1/4'>
                Cuartos
            </div>
            <div className='1/2'>
                Semis
            </div>
            <div className='1'>
                Final
            </div>
        </div>
    );
}

export default StagesContainer;