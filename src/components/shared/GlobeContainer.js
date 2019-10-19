import React from 'react';
import Globe from 'worldwind-react-globe';
import style from './style.scss';

export default class ClobeContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render() {

        const layers = [
          'eox-sentinal2-labels',
          'coordinates',
          'view-controls',
          'stars',
          'atmosphere-day-night'
        ];
    
        return (
          <div className={style.fullscreen}>
            <Globe 
              ref={this.globeRef}
              layers={layers}
              latitude={34.2}
              longitude={-119.2}
              altitude={10e6} 
            />
          </div>
        )
      }
}