import { createTestContext } from './__helpers'

const ctx = createTestContext()

describe('Me Query', () => {
  let token: string
  beforeAll(async () => {
    const newUser = await ctx.client.query(`
      mutation {
        signup(input: {
          email: "beatyblood@gmail.com"
          password: "beatyblood"
          username: "beatyblood"
        }) {
          token
        }
      }
    `)

    token = newUser.data.signup.token
  })

  it('should return user', async () => {
    const request = await ctx.client.query(
      `{ me { id email username } }`,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    )

    expect(request.data.me).toHaveProperty('id')
    expect(request.data.me.email).toBe('beatyblood@gmail.com')
    expect(request.data.me.username).toBe('beatyblood')
  })

  it('should return null', async () => {
    const request = await ctx.client.query(`{ me { id email username } }`)
    expect(request.data.me).toBe(null)
  })
})
