using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// 200 OK, no body
app.MapGet("/api/demo/success", () => Results.Ok());

// 500 Internal Server Error
app.MapGet("/api/demo/error", () =>
{
    var error = new ApiError(
        Code: "internal_error",
        Message: "An unexpected error occurred.",
        Description: "Please try again later",
        Timestamp: DateTime.UtcNow
    );
    return Results.Json(error, statusCode: StatusCodes.Status500InternalServerError);
});

// 402 Payment Required
app.MapGet("/api/demo/upgrade", () =>
{
    var error = new ApiError(
        Code: "upgrade_required",
        Message: "Your subscription plan does not include this feature. Please upgrade.",
        Description: "Upgrade your subscription",
        Timestamp: DateTime.UtcNow
    );
    return Results.Json(error, statusCode: StatusCodes.Status402PaymentRequired);
});

app.Run();

record ApiError(string Code, string Message, string Description, DateTime Timestamp);
