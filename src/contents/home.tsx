import { Inspirations, InspirationLink } from "../components/Inspirations";
import { motion } from "framer-motion";
import "../css/home.css";
import WorldMalariaMap from "../components/WorldMap";
import Panel2 from "../components/PanelTwo";
export function Home() {
  const links: InspirationLink[] = [
    { year: 2025, teamName: "Brno Czech Republic", pageName: "" },
    { year: 2025, teamName: "McGill", pageName: "" },
    { year: 2025, teamName: "GreatBay-SCIE", pageName: "" },
    { year: 2025, teamName: "EPFL", pageName: "" },
    { year: 2025, teamName: "Heidelberg", pageName: "" },
    { year: 2025, teamName: "Uprize-I", pageName: "" },
    { year: 2025, teamName: "IZJU-China", pageName: "" },
    { year: 2025, teamName: "Marburg", pageName: "" },
    { year: 2025, teamName: "Munich", pageName: "" },
    { year: 2025, teamName: "WageningenUR", pageName: "" },
  ];

  return (
    <div className="home-container max-w-[4320px]!">
      <section className="malaria-panel max-w-[4320px]!">
        <div className="malaria-content">

          <motion.h2
          className="font-bold! text-6xl!"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay:0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            THE GLOBAL
            <br />
            MALARIA CHALLENGE
          </motion.h2>

          <div className="malaria-copy text-3xl mt-8">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 1.15,
              }}
            >
              Malaria is one of the world's oldest and most persistent public
              health crises.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 1.45,
              }}
            >
              Malaria remains endemic across large parts of{" "}
              <strong>Sub-Saharan Africa and South Asia</strong>, including
              India, placing hundreds of millions of people, especially{" "}
              <strong>infants, young children, and pregnant women</strong> at
              risk every year.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 1.65,
              }}
            >
              Despite decades of intervention, the disease has never been
              eliminated, only pushed back and forth.
            </motion.p>
          </div>
        </div>

        <div className="ml-10! malaria-map-wrapper">
              <WorldMalariaMap />
        </div>  
      </section>
      <Panel2 />
      <div className="row mt-4">
        <div className="col-lg-8">
          <h2>Tips for Success</h2>
          <hr />
          <ul>
            <li>
              <b>Clearly Define Your Project</b>: Explain your project's goals,
              methodology, and expected outcomes in a clear and concise manner.
            </li>
            <li>
              <b>Show Your Progress</b>: Regularly update your wiki with your
              team's progress, experiments, and results.
            </li>
            <li>
              <b>Engage Your Audience</b>: Consider your global audience and use
              language that is accessible to everyone.
            </li>
            <li>
              <b>Human Practices & Safety</b>: Thoroughly document your team's
              human practices activities and safety considerations.
            </li>
            <li>
              <b>Collaborate & Share</b>: Highlight collaborations with other
              teams and institutions.
            </li>
            <li>
              <b>Have Fun and Learn!</b> iGEM is a unique opportunity to learn,
              grow, and contribute to synthetic biology.
            </li>
          </ul>
        </div>
        <Inspirations inspirationLinkList={links} />
      </div>
    </div>
  );
}
