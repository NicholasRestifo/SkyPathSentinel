# Dependencies: SkyPath Sentinel

This document outlines the core libraries and dependencies chosen for the SkyPath Sentinel project, along with the justification for each choice.

## Core Dependencies

*   **MCP SDK:** [`@modelcontextprotocol/sdk`](https://github.com/modelcontextprotocol/typescript-sdk)
    *   *Justification:* Official SDK for building Model Context Protocol servers. Essential for seamless integration with LLM clients.
*   **Geospatial Math:** [`@turf/turf`](https://turfjs.org/)
    *   *Justification:* The industry standard for geospatial analysis in JavaScript/TypeScript. Provides robust, battle-tested algorithms for polygon-line intersection, which is critical for our deterministic safety layer.
* **HTTP Client:** [`axios`](https://axios-http.com/)
    *   *Justification:* A widely-used, reliable, and feature-rich HTTP client. Excellent support for TypeScript and handles complex request/response scenarios well.

## Development Dependencies

*   **Testing:** [`jest`](https://jestjs.io/)
    *   *Justification:* The standard testing framework for TypeScript projects. Provides excellent support for unit and integration testing.
*   **Linting/Formatting:** [`eslint`](https://eslint.org/) & [`prettier`](https://prettier.io/)
    *   *Justification:* Ensures code quality, consistency, and adherence to best practices across the codebase.
*   **IaC:** [`aws-cdk`](https://aws.amazon.com/cdk/)
    *   *Justification:* Required for defining and deploying our serverless infrastructure.
