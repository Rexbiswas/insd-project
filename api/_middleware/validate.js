import Joi from 'joi';

/*
|--------------------------------------------------------------------------
| Common Validation Patterns
|--------------------------------------------------------------------------
*/

const namePattern = /^[A-Za-z\s.'-]+$/;

const phonePattern = /^[0-9+\s()-]+$/;

const textPattern = /^[A-Za-z0-9\s,'&().\/-]+$/;


/*
|--------------------------------------------------------------------------
| Helper
|--------------------------------------------------------------------------
*/

const normalizeString = (value) => {
    if (typeof value !== 'string') return value;

    return value
        // Convert common HTML entities
        .replace(/&#x2F;/gi, '/')
        .replace(/&#47;/gi, '/')
        .replace(/&amp;/gi, '&')
        .replace(/&#39;/gi, "'")
        .replace(/&apos;/gi, "'")
        .trim();
};


/*
|--------------------------------------------------------------------------
| Generic String Normalizer
|--------------------------------------------------------------------------
*/

const normalizeBody = (body) => {
    if (!body || typeof body !== 'object') {
        return body;
    }

    const normalized = { ...body };

    Object.keys(normalized).forEach((key) => {
        if (typeof normalized[key] === 'string') {
            normalized[key] = normalizeString(normalized[key]);
        }
    });

    return normalized;
};


/*
|--------------------------------------------------------------------------
| Step Lead Validation
|--------------------------------------------------------------------------
|
| Frontend fields:
|
| name
| phone
| email
| industry
| qualification
| state
| city
| marketingConsent
|
|--------------------------------------------------------------------------
*/

export const validateStepLead = (req, res, next) => {
    try {

        // Normalize HTML entities and whitespace
        req.body = normalizeBody(req.body);

        const schema = Joi.object({

            /*
            |--------------------------------------------------------------------------
            | Name
            |--------------------------------------------------------------------------
            */

            name: Joi.string()
                .trim()
                .min(2)
                .max(100)
                .pattern(namePattern)
                .required()
                .messages({
                    'string.empty': 'Name is required',
                    'string.min': 'Name must contain at least 2 characters',
                    'string.max': 'Name must not exceed 100 characters',
                    'string.pattern.base': 'Name contains invalid characters',
                    'any.required': 'Name is required'
                }),


            /*
            |--------------------------------------------------------------------------
            | Phone / Mobile
            |--------------------------------------------------------------------------
            */

            phone: Joi.string()
                .trim()
                .pattern(phonePattern)
                .min(10)
                .max(20)
                .optional()
                .allow('')
                .messages({
                    'string.pattern.base': 'Please enter a valid phone number',
                    'string.min': 'Phone number is too short',
                    'string.max': 'Phone number is too long'
                }),

            mobile: Joi.string()
                .trim()
                .pattern(phonePattern)
                .min(10)
                .max(20)
                .optional()
                .allow('')
                .messages({
                    'string.pattern.base': 'Please enter a valid mobile number',
                    'string.min': 'Mobile number is too short',
                    'string.max': 'Mobile number is too long'
                }),


            /*
            |--------------------------------------------------------------------------
            | Email
            |--------------------------------------------------------------------------
            */

            email: Joi.string()
                .trim()
                .lowercase()
                .email({
                    tlds: {
                        allow: false
                    }
                })
                .required()
                .messages({
                    'string.empty': 'Email address is required',
                    'string.email': 'Please enter a valid email address',
                    'any.required': 'Email address is required'
                }),


            /*
            |--------------------------------------------------------------------------
            | Industry / Course
            |--------------------------------------------------------------------------
            */

            industry: Joi.string()
                .trim()
                .min(2)
                .max(150)
                .pattern(textPattern)
                .required()
                .messages({
                    'string.empty': 'Course of interest is required',
                    'string.min': 'Course of interest is invalid',
                    'string.max': 'Course of interest is too long',
                    'string.pattern.base': 'Invalid course of interest',
                    'any.required': 'Course of interest is required'
                }),


            /*
            |--------------------------------------------------------------------------
            | Qualification
            |--------------------------------------------------------------------------
            */

            qualification: Joi.string()
                .trim()
                .min(2)
                .max(100)
                .pattern(textPattern)
                .required()
                .messages({
                    'string.empty': 'Qualification is required',
                    'string.min': 'Qualification is invalid',
                    'string.max': 'Qualification is too long',
                    'string.pattern.base': 'Invalid qualification',
                    'any.required': 'Qualification is required'
                }),


            /*
            |--------------------------------------------------------------------------
            | State
            |--------------------------------------------------------------------------
            |
            | IMPORTANT:
            | This allows:
            |
            | Delhi/NCR
            | Uttar Pradesh
            | Jammu & Kashmir
            | Tamil Nadu
            | Andaman & Nicobar
            |
            |--------------------------------------------------------------------------
            */

            state: Joi.string()
                .trim()
                .min(2)
                .max(100)
                .pattern(/^[A-Za-z0-9\s,'\/&().-]+$/)
                .required()
                .messages({
                    'string.empty': 'State is required',
                    'string.min': 'State is invalid',
                    'string.max': 'State name is too long',
                    'string.pattern.base': 'Invalid state format',
                    'any.required': 'State is required'
                }),


            /*
            |--------------------------------------------------------------------------
            | City
            |--------------------------------------------------------------------------
            */

            city: Joi.string()
                .trim()
                .min(2)
                .max(100)
                .pattern(textPattern)
                .required()
                .messages({
                    'string.empty': 'City is required',
                    'string.min': 'City is invalid',
                    'string.max': 'City name is too long',
                    'string.pattern.base': 'Invalid city format',
                    'any.required': 'City is required'
                }),


            /*
            |--------------------------------------------------------------------------
            | Marketing Consent
            |--------------------------------------------------------------------------
            */

            marketingConsent: Joi.boolean()
                .truthy('true', '1')
                .falsy('false', '0')
                .optional()
                .default(false)

        }).unknown(true);


        /*
        |--------------------------------------------------------------------------
        | Validate
        |--------------------------------------------------------------------------
        */

        const { error, value } = schema.validate(req.body, {
            abortEarly: true,
            stripUnknown: false,
            convert: true
        });


        /*
        |--------------------------------------------------------------------------
        | Validation Error
        |--------------------------------------------------------------------------
        */

        if (error) {

            console.error(
                '❌ Step Lead Validation Error:',
                error.details[0].message
            );

            return res.status(400).json({
                success: false,
                message: error.details[0].message,
                field: error.details[0].path?.[0] || null
            });
        }


        /*
        |--------------------------------------------------------------------------
        | Make normalized data available to route
        |--------------------------------------------------------------------------
        */

        req.body = value;

        next();

    } catch (error) {

        console.error(
            '❌ Validation Middleware Error:',
            error
        );

        return res.status(500).json({
            success: false,
            message: 'Validation system error'
        });
    }
};


/*
|--------------------------------------------------------------------------
| Generic Contact Validation
|--------------------------------------------------------------------------
*/

export const validateContact = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .min(2)
            .max(100)
            .pattern(namePattern)
            .required(),

        email: Joi.string()
            .trim()
            .email({
                tlds: {
                    allow: false
                }
            })
            .required(),

        phone: Joi.string()
            .trim()
            .pattern(phonePattern)
            .optional()
            .allow(''),

        message: Joi.string()
            .trim()
            .min(5)
            .max(2000)
            .optional()
            .allow('')

    }).unknown(true);


    const { error, value } = schema.validate(req.body, {
        abortEarly: true,
        convert: true
    });


    if (error) {

        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });

    }


    req.body = value;

    next();
};


/*
|--------------------------------------------------------------------------
| Generic Lead Validation
|--------------------------------------------------------------------------
*/

export const validateLead = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .min(2)
            .max(100)
            .pattern(namePattern)
            .required(),

        email: Joi.string()
            .trim()
            .email({
                tlds: {
                    allow: false
                }
            })
            .required(),

        phone: Joi.string()
            .trim()
            .pattern(phonePattern)
            .optional()
            .allow(''),

        mobile: Joi.string()
            .trim()
            .pattern(phonePattern)
            .optional()
            .allow(''),

        city: Joi.string()
            .trim()
            .max(100)
            .pattern(textPattern)
            .optional()
            .allow(''),

        state: Joi.string()
            .trim()
            .max(100)
            .pattern(/^[A-Za-z0-9\s,'\/&().-]+$/)
            .optional()
            .allow(''),

        industry: Joi.string()
            .trim()
            .max(150)
            .pattern(textPattern)
            .optional()
            .allow(''),

        qualification: Joi.string()
            .trim()
            .max(100)
            .pattern(textPattern)
            .optional()
            .allow(''),

        marketingConsent: Joi.boolean()
            .optional()

    }).unknown(true);


    const { error, value } = schema.validate(req.body, {
        abortEarly: true,
        convert: true
    });


    if (error) {

        return res.status(400).json({
            success: false,
            message: error.details[0].message
        });

    }


    req.body = value;

    next();
};

const usernamePattern = /^[a-zA-Z0-9_-]+$/;

const handleValidationError = (error, res) => {
    return res.status(400).json({
        success: false,
        message: `Validation Error: ${error.details[0].message}`
    });
};

/**
 * Validation schema for Admission Inquiry Route
 */
export const validateAdmission = (req, res, next) => {
    req.body = normalizeBody(req.body);
    const schema = Joi.object({
        name: Joi.string().trim().pattern(namePattern).min(2).max(100).required()
            .messages({ 'string.pattern.base': 'Name contains invalid characters' }),
        email: Joi.string().trim().email().max(150).required(),
        phone: Joi.string().trim().pattern(phonePattern).min(10).max(20).optional().allow(''),
        mobile: Joi.string().trim().pattern(phonePattern).min(10).max(20).optional().allow(''),
        state: Joi.string().trim().pattern(/^[A-Za-z0-9\s,'\/&().-]+$/).max(100).optional().allow(''),
        city: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        centre: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        center: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        program: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        course: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        referred: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        marketingConsent: Joi.boolean().optional(),
        readyToStart: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        industry: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        qualification: Joi.string().trim().pattern(textPattern).max(100).optional().allow('')
    }).unknown(true);

    const { error, value } = schema.validate(req.body, { abortEarly: true, convert: true });
    if (error) return handleValidationError(error, res);
    req.body = value;
    next();
};

/**
 * Validation schema for Aviation Inquiry Route
 */
export const validateAviation = (req, res, next) => {
    validateAdmission(req, res, next);
};

/**
 * Validation schema for Paris Inquiry Route
 */
export const validateParis = (req, res, next) => {
    req.body = normalizeBody(req.body);
    const schema = Joi.object({
        name: Joi.string().trim().pattern(namePattern).min(2).max(100).required()
            .messages({ 'string.pattern.base': 'Name contains invalid characters' }),
        email: Joi.string().trim().email().max(150).required(),
        phone: Joi.string().trim().pattern(phonePattern).min(10).max(20).required()
            .messages({ 'string.pattern.base': 'Phone contains invalid characters' })
    }).unknown(true);

    const { error, value } = schema.validate(req.body, { abortEarly: true, convert: true });
    if (error) return handleValidationError(error, res);
    req.body = value;
    next();
};

/**
 * Validation schema for Partner Inquiry Route
 */
export const validatePartner = (req, res, next) => {
    req.body = normalizeBody(req.body);
    const schema = Joi.object({
        name: Joi.string().trim().pattern(namePattern).min(2).max(100).required()
            .messages({ 'string.pattern.base': 'Name contains invalid characters' }),
        email: Joi.string().trim().email().max(150).required(),
        mobile: Joi.string().trim().pattern(phonePattern).min(10).max(20).optional().allow(''),
        phone: Joi.string().trim().pattern(phonePattern).min(10).max(20).optional().allow(''),
        contact: Joi.string().trim().pattern(phonePattern).min(10).max(20).optional().allow(''),
        investment: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        preference: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        state: Joi.string().trim().pattern(/^[A-Za-z0-9\s,'\/&().-]+$/).max(100).optional().allow(''),
        city: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        referred: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        company: Joi.string().trim().pattern(textPattern).max(150).optional().allow(''),
        industry: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        potential: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        message: Joi.string().trim().max(5000).optional().allow(''),
        address: Joi.string().trim().max(500).optional().allow('')
    }).unknown(true);

    const { error, value } = schema.validate(req.body, { abortEarly: true, convert: true });
    if (error) return handleValidationError(error, res);
    req.body = value;
    next();
};

/**
 * Validation schema for User Registration Route
 */
export const validateRegister = (req, res, next) => {
    req.body = normalizeBody(req.body);
    const schema = Joi.object({
        username: Joi.string().trim().pattern(usernamePattern).min(3).max(50).required()
            .messages({ 'string.pattern.base': 'Username must contain only letters, numbers, underscores, or hyphens' }),
        email: Joi.string().trim().email().max(150).required(),
        password: Joi.string().min(6).max(128).required(),
        firstName: Joi.string().trim().pattern(namePattern).min(2).max(50).required(),
        lastName: Joi.string().trim().pattern(namePattern).min(2).max(50).required(),
        phone: Joi.string().trim().pattern(phonePattern).min(10).max(20).required(),
        dob: Joi.string().trim().max(50).optional().allow(''),
        country: Joi.string().trim().pattern(namePattern).max(100).optional().allow(''),
        street1: Joi.string().trim().max(150).optional().allow(''),
        street2: Joi.string().trim().max(150).optional().allow(''),
        city: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        state: Joi.string().trim().pattern(/^[A-Za-z0-9\s,'\/&().-]+$/).max(100).optional().allow(''),
        pinCode: Joi.string().trim().alphanum().max(15).optional().allow(''),
        centre: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        level: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        stream: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        scholarship: Joi.string().trim().pattern(textPattern).max(100).optional().allow(''),
        comments: Joi.string().trim().max(1000).optional().allow(''),
        communications: Joi.object().optional()
    }).unknown(true);

    const { error, value } = schema.validate(req.body, { abortEarly: true, convert: true });
    if (error) return handleValidationError(error, res);
    req.body = value;
    next();
};

/**
 * Validation schema for User Login Route
 */
export const validateLogin = (req, res, next) => {
    req.body = normalizeBody(req.body);
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().max(128).required()
    }).unknown(true);

    const { error, value } = schema.validate(req.body, { abortEarly: true, convert: true });
    if (error) return handleValidationError(error, res);
    req.body = value;
    next();
};

/**
 * Validation schema for User Password Reset Route
 */
export const validateResetPassword = (req, res, next) => {
    req.body = normalizeBody(req.body);
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        code: Joi.string().trim().required(),
        newPassword: Joi.string().min(6).max(128).required()
    }).unknown(true);

    const { error, value } = schema.validate(req.body, { abortEarly: true, convert: true });
    if (error) return handleValidationError(error, res);
    req.body = value;
    next();
};