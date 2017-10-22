import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';


import fontTypes from './fontTypes';
import Fonts from './Fonts';

storiesOf('Fonts', module).add('default', () => <MiniApp />);

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px;
`;

const TextDisplay = styled.View`
  flex-direction: row;
`;

const MiniApp = () => <Wrapper>
    <Fonts size={22} name='contextualMessage' color='red'>Fonts story</Fonts>
    {Object.keys(fontTypes).map((each, i) => <Fonts name={each} key={i} >{each}</Fonts> )}
  </Wrapper>;
