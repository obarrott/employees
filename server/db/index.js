const { Pool } = require('pg');
const express = require('express');

const router = require('express').Router();

const pool = new Pool();
module.exports = {
  query: (text, params) => pool.query(text, params),
};