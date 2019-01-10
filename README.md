# Node.js Shop

## Demo

![demo](https://user-images.githubusercontent.com/1861212/50972572-46d6e480-14e7-11e9-847f-053b86c75dd8.gif)

Wanna test it ? This is [right here](https://ancient-caverns-59803.herokuapp.com/).

## Setup

### Installation

To install the required dependencies, run the command:

```
npm install
```

### Database

This project is based upon MongoDB for data storage. You can create a free test DB on https://cloud.mongodb.com.

### Stripe

To enable free test payments, you can create an account for free on [Stripe](https://dashboard.stripe.com).

On your dashboard, you will get a secret and a public key you will have to provide in your environment variables list.

### Environment variables

To run the the project in dev environment, you will have to create a `nodemon.json` file and use the same keys as in `config/prod.js`, with the following example values:

```json
{
  "env": {
    "MONGO_USER": "mongo_user",
    "MONGO_PASSWORD": "mongo_password",
    "MONGO_DEFAULT_DATABASE": "shop_test",
    "STRIPE_KEY": "sk_test_xxxxxxxxxxxxxxxxx",
    "SENDGRID_KEY": "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
}
```

*   MONGO_USER: Selected user for your mongo database
*   MONGO_PASSWORD: Password of the selected user
*   MONGO_DEFAULT_DATABASE: Mongo DB database. For example, you can use a free DB on [mongoDB Atlas](https://cloud.mongodb.com).
*   STRIPE_KEY: Stripe API key to make your tests
*   SENDGRID_KEY: Sengrid API key if you want to implement emails

## Usage flow

*   User logs in / signs up with email address
* 	User can create a product (__Add Product__ section)
* 	User can edit or delete his own products (__Admin Products__ section)
*   User can consult products from other users (__Products__ section)
*   User can add products to its cart
*   User can edit cart of proceed to checkout (__Cart__ section)
*   User can view past orders (__Orders__ section) and get invoices in PDF

#### TIP

To test payments, simply provide the following information:

*   Email: Any email will be fine
*   Card number: 4242 4242 4242 4242
*   Expiration date: Any date in the future
*   Security code: Any 3-digit code

More information on [Stripe Documentation Page](https://stripe.com/docs/testing#cards)

## Techs

*   Database: MongoDB
*   API: Express server
*   Payment: Stripe
*   Frontend: Server side rendreing with EJS

## Tech Features

*   Authentication with passwrod encryption
*	Authentication middleware to protect routes
*   Handle sessions with cookies
*	CSRF protection
*	Form validation
*	Error handler middleware
*   Securing env variables (API keys, ...)
*   Handle payments
*	PDF generation
*	Paginate data
*  	Assets compression
