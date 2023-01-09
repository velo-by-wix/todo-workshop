## JavaScript Web Modules

In this module, we'll add a fun little addition to our Todolist. You may have noticed from earlier screenshots that we have varying motivational tag lines underneath our page's logo.

We could do this in frontend code but to demonstrate some neat functionality we'll make make a web module that allows us to seamlessly call our backend code from our frontend. This is a feature you'll normally want to use when you want to run code that is either secret or cannot be influenced by the user. A common example of this is querying a 3rd party API where you can't share your API key with the user because that's secret information.

Here we'll be pretending like our array of `quotes` is secret, it's not, but if it was this would be a great way to hide it from the user.

Let's get started!

**:bulb: New concepts**

- [JavaScript Web Modules](https://support.wix.com/en/article/velo-web-modules-calling-server-side-code-from-the-front-end) - Calling server-side code from the front-end.

**:white_check_mark: Step-by-step directions**

1. Add a new web module under the backend section as pictured below and call it `motivation.jsw`. Note the `.jsw` extension, this tells Velo that this code is a web module and lets it perform some magic to make it easy to call from the frontend. <p><img src="assets/add-jsw.png" alt="Add JSW"></p>

2. Delete any existing code and add our little function. Also note how it's marked `export` so we can then `import` it later in our frontend.

```js
// Take an array of strings, pick a random index from that array, and return it.
export function getQuote() {
    let quotes = [
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "The secret of getting ahead is getting started.",
        "An ounce of action is worth a ton of theory.",
        "The two most powerful warriors are patience and time.",
        "If you want to make an easy job seem mighty hard, just keep putting off doing it.",
        "The best way to get something done is to begin.",
        "Don't wait. The time will never be just right.",
        "The most effective way to do it, is to do it.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "The key to getting things done is to prioritize. Decide what needs to be done and do it first.",
        "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "A goal is a dream with a deadline.",
        "It is not enough to be busy. The question is: what are we busy about?",
        "Get it done!",
        "You got this!", 
        "Focus. Conquer one thing at a time."
    ]

    let index = Math.floor(Math.random() * quotes.length);

    return quotes[index];
}
```

3. Now open up the frontend code for the HOME page and go ahead and import our new `getQuote()` function.

```js
import { getQuote } from "backend/motivation.jsw";
```

4. Now we can simply go ahead and use it. Remember our `init()` function from earlier? We'll be modifying it here:

```js
// Initialize the page with data that we need
// but don't get through the dataset
async function init() {
    getIncompleteTodoCount();
    if (wixWindow.rendering.env === 'browser') {
        $w('#tagline').text = await getQuote();
        $w('#tagline').show("float");
    }
}
```
Wix will pre-render your web pages on the server side. This is very helpful for speeding up the loading of your web page. However sometimes this is not desired with dynamic data like `getQuote()` so we make sure we're rendering the page inside someone's browser before calling `getQuote()`.

:information_source: Note the `await` on `getQuote()`, all web module functions return Promises so you'll need to make sure to handle their results with `await` or `.then()`.

:information_source: You can read more about [the page rendering process here](https://support.wix.com/en/article/velo-about-the-page-rendering-process).

That's it! You're now calling backend code from the frontend, it's executing on server, and when it's done the result is returned to your browser.

:information_source: Backend code is very useful and you should use it. However it can't do unlimited computations so you can. [Read more about backend quotas here](https://support.wix.com/en/article/velo-about-backend-quotas).

:exclamation: **Go Preview your code and make sure the inspirational quotes are updating!**

:fast_forward: Next Module => [NPM modules](PACKAGE_MANAGER.md)
