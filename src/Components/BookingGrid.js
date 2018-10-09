import React, { Component } from 'react';

const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
const period = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'ASA'];

class BookingGrid extends Component {


    render() {
        return (
            <div>
                <table border="1" cellPadding="1" cellSpacing="1">
                    <tr>
                        <th key='DAY'>DAY</th>
                        {period.map(p => <th key={p}>{p}</th>)}
                    </tr>
                    {weekday.map(w =>
                        <tr>
                            <th key={w}>{w}</th>
                            {period.map(p => <th key={p}>{p}</th>)}
                        </tr>)
                    }
                </table>

            </div>

        );
    }
}

export default BookingGrid;
