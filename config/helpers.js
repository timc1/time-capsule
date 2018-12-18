// Setup a root <div id="___gatsby"></div>
;(function setupRootDiv() {
  // Our modal blurs the root app div, so we need to mock it so jest
  // doesn't break.
  const appRoot = global.document.createElement('div')

  appRoot.setAttribute('id', '___gatsby')
  const body = global.document.querySelector('body')
  body.appendChild(appRoot)

  // Mock scrollTo.
  window.scrollTo = jest.fn()
})()

// TODO: Test context.questionnaireDispatch so it's not just an empty jest mock function. 😳
const getQuestionnaire = require('../src/models/questionnaire').getQuestionnaire
window.getQuestionnaireContext = currentStepId => ({
  context: {
    questionnaireState: {
      ...getQuestionnaire(),
      meta: {
        currentStepId,
      },
    },
    questionnaireDispatch: jest.fn(),
  },
})
