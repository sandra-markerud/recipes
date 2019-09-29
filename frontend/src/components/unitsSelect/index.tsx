import * as React from 'react';
import Loader from '../loader';
import Error from '../error';
import UnitsSelect from './UnitsSelect';
import {useAllUnitsQuery} from '../../generated/graphql';

const UnitsSelectContainer: React.FC = () => {

    const {data, error, loading} = useAllUnitsQuery();

    if (loading || !data) {
        return <Loader/>;
    }

    if (error) {
        return <Error error={error}/>;
    }

    return (
        <UnitsSelect data={data}/>
    );
};

export default UnitsSelectContainer;