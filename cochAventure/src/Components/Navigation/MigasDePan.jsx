import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MigasDePan.css'; 

const MigasDePan = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(x => x); 

  const routeLabels = {
    'formp': 'Formulario de Pago',
    'formr': 'Formulario de Reserva',
    'comprobante': 'Comprobante',
    'rutacorani': 'Ruta Corani',
    'actividadcorani': 'Actividad Corani',
    'rutaincallajta': 'Ruta Incallajta',
    'actividadincallajta': 'Actividad Incallajta',
    'rutapairumani': 'Ruta Pairumani',
    'actividadpairumani': 'Actividad Pairumani',
    'rutatarata': 'Ruta Tarata',
    'actividadtarata': 'Actividad Tarata',
    'rutavillatunari': 'Ruta Villa Tunari',
    'actividadvillatunari': 'Actividad Villa Tunari',
    'corani': 'Corani',
    'incallajta': 'Incallajta',
    'pairumani': 'Tairumani',
    'tarata': 'Tarata',
    'villatunari': 'Villa Tunari',
  };

  const breadcrumbs = paths.map((path, index) => {
    const to = `/${paths.slice(0, index + 1).join('/')}`;
    return { path: to, label: routeLabels[path] || path };
  });

  return (
    <nav className="breadcrumbs">
      <Link to="/">Inicio</Link> 
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          {' >> '}
          {index === breadcrumbs.length - 1 ? (
            <span>{breadcrumb.label}</span> 
          ) : (
            <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default MigasDePan;
