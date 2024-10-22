import { Button } from "antd";
import React from "react";

function Home() {
    return (
       <div>
           <h1>Catalog</h1>
           <Button  type="link" href="/" style={{ marginTop: 16 }} >
                На главную
            </Button>
       </div>
    );
   }
   export default Home;