import { routes } from './constants';
import { MainLayoutContainer } from '~/app/main-layout';
import { LayoutContainer } from '~/app/quiz';
import { routes as quizRoutes } from '~/app/quiz/duck';

export default [
    { path: routes.ROOT, exact: true, name: 'Root', component: MainLayoutContainer },
    { path: routes.PRIVACY_POLICY, exact: true, name: 'PrivacyPolicy', component: MainLayoutContainer },
    { path: quizRoutes.QUIZES, exact: true, name: 'Quizes', component: LayoutContainer }
];
