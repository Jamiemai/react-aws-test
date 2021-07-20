// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Device, User } = initSchema(schema);

export {
  Device,
  User
};