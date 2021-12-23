import React, { Component } from 'react'
import Track from '../Track/Track'

class TrackList extends React.Component {
    render () {
        return (
            <div className="TrackList">
              <ul> 
                <li>It's a beautiful Day!</li>
                <li>My Universe</li>
                <li>Redemption Song</li>
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            </ul>
        </div> 
        )
    }
}

export default TrackList