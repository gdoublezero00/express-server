import { buildSchema } from 'graphql'

export const schema = buildSchema(`
    type Query {
        hello: String
        test: String
    }
`)

export const rootValue = {
    hello: () => {
        return 'Hello World'
    },
    test: () => {
        return "test"
    }
}