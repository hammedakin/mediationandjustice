import React from 'react';
import { DotLoader } from 'react-spinners';

const PageLoader = (props) => {
    return ( 
        <>
        <div className="app">
          <DotLoader color={"#228B22"}  loading={props.loading} size={80} />
        </div>
      </>
     );
}
 
export default PageLoader;