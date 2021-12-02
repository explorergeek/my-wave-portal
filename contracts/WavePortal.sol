// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    constructor() {
        console.log("I think I am a smart contract, but I can not think.. so am I really smart?");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved! They must think you are pretty neat!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        if(totalWaves <= 0)
        {
            console.log("We have %d total waves! I wonder if we can get as many waves that are in the Ocean....", totalWaves);
        }
        else if(totalWaves == 1)
        {
            console.log("We are now up to %d wave!", totalWaves);
        }
        else
        {
            console.log("We are now up to %d waves!", totalWaves);
        }
        return totalWaves;
    }
}