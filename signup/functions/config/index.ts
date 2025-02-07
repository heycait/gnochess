import * as dotenv from 'dotenv';

const env = dotenv.config();

export enum ApplicationEnv {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}

const {
  REDIS_URL,
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_AUDIENCE_ID,
  MAILCHIMP_JOURNEY_ID,
  MAILCHIMP_JOURNEY_STEP,
} = process.env;

export const CONFIG = {
  REDIS_URL,
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_AUDIENCE_ID,
  MAILCHIMP_JOURNEY_ID,
  MAILCHIMP_JOURNEY_STEP,
};
