import { createTestContext } from './__helpers'

const ctx = createTestContext()

describe('User Signup', () => {
  it('should signup user and return all fields', async () => {
    const email = 'beatyshot@gmail.com'
    const username = 'yukiyami'

    const request = await ctx.client.query(`
      mutation {
        signup(input: {
          email: "${email}"
          password: "haicuong"
          username: "${username}"
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

    expect(request.data.signup).toHaveProperty('token')
    expect(request.data.signup).toHaveProperty('user')
    
    expect(request.data.signup.user).toHaveProperty('id')
    expect(request.data.signup.user.email).toBe(email)
    expect(request.data.signup.user.username).toBe(username)
  })

  it('should throw error if email is existed', async () => {
    const email = 'beatyshot@gmail.com'
    const username = 'yukiyami'

    const request = await ctx.client.query(`
      mutation {
        signup(input: {
          email: "${email}"
          password: "haicuong"
          username: "${username}"
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
    expect(request.errors?.[0].message).toBe('email is existed')
  })
})
