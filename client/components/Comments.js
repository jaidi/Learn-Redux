import React from 'react';

class Comments extends React.Component{

    handleClick(e){
        this.props.removeComment
    }

    renderComment(comment, index){
        return <div className="comment" key={index}>
                <p>
                    <strong>
                        {comment.user}
                    </strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.photoId, index)}>&times;</button>
                </p>
        </div>
    }
    handleSubmit(e){
        e.preventDefault();
        const photoId = this.props.params.photoId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(photoId,author,comment);
        this.refs.commentForm.reset();

    }
    render(){
        const postComments = this.props.postComments;
        return(
            <div className="comments">
                {postComments.map(this.renderComment.bind(this))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )    
    }
}

export default Comments;