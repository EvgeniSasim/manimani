import React from 'react';
import PropTypes from 'prop-types';

const CancelIcon = ({ fillColor = '#11711D', width = "12px"}) => (
    <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={width}
        viewBox="0 0 14 14" style={{enableBackground:'new 0 0 14 14'}} xmlSpace="preserve">
        <g>
            <image style={{display:'none', overflow:'visible'}} width="10" height="10" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMAEAMCAwYAAAFpAAABdAAAAZX/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoXHh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoaJjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAAsACgMBIgACEQEDEQH/xABeAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAABABAQAAAAAAAAAAAAAAAAAAACARAQAAAAAAAAAAAAAAAAAAACASAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQAAAKAD/9oACAECAAEFAH//2gAIAQMAAQUAf//aAAgBAQABBQCP/9oACAECAgY/AH//2gAIAQMCBj8Af//aAAgBAQEGPwAf/9k=" transform="matrix(1 0 0 1 2 2.0017)">
        </image>
        <g>
            <defs>
                <path id="SVGID_1_" d="M9.2,11.5L9.2,11.5c0,0-1.3-1.3-2.1-2.1c-0.8,0.8-2.1,2.1-2.1,2.1c-0.1,0.1-0.5,0.5-1,0.5
                    c-0.5,0-0.9-0.4-1.1-0.6l-0.1-0.1l-0.1-0.1C2.3,11,2,10.7,2,10.2c0-0.5,0.4-0.9,0.5-1c0,0,1.3-1.3,2.1-2.1
                    C3.8,6.2,2.5,4.9,2.5,4.9C2.4,4.7,2,4.4,2,3.8C2,3.3,2.3,3,2.6,2.8l0.1-0.1c0,0,0.1-0.1,0.1-0.1C3,2.4,3.3,2,3.8,2
                    c0.5,0,0.9,0.4,1,0.5c0,0,1.3,1.3,2.1,2.1c0.8-0.8,2.1-2.1,2.1-2.1C9.3,2.4,9.6,2,10.2,2c0.5,0,0.9,0.3,1.1,0.6l0.1,0.1
                    c0,0,0.1,0.1,0.1,0.1C11.7,2.9,12,3.3,12,3.8s-0.4,0.9-0.5,1c0,0-1.3,1.3-2.1,2.1c0.8,0.8,2.1,2.1,2.1,2.1c0.1,0.1,0.5,0.5,0.5,1
                    c0,0.5-0.3,0.9-0.6,1.1l-0.1,0.1c0,0-0.1,0.1-0.1,0.1C11,11.7,10.7,12,10.2,12C9.6,12,9.3,11.6,9.2,11.5"/>
            </defs>
                <clipPath id="SVGID_2_">
                    <use xlinkHref="#SVGID_1_"  style={{overflow:'visible'}}/>
                </clipPath>
                <g style={{display:'none', clipPath:'url(#SVGID_2_)'}}>
                    <image style={{display:'inline', overflow:'visible'}} width="10" height="10" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMAEAMCAwYAAAfontSizeAAABgAAAAaX/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoXHh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoaJjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAAsACgMBIgACEQEDEQH/xABmAAEBAQAAAAAAAAAAAAAAAAAABQYBAQAAAAAAAAAAAAAAAAAAAAMQAQADAAAAAAAAAAAAAAAAAAAQESURAAMBAAAAAAAAAAAAAAAAAABFpRASAQEBAAAAAAAAAAAAAAAAAAAxAf/aAAwDAQACEQMRAAAAxa6Uf//aAAgBAgABBQC3/9oACAEDAAEFAKf/2gAIAQEAAQUAjIZD/9oACAECAgY/AI//2gAIAQMCBj8AuP/aAAgBAQEGPwDFdQV1D//Z" transform="matrix(1 0 0 1 2 2.0017)">
                    </image>
                </g>
                <rect x="-4.3" y="-1.1" className="st0" style={{ fill: fillColor, clipPath: 'url(#SVGID_2_)' }} width="23.4" height="17.5"/>
            </g>
        </g>
    </svg>
);

CancelIcon.propTypes = {
    fillColor: PropTypes.string,
    width: PropTypes.string
}

export default CancelIcon;
