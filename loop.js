let marsRovers = [
    {
      name: 'Spirit',
      missionStart: 'January 4, 2004',
      plannedMissionLength: '90 sols',
      finalCommDate: 'March 22, 2010',
      payload: ['panoramic camera', 'navigation camera', 'thermal spectrometer', 'x-ray spectrometer', 'magnets', 'microscopic imager', 'rock abrasion tool'],
      objectives: [
        'search soil and rocks for evidence of past water activity',
        'survey geology at landing site',
        'survey geologic activity, including erosion, water activity, volcanism at landing site',
        'search for iron and other deposits of the type formed in water'
      ]
    },
    {
      name: 'Opportunity',
      missionStart: 'January 25, 2004',
      plannedMissionLength: '90 sols',
      finalCommDate: 'June 10, 2018',
      payload: ['panoramic camera', 'navigation camera', 'thermal spectrometer', 'x-ray spectrometer', 'magnets', 'microscopic imager', 'rock abrasion tool'],
      objectives: [
        'search soil and rocks for evidence of past water activity',
        'survey geology at landing site',
        'survey geologic activity, including erosion, water activity, volcanism at landing site',
        'search for iron and other deposits of the type formed in water'
      ]
    },
    {
      name: 'Curiosity',
      missionStart: 'August 6, 2012',
      plannedMissionLength: '2 years',
      finalCommDate: null,
      payload: ['mast camera rig', 'laser-induced breakdown spectroscope', 'remote micro-imaging telescope', 'navigation cameras', 'humidity, pressure, temperatures, wind speeds, and ultraviolet radiation meterological sensor array', 'hazard avoidance cameras', 'x-ray spectrometer', 'x-ray powder and flourescence spectrometer', 'quadrupole mass spectrometer', 'gas chromatograph', 'tunable laser spectrometer', 'dust removal tool', 'radiation assessment detector', 'neutron detector', 'robotic arm'],
      objectives: [
        'search for and analyze organic compounds',
        'identify features that may be the result of biological processes',
        'investigate the chemical, isotopic, and mineralogical composition of the surface and near-surface materials',
        'assess timescale of atmospheric processes',
        'analyze current state of water and carbon dioxide cycle',
        'survey broad-spectrum planetary surface and near-surface radiation'
      ]
    }
  ]
  
  for (let i = 0; i < marsRovers.length; i++) {
    console.log(marsRovers[i].name);
  }
  
  for (let i = 0; i < marsRovers.length; i++) {
    console.log(marsRovers[i].objectives[0])
  }
  
  for (let i = 0; i < marsRovers.length; i++) {
    console.log(marsRovers[i].payload[4])
  }
  function printLastElements() {
    for (let i = 0; i < marsRovers.length; i++){
      console.log(marsRovers[i].objectives.at(-1))
    }
  }
  
  printLastElements()