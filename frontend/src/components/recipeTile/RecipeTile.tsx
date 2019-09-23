import * as React from 'react';
import {Recipe} from '../../generated/graphql';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';
import {Link} from 'react-router-dom';

type RecipeTileProps = WithSheet<typeof styles, {}> & {
    recipe: (
        { __typename?: 'Recipe' }
        & Pick<Recipe, 'id' | 'name'>
        )
}

const RecipeTile: React.FC<RecipeTileProps> = ({recipe, classes}) => {
    return (
        <div className={classes.recipeTile}>
            <Link to={'/rezept/' + recipe.id}>
                <img
                    src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/08/11/15/79102899.jpg?width=250&height=250&fit=bounds&format=pjpg&auto=webp&quality=70"
                    alt="recipe.name"/>
                <hr/>
                {recipe.name}
                <hr/>
                <p>weitere Infos</p>
            </Link>
        </div>
    );
};


export default withStyles(styles)(RecipeTile);