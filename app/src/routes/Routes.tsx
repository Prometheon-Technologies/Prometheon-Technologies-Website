import { Component } from 'solid-js'
import { /* useLocation, useNavigate, */ useRoutes } from 'solid-start'
import { Routes } from './index'
import Header from '@components/Nav'

const AppRoutes: Component = () => {
    //const params = useLocation()
    //const navigate = useNavigate()

    const Path = useRoutes(Routes)

    return <Path />
}
{
    /* <main class="pb-[5rem] w-[100%]">
            <Header />
            <div class="pt-[70px]">
            </div>
        </main> */
}

export default AppRoutes
