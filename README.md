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
const FilterContainer = styled.div``;
const Button = styled.button`
  padding: 12px 28px;
  border: 0;
  background: #000;
  color: #fff;
`;
//

export const Filter = () => {
  return (
    <FilterContainer>
      <Button>a</Button>
      <Button>b</Button>
      <Button>c</Button>
    </FilterContainer>
  );
};
```
