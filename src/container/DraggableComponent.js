import React, { Component } from 'react';
import Draggable  from 'react-draggable'; // Both at the same time

class DraggableComponent extends Component {
    state = {
        activeDrags: 0,
        deltaPosition: {
            x: 0, y: 0
        }
    };
    
    handleDrag = (e, ui) => {
        const {x, y} = this.state.deltaPosition;

        this.setState({
            deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
            }
        });
    };


    // eventLogger = (e: MouseEvent, data: Object) => {
    //     console.log('Event: ', e);
    //     console.log('Data: ', data);
    // };

    render() { 
        const { image, width, height, imageWidth, imageHeight } = this.props;
        
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const { deltaPosition } = this.state;
        const yAxis =  Number( deltaPosition.y.toFixed(0) );
        
        const boxStyle = {
            width: `${(yAxis === 0) ? width : yAxis - imageWidth }px`,
            height: `${(yAxis === 0) ? height : yAxis - imageHeight }px `,
            backgroundImage: `url(${image})`,
        }

        return ( 
            <Draggable 
                onDrag={this.handleDrag} 
                {...dragHandlers}
                defaultPosition={{x: 1220, y: 10}} 
                bounds={{top:300, left: 0, right: 980, bottom: 390}}
                >
                <div className="box" style={boxStyle}>
                    {/* <div>I track my deltas</div>
                    <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div> */}
                </div>
            </Draggable>
        );
    }
}
 
export default DraggableComponent;