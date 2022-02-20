import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import {useState, useEffect } from 'react';
import axios from 'axios';
import JoshList from './components/JoshList';
import Main from './components/Main';
const url = 'https://testnets-api.opensea.io/assets?asset_contract_address=0xe13af253Ba7AAaba280af09A59De7E2230D54CC9&order_direction=asc'


function App() {

  const [joshListData, setJoshListData] = useState([]);
  const [selectedJosh, setSelectedJosh] = useState(0)

  const getMyNfts = async() => {
    const response = await fetch(url)
    const openseaData = await response.json()
    setJoshListData(openseaData.assets.reverse());
  }

  useEffect(()=>{
    getMyNfts()
  }, [])


  // useEffect(()=>{
  //   const getMyNfts = async() => {
  //     const openseaData = await axios.get(
  //       'https://testnets-api.opensea.io/assets?asset_contract_address=0x7078a73182B4Adf75c8635cb8fC8310462013c63&order_direction=asc'
  //     )
  //     console.log(openseaData.data.assets)
  //     setJoshListData(openseaData.data.assets)
  //   }

  //   return getMyNfts();
  // }, [])

  return (
    <div className="app">
      <Header />
      {
        (joshListData.length > 0) &&
          <>
            <Main 
              joshListData={joshListData}
              selectedJosh={selectedJosh}/>
            <JoshList
              joshListData={joshListData}
              setSelectedJosh={setSelectedJosh} />
          </>
      }
    </div>
  );
}

export default App;
