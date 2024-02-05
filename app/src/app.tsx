// @refresh reload
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start'
import { ErrorBoundary, Suspense } from 'solid-js'
import Nav from '@components/Nav'
import '@styles/imports.css'

export default function App() {
    return (
        <Router
            root={(props) => (
                <>
                    <Nav />
                    <Suspense>
                        <ErrorBoundary
                            fallback={
                                <div>
                                    <h1>Something went wrong</h1>
                                </div>
                            }>
                            {props.children}
                        </ErrorBoundary>
                    </Suspense>
                </>
            )}>
            <FileRoutes />
        </Router>
    )
}
