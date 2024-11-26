import React, { useState } from 'react';
import styled from 'styled-components';
import Introduction from '@/component/main/Introduction';

const Main = () => {

  return (
    <Wrapper> 
        <Introduction/>

    </Wrapper>
  );
};

const Wrapper = styled.div`
    width : 100%;
    min-height : 100%;
    max-height : 100%;
`


export default Main