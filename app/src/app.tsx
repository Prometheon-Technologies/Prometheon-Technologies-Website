// @refresh reload
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start'
import { Suspense } from 'solid-js'
import Nav from '@components/Nav'
import '@styles/imports.css'

export default function App() {
    return (
        <Router
            root={(props) => (
                <>
                    <Nav />
                    <Suspense>{props.children}</Suspense>
                </>
            )}>
            <FileRoutes />
        </Router>
    )
}
