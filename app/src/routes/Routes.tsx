import { Component } from 'solid-js'
import { /* useLocation, useNavigate, */ useRoutes } from 'solid-start'
import { Routes } from './index'
import Header from '@components/Header/Header'

const AppRoutes: Component = () => {
    //const params = useLocation()
    //const navigate = useNavigate()

    const Path = useRoutes(Routes)

    return (
        <main class="pb-[5rem] w-[100%]">
            <Header />
            <div class="pt-[70px]">
                <Path />
            </div>
        </main>
    )
}

export default AppRoutes
