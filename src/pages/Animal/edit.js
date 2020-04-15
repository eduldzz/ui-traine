import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    fetchAnimalsRequested
} from '../../actions/animal'

const Edit = (props) => {
    console.log(props);
    const dispatch = useDispatch();
    const [animals] = useSelector(state => state.animal.documents.animals);
    if (props.match.params.code) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => dispatch(fetchAnimalsRequested(props.match.params)), [
            dispatch,
            props.match.params
        ]);
    }

    return (
        <div>
            {JSON.stringify(animals)}
        </div>
    )
};



export default Edit;