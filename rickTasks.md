## Intro

This codebase was made for the purposes of conducting interviews. It contains intentionally bad code.

## Info before you start

- Link to the API docs: https://rickandmortyapi.com/documentation/
- You can use Google.
- Turn any LLM help off before starting.
- The code should work with larger datasets and page sizes, so don't optimize for the current page size of 20.

## Intended features

- The user can search for characters by name, and receives the top 20 results displayed in a data grid on every change event of the input field.
- The data of a single location can be queried by entering the ID of the location into the second input field of the page.
- Location data includes a list of residents who have been last seen on said location.
- The blue character (Meeseeks) lives on top of the page content, and is fully visible. A click triggers his animated disappearance.

## Tasks

- Find and fix (or at least discuss) performance, style and code quality issues and any errors in `App.tsx`, `api.ts`, `LocationEpisodes.tsx`, and `CharacterList.tsx`
- Explain why MeeSeeks _(the blue character on top)_ appears below the header and not above it in the Z direction
- Bonus: MeeSeeks disappears when the user clicks on them. Animate his exit so that he gradually shrinks instead of suddenly disappearing, and the content below him should gradually rise as well. <br/>
  Example: <br/>
  <img src="./src/assets/meeSeeksDisappears.gif" height="200"/>
