import Card from "../components/textcomponents/TextCard";
import Slider from "../components/textcomponents/Slider";

export function Engineering() {
  const slides = [
    {
      title: "The Global Challenge",
      content:
        "Explore the scale of the problem, its impact on communities, and the challenges that researchers face.",
    },
    {
      title: "Our Approach",
      content:
        "We designed a system that combines synthetic biology tools with experimental validation.",
    },
    {
      title: "Experimental Design",
      content:
        "Our constructs were designed, assembled, and tested through a sequence of controlled experiments.",
    },
    {
      title: "Results and Analysis",
      content:
        "We analysed the results to understand the effectiveness of our approach and identify areas for improvement.",
    },
  ];

  return (
    
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="bd-callout bd-callout-info">
            <h4>Silver Medal Criterion #1</h4>
            <p>
              Demonstrate engineering success in a technical aspect of your
              project by going through at least one iteration of the engineering
              design cycle.
            </p>
            <hr />
            <p>
              Visit the{" "}
              <a href="https://competition.igem.org/judging/awards/medals">
                Medals page
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col">
          <Card
            text={[
              {
                title: "Engineering Success",
                content:
                  "Engineering success can be achieved by documenting your effort to follow the engineering design cycle: Design → Build → Test → Learn.",
              },
            ]}
            borderColor="#0c649a"
            title="Tips for Success"
          />
          <Slider
            title="Our Research"
            slides={slides}
            image="/images/research.png"
          />

          <p>
            Engineering success can be achieved by documenting your effort to
            follow the engineering design cycle: Design → Build → Test → Learn
          </p>
          <p>
            We invite you to think about ways to tackle and solve one or more of
            your project's problems and use synthetic biology tools and/or
            experimental techniques to generate expected results.
          </p>
          <p>
            When you have completed the cycle once, think about and document
            what changes in design you would make for the next iteration(s) of
            the cycle.
          </p>
          <p>
            For example, you can design and build a new Part, measure its
            performance, document whether it worked or not, and propose how the
            results would inform the next design or steps (documentation must be
            on the Part's Pages on the Registry).
          </p>
          <p>
            Visit the{" "}
            <a href="https://technology.igem.org/engineering" target="_blank">
              Engineering pages
            </a>{" "}
            for additional guidance on engineering success.
          </p>
        </div>
      </div>
    </>
  );
}
