import Comments from "./Comments";
import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator} from "../../../../Logic/activityReducer";
let stateToProps = (state) => {
    return {
        activity: state.activity,
        content: state.content
    }
}

let dispatchToProps = (dispatch) => {
    return {
        addComment: () => {
            dispatch(addPostActionCreator());
        },
        updateMessage: (text) => {
            dispatch(updatePostActionCreator(text));
        }
    }
}

const CommentsContainer = connect(stateToProps, dispatchToProps)(Comments);

export default CommentsContainer;