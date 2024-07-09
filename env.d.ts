/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    STRIPE_PUBLIC_KEY: string
    STRIPE_SECRET_KEY: string
    NEXT_URL: string
  }
}
