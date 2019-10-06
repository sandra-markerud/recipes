import * as React from 'react';
import Loader from '../loader';
import Error from '../error';
import {useAllFoodsQuery} from '../../generated/graphql';
import FoodsSelect from './FoodsSelect';

interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FoodsSelectContainer: React.FC<OwnProps> = ({onChange}: OwnProps) => {

    const {data, error, loading} = useAllFoodsQuery();

    if (loading || !data) {
        return <Loader/>;
    }

    if (error) {
        return <Error error={error}/>;
    }

    return (
        <FoodsSelect data={data} onChange={onChange}/>
    );
};

export default FoodsSelectContainer;