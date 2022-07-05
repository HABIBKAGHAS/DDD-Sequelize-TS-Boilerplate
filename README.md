# DDD-Sequelize-TS-Boilerplate

<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/HABIBKAGHAS/DDD-Sequelize-TS-Boilerplate">
    <img src="images/logo.png" alt="Logo" width="152" height="80">
  </a>
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
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

 <img src="images/folderStructure.png" alt="Logo" width="300" height="400">

You can use the template to create CRUD very easy with REST Api structure, just add you feature (the same as example folder) and initialize it inside server.ts.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [NodeJS](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

To download all dependencies use: 
* Yarn
  ```sh
   yarn
  ```
  
To build it to Javascript files use: 
* Yarn Build
  ```sh
   yarn build
  ```
    
To create migrations use:
* Yarn run db:createMigration
  ```sh
   yarn run db:createMigration
  ```
  
To migrate your changes use:
* Yarn run db:migrateDev:migrate
  ```sh
   yarn run db:migrateDev:migrate
  ```

To undo your migration use:
* Yarn run db:migrateDev:undo
  ```sh
   yarn run db:migrateDev:undo
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/HABIBKAGHAS/DDD-Sequelize-TS-Boilerplate.git
   ```
2. Install packages with yarn
   ```sh
   yarn
   ```
3. Enter your database url in `env file`
   ```js
   DATABASE_URL = 'mysql://USERNAME:PASSWORD@HOST:PORT/DATABASE';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Habib Kaghas - [@habib79243709](https://twitter.com/habib79243709) - habibkaghas@gmail.com

Project Link: [https://github.com/HABIBKAGHAS/DDD-Sequelize-TS-Boilerplate](https://github.com/HABIBKAGHAS/DDD-Sequelize-TS-Boilerplate)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/habib-kaghas/
