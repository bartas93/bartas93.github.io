import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import Translate from "@docusaurus/Translate";

export default function Portfolio() {
  const { siteConfig, i18n } = useDocusaurusContext();
  let localePathRoot = "";
  if (i18n.currentLocale != i18n.defaultLocale)
    localePathRoot = "/" + i18n.currentLocale;
  return (
    <Layout title={`Portfolio`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="landing_page/css/fonts.css" />
        <link rel="stylesheet" href="landing_page/css/style.css" />
        <script src="landing_page/js/preset.js"></script>
      </Head>
      <main class="landing-page">
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="anime-element">
                <img
                  src="portfolio/bartek_jablonski_1.png"
                  alt="Bartek Jablonski"
                />
              </div>

              <div class="hero-copy">
                <img
                  src="portfolio/allCompanies.png"
                  alt="LPP Finastra Intel Capgemini"
                />
              </div>
            </div>
          </div>
        </section>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="03.2020 - 08.2023"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.camply.name">Camply.pl</Translate>
            </h3>
            <img src="portfolio/camply.webp" alt="camply" />
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.camply.role">
                Owner/Senior Backend Developer
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.camply.description">
                Camply.pl was polish marketplace for camps and semi-camps. I was
                responsible for the application backend, database,
                finances,settlements and for part of contacts with customers and
                partners.I actively participated in sales and marketing
                activities. Camply has signed 73 travel agencies and sold
                hundreds reservations.Backend involved: Spring boot, query-dsl,
                Mysql, Gitlab CI, GoogleKubernetes Engine, Google cloud
                functions, Thymeleaf, rabbitMq,App Engine GCP, Google storage,
                OAuth, Firebase, Tooljet
              </Translate>
            </p>
            <a
              class="button button-primary"
              href={`${localePathRoot}/docs/camply`}
            >
              <Translate id="portfolio.work.camply.more">
                More informations
              </Translate>
            </a>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="06.2020 - 01.2023"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.lpp.name">
                LPP SA (via Unity Group)
              </Translate>
            </h3>
            <img src="portfolio/LPP.jpg" alt="LPP SA" />
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.lpp.role">
                Senior Java Developer (Remote)
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.lpp.description">
                Integration project for world company in clothing industry
                (LPP-House,Cropp,Sinsey etc.). The goal is to provide
                multichannel stock management solution.Technologies: Java17,
                Kubernetes, Mule 4, Mule3, Spring boot,Spring integration,
                RabbitMq, ActiveMq, oracle db, ApacheIgnite, Grafana,
                Prometheus, Enterprise Architect
              </Translate>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="03.2020 - 06.2020"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.unity-group.name">
                Unity Group
              </Translate>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.unity-group.role">
                Java Developer (Remote)
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.unity-group.description">
                Integration project for company providing household goods. The
                goal is to automate and streamline price and stock management.
                Technologies: Mule, Spring boot(JHipster), RabbitMq
              </Translate>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgba(255, 255, 255, 0.1)",
            }}
            date="03.2020 - 06.2020"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              <Translate id="portfolio.work.finastra.name">
                Finastra (via Solwit SA)
              </Translate>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              <Translate id="portfolio.work.finastra.role">
                Java Developer
              </Translate>
            </h4>
            <p>
              <Translate id="portfolio.work.finastra.description">
              Entire communication in English) Spring boot 2+, Java 8 MongoDb, Postman, Oauth2,OpenId Connect, Kubernetes, Azure, Jira, Microservices
                Software designing and implementation, analysing and solving complex engineering problems, creating and reviewing requirements and functional design, diagnosing and troubleshooting software faults, integration and testing software
              </Translate>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "#25c2a0", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>

        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title mt-0">{siteConfig.title}</h1>
                <p class="hero-paragraph">{siteConfig.tagline}</p>
                <div class="hero-cta">
                  <a
                    class="button button-primary"
                    href={`${localePathRoot}/docs/intro`}
                  >
                    Getting Start
                  </a>
                  <a
                    class="button"
                    href="https://marketplace.visualstudio.com/items?itemName=CL.eide"
                  >
                    Install
                  </a>
                </div>
              </div>
              <div class="hero-figure anime-element">
                <svg
                  class="placeholder"
                  width="528"
                  height="396"
                  viewBox="0 0 528 396"
                >
                  <rect
                    width="528"
                    height="396"
                    style={{ fill: "transparent" }}
                  />
                </svg>
                <div
                  class="hero-figure-box hero-figure-box-01"
                  data-rotation="45deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-02"
                  data-rotation="-45deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-03"
                  data-rotation="0deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-04"
                  data-rotation="-135deg"
                ></div>
                <div class="hero-figure-box hero-figure-box-05"></div>
                <div class="hero-figure-box hero-figure-box-06"></div>
                <div class="hero-figure-box hero-figure-box-07"></div>
                <div
                  class="hero-figure-box hero-figure-box-08"
                  data-rotation="-22deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-09"
                  data-rotation="-52deg"
                ></div>
                <div
                  class="hero-figure-box hero-figure-box-10"
                  data-rotation="-50deg"
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section class="features section">
          <div class="container">
            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-wrap">
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        src="landing_page/images/feature-icon-01.svg"
                        alt="Feature 01"
                      />
                    </div>
                    <h4 class="feature-title mt-24">
                      Better Coding Experience
                    </h4>
                    <p class="text-sm mb-0">
                      On VSCode, we can get a much better coding experience.
                      This helps improve efficiency and reduces coding errors.
                    </p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        src="landing_page/images/feature-icon-02.svg"
                        alt="Feature 02"
                      />
                    </div>
                    <h4 class="feature-title mt-24">
                      Unify Development Environment
                    </h4>
                    <p class="text-sm mb-0">
                      This plug-in support many kinds of compiler, project type,
                      flasher, utility tools. You don't have to switch between
                      multiple development environments. It's enough that work
                      with VsCode.
                    </p>
                  </div>
                </div>
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img
                        src="landing_page/images/feature-icon-03.svg"
                        alt="Feature 03"
                      />
                    </div>
                    <h4 class="feature-title mt-24">
                      Supported Many Kinds Of MCU
                    </h4>
                    <p class="text-sm mb-0">
                      We support <strong>8</strong> kinds of compilers that can
                      be used to compile{" "}
                      <strong>
                        mcs51/stm8/cortex-m[0/0+/3/23/33/35p/4/7]/riscv
                      </strong>{" "}
                      mcu projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
