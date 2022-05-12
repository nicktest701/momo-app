import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Register from "../Register";
import Layout from "./Layout";
import User from "./User";
import EVoucher from "../EVoucher";
import Prepaid from "../Prepaid";
import Airtime from "../Airtime";
import BECEChecker from "../evoucher/BECEChecker";
import WAECChecker from "../evoucher/WAECChecker";
import SchoolPlacement from "../evoucher/SchoolPlacement";
import SecurityService from "../evoucher/SecurityService";
import UniversityForms from "../evoucher/UniversityForms";
import CinemaTickets from "../evoucher/CinemaTickets";
import StadiaTickets from "../evoucher/StadiaTickets";
import Shop from "../evoucher/Shop";
import Checkout from "../Checkout";

function Shell() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="prepaid" element={<Prepaid />} />
        <Route path="airtime" element={<Airtime />} />

        <Route path="evoucher" element={<EVoucher />}>
          <Route index element={<Shop />} />
          <Route path="bece-checker" element={<BECEChecker />} />
          <Route path="waec-checker" element={<WAECChecker />} />
          <Route path="school-placement" element={<SchoolPlacement />} />
          <Route path="security-service" element={<SecurityService />} />
          <Route path="university-form" element={<UniversityForms />} />
          <Route path="cinema-ticket" element={<CinemaTickets />} />
          <Route path="stadia-ticket" element={<StadiaTickets />} />
        </Route>
      </Route>
      <Route path="/user" element={<User />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
}

export default Shell;
