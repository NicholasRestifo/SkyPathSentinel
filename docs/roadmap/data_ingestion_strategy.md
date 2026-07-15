# Data Ingestion Strategy

To build a robust, extensible architecture for SkyPathSentinel, we should adopt the following strategy:

1.  **Normalization Layer:** Do not rely on native formats (XML, CSV, proprietary JSON). Implement an ingestion layer that converts *all* incoming data into a unified, internal **GeoJSON**-based format.
2.  **Abstraction Interface:** Create an internal abstraction layer (e.g., `WeatherProvider`, `AirportProvider`, `HazardProvider` interfaces) so that swapping a source (e.g., switching from a free source to a paid, more reliable one) does not break downstream analysis components.
3.  **GeoJSON First:** Prioritize sources that provide geospatial data (like FAA SUA). For sources that only provide text/tabular data (like raw METAR), the ingestion layer *must* map those entities to coordinates (e.g., mapping an ICAO code to an airport location coordinate) to ensure all data can be plotted spatially.
4.  **Data Quality:** Implement a validation layer to handle inconsistent data fields across regions.
