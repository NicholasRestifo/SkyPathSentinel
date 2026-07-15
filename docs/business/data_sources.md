# Aviation Data Sources

This document outlines key aviation data sources categorized by type, along with an assessment of their suitability for the SkyPathSentinel extensible architecture.

---

## 1. Weather (METAR, TAF, SIGMET)

| Source | Region | Data Format | Key Fields | Pros/Cons |
| :--- | :--- | :--- | :--- | :--- |
| **NOAA AWC (Aviation Weather Center)** | US | JSON, XML | METAR string, TAF, coordinates, issuance time, pressure | **Pros:** Excellent API, free, reliable. **Cons:** JSON structure varies by endpoint; requires normalization. |
| **Eurocontrol** | Europe | XML, SOAP, JSON (varies) | METAR, TAF, flight rules, hazards | **Pros:** Authoritative for Europe. **Cons:** Requires registration/subscription for full API access; complex integration. |
| **ICAO** | Global | Various (XML, proprietary) | Standardized regional weather data | **Pros:** Global standard. **Cons:** Access can be gated; data is often fragmented by regional provider. |

## 2. Airports

| Source | Region | Data Format | Key Fields | Pros/Cons |
| :--- | :--- | :--- | :--- | :--- |
| **OurAirports** | Global | CSV, JSON | ICAO/IATA codes, coordinates, elevation, runways | **Pros:** Highly open, very easy to import/extend. **Cons:** Community-driven (not always official). |
| **FAA (NFDC)** | US | CSV, XML | Facility type, runway dimensions, lighting, ownership | **Pros:** Official US authoritative source. **Cons:** Heavy, complex schemas; requires parsing. |
| **ICAO** | Global | Proprietary/XML | Official ICAO Location Indicators, capabilities | **Pros:** Official standard. **Cons:** Hard to access for small-scale development. |

## 3. Hazards / NOTAMs / Airspace

| Source | Region | Data Format | Key Fields | Pros/Cons |
| :--- | :--- | :--- | :--- | :--- |
| **FAA NOTAM Search** | US | Web, proprietary | NOTAM number, text, start/end times | **Pros:** Official. **Cons:** Web UI is primary; API access is highly restricted/requires partnership. |
| **NOAA AWC** | US | JSON, XML | SIGMETs, AIRMETs, Convective SIGMETs | **Pros:** Excellent API, free, reliable. **Cons:** Requires mapping to GeoJSON polygons. |
| **Eurocontrol** | Europe | AIXM (XML) | NOTAM text, validity, geometry (polygon) | **Pros:** Rich data (AIXM). **Cons:** AIXM is extremely complex to parse. |
| **ICAO** | Global | Standardized NOTAM | Raw text, location | **Pros:** Global standard. **Cons:** Extremely fragmented implementation. |
| **FAA Special Use Airspace (SUA)** | US | KML, Shapefile, GeoJSON | Airspace type, boundaries (polygons), altitude limits | **Pros:** Provides GIS-ready data. **Cons:** Must manually download files; not always real-time API-driven. |
