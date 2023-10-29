import axios from 'axios';
export async function getRecipeDetail(recipeID) {
    const recipeDetail = await axios.get(`http://localhost:3000/recipeInfo/${recipeID}`, { 'Origin': 'http://localhost:5173/' });
    const recipe = recipeDetail.data.recipe;
    // console.log(recipe);
    return recipe;
}

export function changeIngredientQuantity(numberOfPeopleToServing, ingredient) {
    // Use a regular expression to find both types of numbers.
    const numberRegex = /(\d+\/\d+|\d+)/g;

    // Extract all matching numbers.
    const numbers = ingredient.match(numberRegex);

    // Multiply the matched numbers.
    if (numbers) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].includes('/')) {
                // Handle fractions
                const parts = numbers[i].split('/');
                if (parts.length === 2) {
                    const numerator = parseInt(parts[0]) * numberOfPeopleToServing;
                    const denominator = parseInt(parts[1]);
                    const gcd = findGCD(numerator, denominator);
                    const reducedNumerator = numerator / gcd;
                    const reducedDenominator = denominator / gcd;
                    numbers[i] = reducedNumerator % reducedDenominator === 0
                        ? reducedNumerator / reducedDenominator
                        : reducedNumerator + '/' + reducedDenominator;
                }
            } else {
                // Handle integers
                numbers[i] = parseInt(numbers[i]) * numberOfPeopleToServing;
            }
        }
    }

    // Replace the matched numbers in the string with the multiplied values.
    const modifiedIngredient = ingredient.replace(numberRegex, () => numbers.shift());

    return modifiedIngredient;
}

// Function to find the greatest common divisor (GCD) using Euclidean algorithm
function findGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return findGCD(b, a % b);
}
