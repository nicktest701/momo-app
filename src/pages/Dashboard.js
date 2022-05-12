import React from "react";
import HomeCards from "../components/HomeCards";

import HomeSwiper from "../components/HomeSwiper";
import VoucherSlide from "../components/VoucherSlide";

function Dashboard() {
  return (
    <div className="dashboard">
      <HomeSwiper />
      {/* <VoucherSlide /> */}
      <HomeCards/>
    </div>
  );
}

export default Dashboard;
