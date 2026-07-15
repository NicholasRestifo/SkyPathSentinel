# SkyPath Sentinel: Deterministic Geospatial Weather Engine

## 1. Executive Summary
SkyPath Sentinel is an open-source MCP server that provides deterministic geospatial weather analysis for AI agents. It bridges the gap between raw aviation meteorology and operational flight logistics, delivering hallucination-free safety verdicts by offloading complex geospatial math from LLMs to a local, deterministic engine.

## 2. Value Proposition & Technical Challenges
SkyPath Sentinel solves the limitations of LLMs in safety-critical environments:
* **Deterministic Safety Layer:** Offloads complex geospatial math to a local, type-safe engine, eliminating LLM hallucinations. Tools are designed to return diagnostic verdicts rather than raw data, forcing agents to rely on pre-calculated safety conclusions.
* **Efficient Data Pipeline:** Aggregates and normalizes disparate, high-volume aviation feeds (AWC) into concise, queryable JSON, significantly reducing LLM input size and lowering token costs.
* **Operational Contextualization:** Automates the retrieval of relevant NOTAMs, ensuring agents have the necessary regulatory context to make informed decisions without navigating complex, disparate databases.

## 3. Core Product Features
* **`analyze_flight_mission(flight_plan)`**: The **Unified Diagnostic tool**. Primary tool for mission-level planning. Accepts a flexible `flight_plan` (supporting airport-to-airport, coordinate-to-coordinate, or complex multi-waypoint routes). Returns a rich JSON object containing a definitive "Go/No-Go" verdict, aggregating departure/arrival status (weather and NOTAMs) and detailed en-route geometric hazard analysis for the entire path.
* **`get_airport_status(airport_code)`**: **Comprehensive Diagnostic tool**. Returns a rich JSON object containing weather suitability, operational/NOTAM status, and a consolidated "Go/No-Go" verdict for the airport.
* **`get_hazard_summary(poi_coordinates, radius_miles, hazard_filter)`**: Use this tool for situational awareness of weather hazards, ranging from immediate vicinity (small radius) to regional coverage (large radius).

## 4. Data Sources
* **Meteorological Advisories:** NOAA Aviation Weather Center (AWC) API.
* **Airport Database:** OurAirports Community Dataset (static).

## 5. Future Development
* **Enhanced Data Sources:** Integrating additional regional aviation feeds.
* **Advanced Analytics:** Predictive hazard modeling and historical trend analysis.
* **Expanded Integration:** Plugins for broader AI agent frameworks.

## 6. Disclaimer & Liability
**SkyPath Sentinel is provided for educational, research, and informational purposes only.**
* **Not for Operational Use:** This tool is not intended for real-world flight planning, dispatching, or any safety-critical aviation decision-making.
* **No Warranty:** Provided "as is," without warranty of any kind.
* **User Responsibility:** Users are solely responsible for verifying the accuracy of generated information and ensuring compliance with aviation regulations.
