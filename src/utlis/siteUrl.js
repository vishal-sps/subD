import { isDevEnv } from "./helper"

const prodUrl = 'https://fuzz.onrender.com/'
const localUrl = 'http://localhost:3000'

export const siteUrl = isDevEnv ?  localUrl : prodUrl
 