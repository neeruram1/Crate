// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// URL
// .process is an object of Node, according to the docs, "The process object is a global that provides information about, and control over, the current Node.js process."
export const APP_URL = process.env.APP_URL
export const APP_URL_API = process.env.APP_URL_API

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 3000
