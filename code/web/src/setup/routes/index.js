// App Imports
import { APP_URL_API } from '../config/env'
import admin from './admin'
import home from './home'
import user from './user'
import product from './product'
import crate from './crate'

// Combined routes
// .assign seems to make an object that contains the variables used as parameters
// note, (they're all notes I guess) any time you see route it will probably contain whatever is in this variable
export const routes = Object.assign(admin, home, user, product, crate)

// API Routes
// Might need these for when we do requests using Axios
export const routeApi = APP_URL_API

// Image
export const routeImage = APP_URL_API
