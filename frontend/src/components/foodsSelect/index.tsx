import * as React from 'react';
import Loader from '../loader';
import Error from '../error';
import {useAllFoodsQuery} from '../../generated/graphql';
import FoodsSelect from './FoodsSelect';

const FoodsSelectContainer: React.FC = () => {

    const {data, error, loading} = useAllFoodsQuery();

    if (loading || !data) {
        return <Loader/>;
    }

    if (error) {
        return <Error error={error}/>;
    }

    return (
        <FoodsSelect data={data}/>
    );
};

export default FoodsSelectContainer;