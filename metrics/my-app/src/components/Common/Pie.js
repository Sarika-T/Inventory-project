import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 32, label: 'Acquistion' },
  { value: 20, label: 'Purchase' },
  { value: 8, label: 'Retention' },
];

const size = {
  width: 300,
  height: 160,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 15,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart className="pie-chart" series={[{className:"pie-chart", data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel></PieCenterLabel>
    </PieChart>
  );
}
