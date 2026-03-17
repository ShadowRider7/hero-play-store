import React from "react";
import { useLoaderData, useParams } from "react-router";
import demoImg from "../../assets/demo-app (2).webp";
import iconDwn from "../../assets/icon-downloads.png";
import iconRat from "../../assets/icon-ratings.png";
import iconReview from "../../assets/icon-review.png";

import RatinhChart from "../../components/RatingChart/RatinhChart";

const AppDetailsBig = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);
  const { ratings } = singleApp;
  console.log(singleApp);
  return (
    <div className="max-w-380 mx-auto">
      <section className="flex flex-wrap gap-5 mt-15">
        <div>
          <img className="w-80 h-80 rounded shadow-2xl " src={demoImg} alt="" />
        </div>
        <div className="flex-1">
          <div>
            <h2 className="font-bold text-3xl">
              SmPlan:ToDo List with Reminder
            </h2>
            <p className="text-xl font-sans text-[#627382] mt-2">
              Developed by{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                productive.io
              </span>
            </p>
          </div>
          <div className="border opacity-20 my-7 w-full"></div>
          <div className="flex gap-10">
            <div className="space-y-1">
              <img src={iconDwn} alt="" /> <p>Downloads</p>{" "}
              <span className="font-bold text-4xl">8M</span>
            </div>
            <div className="space-y-1">
              <img src={iconRat} alt="" /> <p>Average Ratings</p>
              <span className="font-bold text-4xl">4.9</span>
            </div>
            <div className="space-y-1">
              <img src={iconReview} alt="" /> <p>Total Reviews</p>
              <span className="font-bold text-4xl">54K</span>
            </div>
          </div>
          <div className="mt-7">
            <button className="btn text-white bg-[#00D390]">
              Install Now (291 MB)
            </button>
          </div>
        </div>
      </section>
      <div className="border opacity-20 my-7 w-full"></div>
      <section>
        <h2 className="text-2xl font-semibold">Ratings</h2>
        <RatinhChart data={ratings}></RatinhChart>
      </section>
      <div className="border opacity-20 my-7 w-full"></div>
      <section>
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="mt-4 text-[#627382]">
          This focus app takes the proven Pomodoro technique and makes it even
          more practical for modern lifestyles. Instead of just setting a timer,
          it builds a complete environment for deep work, minimizing
          distractions and maximizing concentration. Users can create custom
          work and break intervals, track how many sessions they complete each
          day, and review detailed statistics about their focus habits over
          time. The design is minimal and calming, reducing cognitive load so
          you can focus entirely on the task at hand. Notifications gently let
          you know when to pause and when to resume, helping you maintain a
          healthy rhythm between work and rest. A unique feature of this app is
          the integration of task lists with timers. You can assign each task to
          a specific Pomodoro session, making your schedule more structured. The
          built-in analytics show not only how much time you’ve worked but also
          which tasks consumed the most energy. This allows you to reflect on
          your efficiency and adjust your workflow accordingly. The app also
          includes optional background sounds such as white noise, nature
          sounds, or instrumental music to create a distraction-free atmosphere.
          For people who struggle with procrastination, the app provides
          motivational streaks and achievements. Completing multiple Pomodoro
          sessions unlocks milestones, giving a sense of accomplishment. This
          gamified approach makes focusing more engaging and less like a chore.
          Whether you’re studying for exams, coding, writing, or handling office
          work, the app adapts to your routine. By combining focus tracking,
          task management, and motivational tools, this Pomodoro app ensures
          that you not only work harder but also smarter. It is a personal
          trainer for your brain, keeping you disciplined, refreshed, and
          productive throughout the day.
        </p>
      </section>
    </div>
  );
};

export default AppDetailsBig;
