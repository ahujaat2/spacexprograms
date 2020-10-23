## SpaceX Programs
SpaceX Programs is a webpage developed for displaying a list of all programs SpaceX has launched with Launch-Year, Launch-Success and Land-Success filters.

## Build status
[![Netlify Status](https://api.netlify.com/api/v1/badges/95f7133c-6015-4e7e-b2b5-2dba5a7c285a/deploy-status)](https://app.netlify.com/sites/spacexprograms/deploys)
 
## Screenshots
Include logo/demo screenshot etc.
**Webpage view**
<table>
    <tr>
        <td>
            <img alt="base" src="docs/base_page.PNG">
        </td>
        <td>
            <img alt="filters" src="docs/with_filters.PNG">
        </td>
    </tr>
</table>

**Project Structure**
<br />
<br />
<img alt="structure" src="docs/structure.PNG">

**Lighthouse score**
<br />
<br />
<img alt="lighthouse" src="docs/lighthouse.PNG">

## Tech/framework used

<b>Built with</b>
- [Visual Studio Code](https://code.visualstudio.com/)

<b>Created with</b>
- [ReactJS](https://reactjs.org/)

## Code Details
This app was created using create-react-app.
The src folder, which contains the App.js file, in the code structure contains a components folder which houses the individual components and their style files.
- **App.js:** Class-based component with state management <br/>
- **Header.js:** Functional component <br/>
- **Footer.js:** Functional component <br/>
- **Programs.js:** Functional component <br/>
- **Program.js:** Functional component 

Apart from these components files, the structure contains .bablerc.json file for babel presets and webpack.server.json for Server-side rendering.


## How to use?
- **Get the latest code:**
[Clone the repository](). You will need node and npm installed globally on your machine.
- **Installation**: npm install
- **To run tests**: npm test
- **To start server**: npm start
- **Access on localhost**: localhost:3000


## API Reference

Used [SpaceX API](https://api.spaceXdata.com/v3/launches)