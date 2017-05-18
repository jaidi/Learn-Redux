import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
class PhotoDetails extends React.Component{
 render(){

    
     const index = this.props.posts.findIndex((post) => post.code === this.props.params.photoId );
     
     const post = this.props.posts[index];
     const postComments = this.props.comments[this.props.params.photoId] || [];
     return(
         <div className="single-photo">
            
            <Photo index={index} post={post} {...this.props} />
            <Comments postComments={postComments} {...this.props}/>
         </div>
     )
 }
}

export default  PhotoDetails;