import React, { useEffect, useState } from "react";
import items from "../assets/items.jpg";
import Team from "../components/Team";
import { RiCustomerService2Fill, RiScalesFill } from "react-icons/ri";
import { TbHeartHandshake, TbBulb } from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";
import { FaPeopleCarry } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  const [text, setText] = useState(true);

  useEffect(() => {
    window.scroll(0, 0);
    setText(false);
  }, []);

  return (
    <>
      <section className="about">
        <div
          className={`${text ? "top translated" : "top"}`}
          // style={{ backgroundImage: `url(${items})` }}
        >
          <div className="image">
            <LazyLoadImage
              alt="microscope"
              effect="blur"
              src={items}
              height="100%"
              width="100%"
            />
          </div>
          <h3> Improving health & wellness, impacting lives.</h3>
          <p>Cutting-Edge Molecular Lab Solutions.</p>
        </div>
        <div className="group">
          <div className="center">
            <h3>What Drives Us</h3>
            <p>
              Sage Diagnostics center is a full-fledged diagnostic center
              inclusive of a molecular lab center to service the growing demand
              for diagnostics both for occupational health safety and for
              medical diagnostics requirements to aid treatment.{" "}
            </p>
          </div>
          <div className="center values center-spaced">
            <h3>Core values</h3>
            <ul>
              <li>
                <span>
                  <RiCustomerService2Fill />
                </span>{" "}
                Services
              </li>
              <li>
                <span>
                  <TbHeartHandshake />
                </span>{" "}
                Professionalism
              </li>
              <li>
                <span>
                  <CiDumbbell />
                </span>{" "}
                Integrity
              </li>
              <li>
                <span>
                  <RiScalesFill />
                </span>{" "}
                Respect
              </li>
              <li>
                <span>
                  <TbBulb />
                </span>{" "}
                Innovation
              </li>
              <li>
                <span>
                  <FaPeopleCarry />
                </span>{" "}
                Team Spirit
              </li>
            </ul>
          </div>
          <div className="center center-spaced">
            <h3>Vision</h3>
            <p>
              The preferred and trusted medical diagnostics partner — improving
              health & wellness, impacting lives.
            </p>
          </div>
          <div className="center center-spaced">
            <h3>Mission</h3>
            <p>
              Provide innovative, timely, and quality medical diagnostics
              services.{" "}
            </p>
          </div>
        </div>
      </section>
      <Team />
      <section className="value-proposition">
        <h1>Value Propositions</h1>
        <div className="values">
          <div className="value-center">
            <div className="value">
              <span></span>
              <p>Quick Turnaround Time</p>{" "}
            </div>
          </div>
          <div className="value-center">
            <div className="value">
              <span></span>
              <p>Online reporting </p>{" "}
            </div>
          </div>
          <div className="value-center">
            <div className="value">
              <span></span>
              <p>Dispatch services/Home service </p>{" "}
            </div>
          </div>
          <div className="value-center">
            <div className="value">
              <span></span>
              <p>Follow up services </p>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className="service-offering">
        <h1>Service offering</h1>
        <div className="center">
          <div className="item">
            <p>
              Comprehensive wellness packages: Occupational Health screenings
              (Annual Health Checks, Fit To Fly tests, Medical Fitness Tests
              etc)
            </p>
          </div>
          <hr />
          <div className="item">
            <p>
              Comprehensive laboratory, Basic Imaging, Other complimentary tests
            </p>
          </div>
          <hr />
          <div className="item">
            <p>Specialized PCR Tests</p>
          </div>
        </div>
        {/* <h2>
          <span>
            Location <GoLocation /> -
          </span>{" "}
          Plot 10, Block 64, Fola Osibo Street, Lekki Phase 1, Lagos
        </h2> */}
      </section>
    </>
  );
};

export default About;
