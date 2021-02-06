
<p align="center">
      <img src="https://user-images.githubusercontent.com/59374587/95769432-3c361a00-0c8e-11eb-8ce7-9ee9a66f32af.png" width="10%" alt="Happy Logo"/>
</p>

<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=15C3D6&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=15C3D6&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Happy" src=".github/happy.png" width="100%">
</p>

## 🚀 Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Project

Happy is an application that connects people to institutional care homes to make many children's day happier 💜

## :information_source: How to run

- ### **Requirementss**

  - You **need** to have **[Node.js](https://nodejs.org/en/)** installed in your machine
  - You **need** to have **[Git](https://git-scm.com/)** installed and configured in your machine
  - Also, you **need** a package manager **[Yarn](https://yarnpkg.com/)** or **[NPM](https://www.npmjs.com/)**.
  - Lastly, is **essential** to have **[Expo](https://expo.io/)** installed globally in your machine

1. Clone the repository:

```sh
  $ git clone https://github.com/marcosTenorio/happy.git
```

2. Running the application:

```sh
  # API
  $ cd server
  # Install the dependencies
  $ yarn install
  # Configure the database and create the tables
  $ yarn knex:migrate # or npm run knex:migrate

  # Run the API
  $ yarn start

  # Web Application
  $ cd web
  # Install the dependencies
  $ yarn install
  # Run web app
  $ yarn start

  # Mobile App
  $ cd mobile
  # Install the dependencies
  $ yarn install
  # Run mobile app
  $ yarn start
```
In order to run the application in your device, you need to change the ip config.
[api.ts](https://github.com/marcosTenorio/ecoleta/blob/master/mobile/src/services/api.ts)
```javascript
baseURL: 'http://192.168.0.206:3333',
```
replace 192.168.0.206 with your machine's ip.
Now with everything on place, run the application.
```bash
# to run the app
$ npm start
```
Expo will open a page in your browser, scan the QRcode in the page and wait the app to load.


## :mailbox_with_mail: Get in touch!
<a href="https://www.linkedin.com/in/marcos-tenorio12/" target="_blank" >
  <img alt="Linkedin - Marcos Tenorio" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:marcos.francajr@gmail.com" target="_blank" >
  <img alt="Email - Marcos Tenorio" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Marcos Tenorio.
