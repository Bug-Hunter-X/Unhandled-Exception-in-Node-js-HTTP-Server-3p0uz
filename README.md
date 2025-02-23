# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions causing server crashes without informative error messages. The `bug.js` file contains a simple HTTP server that lacks proper error handling.  The `bugSolution.js` file shows how to improve error handling to prevent unexpected termination and provide meaningful error reports.

## Problem

The `bug.js` server, while functional, is vulnerable.  If an error occurs during request processing (e.g., accessing a property of an undefined object), the server will crash without providing any helpful information about the error's cause. This makes debugging and maintenance difficult.

## Solution

The `bugSolution.js` file addresses this issue by incorporating error handling using `try...catch` blocks. This ensures that even if exceptions occur, the server remains operational, and error messages provide valuable insight into the problem's source.  Additional logging is included for improved diagnostics.

## How to Run

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to see the unhandled exception crash the server.
4. Run `node bugSolution.js` to observe the improved error handling.