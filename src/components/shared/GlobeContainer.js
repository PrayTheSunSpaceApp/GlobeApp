import React from 'react';
import Globe from 'worldwind-react-globe';
import style from './style.scss';
import 'worldwindjs'; // WorldWind
import markerIcon from '../../../assets/icons8-marker-48.png'

const createLayer = () => {
    const placemarkLayer = new WorldWind.RenderableLayer("Placemark");
    //placemarkLayer.addRenderable(placemark);
    return placemarkLayer;
}

const createPlacemark = ({label, lt, lg ,alt}) => {
    var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

    placemarkAttributes.imageOffset = new WorldWind.Offset(
        WorldWind.OFFSET_FRACTION, 0.3,
        WorldWind.OFFSET_FRACTION, 0.0);
    
    placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
    placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
                WorldWind.OFFSET_FRACTION, 0.5,
                WorldWind.OFFSET_FRACTION, 1.0);

    placemarkAttributes.imageSource = markerIcon;
    
    var position = new WorldWind.Position(lt, lg, alt);
    var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
    
    placemark.label = `
        ${label}\n
        Lat ${placemark.position.latitude.toPrecision(4).toString()}, Lon ${placemark.position.longitude.toPrecision(5).toString()}
    `;
    placemark.alwaysOnTop = true;    
    return placemark;
}

const mock = [
    { label: 'label1', lt: 55, lg: -106, alt: 100},
    { label: 'label2', lt: 15, lg: -106, alt: 100},
    { label: 'label3', lt: 25, lg: -106, alt: 100},
    { label: 'label4', lt: 75, lg: -106, alt: 100},
]

export default class ClobeContainer extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props.marksList)
        this.state = {
            marksList: this.props.marksList || mock
        }
    }

    render() {
        const customLayer = createLayer()
        this.state.marksList.forEach((mark, index) => {
            customLayer.addRenderable(createPlacemark(mark))
        })

        const layers = [
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