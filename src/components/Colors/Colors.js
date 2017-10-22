import * as React from 'react';
import styled from 'styled-components/native';

import colorTypes from './colorTypes';

const Color = styled.Text`
  width: 80px;
  height: 20px;
`;

const Colors = ({ color, children }) => <Color style={{ backgroundColor: colorTypes[color] }}>{children}</Color>;

export default Colors;
