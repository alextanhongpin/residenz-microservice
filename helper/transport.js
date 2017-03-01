/*
 * helper/transport.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const successJSON = (res) => (data) => res.status(200).json(data)
const errorJSON = (res) => (err) => res.status(err.code).json(err.error)

module.exports = { successJSON, errorJSON }
