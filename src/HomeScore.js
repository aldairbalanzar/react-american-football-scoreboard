import React, { useState } from 'react';

export function HomeScore() {
  const [homeCount, homeCountSet] = useState(0);

    return homeCountSet(homeCount + 1);
}
