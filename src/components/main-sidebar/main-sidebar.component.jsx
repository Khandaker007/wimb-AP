import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo/wimb-logo.svg";

// ICON
import dashboard from "../../assets/icon/icon-dashboard.svg";
import users from "../../assets/icon/icon-users.svg";
import star from "../../assets/icon/icon-star.svg";
import onboarding from "../../assets/icon/icon-onboarding.svg";
import suppliers from "../../assets/icon/icon-suppliers.svg";
import categorie from "../../assets/icon/icon-category.svg";
import analytic from "../../assets/icon/icon-analytic.svg";
import report from "../../assets/icon/icon-report.svg";
import request from "../../assets/icon/icon-request.svg";
import wplus from "../../assets/icon/icon-parker-benefit.svg";
import event from "../../assets/icon/icon-events.svg";
import connect from "../../assets/icon/icon-connect.svg";
import navigation from "../../assets/icon/icon-navigation.svg";
import system from "../../assets/icon/icon-settings.svg";
import arrow from "../../assets/icon/icon-arrow-right.svg";

import "./main-sidebar.style.scss";

const MainSidebar = ({ active }) => {
  // DROPDOWN SUBMENU
  const [activeDropdownDashboard, setActiveDropdownDashboard] = useState(false);
  const [activeDropdownUser, setActiveDropdownUser] = useState(false);
  const [activeDropdownLifestyle, setActiveDropdownLifestyle] = useState(false);
  const [activeDropdownOnboarding, setActiveDropdownOnboarding] =
    useState(false);
  const [activeDropdownSuppliers, setActiveDropdownSuppliers] = useState(false);
  const [activeDropdownCategorie, setActiveDropdownCategorie] = useState(false);
  const [activeDropdownAnalytics, setActiveDropdownAnalytics] = useState(false);
  const [activeDropdownReports, setActiveDropdownReports] = useState(false);
  const [activeDropdownRequests, setActiveDropdownRequests] = useState(false);
  const [activeDropdownPerks, setActiveDropdownPerks] = useState(false);
  const [activeDropdownEvents, setActiveDropdownEvents] = useState(false);
  const [activeDropdownConnect, setActiveDropdownConnect] = useState(false);
  const [activeDropdownMap, setActiveDropdownMap] = useState(false);
  const [activeDropdownSystem, setActiveDropdownSystem] = useState(false);

  const handleDropdown = (props) => {
    switch (props) {
      case "dashboard":
        setActiveDropdownDashboard(!activeDropdownDashboard);
        break;
      case "users":
        setActiveDropdownUser(!activeDropdownUser);
        break;
      case "lifestyle":
        setActiveDropdownLifestyle(!activeDropdownLifestyle);
        break;
      case "onboard":
        setActiveDropdownOnboarding(!activeDropdownOnboarding);
        break;
      case "supplier":
        setActiveDropdownSuppliers(!activeDropdownSuppliers);
        break;
      case "categorie":
        setActiveDropdownCategorie(!activeDropdownCategorie);
        break;
      case "analytic":
        setActiveDropdownAnalytics(!activeDropdownAnalytics);
        break;
      case "report":
        setActiveDropdownReports(!activeDropdownReports);
        break;
      case "request":
        setActiveDropdownRequests(!activeDropdownRequests);
        break;
      case "perks":
        setActiveDropdownPerks(!activeDropdownPerks);
        break;
      case "events":
        setActiveDropdownEvents(!activeDropdownEvents);
        break;
      case "connect":
        setActiveDropdownConnect(!activeDropdownConnect);
        break;
      case "map":
        setActiveDropdownMap(!activeDropdownMap);
        break;
      case "system":
        setActiveDropdownSystem(!activeDropdownSystem);
        break;
    }
  };

  return (
    <div className={active ? "sidebar" : "sidebar active"}>
      <div className="sidebar__header">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <nav className="sidebar__nav">
        <ul className="side-nav">
          <li className="side-nav__item">
            <Link
              to="/"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("dashboard");
              }}
            >
              <img src={dashboard} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                Dashboard
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
            {/* <ul
              className={
                activeDropdownDashboard && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  dashboard 1
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  dashboard 2
                </Link>
              </li>
            </ul> */}
          </li>
          <li className="side-nav__item">
            <Link
              to="/user"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("users");
              }}
            >
              <img src={users} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                Users
                <img src={arrow} alt="" className="arrow" />
              </div>
            </Link>
            {/* <ul
              className={
                activeDropdownUser && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  user 1
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  user 2
                </Link>
              </li>
            </ul> */}
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("lifestyle");
              }}
            >
              <img src={star} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Lifestyle Managers</span>
                <img src={arrow} alt="" className={!activeDropdownLifestyle ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownLifestyle && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/lifestyle-managers" className="side-nav__sub-link">
                  Lifestyle Managers
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  lifestyle 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("onboard");
              }}
            >
              <img src={onboarding} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Onboarding</span>
                <img src={arrow} alt="" className={!activeDropdownOnboarding ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownOnboarding && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  onboarding 1
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  onboarding 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("supplier");
              }}
            >
              <img src={suppliers} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Suppliers</span>
                <img src={arrow} alt="" className={!activeDropdownSuppliers ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownSuppliers && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/suppliers-categories" className="side-nav__sub-link">
                  Suppliers Categories
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="/suppliers-dining" className="side-nav__sub-link">
                  Supplier Dining
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="/supplier-restaurant" className="side-nav__sub-link">
                  Supplier Restaurent
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("categorie");
              }}
            >
              <img src={categorie} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Categories</span>
                <img src={arrow} alt="" className={!activeDropdownCategorie ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownCategorie && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  categorie 1
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  categorie 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("analytic");
              }}
            >
              <img src={analytic} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Analytics</span>
                <img src={arrow} alt="" className={!activeDropdownAnalytics ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownAnalytics && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/analytics" className="side-nav__sub-link">
                  Analytics
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  analytics 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("report");
              }}
            >
              <img src={report} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Reports</span>
                <img src={arrow} alt="" className={!activeDropdownReports ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownReports && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/report" className="side-nav__sub-link">
                  Report
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  report 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("request");
              }}
            >
              <img src={request} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Requests</span>
                <img src={arrow} alt="" className={!activeDropdownRequests ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownRequests && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/requests" className="side-nav__sub-link">
                  Requests
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  request 2
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("perks");
              }}
            >
              <img src={wplus} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Perks/Benefits</span>
                <img src={arrow} alt="" className={!activeDropdownPerks ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownPerks && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/perks-or-benefits" className="side-nav__sub-link">
                  Perks/ Benefits
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="/perks-or-benefits-personal-shopping" className="side-nav__sub-link">
                Perks/ Benefits
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("events");
              }}
            >
              <img src={event} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Events</span>
                <img src={arrow} alt="" className={!activeDropdownEvents ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownEvents && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/events" className="side-nav__sub-link">
                  Events
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="/events-sushi-masterclass" className="side-nav__sub-link">
                  Events Masterclass
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("connect");
              }}
            >
              <img src={connect} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Connect</span>
                <img src={arrow} alt="" className={!activeDropdownConnect ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownConnect && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/connect" className="side-nav__sub-link">
                  Connect
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="/connect-clive-jackson" className="side-nav__sub-link">
                  Connect clive jackson
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("map");
              }}
            >
              <img src={navigation} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">Geo Location Map</span>
                <img src={arrow} alt="" className={!activeDropdownMap ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownMap && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="/geo-location-map" className="side-nav__sub-link">
                  Map
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="/geo-location-map-region" className="side-nav__sub-link">
                  Map Region
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="/geo-location-map-subregion" className="side-nav__sub-link">
                  Map Subregion
                </Link>
              </li>
            </ul>
          </li>
          <li className="side-nav__item">
            <Link
              to="#"
              className="side-nav__link"
              onClick={() => {
                if (active) handleDropdown("system");
              }}
            >
              <img src={system} alt="" className="side-nav__icon" />
              <div
                className={
                  active ? "link-content" : "link-content display-none"
                }
              >
                <span className="text">System</span>
                <img src={arrow} alt="" className={!activeDropdownSystem ? "arrow" : "arrow arrow-rotate"} />
              </div>
            </Link>
            <ul
              className={
                activeDropdownSystem && active
                  ? "side-nav__sub-nav"
                  : "side-nav__sub-nav  display-none"
              }
            >
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  system 1
                </Link>
              </li>
              <li className="side-nav__sub-item">
                <Link to="#" className="side-nav__sub-link">
                  system 2
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainSidebar;
