import React, { useEffect, useState } from "react";
import axios from "axios";
import FormData from "form-data";
import TimelineRight from "./timeline_right";
import UploadPost from "./timeline_right/UploadPost";
function Timeline () {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [click,setClick]=useState(0)
  useEffect(() => {
    const id = localStorage.getItem("id");
    // const username = localStorage.getItem("username");

    axios.get("http://localhost:3002/upload/getpost").then((response) => {
      setData(response.data);
    });
    axios
      .post("http://localhost:3002/auth/users", { _id: id })
      .then((response) => {
        setUser(response.data);
      });
    
      // console.log(data)
  }, [click]);

  const handlec=(e)=>{
    setClick(click+1)
  }
  return (
    <div>
      {console.log(data)}
      <meta charSet="utf-8" />
      <title>Home</title>
      <div className="container">
        <div className="content">
          <TimelineRight handlec={handlec}/>

          <div className="content_lft">
            <div className="contnt_1">
              <div className="list_1">
                <ul>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Friends
                  </li>
                  <li>
                    <input type="checkbox" className="chk_bx" />
                    Flaged
                  </li>
                </ul>
              </div>
              <div className="timeline_div">
                <div className="timeline_div1">
                  <div className="profile_pic">
                    <img src="images/timeline_img1.png" />
                    <div className="profile_text">
                      <a href="#">Change Profile Pic</a>
                    </div>
                  </div>
                  <div className="profile_info">
                    <div className="edit_div">
                      <a href="#">
                        Edit <img src="images/timeline_img.png" />
                      </a>
                    </div>
                    <div className="profile_form">
                      <ul>
                        <li>
                          <div className="div_name1">Name :</div>
                          <div className="div_name2">{user.username}</div>
                        </li>
                        <li>
                          <div className="div_name1">Sex :</div>
                          <div className="div_name2">Male </div>
                        </li>
                        <li>
                          <div className="div_name1">Description :</div>
                          <div className="div_name3">
                            This is an example of a comment. You can create as
                            many comments like this one or sub comments as you
                            like and manage all of your content inside Account.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="timeline_div2">
                  <ul>
                    <li>
                      <a href="#" className="active">
                        Timeline{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">About </a>
                    </li>
                    <li>
                      <a href="#">Album</a>
                    </li>
                    <li>
                      <a href="#"> Pets</a>
                    </li>
                    <li>
                      <a href="#">My Uploads </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contnt_2">
              {data.map((item) => {
                return (
                  <div className="div_a">
                    <div className="div_title">{item.description} </div>
                    <div className="btm_rgt">
                      <div className="btm_arc">{item.category}</div>
                    </div>
                    <div className="div_top">
                      <div className="div_top_lft">
                        <img src="images/img_6.png" />
                        {item.username}
                      </div>
                      <div className="div_top_rgt">
                        <span className="span_date">{item.date}</span>
                        <span className="span_time">{item.time}</span>
                      </div>
                    </div>
                    <div className="div_image">
                      <img
                        src={`http://localhost:3002/${item.image}`}
                        alt="pet"
                      />
                    </div>
                    <div className="div_btm">
                      <div className="btm_list">
                        <ul>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="images/icon_001.png" alt="share" />
                              </span>
                              Share
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="images/icon_002.png" alt="share" />
                              </span>
                              Flag
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="images/icon_003.png" alt="share" />
                              </span>
                              0 Likes
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="images/icon_004.png" alt="share" />
                              </span>
                              4 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              }).reverse()}
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
}
export default Timeline;
