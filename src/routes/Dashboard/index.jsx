import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Profile } from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";
import {
  Likes,
  Media,
  Tweets,
  TweetsReplies,
} from "../../pages/Dashboard/ProfilesItem";
import Explore from "../../pages/Explore";
import Notifications from "../../pages/Notifications";
import Messages from "../../pages/Messages";
import Bookmarks from "../../pages/Bookmarks";
import Lists from "../../pages/Lists";
import More from "../../pages/More";
import NotFound from "../../pages/NotFoun";
function DashboaedPage() {
  return (
    <div className="container mx-auto w-[1300px] flex">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Tweets />} />
          <Route path="tweets-replies" element={<TweetsReplies />} />
          <Route path="media" element={<Media />} />
          <Route path="likes" element={<Likes />} />
        </Route>
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default DashboaedPage;
