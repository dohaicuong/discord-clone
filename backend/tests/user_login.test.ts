import { createTestContext } from './__helpers'

const ctx = createTestContext()

describe('User Login', () => {
  beforeAll(async () => {
    const newUser = await ctx.client.query(`
      mutation {
        signup(input: {
          email: "beatyneko@gmail.com"
          password: "beatyneko"
          username: "beatyneko"
        }) {
          token
          user {
            id
            email
            username
          }
        }
      }
    `)
  })

  it('should throw error if email is not registered', async () => {
    const request = await ctx.client.query(`
      mutation {
        login(input: {
          email: "fake@gmail.com"
          password: "beatyneko"
        }) {
          token
          user {
            id
            email
            username
          }
        }
      }
    `)

    expect(request.data).toBe(null)
    expect(request.errors?.[0].message).toBe('wrong credentials')
  })

  it('should throw error if password is not match', async () => {
    const request = await ctx.client.query(`
      mutation {
        login(input: {
          email: "beatyneko@gmail.com"
          password: "wrongpassword"
        }) {
          token
          user {
            id
            email
            username
          }
        }
      }
    `)

    expect(request.data).toBe(null)
    expect(request.errors?.[0].message).toBe('wrong credentials')
  })

  it('should login, return token and all fields', async () => {
    const request = await ctx.client.query(`
      mutation {
        login(input: {
          email: "beatyneko@gmail.com"
          password: "beatyneko"
        }) {
          token
          user {
            id
            email
            username
          }
        }
      }
    `)

    expect(request.data.login).toHaveProperty('token')
    expect(request.data.login).toHaveProperty('user')
    
    expect(request.data.login.user).toHaveProperty('id')
    expect(request.data.login.user.email).toBe('beatyneko@gmail.com')
    expect(request.data.login.user.username).toBe('beatyneko')
  })
})
