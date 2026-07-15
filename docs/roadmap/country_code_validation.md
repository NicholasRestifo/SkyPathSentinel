# Roadmap: Country Code Validation

Implement runtime validation for `AirportProperties.countryCode` using Zod at the ingestion boundary.

- **Constraint:** Must be a 2-character ISO 3166-1 alpha-2 code.
- **Implementation:** Add `.length(2).toUpperCase()` to the Zod schema in the ingestion layer.
