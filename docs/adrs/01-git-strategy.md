# ADR 0001 – Git Strategy for the Challenge

## Status
Accepted

## Context
This project is a small technical challenge that requires continuous deployment via Vercel and clean version control practices.  
Using full GitFlow would add unnecessary complexity for the scope.

## Decision
Use a lightweight **Feature Branch Flow**:

- `main`: production-ready branch, deployed automatically by Vercel
- `feature/*`: short-lived task-focused branches
- All changes go through Pull Requests targeting `main`
- Vercel Preview Deployments used to validate changes before merging

## Consequences
### Positive
- Professional workflow
- Clean and reviewable changes
- PR-based previews
- Avoids complexity of full GitFlow

### Negative
- No `develop` branch (acceptable for project size)

## Alternatives
- Full GitFlow (rejected)
- Direct commits to main (rejected)
