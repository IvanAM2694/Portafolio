# Guía para Actualizar Experiencias Laborales desde LinkedIn

## Pasos para Extraer Datos de LinkedIn

1. **Accede a tu perfil de LinkedIn:**
   - Ve a: https://www.linkedin.com/in/ivan-hernan-aguilar-marinos-814771107/details/experience/
   - O navega: Perfil → Sección "Experiencia"

2. **Para cada experiencia laboral, extrae:**
   - **Empresa** (company)
   - **Posición/Título** (position)
   - **Fecha de inicio** (startDate) - Formato: "YYYY-MM" (ej: "2023-01")
   - **Fecha de fin** (endDate) - "YYYY-MM" o "Presente" si es trabajo actual
   - **Descripción** (description) - Responsabilidades y logros
   - **Tecnologías** (technologies) - Array de tecnologías usadas
   - **Ubicación** (location) - Opcional, formato: "Ciudad, País"

3. **Orden de las experiencias:**
   - Ordena de MÁS RECIENTE a MÁS ANTIGUA
   - La primera experiencia debe ser tu trabajo actual (si aplica)

## Formato de Datos

### Estructura de una Experiencia:

```typescript
{
  company: "Nombre de la Empresa",
  position: "Tu Posición",
  startDate: "2023-01",        // Formato: "YYYY-MM"
  endDate: "Presente",          // o "2024-12" si terminó
  description: "Descripción detallada...",
  technologies: ["Tech1", "Tech2", "Tech3"],
  location: "Lima, Perú"       // Opcional
}
```

### Ejemplos de Fechas:

- Enero 2023: `"2023-01"`
- Diciembre 2022: `"2022-12"`
- Año completo 2020: `"2020"` (si no tienes mes específico)
- Trabajo actual: `endDate: "Presente"`

## Archivo a Editar

Edita el archivo: `src/data/userData.ts`

Busca la sección `experience: [...]` y reemplaza los datos de ejemplo con tus experiencias reales.

## Validación

Después de actualizar, verifica:
- ✅ Todas las fechas están en formato correcto
- ✅ Las experiencias están ordenadas de más reciente a más antigua
- ✅ El trabajo actual tiene `endDate: "Presente"`
- ✅ Las tecnologías están en formato de array
- ✅ No hay errores de sintaxis (comas, llaves, etc.)

## Nota

Si LinkedIn muestra solo el año (sin mes), usa el formato `"YYYY"` en lugar de `"YYYY-MM"`.

