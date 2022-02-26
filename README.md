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
