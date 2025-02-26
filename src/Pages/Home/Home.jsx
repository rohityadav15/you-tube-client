import React from 'react'
import Leftsidebar from '../../Component/Leftsidebar/Leftsidebar'
import "./Home.css"
import Showvideogrid from '../../Component/Showvideogrid/Showvideogrid'
import vid from "../../Component/Video/vid.mp4"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const vids = useSelector(state => state.videoreducer)?.data?.filter(q => q).reverse();
  const navigation = useNavigate();
  // const vids=[
  //   {
  //     _id:1,
  //     video_src:vid,
  //     chanel:"wvjwenfj3njfwef",
  //     title:"video 1",
  //     uploader:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:1,
  //     video_src:vid,
  //     chanel:"wvjwenfj3njfwef",
  //     title:"video 1",
  //     uploader:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src:vid,
  //     chanel:"wvjwenfj3njfwef",
  //     title:"video 2",
  //     uploader:"abc",
  //     description:"description of video 2"
  //   },
  //   {
  //     _id:3,
  //     video_src:vid,
  //     chanel:"wvjwenfj3njfwef",
  //     title:"video 3",
  //     uploader:"abc",
  //     description:"description of video 3"
  //   },
  //   {
  //     _id:4,
  //     video_src:vid,
  //     chanel:"wvjwenfj3njfwef",
  //     title:"video 4",
  //     uploader:"abc",
  //     description:"description of video 4"
  //   },
  // ]
  const navlist = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
    "Chat"
  ];

  const handleNav = (item) => {
    if (item === "Chat") {
      navigation('/chat')
    }
  }

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <div className="navigation_Home">
          {navlist.map((m) => {
            return (
              <p key={m} className='btn_nav_home' onClick={() => handleNav(m)}>{m}</p>
            );
          })}
        </div>
        <Showvideogrid vid={vids} />
      </div>
    </div>
  )
}

export default Home