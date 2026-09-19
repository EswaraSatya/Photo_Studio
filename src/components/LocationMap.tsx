import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { FaPlus, FaMinus } from "react-icons/fa";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const STUDIO_COORDS: [number, number] = [82.2295615, 17.0315062]; // [longitude, latitude]
const MIN_ZOOM = 1;
const MAX_ZOOM = 8;

export default function LocationMap() {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="relative h-full w-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: STUDIO_COORDS, scale: 2600 }}
        className="h-full w-full"
      >
        <ZoomableGroup
          center={STUDIO_COORDS}
          zoom={zoom}
          minZoom={MIN_ZOOM}
          maxZoom={MAX_ZOOM}
          onMoveEnd={({ zoom: z }) => setZoom(z ?? MIN_ZOOM)}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className="fill-[var(--surface-alt)] stroke-[var(--border)] outline-none transition-colors hover:stroke-[var(--accent)]"
                  strokeWidth={0.6}
                />
              ))
            }
          </Geographies>
          <Marker coordinates={STUDIO_COORDS}>
            <circle r={5} fill="var(--accent)" stroke="var(--on-accent)" strokeWidth={1.5} />
            <circle r={11} fill="var(--accent)" opacity={0.25}>
              <animate attributeName="r" values="6;16;6" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0;0.35" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <text textAnchor="middle" y={-14} className="text-[10px] font-semibold" fill="var(--text)">
              YVVR Studio
            </text>
          </Marker>
        </ZoomableGroup>
      </ComposableMap>

      <div className="absolute bottom-3 right-3 flex flex-col gap-1.5">
        <button
          type="button"
          aria-label="Zoom in"
          onClick={() => setZoom((z) => Math.min(MAX_ZOOM, z * 1.5))}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-md transition hover:border-[var(--accent)]"
        >
          <FaPlus className="text-xs" />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          onClick={() => setZoom((z) => Math.max(MIN_ZOOM, z / 1.5))}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] shadow-md transition hover:border-[var(--accent)]"
        >
          <FaMinus className="text-xs" />
        </button>
      </div>
    </div>
  );
}
