'use strict';

import mongoose from 'mongoose';

var ThingSchema = new mongoose.Schema({
  message: String,
  date: Date,
  from: String,
  to: String
});

export default mongoose.model('Thing', ThingSchema);
