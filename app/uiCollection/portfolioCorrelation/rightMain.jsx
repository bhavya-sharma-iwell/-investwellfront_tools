import React from 'react'
import FilterArea from './filterArea.jsx'
import MatrixArea from './matrixArea.jsx'

function RightMain(props) {
    return (
        <div className={props.showMatrix ? 'rightMainWithMatrix' : 'rightMain'}>
            {props.error && props.error['2Schemes'] != undefined && <div className='errorMsg' style={{fontSize:'20px',padding:'0 40% 0'}}>{props.error['2Schemes']}</div>}
            {props.error && props.error['15schemes'] != undefined && <div className='errorMsg' style={{fontSize:'20px',padding:'0 40% 0'}}>{props.error['15schemes']}</div>}
            <FilterArea {...props} />
            {props.showMatrix && props.navData ?
                <MatrixArea
                    schemeArr={props.schemeArr}
                    navData={props.navData}
                /> : ""
            }
        </div>
    )
}

export default RightMain