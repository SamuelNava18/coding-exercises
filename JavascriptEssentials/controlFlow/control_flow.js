let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

if (isLoggedIn) {
    if (userRole === "admin") {
        accessLevel = "Full access granted";
        userMessage = "Welcome, Admin!";
    } else if (userRole === "manager") {
        accessLevel = "Limited access granted";
        userMessage = "Welcome, Manager!";
    } else {
        accessLevel = "No access granted";
        userMessage = "Welcome, User!";
    }
}
else {
    userMessage = "Please log in to access the system.";
}
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);