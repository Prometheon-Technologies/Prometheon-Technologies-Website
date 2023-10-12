import { lazy } from 'solid-js'
import type { RouteDefinition } from '@solidjs/router'
import { getEnumKeys, getEnumValues } from '@src/utils'

const Home = lazy(() => import('@pages/home'))
const About = lazy(() => import('@pages/about'))
const page404 = lazy(() => import('@pages/[...404]'))

export enum RoutesEnum {
    HOME = '/',
    ABOUT = '/about',
    PARTNERS = '/partners',
    CONTACT = '/contact',
    NOT_FOUND = '**',
}

export interface Route {
    endpoint: string
    name: string
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const generateRoutes = (): Route[] => {
    const routes: Route[] = []

    const enumValues = getEnumValues(RoutesEnum)
    const enumKeys = getEnumKeys(RoutesEnum)

    enumValues.forEach((value, index) => {
        const key = enumKeys[index] as string

        routes.push({
            endpoint: value,
            name: capitalizeFirstLetter(key.toLowerCase()),
        })
    })
    console.log(routes)
    return routes
}

export const routes: Route[] = generateRoutes()
const homeRoute = routes.find((route) => route.endpoint === RoutesEnum.HOME) ?? routes[0]
const aboutRoute = routes.find((route) => route.endpoint === RoutesEnum.ABOUT) ?? routes[1]

export const userRoutes = routes.filter(
    (route) => route.endpoint !== RoutesEnum.NOT_FOUND && route.endpoint !== RoutesEnum.CONTACT,
)

export const Routes: RouteDefinition[] = [
    {
        path: homeRoute.endpoint,
        component: Home,
    },
    { path: aboutRoute.endpoint, component: About },
    { path: '**', component: page404 },
]
