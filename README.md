## Filtering Animation with React Tutorial & Framer Motion

<br>
<br>

- Click on the image to see the **2. step** of the project

<br>

[<img src="./src/img/filterin-success.gif"/>](https://github.com/nadiamariduena/movie-animated-filtering-react/tree/2-button-state-filtering-api-genres)

<br>
<br>

---

<br>
<br>

# 🍍

## Animating the cards

- import **framer-motion** in the **Home.jsx**

```javascript
import { motion } from "framer-motion";
```

<br>

#### ⚠️ if there s an error, just replace the new version with an older one:

```javascript
"framer-motion": "^4.1.17",
```

<br>

##### attach the motion to the div that wraps the cards 'in the mapping section

```javascript
//       BEFORE
    <PopularMovies>

            {filtered.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}

        </PopularMovies>
//

//       AFTER
//
    <PopularMovies>
          <motion.div className="wrapper-cards">
            {filtered.map((movie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </motion.div>
        </PopularMovies>
```

<br>

##### Modify the styles

```javascript
//before

const PopularMovies = styled.div`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-column-gap: 1rem;
grid-row-gap: 2rem;
margin-top: 40px;
padding: 40px 40px;


`;

//
//
//after
const PopularMovies = styled.div`

//
  .wrapper-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    margin-top: 40px;
    padding: 40px 40px;
  }

```

<br>

#### The reason for this, is because it seems like framer-Motion doesnt work with styled components.

- If you try it you can see that the grid will behave differently

<br>
<br>

### 🌈

#### the animation settings

- add the **layout**, first to the parent and then to the child, which is the **MovieCard.jsx**

<br>

```javascript
<motion.div layout className="wrapper-cards">
  {filtered.map((movie) => (
    <div key={movie.id}>
      <MovieCard movie={movie} />
    </div>
  ))}
</motion.div>
```

<br>

#### ⚠️

- as you will notice that if you only add it to the parent, **it will cause an ugly image stretching**.

<br>

[<img src="./src/img/framer-ugly-stretching.gif"/>]()

<br>

<br>

#### Add it to the child

- **MovieCard.jsx**

```javascript
import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
  return (
    <motion.div layout>
      <h2>{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />
    </motion.div>
  );
};

export default MovieCard;
```

<br>

##### result

- Its okay but you can still add more settings

[<img src="./src/img/fframer-ugly-2.gif"/>]()

<br>
