import * as React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from "../../../generated/graphql";

interface RecipeListEntryProps {
    recipe: (
        { __typename?: 'Recipe' }
        & Pick<Recipe, 'id' | 'name'>
        )
}

const RecipeListEntry: React.FC<RecipeListEntryProps> = ( { recipe }) => {
    return (
        <div>
            <Link to={"/rezept/" + recipe.id}>
                <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/08/11/15/79102899.jpg?width=64&height=64&fit=bounds&format=pjpg&auto=webp&quality=70" className="{height: 64px, width: 64px}" alt="recipe.name" />
                <div>
                    {recipe.name}
                </div>
            </Link>
        </div>
    );
};


export default RecipeListEntry;