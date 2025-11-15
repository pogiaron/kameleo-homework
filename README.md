Backend

    Create a minimal API with endpoints that return different HTTP status codes and consistent JSON for non-200 errors. The JSON schema is up to you.

    GET /api/demo/success → 200 OK, no body.
    GET /api/demo/error → 500 Internal Server Error, JSON error body.
    GET /api/demo/upgrade → 402 Payment Required (for “plan upgrade required”), JSON error body.
 

Frontend

    Create a simple page with a few buttons to call the backend in different modes (Success, Error, Upgrade Required), use a popular UI library, like PrimeNG, Material, Spartan, etc. Implement a production-ready solution for error handling.

    Global error handling:

    Implement a solution using a central service
    Map backend error shapes to user-friendly messages
    Show non-blocking toast/snackbar notifications
    Handle network/offline errors (status 0) gracefully with a distinct message
    Component-level overrides:
        Some errors must be handled locally (in the originating component), not by the global handler. Demonstrate a clean mechanism to opt out of global handling for specific calls or to augment the toast with component-provided actions.
        When the backend signals insufficient plan (/api/demo/upgrade), show a toast with an action button "Upgrade now" that navigates to a pricing page.