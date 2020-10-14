// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all surveyImages
export async function getAll() {
  return await models.SurveyImage.findAll({ order: [['category', 'DESC']] })
}
