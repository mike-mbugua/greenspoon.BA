import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import greenspoonLogo from "../../assets/images/download (1).png";
import greenspoonLogo from "./../../assets/images/greenspoon-logo.svg";
import event from "./../../assets/images/pexels-photo-1190297.jpeg";
import sales from "./../../assets/images/pexels-photo-7947707.jpeg";
import calendar from "./../../assets/images/calendar.webp";
import group from "./../../assets/images/group.jpeg";
import budget from "./../../assets/images/budget.png";
import suggestion from "./../../assets/images/Suggestion_Box.png";

function Dashboard() {
  return (
    <div className="dasboard__container">
      <div className="dash__nav">
        <div className="logo">
          <img src={greenspoonLogo} alt="" width={200} />
        </div>
        <div className="user__info">
          <p>
            <span style={{ color: "#008600" }}>Michael</span> <br />
            Welcome
          </p>
        </div>
        <div className="notifications">
          <FontAwesomeIcon
            icon={faBell}
            color="#008600"
            size="2x"
            className="logout__icon"
          />
          Notifications
        </div>
        <div className="my__profile">
          <FontAwesomeIcon
            icon={faUser}
            color="#008600"
            size="2x"
            className="logout__icon"
          />

          <a href="">
            <span>profile</span>
          </a>
        </div>
        <div className="logout">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            color="#008600"
            size="2x"
            className="logout__icon"
          />
          Logout
        </div>
      </div>

      {/* the body */}
      <div className="dashboard__body">
        <div className="events">
          <img className="image" src={event} alt="" />

          <div className="details">
            <p>
              As BAs events are part of our job, From this page you will be able
              to view all the events upcoming,confirmed,pending,Organic markets
              and also a guideline to the type of events we attend
            </p>
          </div>
          <a href="/events" className="btn btn-primary">
            View Events
          </a>
        </div>

        <div className="events">
          <img className="image" src={sales} alt="" />

          <div className="details">
            <p>
              one of the main role of a BA is to bring in new
              customers,Therefore from this page you will be able to see how
              many people you've brought in as well where you stand among other
              BAs.
            </p>
          </div>
          <a href="/sales" className="btn btn-primary">
            View sales
          </a>
        </div>

        <div className="events">
          <img className="image" src={calendar} alt="" />

          <div className="details">
            <p>
              As Bas we need a plan to execute our work well and in an orderly
              manner,You will be able to access weekly/monthly schedule from
              this page and it will guide you.
            </p>
          </div>
          <a href="/schedule" className="btn btn-primary">
            View the schedule
          </a>
        </div>

        <div className="events">
          <img className="image" src={suggestion} alt="" />

          <div className="details">
            <p>
              We are the team on the field and we face some challenges or maybe
              you have an issue with your colleague.Use this space to raise any
              complain as well as suggestion.
            </p>
          </div>
          <a href="/suggestions" className="btn btn-primary">
            Make Suggestion/Complain
          </a>
        </div>

        <div className="events">
          <img className="image" src={budget} alt="" />

          <div className="details">
            <p>
              Since the payment will be after every two weeks you will need to
              fill a few details such as number of working
              days,reimbursement,any extra payment details etc... use this page
              to do so
            </p>
          </div>
          <a href="/budget" className="btn btn-primary">
            Fill the Budget form
          </a>
        </div>

        <div className="events">
          <img className="image" src={group} alt="" />

          <div className="details">
            <p>
              You might need maybe to call you colleague to help you out. from
              this page you will be able to access their numbers as well as
              their emails. Validations will be used in this
            </p>
          </div>
          <a href="/colleagues" className="btn btn-primary">
            View Colleagues
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
