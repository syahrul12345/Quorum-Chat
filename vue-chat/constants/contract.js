export const address = '0x1baFc9d02a4797EA6Ee60bc27Aa0a59Fa95b9867';
export const byteCode = '0x6080604052621e848060065534801561001757600080fd5b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060006005819055506109a3806100706000396000f3fe608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063414dfb7e146100675780639c16667c146100ba578063c36af46014610126578063c61e94c21461026a575b600080fd5b34801561007357600080fd5b506100a06004803603602081101561008a57600080fd5b810190808035906020019092919050505061035d565b604051808215151515815260200191505060405180910390f35b3480156100c657600080fd5b506100cf61036b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101125780820151818401526020810190506100f7565b505050509050019250505060405180910390f35b34801561013257600080fd5b5061013b6103c3565b6040518080602001806020018060200180602001858103855289818151815260200191508051906020019060200280838360005b8381101561018a57808201518184015260208101905061016f565b50505050905001858103845288818151815260200191508051906020019060200280838360005b838110156101cc5780820151818401526020810190506101b1565b50505050905001858103835287818151815260200191508051906020019060200280838360005b8381101561020e5780820151818401526020810190506101f3565b50505050905001858103825286818151815260200191508051906020019060200280838360005b83811015610250578082015181840152602081019050610235565b505050509050019850505050505050505060405180910390f35b34801561027657600080fd5b506103436004803603604081101561028d57600080fd5b81019080803590602001906401000000008111156102aa57600080fd5b8201836020820111156102bc57600080fd5b803590602001918460018302840111640100000000831117156102de57600080fd5b9091929391929390803590602001906401000000008111156102ff57600080fd5b82018360208201111561031157600080fd5b8035906020019184600183028401116401000000008311171561033357600080fd5b90919293919293905050506106e7565b604051808215151515815260200191505060405180910390f35b600081600681905550919050565b606060038054806020026020016040519081016040528092919081815260200182805480156103b957602002820191906000526020600020905b8154815260200190600101908083116103a5575b5050505050905090565b606080606080600060065460038054905010156103e75760038054905090506103ed565b60065490505b60608160405190808252806020026020018201604052801561041e5781602001602082028038833980820191505090505b5090506060826040519080825280602002602001820160405280156104525781602001602082028038833980820191505090505b5090506060836040519080825280602002602001820160405280156104865781602001602082028038833980820191505090505b5090506060846040519080825280602002602001820160405280156104ba5781602001602082028038833980820191505090505b50905060008090506000866003805490500390505b6003805490508110156106ce5760026000600160006003858154811015156104f357fe5b9060005260206000200154815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054868381518110151561057957fe5b90602001906020020181815250506001600060038381548110151561059a57fe5b9060005260206000200154815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685838151811015156105e557fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506001600060038381548110151561063457fe5b9060005260206000200154815260200190815260200160002060000154848381518110151561065f57fe5b90602001906020020181815250506001600060038381548110151561068057fe5b906000526020600020015481526020019081526020016000206002015483838151811015156106ab57fe5b9060200190602002018181525050818060010192505080806001019150506104cf565b5084848484995099509950995050505050505090919293565b6000600560008154809291906001019190505550600061074a84848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061094b565b9050600061079b87878080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505061094b565b90506000826005546040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209050600381908060018154018082558091505090600182039060005260206000200160009091929091909150555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550826001600083815260200190815260200160002060000181905550336001600083815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504260016000838152602001908152602001600020600201819055507f699ce075ead4b3f5a103c7ed7af104b2c373ac4e7696ae73ffc0f1dae9496eb4833342604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1505050949350505050565b60006060829050600081511415610969576000600102915050610972565b60208301519150505b91905056fea165627a7a723058209ffafc40af149a84b6434bb0565b03c622915ff5b1830ecc5b4b1a28f1f4b65d0029';
export const abi = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_text",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_add",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "Received",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "text",
          "type": "string"
        }
      ],
      "name": "answer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAnswer",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_display",
          "type": "uint256"
        }
      ],
      "name": "setDisplay",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getLatest",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
        },
        {
          "name": "",
          "type": "address[]"
        },
        {
          "name": "",
          "type": "bytes32[]"
        },
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]