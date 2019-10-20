import React from 'react';
import Globe from 'worldwind-react-globe';
import 'worldwindjs'; // WorldWind
//import WorldWindFixes from './WorldWindFixes'


class lol extends WorldWind.WorldWindow{
    constructor(...props){
        super(...props);
        this.deepPicking = true;
    }
}

//WorldWind.WorldWindow = lol;

export default class CustomGlobe extends Globe{
    constructor(props) { super(props) }
    
    componentDidMount() {
        super.componentDidMount();
        this.wwd.deepPicking = true;
        this.wwd.resetDrawContext();
    }
    
}