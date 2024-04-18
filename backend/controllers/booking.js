import express from 'express';
import mongoose from 'mongoose';
import { Booking } from '../models/Booking.js';
import { User } from '../models/User.js';
import { Doctor } from '../models/Doctor.js';
import Stripe from 'stripe';

export const getCheckoutSession = async (req, res) => {
      try
      {
            const doctor = await Doctor.findById(req.params.doctorId);
            const user = await User.findById(req.userId);

            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

            const session = await stripe.checkout.sessions.create({
                  payment_method_types: ['card'],
                  mode: 'payment',
                  success_url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
                  cancel_url: `${req.protocol}://${req.get('host')}/doctors/${doctor.id}`,
                  customer_email: user.email,
                  client_reference_id: req.params.doctorId,
                  line_items: [
                        {
                              price_data: {
                                    currency: 'inr',
                                    unit_amount: doctor.consultationFee * 100,
                                    product_data: {
                                          name: doctor.name,
                                          description: doctor.bio,
                                          images: [doctor.photo] 
                                        },
                                    },
                              quantity: 1,
                        }


                  ],
            })

            const booking = await Booking.create({
                  doctor: doctor._id,
                  user: user._id,
                  consultationFee: doctor.consultationFee,
                  session: session.id
            });

            await booking.save();

            res.status(201).json({
                  success: true,
                  message: "Payment done Successfully",
                  session,
            })
      }
      catch(error)
      {
            res.status(501).json({
                  success: false,
                  message: "Error creating the checkout session"
            })
      }     
}