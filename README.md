## Filtering Animation with React Tutorial & Framer Motion

<br>
<br>

# 🌈

## Lets Begin!

- Install the following:

```javascript
    "framer-motion": "^6.2.8",
    "node-sass": "^4.14.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-player": "^2.9.0",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.3",
```

<br>
<br>

---

<br>
<br>

## The Api 🥭

#### I will be using the same API (from the previous tutorial)

<br>

- Go to the api website [TMDB](https://developers.themoviedb.org/3/getting-started/introduction) and look in the side bar, for[ SEARCH ](https://developers.themoviedb.org/3/search/search-companies)

- Then click again in side bar, for **search the movie**

<br>

##### ENDPOINT: get/search/movie ✋

<br>

[<img src="./src/img/enpoint-api.gif"/>](https://developers.themoviedb.org/3/search/search-movies)

<br>

#### 🔴 Remember:

> **You need to request the API key**, you will have to fill a form about why do and in what do you want to use, after that you will receive your api in your email, or just refresh the page

<br>

#### Once you have the API:

- Create a **.env.local** and **store your API** there like so:

```javascript
REACT_APP_TMDB_KEY=long api code here
```

<br>

### Add the API here

- Every time you are requesting something from an external API, you will need <u>**async await**</u>, and the reason for that is because you can have different type of issues, issues that can cause the data not being delivered in time when the user opens the page for example.

<br>

- One of the reasons can be **"slow internet connection", latency ...etc**

```javascript
const Home = () => {
  // without async | WRONG 🔴
  const fetchPopular = () => {
    //   api goes here / fetching data from the api
  };

//
  // with async | GOOD  ✋
  const fetchPopular = async () => {
    //   api goes here / fetching data from the api
  };
```

<br>

#### [Latency ](<https://en.wikipedia.org/wiki/Latency_(engineering)>)

> **Latency meaning in networking** is best thought of as the amount of time it takes for a packet of data to be captured, transmitted, processed through multiple devices, then received at its destination and decoded. ... Latency is measured in milliseconds, or during speed tests, it's referred to as a ping rate.

<br>
<br>

#### ⚠️ After you add the API, restart the app.
