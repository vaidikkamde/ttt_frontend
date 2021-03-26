
[![LinkedIn][linkedin-shield]][linkedin-url]
<br />
<p align="center">
  <h3 align="center">Terribly Tiny Tales Round-1</h3>

  <p align="center">
    The React.Js & Next.Js implemented frontend project repository
    <br />
    <br />
    <a href="https://ttt-frontend.vercel.app/">Vercel Hosted Demo</a>
    ·
    <a href="https://github.com/vaidikkamde/ttt_backend.git">Back-End Repository</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The following Next.Js front-end takes "<strong>,</strong>" sepreated roll numbers as a user input in a form and on clicking on submit a GET request is made to the [Back-End server](https://github.com/vaidikkamde/ttt_backend.git) and the results are fetched and are displayed in a table.
<br/>
When user starts typying the value we use the onChange listner to update the values stored in the rollNumbers variable using useState hook. On clicking Submit the roll numbers string is formated to remove any whitespaces in between any values. The logic will remove every whitespace in the string so if the is input like "5,6,  7,8,9 10" this will be converted to "5,6,7,8,910" ie if two values are sepereated by a white space it will combine those values. The code for this functionality looks like this
```js
const rollNumbersWithNoWhiteSpaces = rollNumbers.replace(/\s+/g,'')
``` 
After formatiing the string the getData Function (defined in services/resultService.js) is called and the return value is stored in the data variable using useState hook.
While fetching the data an flag isLoading is set to true to show a loader spinner to let user know that the data is loading.

For cases where the result for a roll number is undefined:

* If the status code is anything else that 200 the below mentioned array of objects is returned by getData() function:
```js
[{
  rollnumber: "Data Not Avaliable",
  result: "For entered Roll Number"
}]
```
In resultTable.jsx we check if the rollNumber key has a value of "Data Not Avaliable" we sent an alert using react-alert package to the user to check the input data for any mistakes.
### Built With

This project uses the following technologies:

* [React.Js](https://reactjs.org/)
* [Next.Js](https://nextjs.org/) 
* [Axios](https://www.npmjs.com/package/axios)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [react-alert](https://www.npmjs.com/package/react-alert)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

You will need the latest LTS version of [Node](https://nodejs.org/en/download/) and NPM
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vaidikkamde/ttt_frontend.git
   ```
2. Change Directory to ttt_frontend
  ```sh
    cd ttt_frontend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. If you are running the [back-end server](https://github.com/vaidikkamde/ttt_backend.git) on your system change the url variable inside services/resultServices.js to
http://localhost:8080/api/getResult

4. Run the Developement Server 
    ```sh
    npm run dev
    ```
<!-- USAGE EXAMPLES -->
## Usage

Just enter the comma sepreated roll numbers in the input field and click submit and wait for a few moments to get the result in a tabulated format.
<!-- CONTACT -->
## Contact

Vaidik Kamde - vaidik16206138@gmail.com

Project Link: [https://github.com/vaidikkamde/ttt_frontend.git](https://github.com/vaidikkamde/ttt_frontend.git)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Best-README-Template by @othneildrew](https://github.com/othneildrew/Best-README-Template.git)

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/vaidik-kamde
[product-screenshot]: public/screenshot.png
