/*
 * helper/transport.js
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Created by Alex Tan Hong Pin 1/3/2017
 * Copyright (c) 2017 alextanhongpin. All rights reserved.
**/

const successJSON = (res) => (data) => {
  console.log(data)
  res.status(200).json(data)
}

const errorJSON = (res) => (error) => {
	// Handle schema errors
  if (error.isJoi) {
    return res.status(400).json({
      	errors: error.details
    })
  }
  res.status(error.code || 400).json(error)
}

module.exports = { successJSON, errorJSON }
