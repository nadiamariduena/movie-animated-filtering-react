## Filtering Animation with React Tutorial & Framer Motion

<br>
<br>

- Click on the image to see the **1. step** of the project

<br>

[<img src="./src/img/preview-2.gif"/>](https://github.com/nadiamariduena/movie-animated-filtering-react/tree/1app-stup-api-setup-fetching-styles)

<br>
<br>

---

<br>
<br>

## Buttons 🥭

- Create a new component inside the **components** folder, and call it **Filter.jsx**

<br>

- Import the **useEffect & useState**

<br>

```javascript
import React, { useEffect, useState } from "react";
```

<br>

#### Add some basic styles

```javascript
import React from "react";
import styled from "styled-components";

//
//
const FilterContainer = styled.div`
  margin-top: 40px;
  padding: 20px 0;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  margin: 0 3px;
  padding: 12px 28px;
  border-radius: 2rem;
  border: 2px solid #000;
  background: transparent;
  color: #000;
  cursor: pointer;
  /*  */
  &:hover {
    background: #f7f4e79a;

    color: #0e0e0e;
  }
  &:active {
    background: #000;
    color: #ffffff;
  }
`;
//

export const Filter = () => {
  return (
    <FilterContainer>
      <Button>All</Button>
      <Button>Comedy</Button>
      <Button>Action</Button>
    </FilterContainer>
  );
};
```

<br>
<br>

### Import it to the Home.jsx

```javascript
import { Filter } from "./Filter";


//
//
  return (
    <Wrapper>
      <Filter /> ✋
```

[<img src="./src/img/preview-3-buttons_filter.gif"/>]()

<br>
<br>

## Key error 🔴

<br>

```javascript
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Home`. See https://reactjs.org/link/warning-keys for more information.
```

<br>

> Even if I know that the solution is adding this: **key={movie.id}** sometimes it just dont work, and the reason for that is as you can see in the 2 examples below:

<br>
<br>

### solution 🌈

- Remove the fragments **<></>**

```javascript

//
//      BEFORE
<PopularMovies>
   {popular.map((movie) => (
            <>
              <MovieCard key={movie.id} movie={movie} />
            </>
          ))}
</PopularMovies>
//
//
//
//
//      AFTER
<PopularMovies>
  {popular.map((movie) => (
    <div key={movie.id}>
      <MovieCard movie={movie} />
    </div>
  ))}
</PopularMovies>
```

<br>
<br>

# 🐖

## Create a new state

- 1. This **new** state will serve to **copy everything** from the following variable

```javascript
 const [popular
```

<br>

- 2. But will filters out **the elements or the movies** based in what we are clicking on

<br>

##### the new state

```javascript
const [filtered, setFiltered] = useState([]);
```

<br>

#### Recapitulation:

> So this new **variable/state** called **filtered** is going to copy all from the state variable **popular** but will filter out **the elements or the movies** based in what we are clicking on

<br>

### 👾👾👾

##### The reason why we are duplicating the <u>popular</u> state, is because if we mess out with the "popular" when updating, there is no way to go back to the original state, unless we do another FETCH request, which we dont want to do, as we dont want to do MULTIPLE fetch requests if you already have the same DATA stored.

### 👾👾👾

<br>

#### use the new state here:

```javascript
const movies = await data.json();
console.log(movies);
setPopular(movies.results);
//
setFiltered(movies.results); ✋
```

<br>

## 👁️

##### Now let's check if we can see the second state on the console

- As you can see in the gif, we have 2 states containing the same data ✋

[<img src="./src/img/2state.gif"/>]()

<br>
<br>

- the 1 is the original state

- the 2 one is the **filter** state

[<img src="./src/img/2states.jpg"/>]()

<br>
<br>

#### Before continuing lets add another state, this state will take care of the genre, so to know which button is active

```javascript
const [activeGenre, setActiveGenre] = useState(0);
```

<br>

#### 🐖

- to know why we get into the **0**, you have to go to the component in the console.

<br>

[<img src="./src/img/3state.gif"/>]()

<br>

#### By default the state is going to be 0, but why 0?

<br>

- As you can see in the gif, when we open the object containing one single movie, we will notice that **the genre contains numbers**, but why the numbers don't start from 0?

<br>

> its because this **API** was made like that, they added their genres in such way

<br>

#### To understand it better, you have to go to the api [genres/get-movie-list](https://developers.themoviedb.org/3/genres/get-movie-list) , add your api key like in the gif below

<br>

[<img src="./src/img/api-genres.gif"/>]()

- then copy the url and paste it inside the browser, then you will get this:

<br>

#### Genre List

```javascript
{
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
}

```

<br>

##### SO the 0 we added, we are going to configure it ourselves later one

<br>

---

<br>

### Add the states to the Filter component

<br>

- **Home.jsx**

```javascript
return (
    <Wrapper>

      <Filter
         popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
```

<br>
<br>

### Now lets access the props above inside the Filter.jsx

```javascript
export const Filter = ({
  setFiltered,
  activeGenre,
  setActiveGenre,
  popular,
}) => {
  return (
    <FilterContainer>
      <Button>All</Button>
      <Button>Comedy</Button>
      <Button>Action</Button>
    </FilterContainer>
  );
};
```

##### Lets use it

- remember that those numbers have something to do with the list of numbers i added above in the **Genre List**

```javascript
export const Filter = ({
  setFiltered,
  activeGenre,
  setActiveGenre,
  popular,
}) => {
  return (
    <FilterContainer>
      <Button onClick={() => setActiveGenre(0)}> All</Button>
      <Button onClick={() => setActiveGenre(35)}>Comedy</Button>
      <Button onClick={() => setActiveGenre(28)}>Action</Button>
    </FilterContainer>
  );
};
```

<br>

[<img src="./src/img/genre-filtering1.gif"/>]()

<br>
<br>

### In my app

[<img src="./src/img/genre-filtering2.gif"/>]()

<br>
<br>

## useEffect

```javascript
import React, { useEffect } from "react";
```

<br>

> The useEffect here is going to **run** every time we make changes, by changes I mean, **Every time i click these buttons**

<br>

- add this dependeny to the useEffect: **[activeGenre]**

<br>

```javascript
useEffect(() => {
  /*

Here we are going to modify the 2 state you see in the
developers tool "components"

*/
}, [activeGenre]); ✋
```

<br>

[<img src="./src/img/2states_useeffect.jpg"/>]()

<br>
<br>

### Next step will be to add a conditional

- In this conditional we will handle the genre identifiers, based on the list i added few steps above

<br>

```javascript
// If activeGenre is equal to 0 then set the filter "popular", so basically it will be the default, and because of that will not be doing anything.
//
if (activeGenre === 0) {
  setFiltered(popular);
  return; //when adding the return here, nothing else is going to run!
}
```

<br>
<br>

#### Here we will filter the "popular" array with the filter(), then we will define the "movie" as the popular and with it, we will get the \_ids and ask it to only get anything that includes the activeGenre.

```javascript
const filtered = popular.filter((movie) =>
  movie.genre_ids.includes(activeGenre)
);
```

<br>

[<img src="./src/img/filtered.gif"/>]()

<br>
<br>

#### like so:

```javascript
export const Filter = ({
  setFiltered,
  activeGenre,
  setActiveGenre,
  popular,
}) => {
  //
  //

  useEffect(() => {
    //  if the user didnt type anything,
    //  it will stay with the popular movies as default
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    // here we will filter the popular array with the filter(), then once filtered, we will grab the _ids from the array and tell it to get only the ones that includes() all the movies that match with the numbers we have inside the buttons here below
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    //
    setFiltered(filtered);
    //
    //
  }, [activeGenre]);

  //
  //
  return (
    <FilterContainer>
      <Button onClick={() => setActiveGenre(0)}> All</Button>
      <Button onClick={() => setActiveGenre(878)}>Science Fiction</Button>
      <Button onClick={() => setActiveGenre(28)}>Action</Button>
    </FilterContainer>
  );
};
```

<br>

#### result

[<img src="./src/img/preview-filtering-genres.gif"/>]()
