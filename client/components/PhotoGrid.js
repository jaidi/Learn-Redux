import React from 'react';

import Photo from './Photo'

class PhotoGrid extends React.Component{
    // showPhoto(post){
    //     return <Photo key={post.code} index={post.index} post={post} />;
    // }
 render(){
     return(
         <div className="photo-grid">
            {this.props.posts.map((post, i) => <Photo {...this.props} key={i} index={i} post={post}/>)}
         </div>
     )
 }
}

export default  PhotoGrid;