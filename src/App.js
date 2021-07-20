import logo from './logo.svg';
import './App.css';

import { useEffect,useState } from 'react';

import { DataStore } from '@aws-amplify/datastore';
import { Device } from './models';


function App() {

  const [devices, setDevice] = useState([])

  useEffect(()=> {
    const func = async () => {
      const models = await DataStore.query(Device);
      console.log(models);
      setDevice(models)
    }
    func()
  }, [])

  const createDevice = async () =>{
      const device = {
        Mac_address: window.prompt('MAC address'),
        name: window.prompt('name of device'),
        tags: window.prompt('tags of device'),
      }
      const newDevice = await DataStore.save(
        new Device(device)
        )
        console.log(newDevice)
  }


  return (
    <div className="App">
        <button onClick ={createDevice}>Create Device</button>
        {devices.map( device => <div key={device.id}>
        <h5>{device.Mac_address}</h5>
        <h5>{device.name}</h5>
        <h5>{device.tags}</h5>
        </div> )}
    </div>
  );
}

export default App;
