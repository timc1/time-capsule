import React, { useReducer } from 'react'

const QuestionnaireContext = React.createContext()

const QuestionnaireProvider = React.memo(({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <QuestionnaireContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  )
})

const initialState = {
  meta: {
    currentStepId: 'ABOUT',
  },
  user: {
    name: '',
    email: '',
  },
  answers: {
    occupationRole: '',
    occupationCompany: '',
    hobbyThisYear: '',
    hobbyThisYearPlan: '',
    wantToLearn: '',
    wantToLearnPlan: '',
    placeToVisit: '',
    placeToVisitPlan: '',
    betterYourCommunity: '',
    betterYourCommunityPlan: '',
  },
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    default:
      return state
  }
}

export { QuestionnaireContext, QuestionnaireProvider }
