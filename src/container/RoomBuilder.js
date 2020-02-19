import React, { Component } from 'react';
import DraggableComponent from './DraggableComponent';
import '../assets/css/style.css';

class RoomBuilder extends Component {
    
    
    render() { 
        
        return ( 
            <div className={'container'}>
                <DraggableComponent image={`assets/images/transparent-image.png`} width='180' height="180" imageWidth='180' imageHeight='180' />
                <DraggableComponent image={`assets/images/table-2.png`} width='80' height="80" imageWidth='250' imageHeight='250'/>
                <DraggableComponent image={`assets/images/transparent-image.png`} width='180' height="180"  imageWidth='180' imageHeight='180'/>
                
            </div>

        );
    }
}
 
export default RoomBuilder;