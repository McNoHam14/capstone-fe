import React from "react";
import Layout from "../components/Layout";
import Search from "../components/Search";
import NoticeBoard from "../components/NoticeBoard";

const Feed = () => {
  return (
    <Layout>
      <Search isNotice={true} />
    </Layout>
  );
};

export default Feed;
