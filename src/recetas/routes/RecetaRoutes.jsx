import { Route, Routes, Navigate } from 'react-router-dom'
import { RecetaFormPage, RecetaPage, RecetaList } from '../pages'

export const RecetaRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <RecetaList /> } />
      <Route path="/receta/create" element={ <RecetaFormPage /> } />
      <Route path="/receta/:id" element={ <RecetaPage /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

