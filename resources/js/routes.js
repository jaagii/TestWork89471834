
import CountriesIndex from './components/countries/index';
import CountriesCreate from './components/countries/create';
import CountriesEdit from './components/countries/edit';

import StatesIndex from './components/states/index';
import StatesCreate from './components/states/create';
import StatesEdit from './components/states/edit';

import MainIndex from './components/main/index';

export const routes = [
    {
        path: '/main',
        name: 'MainIndex',
        component: MainIndex,
    },
    {
        path: '/countries',
        name: 'CountriesIndex',
        component: CountriesIndex,
    },
    {
        path: '/countries/create',
        name: 'CountriesCreate',
        component: CountriesCreate,
    },
    {
        path: '/countries/:id',
        name: 'CountriesEdit',
        component: CountriesEdit,
    },



    {
        path: '/states',
        name: 'StatesIndex',
        component: StatesIndex,
    },
    {
        path: '/states/create',
        name: 'StatesCreate',
        component: StatesCreate,
    },
    {
        path: '/states/:id',
        name: 'StatesEdit',
        component: StatesEdit,
    },


];