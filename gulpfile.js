'use strict';

var akGulp = require('./gulp/index');
var gulp = require('gulp');

var config = require('./config');
var karma = require('./karma');

config.karma = karma;

akGulp(gulp, config);
