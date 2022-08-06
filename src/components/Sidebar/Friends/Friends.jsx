import React from 'react';
import Friend from './Friend/Friend';
import "./Friends.css"

const Friends = (props) => {
    return(
        <div className='friends-wrapper'>
            <p className='friends__header'>Friends</p>
            <div className='friends'>
                { props.friends.map(friend => (<Friend name={friend.name} key={friend.id} photoUrl={friend.photoUrl} />)) }
            </div>
        </div>
    )
}

export default Friends;