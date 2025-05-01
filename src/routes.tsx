import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('../app/page'))
const AiTutor = lazy(() => import('../app/ai-tutor/page'))
const Reading = lazy(() => import('../app/reading/page'))
const Writing = lazy(() => import('../app/writing/page'))
const Vocabulary = lazy(() => import('../app/vocabulary/page'))
const Learning = lazy(() => import('../app/learning/imagery/page'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/ai-tutor',
    element: <AiTutor />,
  },
  {
    path: '/reading',
    element: <Reading />,
  },
  {
    path: '/writing',
    element: <Writing />,
  },
  {
    path: '/vocabulary',
    element: <Vocabulary />,
  },
  {
    path: '/learning',
    element: <Learning />,
  },
] 