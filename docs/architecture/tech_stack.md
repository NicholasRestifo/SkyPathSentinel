# Technical Stack & Dependencies: SkyPath Sentinel

SkyPath Sentinel is built on a serverless, type-safe architecture designed for scalability, low latency, and maintainability.

## Core Technologies

*   **Language:** [TypeScript](https://www.typescriptlang.org/)
    *   *Justification:* Provides strong typing for complex geospatial data structures and ensures reliability in safety-critical logic.
*   **Infrastructure as Code (IaC):** [AWS CDK](https://aws.amazon.com/cdk/)
    *   *Justification:* Allows defining infrastructure using familiar TypeScript, ensuring consistency, version control, and ease of deployment.
*   **Compute:** [AWS Lambda](https://aws.amazon.com/lambda/)
    *   *Justification:* Ideal for the event-driven, request-response nature of MCP tools. Scales automatically and minimizes costs by only running during active tool execution.

## Core Dependencies

*   **MCP SDK:** [`@modelcontextprotocol/sdk`](https://github.com/modelcontextprotocol/typescript-sdk)
    *   *Justification:* Official SDK for building Model Context Protocol servers. Essential for seamless integration with LLM clients.
*   **Geospatial Math:** [`@turf/turf`](https://turfjs.org/)
    *   *Justification:* The industry standard for geospatial analysis in JavaScript/TypeScript. Provides robust, battle-tested algorithms for polygon-line intersection, which is critical for our deterministic safety layer.
* **HTTP Client:** [`axios`](https://axios-http.com/)
    *   *Justification:* A widely-used, reliable, and feature-rich HTTP client. Excellent support for TypeScript and handles complex request/response scenarios well.

## Supporting Services

*   **Data Storage:**
    *   **Amazon S3:** Used for hosting static, public-domain datasets (e.g., OurAirports airport metadata) to ensure fast, reliable access without runtime dependencies on external databases for static information.
    *   **Amazon DynamoDB:** Used for caching frequently accessed dynamic weather data and NOTAMs to minimize external API calls and reduce latency.
*   **API/Integration:**
    *   **Live API Integration:** Dynamic data (SIGMETs, METARs, NOTAMs) is fetched in real-time from authoritative government APIs (e.g., NOAA AWC) to ensure accuracy.
    *   **MCP Protocol Handler:** A lightweight Lambda function acting as the MCP server interface, translating incoming MCP tool calls into internal logic execution.

## Architectural Philosophy

*   **Serverless-First:** Minimizes operational overhead and ensures the system scales seamlessly with user demand.
*   **Deterministic Logic:** All geospatial intersection and safety-critical calculations are performed locally within the Lambda functions, ensuring deterministic, hallucination-free results.
*   **Type-Safe Data Pipelines:** Strict TypeScript interfaces are enforced throughout the data ingestion and processing pipeline to prevent runtime errors when handling messy, real-world data.

## Operational Excellence

*   **CI/CD Pipeline:** [GitHub Actions](https://github.com/features/actions) automates testing, linting, and deployment, ensuring a consistent and reliable release process.
*   **Testing Strategy:** 
    *   **Unit Testing:** [Jest](https://jestjs.io/) is used to rigorously test the core geospatial math algorithms, ensuring deterministic accuracy.
    *   **Integration Testing:** API interactions and data pipeline logic are validated using mocked external services to ensure robustness.
*   **Observability & Monitoring:** [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) provides structured logging and custom metrics, allowing for real-time tracking of tool execution latency and API error rates.
*   **Security & Secret Management:** [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) is used to securely manage API keys and sensitive configuration, adhering to best practices for production-grade applications.

## Development Dependencies

*   **Testing:** [`jest`](https://jestjs.io/)
    *   *Justification:* The standard testing framework for TypeScript projects. Provides excellent support for unit and integration testing.
*   **Linting/Formatting:** [`eslint`](https://eslint.org/) & [`prettier`](https://prettier.io/)
    *   *Justification:* Ensures code quality, consistency, and adherence to best practices across the codebase.
*   **IaC:** [`aws-cdk`](https://aws.amazon.com/cdk/)
    *   *Justification:* Required for defining and deploying our serverless infrastructure.
