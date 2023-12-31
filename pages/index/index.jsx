import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Knob } from 'primereact/knob'; // اضافه کردن ماژول Knob
import DarkModeToggle from './../../components/DarkMode/darkmode';

const Dashboard = () => {
  return (
    <div style={{ direction: 'rtl' }} className="dashboard">
      <DarkModeToggle />
   
      {/* محتوای اصلی */}
      <main className="container py-6">
        <h1 className="display-4 mb-4">داشبورد</h1>
        <div className="row row-cols-4 g-4 ">
          {/* آمار بازدیدکنندگان */}
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">بازدیدکنندگان</h2>
            {/* Implement نمایش آمار بازدیدکنندگان */}
          </div>
          {/* آمار فروش */}
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">فروش</h2>
            {/* Implement نمایش آمار فروش */}
          </div>
          {/* آمار محصولات */}
          <div className="col-md-3 p-3 rounded shadow">
            <h2 className="h4 mb-2">محصولات</h2>
            {/* Implement نمایش آمار محصولات */}
          </div>
          {/* لیست سفارشات جدید */}
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">سفارشات جدید</h2>
            {/* Implement نمایش لیست سفارشات جدید */}
          </div>
          {/* لیست کاربران جدید */}
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">کاربران جدید</h2>
            {/* Implement نمایش لیست کاربران جدید */}
          </div>
          {/* لیست بازخوردها */}
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">بازخوردها</h2>
            {/* Implement نمایش لیست بازخوردها */}
          </div>
          {/* نمودار فروش هفتگی */}
          <div className="col-md-6 p-3  rounded shadow">
            <h2 className="h4 mb-2">فروش هفتگی</h2>
            {/* Implement نمایش نمودار فروش */}
          </div>
          {/* آخرین اخبار */}
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">آخرین اخبار</h2>
            {/* Implement نمایش آخرین اخبار */}
          </div>
          
          {/* اضافه کردن چهارتا Knob */}
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">Knob 1</h2>
            <Knob value={50} />
          </div>
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">Knob 2</h2>
            <Knob value={75} />
          </div>
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">Knob 3</h2>
            <Knob value={30} />
          </div>
          <div className="col-md-3 p-3  rounded shadow">
            <h2 className="h4 mb-2">Knob 4</h2>
            <Knob value={90} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
