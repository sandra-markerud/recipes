import * as React from 'react';
import {RecipeByIdQuery} from '../../generated/graphql';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import Dialog from '../../components/dialog';

type RecipeDetailPageProps = WithSheet<typeof styles, {}> & {
    data: RecipeByIdQuery
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({data, classes}) => {
    const recipe = data.recipe;
    if (!recipe) {
        return (
            <Dialog level={'warning'} headline={'Warnung'} message={'Dieses Rezept existiert nicht'}/>
        );
    }
    return (
        <div className={classes.splitPanel}>
            <div className={classes.ingredients}>
                <h3>Bild und Zutaten</h3>
                <ul>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>FOO</li>
                    <li>LAST ITEM</li>
                </ul>
                </div>
            <div className={classes.instructions}>
                <h3>Zubereitung</h3>
                <ul>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>BAR</li>
                    <li>LAST ITEM</li>
                </ul>
            </div>
        </div>
    );
};

export default withStyles(styles)(RecipeDetailPage);
