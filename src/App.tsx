
import React from 'react'
import { Suspense } from 'react'
const App = () => { 
const AppRoutes=React.lazy(()=>import('./routes/AppRoutes'))
  return (
       <Suspense fallback={<div>Loading...</div>}>
       <AppRoutes />
       </Suspense>
  )
}

export default App
