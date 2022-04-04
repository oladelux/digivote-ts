// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Election {
   
    struct Voter {
        uint weight;
        bool voted;
        address delegate;
        uint vote;
    }

    struct Nominee {
        bytes32 name;
        uint voteCount;
    }

    address public electoralBody;

    mapping(address => Voter) public voters;

    Nominee[] public nominees;
   
    constructor(bytes32[] memory nomineeNames) {
        electoralBody = msg.sender;
        voters[electoralBody].weight = 1;

        for (uint i = 0; i < nomineeNames.length; i++) {
            nominees.push(Nominee({
                name: nomineeNames[i],
                voteCount: 0
            }));
        }
    }
    
}