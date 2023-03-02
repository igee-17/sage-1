import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { service } from "../assets/images";
// import {
//   histology,
//   microbiology,
//   pathology,
//   hematology,
//   chemistry,
// } from "../assets/images";
import Service from "../components/Service";
import { services } from "../utils/data";

const Services = () => {
  const [text, setText] = useState(true);

  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    if (!targetId) {
      window.scroll(0, 0);
      return;
    }

    const el = document.getElementById(targetId);

    if (el) {
      const scrolledY = window.scrollY;
      const { top } = el.getBoundingClientRect();

      const position = top + scrolledY - 200;
      window.scroll(0, position);
    }
  }, [targetId]);

  useEffect(() => {
    setText(false);
  }, []);

  return (
    <section className="services-main">
      <div
        className={`${text ? "top translated" : "top"}`}
        style={{ backgroundImage: `url(${service})` }}
      >
        <h2>
          Provide innovative, timely,
          <br /> and quality medical diagnostics services..
        </h2>
        <p>Cutting-Edge Molecular Lab Solutions.</p>
      </div>
      <div className="services-center">
        <div>
          <h1>Services</h1>
          <h3>The preferred and trusted medical diagnostics partner</h3>
        </div>

        {services.map((item) => {
          return <Service key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Services;
