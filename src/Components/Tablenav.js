import React, { Component } from 'react';
import BookingGrid from './BookingGrid';



class Tablenav extends Component {
    render() {
        return (
            
            <div>

            <ul className="nav nav-tabs" id="resourceContainerTabs" role="tablist">
               
                <li className="nav-item">
                    <a className="nav-link active" id="iPAD-black" data-toggle="tab" href="#iPADBlack" role="tab" aria-controls="iPAD Black" aria-selected="true">iPAD Black</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="iPAD-white" data-toggle="tab" href="#iPADWhite" role="tab" aria-controls="iPAD White" aria-selected="false">iPAD White</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="iPAD-pink" data-toggle="tab" href="#iPADPink" role="tab" aria-controls="iPAD Pink" aria-selected="false">iPAD Pink</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="iPAD-blue" data-toggle="tab" href="#iPADBlue" role="tab" aria-controls="iPAD Blue" aria-selected="false">iPAD Blue</a>
                </li>

            </ul>
            <div className="tab-content" id="resourceContainerTabContent">
                <div className="tab-pane fade show active" id="iPADBlack" role="tabpanel" aria-labelledby="iPAD-black-tab">
                    <BookingGrid/>
                </div>
                <div className="tab-pane fade" id="iPADWhite" role="tabpanel" aria-labelledby="iPAD-white-tab">
                    <BookingGrid/>
                </div>
                <div className="tab-pane fade" id="iPADPink" role="tabpanel" aria-labelledby="iPAD-pink-tab">
                <BookingGrid/>
                </div>
                <div className="tab-pane fade" id="iPADBlue" role="tabpanel" aria-labelledby="iPAD-blue-tab">
                <BookingGrid/>
                </div>

            </div>

        </div>
            
        );
    }
}

export default Tablenav;
