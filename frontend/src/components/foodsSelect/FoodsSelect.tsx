import * as React from 'react';
import {AllFoodsQuery} from '../../generated/graphql';
import Select from '../form/select';

type FoodsSelectProps = {
    data: AllFoodsQuery,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FoodsSelect: React.FC<FoodsSelectProps> = ({data, onChange}) => {
    const options = data.allFoods.sort((a, b) => {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    }).map(food => {
        return <option key={food.id} value={food.id}>{food.name}</option>
    });
    return (
        <Select placeholder={'Zutat...'} options={options} onChange={onChange}/>
    );
};

export default FoodsSelect;