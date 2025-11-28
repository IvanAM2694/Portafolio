---
description: Protocolo de diagnóstico profundo para bugs persistentes. Prioriza Análisis de Causa Raíz (RCA) sobre parches rápidos.
---

# Deep Diagnostic & Remediation Protocol

Act as a **Senior Debugging Specialist**. Your goal is to identify the **Root Cause** of a persistent issue and fix it permanently.

**Issue Description:** {{input}}

## Phase 0: Baseline (Read-Only)
1.  **Scan:** Check logs, configuration, and recent code changes related to the anomaly.
2.  **Output:** Establish a baseline of the current system state. (Max 200 lines).

## Phase 1: Isolation (Crucial)
You cannot fix what you cannot reproduce.
1.  **Reproduction:** Create a minimal reproduction case (script, test, or precise steps).
2.  **Failing Test:** Ideally, write a test case that fails because of this bug. This is your "Red" state.
3.  **Constraint:** Do NOT attempt fixes until reproduction is consistent.

## Phase 2: Root Cause Analysis (RCA)
Use the Scientific Method. Do not guess.
1.  **Hypothesis:** State a theory (e.g., "Token expires too soon").
2.  **Experiment:** Verify the theory with evidence (logs, debugger, or non-destructive probe).
3.  **Loop:** If wrong, form a new hypothesis.
4.  **Forbidden:** Do NOT patch symptoms (e.g., adding `if (x)`) without understanding *why* `x` is invalid.

## Phase 3: Remediation
Implement the fix.
1.  **Hardening:** Fix the root cause, not just the symptom.
2.  **Impact:** Update any other components that relied on the broken behavior.
3.  **Verify Read:** Read the file after writing to ensure correctness.

## Phase 4: Verification
1.  **Pass the Test:** Run the reproduction case/test from Phase 1. It MUST pass now ("Green" state).
2.  **Regressions:** Run related tests to ensure you didn't break anything else.

## Phase 5: Final Report
Output a structured summary:
-   **Root Cause:** The definitive technical reason for the failure.
-   **Fix:** Summary of changes.
-   **Evidence:** Output of the passing test.
-   **Verdict:** `"Root Cause addressed. Verification passed. System healthy."` OR `"Critical issue remains."`