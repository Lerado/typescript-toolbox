<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Commitizen friendly][commitizen-shield]][repository-url]
[![npm monthly downloads][npm-downloads-shield]][npm-downloads-url]
[![current version][current-version-shield]][repository-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">TypeScript toolbox</h3>

  <p align="center">
    A collection of TypeScript utilities
    <br />
    <a href="https://lerado.github.io/typescript-toolbox"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Lerado/typescript-toolbox/issues">Report Bug</a>
    ·
    <a href="https://github.com/Lerado/typescript-toolbox/.github/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This library is a comprehensive collection of TypeScript utilities that can be used to simplify and streamline TypeScript projects. It includes a wide range of functions, classes, and interfaces that make it easier to work with common data types, manipulate arrays and objects, and manage other aspects of the language. Additionally, the library is designed to be easy to use and integrate into existing projects, making it a valuable resource for TypeScript developers of all levels.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![TypeScript][TypeScript]][Typescript-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To start using this library in your project, follow these simple example steps.

### Prerequisites

You basically just need `npm` or `yarn`:
* npm
  ```sh
  npm install npm@latest -g
  ```

* yarn
  ```sh
  npm install yarn@latest -g
  ```

### Installation

Just a single command required. Depending on which package manager you use.
* npm
  ```sh
  npm install @lerado/typescript-toolbox
  ```

* yarn
  ```sh
  yarn add @lerado/typescript-toolbox
  ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Import an use any function, decorator, etc...

```ts
import { objectToFlatString } from '@lerado/typescript-toolbox';

objectToFlatString({ id: 123, name: 'Mr. Smith', age: 23 });
// => to 123mr. smith23.
```

_Please refer to the [documentation](https://lerado.github.io/typescript-toolbox) for more._

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Release v1.0.0 on npm
<!-- - [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature -->

See the [open issues](https://github.com/Lerado/typescript-toolbox/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

We use the [Git workflow](https://git-flow.readthedocs.io/fr/latest/presentation.html) and [Commitizen](https://github.com/commitizen) for our development cycles and releases. We **strongly recommend** you use it too with your contributions.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your feature/hotfix Branch (`git checkout -b (feature|hotfix)/branch-name`)
3. Commit your Changes (`git commit -m <COMMITIZEN FRIENDLY MESSAGE>`)
4. Push to the Branch (`git push origin <YOUR BRANCH>`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Darel Ngogang - [@JeSuisLerado](https://twitter.com/@JeSuisLerado) - darel.ngogang@gmail.com

Project Link: [https://github.com/Lerado/typescript-toolbox](https://github.com/Lerado/typescript-toolbox)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [TypeScript Starter template](https://github.com/bitjson/typescript-starter)
* [How to create and publish a TypeScript library](https://medium.com/counterarts/a-beginners-guide-to-creating-a-typescript-library-and-a-github-repository-26ae3f1540ad)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[current-version-shield]: https://img.shields.io/npm/v/@lerado/typescript-toolbox.svg?style=for-the-badge
[commitizen-shield]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge
[npm-downloads-shield]: https://img.shields.io/npm/dm/@lerado/typescript-toolbox.svg?style=for-the-badge
[npm-downloads-url]: https://www.npmjs.com/package/@lerado/typescript-toolbox
[contributors-shield]: https://img.shields.io/github/contributors/Lerado/typescript-toolbox.svg?style=for-the-badge
[contributors-url]: https://github.com/Lerado/typescript-toolbox/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Lerado/typescript-toolbox.svg?style=for-the-badge
[forks-url]: https://github.com/Lerado/typescript-toolbox/network/members
[stars-shield]: https://img.shields.io/github/stars/Lerado/typescript-toolbox.svg?style=for-the-badge
[stars-url]: https://github.com/Lerado/typescript-toolbox/stargazers
[issues-shield]: https://img.shields.io/github/issues/Lerado/typescript-toolbox.svg?style=for-the-badge
[issues-url]: https://github.com/Lerado/typescript-toolbox/issues
[license-shield]: https://img.shields.io/github/license/Lerado/typescript-toolbox.svg?style=for-the-badge
[license-url]: https://github.com/Lerado/typescript-toolbox/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/darel-ngogang-00b8a6223
[TypeScript]: https://img.shields.io/badge/typescript-000000?style=for-the-badge&logo=typescript
[Typescript-url]: https://www.typescriptlang.org/
[repository-url]: https://github.com/Lerado/typescript-toolbox
