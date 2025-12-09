# Assumptions

This document outlines the assumptions made during the development of this project.

## Users

- User names are displayed as `User {id}` instead of fetching actual names from `/users` endpoint.
- **Rationale:** The challenge only requires filtering by `userId`, not displaying user details.

## Pagination

- No pagination is implemented. All 100 posts from the API are displayed at once.
- **Rationale:** For a real-world application with larger datasets, infinite scroll or pagination would be added.

## Filtering

- Posts can only be filtered by `userId` (values 1-10) as specified in the challenge.
- No search by title or content is implemented.

## Validation

- No validation is performed to check if a `userId` exists (1-10).
- If a user enters an invalid ID (e.g., 99), the app simply shows "No posts found".

## Language

- The UI is in English for consistency with the API responses and challenge requirements.

## Caching Strategy

- SWR handles in-memory caching with stale-while-revalidate strategy.
- No persistence between sessions (e.g., localStorage) is implemented.
- Cached data is shown even when offline or on error (better UX than showing error with stale data available).

## Error Handling

- Stale data is prioritized over error states when cached data is available.
- Error state is only shown when there's no cached data to display.
- Slow connection detection triggers after 3 seconds of loading.

## Testing Strategy

- Unit tests were added at the end of development in a dedicated branch.
- Codebase was structured to be testable from the start (pure functions, separation of concerns).
- 100% coverage achieved on tested modules.