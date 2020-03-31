const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// validate authorization is present
routes.get('/profile',  celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/ongs', OngController.index);

// with Express, the request follows the pipeline from left to right
// that is why we include celebrate() right after the route name '/ongs'
// This is what Expresss calls 'middleware'
/**
 * Validation with celebrate: query params, route params, body params
 */
routes.post('/ongs', celebrate({
    // everytime we have an object as the key of a JavaScript object, we need to enclose it in brackets
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), 
        email: Joi.string().required().email(), 
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);


// validate the page param is a number
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    }),
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);

// validate :id is present
// validate Authorization header is present
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),

    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), IncidentController.delete);

module.exports = routes;
