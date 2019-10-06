import * as React from 'react';
import Loader from '../loader';
import Error from '../error';
import UnitsSelect from './UnitsSelect';
import {useAllUnitsQuery} from '../../generated/graphql';

interface OwnProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const UnitsSelectContainer: React.FC<OwnProps> = ({onChange}: OwnProps) => {

    const {data, error, loading} = useAllUnitsQuery();

    if (loading || !data) {
        return <Loader/>;
    }

    if (error) {
        return <Error error={error}/>;
    }

    return (
        <UnitsSelect data={data} onChange={onChange}/>
    );
};

export default UnitsSelectContainer;