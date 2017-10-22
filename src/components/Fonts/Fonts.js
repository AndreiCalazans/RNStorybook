import * as React from 'react';
import styled from 'styled-components/native';

import fontTypes from './fontTypes';

const Font = styled.Text`
${props => props.fontSize ? `font-size: ${props.fontSize}` : null};
${props => props.color ? `color: ${props.color}` : null};
${props => props.css}
`;

const Fonts = ({ name, size, color, children }) => <Font css={fontTypes[name]} fontSize={size} color={color}>{children}</Font>;

Fonts.defaultProps = {
  name: 'Helvetica',
}

export default Fonts;
