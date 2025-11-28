# Sistema de Gestión con Control de Versiones y Roles

Sistema completo de gestión empresarial con autenticación de usuarios basada en roles y panel de control interactivo.

## Características Principales

### Sistema de Login
- Autenticación con control de roles (Fundador, Administrador, Usuario)
- Fondo panorámico de valle con montañas durante el día
- Logo en forma de escudo medieval
- Interfaz con contenedor opaco, borde grueso y sombreado intenso

### Dashboard
- Fondo nocturno de valle con montañas
- **TopBar**: Barra superior con búsqueda global y avatar de usuario (cuadrado grande con iniciales)
- **Sidebar**: Panel lateral colapsible con logo y navegación (Inicio, Usuarios, Cerrar Sesión)
- **4 Tarjetas Estadísticas**: Color naranja con iconos
- **Calendario Interactivo**: Navegación por meses con botón "Hoy"
- **Gráfico de Actividad**: Visualización de datos del usuario con Chart.js
- **Panel de Documentos**: Lista con estatus, nombre y fecha de modificación

## Usuarios Predeterminados

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| fundador | fundador123 | Fundador |
| admin | admin123 | Administrador |
| usuario | usuario123 | Usuario |

## Páginas del Sistema

- **Login** (`index.html`) - Autenticación de usuarios
- **Dashboard** (`dashboard.html`) - Panel principal con estadísticas
- **Usuarios** (`usuarios.html`) - Gestión de usuarios del sistema
- **Archivos** (`archivos.html`) - Subir y descargar archivos
- **Contactos** (`contactos.html`) - Gestión de contactos
- **Perfil** (`perfil.html`) - Configuración de perfil y foto

## Estructura de Archivos

- `index.html` - Página de login
- `dashboard.html` - Panel principal
- `usuarios.html` - Gestión de usuarios
- `archivos.html` - Gestión de archivos
- `contactos.html` - Directorio de contactos
- `perfil.html` - Configuración de perfil
- `components/` - Componentes React reutilizables
- `utils/auth.js` - Sistema de autenticación

## Colores del Sistema

- **Primario**: Naranja (#ff8c00)
- **Secundario**: Azul oscuro (#1e3a8a)
- **Acento**: Amarillo dorado (#fbbf24)

## Tipografía

- Fuente: Helvetica (con cursivas en títulos)

---

**Año**: 2025  
**Versión**: 1.0