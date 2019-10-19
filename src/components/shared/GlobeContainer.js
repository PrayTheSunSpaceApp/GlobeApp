import React from 'react';
import Globe from 'worldwind-react-globe';
import style from './style.scss';
import 'worldwindjs'; // WorldWind

const createLayer = () => {
    const placemarkLayer = new WorldWind.RenderableLayer("Placemark");
    //placemarkLayer.addRenderable(placemark);

    return placemarkLayer;
}

const createPlacemark = (lg) => {
    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

    placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.3,
        WorldWind.OFFSET_FRACTION, 0.0);
    
    placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.5,
                WorldWind.OFFSET_FRACTION, 1.0);

    placemarkAttributes.imageSource = WorldWind.configuration.baseUrl + "images/pushpins/plain-red.png";
    
    var position = new WorldWind.Position(lg, -106.0, 100.0);
    var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
    
    placemark.label = "Placemark\n" +
    "Lat " + placemark.position.latitude.toPrecision(4).toString() + "\n" +
    "Lon " + placemark.position.longitude.toPrecision(5).toString();
    placemark.alwaysOnTop = true;
    
    return placemark;
}


export default class ClobeContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        const customLayer = createLayer()
        customLayer.addRenderable(createPlacemark(55))
        customLayer.addRenderable(createPlacemark(40))

        const layers = [
          'eox-sentinal2-labels',
          'coordinates',
          'view-controls',
          'stars',
          'atmosphere-day-night',
          'compass',
          customLayer
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