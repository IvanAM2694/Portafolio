---
description: Ejecuta una retrospectiva de la sesión para extraer lecciones y actualizar las reglas del proyecto (.mdc).
---

# Session Retrospective & Doctrine Evolution

Act as a **Meta-Architect**. Your goal is to analyze the current session history, distill durable lessons, and auto-update the project's **Operational Doctrine** (Rules).

## Phase 1: Analysis & Filtering
Review the entire conversation from the initial request to now.
1.  **Identify User Corrections:** Pinpoint exact moments where the user had to correct your output. What was the root cause? (Context missing? Rule ignored? Hallucination?).
2.  **Identify Success Patterns:** What prompted the best responses?
3.  **Distill:** Filter these findings. Keep ONLY lessons that are:
    -   ✅ **Universal:** Applies to future tasks, not just this specific instance.
    -   ✅ **High-Impact:** Prevents critical errors or significantly improves workflow.

## Phase 2: Doctrine Integration
Apply the distilled lessons to the knowledge base.
1.  **Target:** Locate the relevant rule file in `.cursor/rules/*.mdc` (Primary) or `AGENTS.md` (Secondary).
2.  **Action:**
    -   **Refine:** If a rule exists but failed you, strengthen it.
    -   **Add:** If a new pattern emerged, insert it into the most logical file.
    -   **Do not duplicate:** Check if the rule already exists before adding.

## Phase 3: Final Report
Output a concise summary of the evolution:
1.  **Session Insights:** Bullet points of the key learnings (Successes vs. Failures).
2.  **Doctrine Updates:**
    -   File(s) updated.
    -   **Git Diff / Change Log:** Show exactly what was added or changed in the `.mdc` files.
    -   *If no changes were made:* State `"ℹ️ No durable lessons found to update doctrine."`