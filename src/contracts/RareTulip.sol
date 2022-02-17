// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './ERC721Connector.sol';

contract RareTulip is ERC721Connector {

    // array to store our nfts
    string [] public RareTulipz;

    mapping(string => bool) _RareTulipzExists;

    function mint(string memory _RareTulip) public {

        require(!_RareTulipzExists[_RareTulip],
        'Error - RareTulip already exists');
        // this is deprecated - uint _id = RareTulipz.push(_RareTulip);
        RareTulipz.push(_RareTulip);
        uint _id = RareTulipz.length - 1;

        // .push no longer returns the length but a ref to the added element
        _mint(msg.sender, _id);

        _RareTulipzExists[_RareTulip] = true;

    }

    constructor() ERC721Connector('RareTulip','RTL')
 {}

}


