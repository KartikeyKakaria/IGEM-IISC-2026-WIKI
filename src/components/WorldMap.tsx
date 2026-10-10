import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { motion } from "framer-motion";
import '../css/map.css'

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

/*
 * Malaria burden
 *
 * 0 = very low
 * 1 = low
 * 2 = moderate
 * 3 = high
 * 4 = very high
 *
 * Keys are ISO 3166-1 numeric country codes.
 */
const malariaBurden: Record<string, number> = {
  // AFRICA
  "566": 4, // Nigeria
  "180": 4, // Democratic Republic of the Congo
  "800": 4, // Uganda
  "508": 4, // Mozambique
  "834": 4, // Tanzania
  "562": 4, // Niger
  "854": 4, // Burkina Faso
  "120": 4, // Cameroon
  "140": 4, // Central African Republic
  "148": 4, // Chad
  "728": 4, // South Sudan
  "454": 4, // Malawi

  "384": 3, // Côte d'Ivoire
  "288": 3, // Ghana
  "466": 3, // Mali
  "324": 3, // Guinea
  "694": 3, // Sierra Leone
  "430": 3, // Liberia
  "204": 3, // Benin
  "768": 3, // Togo
  "270": 3, // Gambia
  "450": 3, // Madagascar
  "894": 3, // Zambia
  "024": 3, // Angola
  "729": 3, // Sudan
  "231": 3, // Ethiopia
  "266": 3, // Gabon
  "178": 3, // Republic of the Congo
  "646": 3, // Rwanda
  "108": 3, // Burundi

  "686": 2, // Senegal
  "478": 2, // Mauritania
  "716": 2, // Zimbabwe
  "404": 2, // Kenya
  "706": 2, // Somalia
  "226": 2, // Equatorial Guinea

  // SOUTH ASIA
  "356": 3, // India
  "586": 2, // Pakistan
  "050": 2, // Bangladesh
  "524": 1, // Nepal
  "064": 0, // Bhutan
  "144": 0, // Sri Lanka

  // SOUTHEAST ASIA
  "104": 3, // Myanmar
  "116": 3, // Cambodia
  "418": 3, // Laos

  "360": 2, // Indonesia
  "764": 2, // Thailand
  "704": 2, // Vietnam

  "458": 1, // Malaysia
  "608": 1, // Philippines

  // LATIN AMERICA
  "076": 3, // Brazil
  "328": 3, // Guyana

  "604": 2, // Peru
  "170": 2, // Colombia
  "862": 2, // Venezuela
  "068": 2, // Bolivia
  "558": 2, // Nicaragua
  "340": 2, // Honduras
  "332": 2, // Haiti

  "218": 1, // Ecuador
  "320": 1, // Guatemala
  "591": 1, // Panama
  "188": 1, // Costa Rica
  "214": 1, // Dominican Republic

  // MIDDLE EAST
  "887": 2, // Yemen
  "364": 1, // Iran

  // OCEANIA
  "598": 4, // Papua New Guinea
  "090": 3, // Solomon Islands
  "548": 2, // Vanuatu
};

/*
 * Blue → light → red
 */
const malariaColors = [
  "#B8DCE8",
  "#67AFC9",
  "#F0C0B7",
  "#D84F43",
  "#830000",
];

function getMalariaColor(countryId: string): string {
  const level = malariaBurden[countryId] ?? 0;

  return malariaColors[level];
}

function getMalariaOpacity(countryId: string): number {
  const level = malariaBurden[countryId] ?? 0;

  switch (level) {
    case 0:
      return 0.35;
    case 1:
      return 0.5;
    case 2:
      return 0.65;
    case 3:
      return 0.82;
    case 4:
      return 0.95;
    default:
      return 0.35;
  }
}

export default function WorldMalariaMap() {
  return (
    <motion.div
      className="world-malaria-map"
      initial={{
        opacity: 0,
        x: 220,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 155,
        }}
        width={900}
        height={520}
      >
        <Geographies geography={geoUrl}>
          {({ geographies, borders, outline }) => (
            <>
              {/* COUNTRIES */}

              {geographies.map((geo, index) => {
                /*
                 * world-atlas uses numeric ISO codes.
                 *
                 * padStart is important because codes such as
                 * Brazil = "076" and Malaysia = "458".
                 */
                const countryId = String(geo.id).padStart(3, "0");

                const fill = getMalariaColor(countryId);
                const opacity = getMalariaOpacity(countryId);

                return (
                  <motion.g
                    key={geo.rsmKey}
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: 0.55 + index * 0.006,
                      ease: "easeOut",
                    }}
                  >
                    <Geography
                      geography={geo}
                      fill={fill}
                      fillOpacity={opacity}
                      stroke="none"
                      tabIndex={-1}
                    />
                  </motion.g>
                );
              })}

              {/* INTERNAL COUNTRY BORDERS */}

              {borders?.svgPath && (
                <motion.path
                  d={borders.svgPath}
                  fill="none"
                  stroke="#000000"
                  strokeWidth={0.8}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45,
                    ease: "easeOut",
                  }}
                />
              )}

              {/* OUTER WORLD OUTLINE */}

              {outline?.svgPath && (
                <motion.path
                  d={outline.svgPath}
                  fill="none"
                  stroke="#000000"
                  strokeWidth={1.2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: "easeOut",
                  }}
                />
              )}
            </>
          )}
        </Geographies>
      </ComposableMap>

      {/* LEGEND */}

      <div className="malaria-map-legend">
        <span>LOW</span>

        <div className="malaria-gradient" />

        <span>HIGH</span>
      </div>
    </motion.div>
  );
}