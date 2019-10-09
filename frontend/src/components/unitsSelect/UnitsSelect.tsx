import * as React from 'react';
import {AllUnitsQuery} from '../../generated/graphql';
import Select from '../form/select';

type UnitsSelectProps = {
    data: AllUnitsQuery,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const UnitsSelect: React.FC<UnitsSelectProps> = ({data, onChange}) => {
    const options = data.allUnits.sort((a, b) => {
        return a.longName === b.longName ? 0 : a.longName < b.longName ? -1 : 1;
    }).map(unit => {
        return <option key={unit.id} value={unit.id}>{unit.longName}</option>
    });
    return (
        <Select placeholder={'Einheit...'} options={options} onChange={onChange}/>
    );
};

export default UnitsSelect;