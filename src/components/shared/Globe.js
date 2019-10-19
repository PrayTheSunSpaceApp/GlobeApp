import React from 'react';
import Globe from 'worldwind-react-globe';

export default class CustomGlobe extends Globe{
    constructor(props) { super(props) }
    componentDidMount(){
        super.componentDidMount();
        this.wwd.addEventListener('click', (event)=>{
            console.log('click', event)
        })
    }
}