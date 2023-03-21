import { useState } from 'react'
import './App.css'
const ACCESS_KEY = import.meta.env.VITE_NASA_KEY;
import APIform from './Components/APIform';
import PreviousGallery from './Components/PreviousGallery';
import BanList from './Components/BanList';

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true)

  const [inputs, setInputs] = useState({
    sol: "",
    rover: "",
    camera: "",
  });

  let RoverInfo = [
    { name: "Perseverance", sol: 5111, camera: ["EDL_RUCAM", "EDL_RDCAM", "EDL_DDCAM", "EDL_PUCAM1", "EDL_PUCAM2", "NAVCAM_LEFT", "NAVCAM_RIGHT", "MCZ_RIGHT", "MCZ_LEFT", "FRONT_HAZCAM_LEFT_A", "FRONT_HAZCAM_RIGHT_A", "REAR_HAZCAM_LEFT", "REAR_HAZCAM_RIGHT", "SKYCAM", "SHERLOC_WATSON"] },
    { name: "Curiosity", sol: 3774, camera: ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM"] },
    { name: "Opportunity", sol: 739, camera: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"] },
    { name: "Spirit", sol: 2208, camera: ["FHAZ", "RHAZ", "NAVCAM", "PANCAM", "MINITES"] },
  ]


  let banInfo = {
    rovers: [],
    sol: [],
    camera: [],
  }





  const callAPI = async (query) => {
    const response = await fetch(query);
    const json = await response.json();
    console.log('json: ', json);
    let length = json.photos.length;
    console.log('length: ', length);

    if (json.photos.length == 0) {
      makeQuery();
    }
    else {
      setCurrentImage(json.photos[0].img_src);
      console.log('json.photos[0].img_src: ', json.photos[0].img_src);

      console.log('json.photos.length: ', json.photos.length);
      // console.log(json.photos.img_src)
    }
  }


  const submitForm = () => {
    makeQuery();
  }


  const makeQuery = () => {
    if (firstLoad) {
      let chosen = RoverInfo[Math.floor(Math.random() * RoverInfo.length)]
      console.log('chosen: ', chosen);

      let rover = chosen.name;
      // console.log('rover: ', rover);
      // setInputs({ ...inputs, rover: rover })
      let sol = Math.floor(Math.random() * chosen.sol);
      // setInputs({ ...inputs, sol: sol })
      // console.log('sol: ', sol);
      let camera = chosen.camera[Math.floor(Math.random() * chosen.camera.length)]
      console.log('camera: ', camera);
      // setInputs({ ...inputs, camera: camera })
      // setFirstLoad(false);
      let query = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?api_key=${ACCESS_KEY}&camera=${camera}&sol=${sol}`;
      setInputs({ ...inputs, camera: camera, sol: sol, rover: rover })
      callAPI(query).catch(console.error);
    } else {
      // 1. if user clicks on any attribute to ban, add to empty banlist 
      // 2. if the user clicks on a rover to ban, you want to filter the roverInfo so that the appropraite rover elemenet gets deleted.
      //    if rover.name is in banlist (RoverInfo.filter(consition -  if rover.name is in banlist ))
      //  This returns a new RoverInfo array
      // 3. if user bans sol, when finding a random Sol, make sure that random sol is not in banlist
      //  if it is, do randomsol again, until the sol is not in banlist
      // 4. if user bans camera, 
      // if camera name  is in ban list - RoverInfo[chosen].filter(condition - if chosen.camera is in banlist)
      console.log(" else statement");
    }
  }


  return (
    <div className="whole-page">

      <PreviousGallery>

      </PreviousGallery>



      <APIform
        onSubmit={submitForm}
        currentImage={currentImage}
        inputs={inputs}
      ></APIform>


      <BanList></BanList>





    </div >



  )
}

export default App
