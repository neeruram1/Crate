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
      name: "user1",
      email: "litjanee@email.com",
      password: "password",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
      style: "Old Timey Baseball Player"
    };

    const user2 = {
      id: 2,
      name: "user2",
      email: "whitegreeneram@email.com",
      password: "password2",
      role: "USER",
      createdAt: new Date(),
      updatedAt: new Date(),
      style: "Lumberjack Hipster"
    };

    await models.User.create(user1);
    await models.User.create(user2);
  })

  afterEach(async () => {
    await models.User.destroy({ where: { name: ["user1", "user2"] } })
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

    expect(response.body.data.user.name).toEqual('user1')
  })

  it("updates a user style", async() => {
    const response = await request(server)
    .post('/')
    .send({ query: 'mutation { updateStyle(id: 1, style: "covid couture") { style name email } }'})
    .expect(200)

    expect(response.body.data.updateStyle.style).toEqual('covid couture')
  })
})
