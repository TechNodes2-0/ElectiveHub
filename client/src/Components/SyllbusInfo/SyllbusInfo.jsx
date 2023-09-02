/** @format */

import React from "react";
import Navbar from "../Navbar";
import Info from "./Info";
import { useParams } from 'react-router-dom';

export default function SyllbusInfo() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <Navbar />
      <Info  id={id} />
    </div>
  );
}
