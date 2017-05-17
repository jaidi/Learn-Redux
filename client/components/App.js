import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';
/**
 * How do expose Actions to some UI elements(e.g. buttons) and how do we expose our data to components
 * Ans. Connect()
 */

function mapStateToProps(state){
    return{
        posts: state.posts,
        comments: state.comments
    }
}

function mapdispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps, mapdispatchToProps)(Main);

export default App;