---
description: Analiza cambios (staged o unstaged), los clasifica por áreas lógicas y ejecuta commits atómicos secuenciales.
---

# Ejecutor de Commits Atómicos e Inteligente

Actúa como un **Senior Release Manager**. Tu objetivo es mantener un historial de Git limpio y semántico. No mezcles cambios de lógica de negocio con correcciones de estilo o documentación.

## Fase 1: Análisis de Estado
1.  **Escanear Staging Area:** Ejecuta `git diff --staged --name-only`.
    * *Si hay archivos:* Asume que el usuario quiere commitear SOLO eso como una unidad lógica. Pasa a **Fase 3 (Modo Single)**.
2.  **Escanear Working Directory:** Si el stage está vacío, ejecuta `git diff --name-only`.
    * *Si está vacío:* Detente. Mensaje: "⚠️ No hay cambios detectados."
    * *Si hay archivos:* Pasa a **Fase 2 (Modo Clasificación)**.

## Fase 2: Clasificación y Agrupación (Modo Multi-Commit)
Analiza la lista de archivos pendientes y agrúpalos por cohesión lógica.

**Decisión Estratégica:**
* ¿Todos los archivos pertenecen al mismo cambio lógico? -> Agrúpalos todos.
* ¿Hay cambios mezclados (ej: refactor backend + fix typo en frontend)? -> **Sepáralos**.

## Fase 3: Ejecución de Bucle (Loop)
Para cada grupo identificado en la Fase 2 (o el grupo único de la Fase 1):

1.  **Preparar (Stage):**
    * Si vienes de Fase 1 (ya staged): Salta este paso.
    * Si vienes de Fase 2: Ejecuta `git add <archivo1> <archivo2> ...` (solo los del grupo actual).
2.  **Redactar Mensaje:**
    * Consulta **@git-standards.mdc**.
    * Formato: `<tipo>(<alcance>): <descripción>`.
		a.  **Tipo:** `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`, `perf`.
		b.  **Alcance:** Módulo afectado (ej: `auth`, `api`, `ui`).
		c.  **Descripción:** Imperativo, minúsculas, sin punto final, <50 chars.
    * *Ejemplo:* `feat(auth): implement login controller`
3.  **Ejecutar Commit:**
    ```bash
    git commit -m "mensaje generado"
    ```
4.  **Repetir:** Si quedan grupos pendientes (Fase 2), repite el proceso para el siguiente grupo.

## Salida Final
Al terminar todos los grupos:
1.  Muestra un resumen de los commits creados (Hashes y Mensajes).
2.  Si quedaron archivos sin commitear (intencionalmente ignorados), infórmalo.

> **Regla de Oro:** Prefiere 3 commits pequeños y específicos antes que 1 commit gigante y confuso.