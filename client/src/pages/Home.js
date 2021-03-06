import React from 'react';
import { capitalizeFirstLetter } from "../utils/helpers";
import "bootstrap/dist/css/bootstrap.min.css";

import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_ITEM, QUERY_USER } from '../utils/queries';

const Home = () => {
  //   const { loading, data } = useQuery(QUERY_ITEM);
  //   const { data: userData } = useQuery(QUERY_USER);
  //   const items = data?.items || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between hero">
        {loggedIn && (
          <section className="hero home-title">
            <div className="hero-cta home-content">
              <h2>Grandma's Mismatched Taxidermy</h2>
              <p className="home-desc home-text">A marketplace for all crap taxidermy lovers</p>
            </div>
          </section>
        )}
        {/* <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              items={items}
              title="A marketplace for all crap taxidermy lovers"
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null} */}
      </div>
    </main>
  );
};

export default Home;