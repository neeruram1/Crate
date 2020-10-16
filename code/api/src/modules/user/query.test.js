import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import models from '../../setup/models'
import db from '../../setup/database'

describe("user queries", () => {
  let server;

  beforeAll(async() => {
    server = express();
    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    );
    await models.User.destroy({ where: { } })
  });

  beforeEach(async () => {
    const user1 = {
      id: 1,
      name: "User1",
      email: "user1@email.com",
      password: "user1password",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
      style: "Hip Hop but Punk"
    };

    const user2 = {
      id: 2,
      name: "User2",
      email: "user2@email.com",
      password: "user2password",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
      style: "Casual"
    };

    await models.User.create(user1);
    await models.User.create(user2);
  })

  afterEach(async () => {
    await models.User.destroy({ where: { name: ["User1", "User2"] } })
  })

  afterAll(() => {
    db.close()
  })

  it("is true", () => {
    expect(true).toBe(true)
  })

  it("returns all users", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { name email } }'})
      .expect(200)

    expect(response.body.data.users.length).toEqual(2)
  })

  it("return a user with a specific id", async() => {
    const response = await request(server)
    .get('/')
    .send({ query: '{ user(id: 1) { name email } }'})
    .expect(200)

    expect(response.body.data.user.name).toEqual('User1')
  })

  it("updates a user style", async() => {
    const response = await request(server)
    .post('/')
    .send({ query: 'mutation { updateStyle(id: 1, style: "covid couture") { style name email } }'})
    .expect(200)

    expect(response.body.data.updateStyle.style).toEqual('covid couture')
  })
})
