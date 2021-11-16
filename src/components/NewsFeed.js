import {useState, useEffect} from 'react'

const NewsFeed = (props) => {
    
        if (props.error) {
            return (<div><p>Error</p></div>)
        } else if (!props.isLoaded) {
            return (<div>Loading . . .</div>)
        } else {
            return (
                <ul>
                {props.items.map(item => item.author)} 
                </ul>
            );
        }
       
}


export default NewsFeed;