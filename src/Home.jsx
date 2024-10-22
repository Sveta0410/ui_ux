import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button} from 'antd';

export const Home = () =>{

    return (
        <>
      <div>
        <Button className="home_button" type="link" href="/catalog" style={{ marginTop: 16 }} >
                Страница каталога
         </Button>
         <p></p>
          <Button className="home_button"  type="link" href="/product" style={{ marginTop: 16 }} >
                Страница товара
         </Button>
      </div>
        </>
)}