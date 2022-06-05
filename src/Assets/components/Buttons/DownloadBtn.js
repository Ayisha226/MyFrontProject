import React from "react";
import '../../css/main.css'

const DownloadBtn = ({icon , content , Class}) => {
  return (
    <li className="dow  list-unstyled ">
      <a  className={Class} href="../../../public/index.html">
        <span>{icon}</span>
        <span>{content}</span>
      </a>
    </li>
  );
};


export default DownloadBtn