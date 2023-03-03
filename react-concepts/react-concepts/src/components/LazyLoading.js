import React, { Suspense } from 'react'
//import Home from './ContextAPI/Home'
import Loader from './Loader'

const Home = React.lazy(() => import('./ContextAPI/Home'))

function LazyLoading() {
    return (
        <Suspense fallback={<Loader />}>
            <Home />
        </Suspense>
    )
}

export default LazyLoading
