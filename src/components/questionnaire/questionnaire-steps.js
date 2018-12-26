// TODO When ReactDOMServer supports Suspense: https://reactjs.org/docs/error-decoder.html/?invariant=294
//import { lazy } from 'react'

import SectionIntro from './steps/shared/intro'
import About from './steps/about/index'
import Occupation from './steps/occupation/index'
import OccupationPlan from './steps/occupation/occupation-plan'
import PersonalInterests from './steps/hobbies/index'
import PersonalInterestsPlan from './steps/hobbies/personal-interests-plan'
import Relationships from './steps/relationships/index'
import RelationshipsPlan from './steps/relationships/relationships-plan'
import Health from './steps/health/index'
import HealthPlan from './steps/health/health-plan'
import Community from './steps/community/index'
import Moonshot from './steps/moonshot/index'
import Email from './steps/final/index'

import careerIllustration from '../../images/career_illustration.json'
import interestsIllustration from '../../images/interests_illustration.json'
import moonshotIllustration from '../../images/moonshot_illustration.json'
import healthIllustration from '../../images/health_illustration.json'
import relationshipsIllustration from '../../images/relationships_illustration.json'

//const SectionIntro = lazy(() => import('./steps/shared/intro'))
//const About = lazy(() => import('./steps/about/index'))
//const Occupation = lazy(() => import('./steps/occupation/index'))
//const OccupationPlan = lazy(() => import('./steps/occupation/occupation-plan'))
//const PersonalInterests = lazy(() => import('./steps/hobbies/index'))
//const PersonalInterestsPlan = lazy(() =>
//  import('./steps/hobbies/personal-interests-plan')
//)
//const Relationships = lazy(() => import('./steps/relationships/index'))
//const RelationshipsPlan = lazy(() =>
//  import('./steps/relationships/relationships-plan')
//)
//const Health = lazy(() => import('./steps/health/index'))
//const HealthPlan = lazy(() => import('./steps/health/health-plan'))
//const Community = lazy(() => import('./steps/community/index'))
//const Moonshot = lazy(() => import('./steps/moonshot/index'))
//const Email = lazy(() => import('./steps/final/index'))

const questionnaireSteps = [
  {
    id: `ABOUT`,
    data: {
      component: About,
      meta: {
        sectionTitle: `About`,
        question: `My name is...`,
      },
    },
  },
  {
    id: `INTRO_OCCUPATION`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Career/Work`,
        question: `Let's start with my career.`,
      },
      introProps: {
        text: `hi.`,
        illustration: careerIllustration,
      },
    },
  },
  {
    id: `OCCUPATION_INFO`,
    data: {
      component: Occupation,
      meta: {
        sectionTitle: `Career/Work`,
        question: `I am currently a`,
      },
    },
  },
  {
    id: `OCCUPATION_PLAN`,
    data: {
      component: OccupationPlan,
      meta: {
        sectionTitle: `Career/Work`,
        question: `Where I would like to be within this next year`,
        subquestion: `What are some things you want to see change with your work and what actions will you take to take to get there?`,
      },
    },
  },
  {
    id: 'INTRO_PERSONAL_INTERESTS',
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: 'Personal Interests',
        question: `Easy! Let's move on to personal interests.`,
      },
      introProps: {
        illustration: interestsIllustration,
      },
    },
  },
  {
    id: `PERSONAL_INTERESTS`,
    data: {
      component: PersonalInterests,
      meta: {
        sectionTitle: `Personal Interests`,
        question: `Things that interest me.`,
      },
    },
  },
  {
    id: `PERSONAL_INTERESTS_PLAN`,
    data: {
      component: PersonalInterestsPlan,
      meta: {
        sectionTitle: `Personal Interests`,
        question: `How I plan on pursuing and being consistent with these interests.`,
      },
    },
  },
  {
    id: `INTRO_RELATIONSHIPS`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Relationships`,
        question: `Let's move onto improving relationships.`,
      },
      introProps: {
        illustration: relationshipsIllustration,
      },
    },
  },
  {
    id: `RELATIONSHIPS`,
    data: {
      component: Relationships,
      meta: {
        sectionTitle: `Relationships`,
        question: `How I would rate my interpersonal relationship skills.`,
      },
    },
  },
  {
    id: `RELATIONSHIPS_PLAN`,
    data: {
      component: RelationshipsPlan,
      meta: {
        sectionTitle: `Relationships`,
        question: `How I will improve my relationships with others.`,
        subquestion: `Think actionable and reasonable steps that you will take.`,
      },
    },
  },
  {
    id: `INTRO_HEALTH`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Health`,
        question: `Almost done! Let's move onto our health.`,
      },
      introProps: {
        illustration: healthIllustration,
      },
    },
  },
  {
    id: `HEALTH`,
    data: {
      component: Health,
      meta: {
        sectionTitle: `Health`,
        question: `How I would rate my personal health and wellness.`,
      },
    },
  },
  {
    id: `HEALTH_PLAN`,
    data: {
      component: HealthPlan,
      meta: {
        sectionTitle: `Health`,
        question: `My action plan for improving my overall health and well being.`,
      },
    },
  },
  {
    id: `INTRO_BONUS`,
    data: {
      component: SectionIntro,
      meta: {
        sectionTitle: `Bonus`,
        question: `Lastly, questions to ponder and ask yourself...`,
      },
      introProps: {
        illustration: moonshotIllustration,
      },
    },
  },
  {
    id: `BONUS_COMMUNITY`,
    data: {
      component: Community,
      meta: {
        sectionTitle: `Bonus`,
        question: `How I will contribute and improve my community.`,
        subquestion: `Small or large, what will you do to give to others?`,
      },
    },
  },
  {
    id: `BONUS_MOONSHOT`,
    data: {
      component: Moonshot,
      meta: {
        sectionTitle: `Bonus`,
        question: `Something that I will do one day.`,
        subquestion: `What is a moonshot goal of yours? Something a bit crazy, out of the ordinary. What will you do to get that much closer to getting to that goal in this next year?`,
      },
    },
  },
  {
    id: `FINAL`,
    data: {
      component: Email,
      meta: {
        sectionTitle: `Submit`,
        question: `Last step!`,
        subquestion: `Enter the email that you'd like to send your letter to. You'll receive it 365 days from today.`,
      },
    },
  },
]

export default questionnaireSteps
