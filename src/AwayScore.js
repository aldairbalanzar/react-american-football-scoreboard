import React, { useState } from 'react';

export function AwayScore() {
  const [awayCount, awayCountSet] = useState(0);

   return awayCountSet(awayCount + 1);
}