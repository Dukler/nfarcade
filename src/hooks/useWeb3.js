// import Web3 from 'web3'
import { ethers } from "ethers";
import React, { useEffect, useState } from 'react';

const useWeb3 = ({onMountConnect}) => {
    const [account, setAccount] = useState({})
    const [web3, setWeb3] = useState({})
    const [provider, setProvider] = useState(null)
    const [signer, setSigner] = useState(null)
    const [isConnected, setIsConnected] = useState(false)
    const [isConnecting, setIsConnecting] = useState(false);
    // const web3 = new Web3(window.web3.currentProvider);

    const detectProvider = () => {
        let auxProvider = null;
        if (window.ethereum) {
            auxProvider = new ethers.providers.Web3Provider(window.ethereum);
        } else if (window.web3) {
            auxProvider = new ethers.providers.Web3Provider(window.web3.currentProvider);
        } else {
            window.alert("No Ethereum browser detected! Check out MetaMask");
        }
        setProvider(auxProvider)
        setSigner(auxProvider.getSigner())
    };

    const readAccount = async () => {
        console.log("Account:", await signer.getAddress());
    }

    const connect = async () => {
        if (provider) {
            if (provider !== window.ethereum) {
                console.error(
                    "Not window.ethereum provider. Do you have multiple wallet installed ?"
                );
            }
            setIsConnecting(true);
            await provider.send("eth_requestAccounts", []);
            
            setIsConnecting(false);
        }
    }

    useEffect(() => {
        detectProvider()
        connect()
        
        // window.ethereum.on('accountsChanged', (accounts) => {
        //     // Meteor.logout((err) => {
        //     //     console.log(err)
        //     // })
        //     // location.reload(true);
        // })
    }, [])

    return { web3, isConnected, provider, isConnecting, signer, readAccount }
}

export default useWeb3