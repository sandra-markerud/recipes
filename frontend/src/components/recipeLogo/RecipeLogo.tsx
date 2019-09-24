import * as React from 'react';
import withStyles, {WithSheet} from 'react-jss';
import styles from './styles';


type RecipeLogoProps = WithSheet<typeof styles, {}>

const RecipeLogo: React.FC<RecipeLogoProps> = ({classes}) => {
    return (
        <img className={classes.logo}
             src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80"
             alt="recipe.name"/>
    );
};

export default withStyles(styles)(RecipeLogo);