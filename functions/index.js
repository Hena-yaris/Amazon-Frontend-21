/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express=require('express')
const cors = require("cors");
const dotenv=require('dotenv');
const { query } = require("express");

dotenv.config();
//for vite 
// const stripe = require("stripe")(import.meta.env.VITE_STRIPE_KEY);

const stripe = require("stripe")(process.env.STRIPE_KEY);



const app= express();

app.use(cors({ origin: true }));


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success !",
  });
});




// app.post("/payment/create", async (req, res) => {
    // const total=req.query.total;
  app.post("/payment/create", async (req, res) => {
//   const total = parseInt(req.query.total);
    const total = req.query.total;
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});

exports.api = onRequest(app);
