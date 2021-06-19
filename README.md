

<!-- Add banner here -->


# mg-react-buttons

<!-- Add buttons here -->

![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/mg143pavankumar/mg-react-buttons?include_prereleases)
![GitHub last commit](https://img.shields.io/github/last-commit/mg143pavankumar/mg-react-buttons)
![GitHub issues](https://img.shields.io/github/issues-raw/mg143pavankumar/mg-react-buttons)
![GitHub pull requests](https://img.shields.io/github/issues-pr/mg143pavankumar/mg-react-buttons)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)


<!-- Describe your project in brief -->

`mg-react-buttons` is created using styled-components which is fully customizable and user friendly.


# Demo-Preview
<!-- Add a demo for your project -->

Here is the demo of ```slideable button```


# Table of contents

Here is the TOC this project.

- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contribute](#contribute)
    - [Sponsor](#sponsor)
    - [Adding new features or fixing bugs](#adding-new-features-or-fixing-bugs)
- [License](#license)
- [Footer](#footer)

# Installation
[(Back to top)](#table-of-contents)

To use this component in you project, follow the following instructions:

1. create a react project
2. install mg-react-buttons  ``` npm i mg-react-buttons ```
3. import mg-react-buttons where you required in your project


# Usage
[(Back to top)](#table-of-contents)

## Themes which can be changed
```
const theme = {
    bgPrimaryColor: "",
    bgSecondaryColor: "",
    textColor: "",
    hoverTextColor: "" ,
    fontWeight: "",
    fontSize: "",
    width: "",
    height: "",
    minWidth: ""

  }


```


Example useage (App.js)

```
import React from "react";
// + include below code
import SlideableButton from 'mg-react-buttons/mg/SlidableButton'


// App Component
export default function App() {

 // + include below code to overide the properites  
  const theme = {
    bgPrimaryColor: "#3982f7",
    bgSecondaryColor: "#0062ff",
    ... ... .... 
    .... ... ... .. 
    ... .... ... ..
  }

  return (
    <>
      <div style = {{
      display:"flex", 
      justify-content: "center", 
      align-items: "center", 
      height: "100vh"
      }}>
      
        // + include this component to use SlideableButton
        <SlideableButton theme = {theme}>Hello world</SlideableButton>
      <div>
    </>
  );
}

```

# Development
[(Back to top)](#table-of-contents)


# Contribute
[(Back to top)](#table-of-contents)

Please check Contribute.md to know how you can contribute to this project.

### Sponsor
[(Back to top)](#table-of-contents)

If you want to sponsor the project, do reach me out at pavansharma.mg143@gmail.com or click on the sponsor badge.

### Adding new features or fixing bugs
[(Back to top)](#table-of-contents)

If you find an issue in the project, open a new issue or a raise a pull request in this repository. 

You can also mail to pavansharma.mg143@gmail.com incase of any major issues.

# License
[(Back to top)](#table-of-contents)

Check out the LICENSE file in the repo.

[GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)



