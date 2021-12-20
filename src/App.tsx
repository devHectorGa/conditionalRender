import { useEffect, useState } from 'react';
import { data, IDatas } from './data';
import GroupLists from './components/GroupLists';

function App() {
  const [appData, setAppData] = useState<IDatas>(data);

  useEffect(() => {
    setAppData(data);
  }, []);

  return <GroupLists appData={appData} />;
}

export default App;
