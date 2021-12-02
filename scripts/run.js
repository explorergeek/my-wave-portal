const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
  
    let totalWaves;
    totalWaves = await waveContract.getTotalWaves();
    
    let newWave = await waveContract.wave();
    await newWave.wait();
  
    totalWaves = await waveContract.getTotalWaves();
    
    newWave = await waveContract.connect(randomPerson).wave();
    await newWave.wait();

    totalWaves = await waveContract.getTotalWaves();
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };

  runMain();