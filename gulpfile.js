'use strict';

var akGulp = require('ak-gulp');
var gulp = require('gulp');

var config = require('./config');
var karma = require('./karma');

config.karma = karma;

akGulp(gulp, config);
