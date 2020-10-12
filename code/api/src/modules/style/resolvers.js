// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
export async function create(parentValue, { name }) {
  // style exists with same name check
  const style = await models.Style.findOne({ where: { name } })

  if (!style) {
    // style does not exists

    return await models.Style.create({
      name
    })
  } else {
    // style exists
    throw new Error(`The style ${ name } already exists. Please try to be more creative.`)
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  return await models.Style.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.Style.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.Style.destroy({ where: { id } })
}
