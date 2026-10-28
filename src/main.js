import { MealApi } from './lib/api.js';
import { el } from './lib/elements.js';
import { MealSearcher } from './lib/meals.js';

/** Grunnslóð á API, `1` er ókeypis prófunarlykill. */
const API_BASE = 'https://www.themealdb.com/api/json/v1/1/';

/** API virkni. */
const api = new MealApi(API_BASE);

/* TODO útfæra rest */

const mealSearchDiv = document.querySelector('.meal-searcher');

async function onSubmit (e) {
    e.preventDefault();
    if (!e.target) {
        return;
    }
    const formData = new FormData(e.target);
    const input = formData.get('input');
    const value = typeof input === 'string' ? input : null;

    if (value) {
        const url = searchUrl + value;
        const results = await myFetch(url);
;
    }
}
/**
 * 
 * @param {HTMLElement} root
 */
function createSearchForm (root) {

    const form = el(
        'form',
        {submit: onSubmit},
        el('input', {type:'text'}),
        el('button', {type:'button'})
        
    )
}

if (!mealSearchDiv) {
    console.log("error");
} else {
    createSearchForm(mealSearchDiv);
}