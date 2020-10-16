import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';
import models from '../../setup/models'
import db from '../../setup/database'

describe("SurveyImage queries", () => {
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
    await models.SurveyImage.destroy({ where: { } })
  });

  beforeEach(async () => {
    const image1 = {
      id: 1,
      style: "classy and sassy",
      image: "image-1.jpg",
      category: "villain",
      altText: "image-1"
    };

    const image2 = {
      id: 2,
      style: "covid couture",
      image: "image-2.jpg",
      category: "soup",
      altText: "image-2"
    };

    await models.SurveyImage.create(image1);
    await models.SurveyImage.create(image2);
  })

  afterEach(async () => {
    await models.SurveyImage.destroy({ where: { id: [1, 2] } })
  })

  afterAll(() => {
    db.close()
  })

  it("is true", () => {
    expect(true).toBe(true)
  })

  it("returns all surveyImages", async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ surveyImages { category style } }'})
      .expect(200)

    expect(response.body.data.surveyImages.length).toEqual(2)
  })
})
