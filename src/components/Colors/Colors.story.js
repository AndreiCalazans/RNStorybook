import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import styled from 'styled-components/native';

import colorTypes from './colorTypes';
import Colors from './Colors';
import Fonts from '../Fonts/Fonts';

storiesOf('Colors', module).add('default', () => <MiniApp />);

const Wrapper = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

const TextDisplay = styled.View`
  flex-direction: row;
`;

const MiniApp = () => <Wrapper>
  <Fonts size={22} name='contextualMessage' color='black'>Color stories</Fonts>
  {Object.keys(colorTypes).map((each, i) => <Colors key={each} color={each} key={i} >{each}</Colors> )}
</Wrapper>;
