<h1>Project Name: Contact Manager (server)</h1>

<h1>How to run:</h1>

after cloning this in your local computer type npm install --force
And After that type npm run start to run this project in your local computer.

<h1>Technologies:</h1>

- _**Languages**_
  - JavaScript
  - TypeScript
- _**Tech-Stack:**_
  - NodeJs
  - ExpressJS
  - Mongoose
- _**Database:**_
  - MongoDB
- _**Validation:**_
  - Zod validation
- _**Image CloudStorage:**_

  - Cloudinary

- _**Features:**_

  - Users can add , upate and delete contacts.
  - Can Retrive contacts.
  - Filtering is added to filter contacts by name,email, phone, address.
  - RESTful API also developed to provide optimise performance.
  - Zod data validation is used to validate req data.
  - Cloudinary is used to store pictures.

- _**API- endPoints:**_

  - POST("/contacts/add") : To add contact into DB.
  - Get("/contacts/") : To retrive contacts from DB.
  - PATCH("/contacts/update/:id") : To update contacts.
  - PATCH("/contacts/change-favourite-status/:id") : To mark or unmark contacts as favourite.
  - DELETE("/contacts/delete/:id") : To delete contact.
