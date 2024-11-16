// // // // // import { useEffect, useState } from 'react';
// // // // // import Web3 from 'web3';

// // // // // function App() {
// // // // //   const [web3, setWeb3] = useState<Web3 | null>(null);
// // // // //   const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
// // // // //   const [isClaiming, setIsClaiming] = useState<boolean>(false);

// // // // //   // Address of the smart contract with the `claim` function
// // // // //   const contractAddress = '0xE44c82aB05F70f172b92B7e253D0F1EDDC48A528';
// // // // //   const contractABI = [
// // // // //     {
// // // // //       inputs: [],
// // // // //       name: 'claim',
// // // // //       outputs: [],
// // // // //       stateMutability: 'nonpayable',
// // // // //       type: 'function',
// // // // //     },
// // // // //   ];

// // // // //   // Initialize Web3 and check for MetaMask
// // // // //   useEffect(() => {
// // // // //     if (window.ethereum) {
// // // // //       setWeb3(new Web3(window.ethereum));
// // // // //     } else {
// // // // //       alert('MetaMask is required. Please install MetaMask.');
// // // // //     }
// // // // //   }, []);

// // // // //   // Connect wallet and fetch accounts
// // // // //   async function connectWallet() {
// // // // //     if (!web3) return;

// // // // //     try {
// // // // //       await window.ethereum.request({ method: 'eth_requestAccounts' });
// // // // //       const accounts = await web3.eth.getAccounts();
// // // // //       setConnectedAccount(accounts[0]);
// // // // //     } catch (error) {
// // // // //       console.error('Error connecting wallet:', error);
// // // // //     }
// // // // //   }

// // // // //   // Call the `claim` function of the contract
// // // // //   async function claimTokens() {
// // // // //     if (!web3 || !connectedAccount) {
// // // // //       alert('Connect your wallet first.');
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       setIsClaiming(true);
// // // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);
// // // // //       const tx = await contract.methods.claim().send({ from: connectedAccount });
// // // // //       console.log('Claim transaction:', tx);
// // // // //       alert('Tokens claimed successfully!');
// // // // //     } catch (error) {
// // // // //       console.error('Error claiming tokens:', error);
// // // // //       alert('Error claiming tokens. Check the console for details.');
// // // // //     } finally {
// // // // //       setIsClaiming(false);
// // // // //     }
// // // // //   }

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         fontFamily: 'Arial, sans-serif',
// // // // //         height: '100vh',
// // // // //         display: 'flex',
// // // // //         flexDirection: 'column',
// // // // //         justifyContent: 'center',
// // // // //         alignItems: 'center',
// // // // //         position: 'relative',
// // // // //       }}
// // // // //     >
// // // // //       {/* Connect Wallet Button (Top Right) */}
// // // // //       <div style={{ position: 'absolute', top: 20, right: 20 }}>
// // // // //         {connectedAccount ? (
// // // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // // //         ) : (
// // // // //           <button
// // // // //             onClick={connectWallet}
// // // // //             style={{
// // // // //               padding: '10px 20px',
// // // // //               fontSize: '16px',
// // // // //               cursor: 'pointer',
// // // // //               backgroundColor: '#0070f3',
// // // // //               color: 'white',
// // // // //               border: 'none',
// // // // //               borderRadius: '5px',
// // // // //             }}
// // // // //           >
// // // // //             Connect Wallet
// // // // //           </button>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Claim Tokens Button (Center) */}
// // // // //       {connectedAccount && (
// // // // //         <button
// // // // //           onClick={claimTokens}
// // // // //           disabled={isClaiming}
// // // // //           style={{
// // // // //             padding: '10px 20px',
// // // // //             fontSize: '16px',
// // // // //             cursor: isClaiming ? 'not-allowed' : 'pointer',
// // // // //             backgroundColor: isClaiming ? 'gray' : '#0070f3',
// // // // //             color: 'white',
// // // // //             border: 'none',
// // // // //             borderRadius: '5px',
// // // // //           }}
// // // // //         >
// // // // //           {isClaiming ? 'Claiming...' : 'Claim Tokens'}
// // // // //         </button>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // import { useEffect, useState } from 'react';
// // // // import Web3 from 'web3';

// // // // function App() {
// // // //   const [web3, setWeb3] = useState<Web3 | null>(null);
// // // //   const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
// // // //   const [isClaiming, setIsClaiming] = useState<boolean>(false);

// // // //   const contractAddress = '0xE44c82aB05F70f172b92B7e253D0F1EDDC48A528';
// // // //   const contractABI = [
// // // //     {
// // // //       inputs: [],
// // // //       name: 'claim',
// // // //       outputs: [],
// // // //       stateMutability: 'nonpayable',
// // // //       type: 'function',
// // // //     },
// // // //   ];

// // // //   useEffect(() => {
// // // //     if (window.ethereum) {
// // // //       setWeb3(new Web3(window.ethereum));
// // // //     } else {
// // // //       alert('MetaMask is required. Please install MetaMask.');
// // // //     }
// // // //   }, []);

// // // //   async function connectWallet() {
// // // //     if (!web3) return;

// // // //     try {
// // // //       await window.ethereum.request({ method: 'eth_requestAccounts' });
// // // //       const accounts = await web3.eth.getAccounts();
// // // //       setConnectedAccount(accounts[0]);
// // // //     } catch (error) {
// // // //       console.error('Error connecting wallet:', error);
// // // //     }
// // // //   }

// // // //   async function claimTokens() {
// // // //     if (!web3 || !connectedAccount) {
// // // //       alert('Connect your wallet first.');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setIsClaiming(true);
// // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);
// // // //       const tx = await contract.methods.claim().send({ from: connectedAccount });
// // // //       console.log('Claim transaction:', tx);
// // // //       alert('Tokens claimed successfully!');
// // // //     } catch (error) {
// // // //       console.error('Error claiming tokens:', error);
// // // //       alert('Error claiming tokens. Check the console for details.');
// // // //     } finally {
// // // //       setIsClaiming(false);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         fontFamily: 'Arial, sans-serif',
// // // //         height: '100vh',
// // // //         display: 'flex',
// // // //         flexDirection: 'column',
// // // //         justifyContent: 'center',
// // // //         alignItems: 'center',
// // // //         position: 'relative',
// // // //         backgroundColor: '#f5f5f5',
// // // //       }}
// // // //     >
// // // //       <div style={{ position: 'absolute', top: 20, right: 20 }}>
// // // //         {connectedAccount ? (
// // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // //         ) : (
// // // //           <button
// // // //             onClick={connectWallet}
// // // //             style={{
// // // //               padding: '10px 20px',
// // // //               fontSize: '16px',
// // // //               cursor: 'pointer',
// // // //               backgroundColor: '#0070f3',
// // // //               color: 'white',
// // // //               border: 'none',
// // // //               borderRadius: '5px',
// // // //             }}
// // // //           >
// // // //             Connect Wallet
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       {connectedAccount && (
// // // //         <div
// // // //           onClick={claimTokens}
// // // //           style={{
// // // //             cursor: 'pointer',
// // // //             position: 'relative',
// // // //             width: '150px',
// // // //             height: '200px',
// // // //             background: 'linear-gradient(145deg, #6cab62, #508b47)',
// // // //             borderRadius: '50% / 30%',
// // // //             display: 'flex',
// // // //             justifyContent: 'center',
// // // //             alignItems: 'center',
// // // //             boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
// // // //           }}
// // // //         >
// // // //           <div
// // // //             className="avocado-pit"
// // // //             style={{
// // // //               width: '60px',
// // // //               height: '60px',
// // // //               background: 'radial-gradient(circle, #7a4f3a, #3e261a)',
// // // //               borderRadius: '50%',
// // // //               transform: isClaiming ? 'scale(0.8)' : 'scale(1)',
// // // //               transition: 'transform 0.2s',
// // // //             }}
// // // //           ></div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;

// // // import { useEffect, useState } from 'react';
// // // import Web3 from 'web3';

// // // function App() {
// // //   const [web3, setWeb3] = useState<Web3 | null>(null);
// // //   const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
// // //   const [isClaiming, setIsClaiming] = useState<boolean>(false);

// // //   const contractAddress = '0xE44c82aB05F70f172b92B7e253D0F1EDDC48A528';
// // //   const contractABI = [
// // //     {
// // //       inputs: [],
// // //       name: 'claim',
// // //       outputs: [],
// // //       stateMutability: 'nonpayable',
// // //       type: 'function',
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     if (window.ethereum) {
// // //       setWeb3(new Web3(window.ethereum));
// // //     } else {
// // //       alert('MetaMask is required. Please install MetaMask.');
// // //     }
// // //   }, []);

// // //   async function connectWallet() {
// // //     if (!web3) return;

// // //     try {
// // //       await window.ethereum.request({ method: 'eth_requestAccounts' });
// // //       const accounts = await web3.eth.getAccounts();
// // //       setConnectedAccount(accounts[0]);
// // //     } catch (error) {
// // //       console.error('Error connecting wallet:', error);
// // //     }
// // //   }

// // //   async function claimTokens() {
// // //     if (!web3 || !connectedAccount) {
// // //       alert('Connect your wallet first.');
// // //       return;
// // //     }

// // //     try {
// // //       setIsClaiming(true);
// // //       const contract = new web3.eth.Contract(contractABI, contractAddress);
// // //       const tx = await contract.methods.claim().send({ from: connectedAccount });
// // //       console.log('Claim transaction:', tx);
// // //       alert('Tokens claimed successfully!');
// // //     } catch (error) {
// // //       console.error('Error claiming tokens:', error);
// // //       alert('Error claiming tokens. Check the console for details.');
// // //     } finally {
// // //       setIsClaiming(false);
// // //     }
// // //   }

// // //   return (
// // //     <div
// // //       style={{
// // //         fontFamily: 'Arial, sans-serif',
// // //         height: '100vh',
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //         justifyContent: 'center',
// // //         alignItems: 'center',
// // //         position: 'relative',
// // //         backgroundColor: '#f5f5f5',
// // //       }}
// // //     >
// // //       {/* Connect Wallet Button (Top Right) */}
// // //       <div style={{ position: 'absolute', top: 20, right: 20 }}>
// // //         {connectedAccount ? (
// // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // //         ) : (
// // //           <button
// // //             onClick={connectWallet}
// // //             style={{
// // //               padding: '10px 20px',
// // //               fontSize: '16px',
// // //               cursor: 'pointer',
// // //               backgroundColor: '#0070f3',
// // //               color: 'white',
// // //               border: 'none',
// // //               borderRadius: '5px',
// // //             }}
// // //           >
// // //             Connect Wallet
// // //           </button>
// // //         )}
// // //       </div>

// // //       {/* Avocado Button */}
// // //       {connectedAccount && (
// // //         <div
// // //           onClick={claimTokens}
// // //           style={{
// // //             cursor: 'pointer',
// // //             position: 'relative',
// // //             width: '180px',
// // //             height: '240px',
// // //             background: 'linear-gradient(145deg, #558b44, #3a6c2f)',
// // //             borderRadius: '50% / 30%',
// // //             display: 'flex',
// // //             justifyContent: 'center',
// // //             alignItems: 'center',
// // //             boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
// // //           }}
// // //         >
// // //           {/* Greenish Yellow Flesh */}
// // //           <div
// // //             style={{
// // //               width: '140px',
// // //               height: '200px',
// // //               background: 'radial-gradient(circle, #a5c663, #9abd3e)',
// // //               borderRadius: '50% / 30%',
// // //               display: 'flex',
// // //               justifyContent: 'center',
// // //               alignItems: 'center',
// // //             }}
// // //           >
// // //             {/* Brown Pit */}
// // //             <div
// // //               className="avocado-pit"
// // //               style={{
// // //                 width: '60px',
// // //                 height: '60px',
// // //                 background: 'radial-gradient(circle, #7a4f3a, #3e261a)',
// // //                 borderRadius: '50%',
// // //                 transform: isClaiming ? 'scale(0.8)' : 'scale(1)',
// // //                 transition: 'transform 0.2s',
// // //               }}
// // //             ></div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import { useEffect, useState } from 'react';
// // import Web3 from 'web3';

// // function App() {
// //   const [web3, setWeb3] = useState<Web3 | null>(null);
// //   const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
// //   const [isClaiming, setIsClaiming] = useState<boolean>(false);

// //   const contractAddress = '0xE44c82aB05F70f172b92B7e253D0F1EDDC48A528';
// //   const contractABI = [
// //     {
// //       inputs: [],
// //       name: 'claim',
// //       outputs: [],
// //       stateMutability: 'nonpayable',
// //       type: 'function',
// //     },
// //   ];

// //   useEffect(() => {
// //     if (window.ethereum) {
// //       setWeb3(new Web3(window.ethereum));
// //     } else {
// //       alert('MetaMask is required. Please install MetaMask.');
// //     }
// //   }, []);

// //   async function connectWallet() {
// //     if (!web3) return;

// //     try {
// //       await window.ethereum.request({ method: 'eth_requestAccounts' });
// //       const accounts = await web3.eth.getAccounts();
// //       setConnectedAccount(accounts[0]);
// //     } catch (error) {
// //       console.error('Error connecting wallet:', error);
// //     }
// //   }

// //   async function claimTokens() {
// //     if (!web3 || !connectedAccount) {
// //       alert('Connect your wallet first.');
// //       return;
// //     }

// //     try {
// //       setIsClaiming(true);
// //       const contract = new web3.eth.Contract(contractABI, contractAddress);
// //       const tx = await contract.methods.claim().send({ from: connectedAccount });
// //       console.log('Claim transaction:', tx);
// //       alert('Tokens claimed successfully!');
// //     } catch (error) {
// //       console.error('Error claiming tokens:', error);
// //       alert('Error claiming tokens. Check the console for details.');
// //     } finally {
// //       setIsClaiming(false);
// //     }
// //   }

// //   return (
// //     <div
// //       style={{
// //         fontFamily: 'Arial, sans-serif',
// //         height: '100vh',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         position: 'relative',
// //         backgroundColor: '#eaf5dc',
// //       }}
// //     >
// //       {/* Connect Wallet Button (Top Right) */}
// //       <div style={{ position: 'absolute', top: 20, right: 20 }}>
// //         {connectedAccount ? (
// //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// //         ) : (
// //           <button
// //             onClick={connectWallet}
// //             style={{
// //               padding: '10px 20px',
// //               fontSize: '16px',
// //               cursor: 'pointer',
// //               backgroundColor: '#0070f3',
// //               color: 'white',
// //               border: 'none',
// //               borderRadius: '5px',
// //             }}
// //           >
// //             Connect Wallet
// //           </button>
// //         )}
// //       </div>

// //       {/* Pear-Shaped Avocado Button */}
// //       {connectedAccount && (
// //         <div
// //           onClick={claimTokens}
// //           style={{
// //             cursor: 'pointer',
// //             position: 'relative',
// //             width: '180px',
// //             height: '250px',
// //             background: 'linear-gradient(145deg, #558b44, #3a6c2f)',
// //             borderRadius: '50% 50% 50% 30% / 50% 50% 30% 30%',
// //             display: 'flex',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
// //           }}
// //         >
// //           {/* Greenish Yellow Flesh */}
// //           <div
// //             style={{
// //               width: '140px',
// //               height: '200px',
// //               background: 'radial-gradient(circle, #a5c663, #9abd3e)',
// //               borderRadius: '50% 50% 50% 30% / 50% 50% 30% 30%',
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //             }}
// //           >
// //             {/* Brown Pit */}
// //             <div
// //               className="avocado-pit"
// //               style={{
// //                 width: '60px',
// //                 height: '60px',
// //                 background: 'radial-gradient(circle, #7a4f3a, #3e261a)',
// //                 borderRadius: '50%',
// //                 transform: isClaiming ? 'scale(0.8)' : 'scale(1)',
// //                 transition: 'transform 0.2s',
// //               }}
// //             ></div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default App;

// import { useEffect, useState } from 'react';
// import Web3 from 'web3';

// function App() {
//   const [web3, setWeb3] = useState<Web3 | null>(null);
//   const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
//   const [isClaiming, setIsClaiming] = useState<boolean>(false);

//   const contractAddress = '0xE44c82aB05F70f172b92B7e253D0F1EDDC48A528';
//   const contractABI = [
//     {
//       inputs: [],
//       name: 'claim',
//       outputs: [],
//       stateMutability: 'nonpayable',
//       type: 'function',
//     },
//   ];

//   useEffect(() => {
//     if (window.ethereum) {
//       setWeb3(new Web3(window.ethereum));
//     } else {
//       alert('MetaMask is required. Please install MetaMask.');
//     }
//   }, []);

//   async function connectWallet() {
//     if (!web3) return;

//     try {
//       await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const accounts = await web3.eth.getAccounts();
//       setConnectedAccount(accounts[0]);
//     } catch (error) {
//       console.error('Error connecting wallet:', error);
//     }
//   }

//   async function claimTokens() {
//     if (!web3 || !connectedAccount) {
//       alert('Connect your wallet first.');
//       return;
//     }

//     try {
//       setIsClaiming(true);
//       const contract = new web3.eth.Contract(contractABI, contractAddress);
//       const tx = await contract.methods.claim().send({ from: connectedAccount });
//       console.log('Claim transaction:', tx);
//       alert('Tokens claimed successfully!');
//     } catch (error) {
//       console.error('Error claiming tokens:', error);
//       alert('Error claiming tokens. Check the console for details.');
//     } finally {
//       setIsClaiming(false);
//     }
//   }

//   return (
//     <div
//       style={{
//         fontFamily: 'Arial, sans-serif',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative',
//         backgroundColor: '#eaf5dc',
//       }}
//     >
//       {/* Connect Wallet Button (Top Right) */}
//       <div style={{ position: 'absolute', top: 20, right: 20 }}>
//         {connectedAccount ? (
//           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
//         ) : (
//           <button
//             onClick={connectWallet}
//             style={{
//               padding: '10px 20px',
//               fontSize: '16px',
//               cursor: 'pointer',
//               backgroundColor: '#0070f3',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//             }}
//           >
//             Connect Wallet
//           </button>
//         )}
//       </div>

//       {/* Realistic Avocado Button */}
//       {connectedAccount && (
//         <div
//           onClick={claimTokens}
//           style={{
//             cursor: 'pointer',
//             position: 'relative',
//             width: '160px',
//             height: '240px',
//             background: 'linear-gradient(145deg, #558b44, #3a6c2f)',
//             borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
//           }}
//         >
//           {/* Greenish Yellow Flesh */}
//           <div
//             style={{
//               width: '120px',
//               height: '200px',
//               background: 'radial-gradient(circle, #a5c663, #9abd3e)',
//               borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             {/* Brown Pit */}
//             <div
//               className="avocado-pit"
//               style={{
//                 width: '50px',
//                 height: '50px',
//                 background: 'radial-gradient(circle, #7a4f3a, #3e261a)',
//                 borderRadius: '50%',
//                 transform: isClaiming ? 'scale(0.8)' : 'scale(1)',
//                 transition: 'transform 0.2s',
//               }}
//             ></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  const [web3, setWeb3] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [message, setMessage] = useState(null); // Message state

  const contractAddress = '0xE44c82aB05F70f172b92B7e253D0F1EDDC48A528';
  const contractABI = [
    {
      inputs: [],
      name: 'claim',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ];

  // useEffect(() => {
  //   const initializeWeb3 = async () => {
  //     const RPC_URL = "https://mainnet.evm.nodes.onflow.org";
  //     const CHAIN_ID = "0x2EB"; // Chain ID 747 in hexadecimal
  
  //     try {
  //       if (window.ethereum) {
  //         // Request to switch to the Flow EVM network if MetaMask is available
  //         await window.ethereum.request({
  //           method: "wallet_addEthereumChain",
  //           params: [
  //             {
  //               chainId: CHAIN_ID,
  //               chainName: "Flow EVM",
  //               rpcUrls: [RPC_URL],
  //               nativeCurrency: {
  //                 name: "FLOW",
  //                 symbol: "FLOW",
  //                 decimals: 18,
  //               },
  //               blockExplorerUrls: ["https://evm.flowscan.io"],
  //             },
  //           ],
  //         });
  
  //         setWeb3(new Web3(window.ethereum));
  //         console.log("Web3 initialized using MetaMask.");
  //       } else {
  //         // Fallback to direct RPC for non-MetaMask users
  //         const provider = new Web3.providers.HttpProvider(RPC_URL);
  //         setWeb3(new Web3(provider));
  //         console.log("Web3 initialized using direct RPC.");
  //       }
  //     } catch (error) {
  //       console.error("Error initializing Web3:", error);
  //     }
  //   };
  
  //   initializeWeb3();
  // }, []);

  useEffect(() => {
    const initializeWeb3 = async () => {
      const RPC_URL = "https://mainnet.evm.nodes.onflow.org";
      const CHAIN_ID = "0x2EB"; // Chain ID 747 in hexadecimal
  
      try {
        if (window.ethereum) {
          // Request to switch to the Flow EVM network if MetaMask is available
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: CHAIN_ID,
                chainName: "Flow EVM",
                rpcUrls: [RPC_URL],
                nativeCurrency: {
                  name: "FLOW",
                  symbol: "FLOW",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://evm.flowscan.io"],
              },
            ],
          });
  
          setWeb3(new Web3(window.ethereum));
          console.log("Web3 initialized using MetaMask.");
        } else {
          // Fallback to direct RPC for non-MetaMask users
          const provider = new Web3.providers.HttpProvider(RPC_URL);
          setWeb3(new Web3(provider));
          console.log("Web3 initialized using direct RPC.");
        }
      } catch (error) {
        console.error("Error initializing Web3:", error);
      }
    };
  
    initializeWeb3();
  }, []);
  
  
  

  async function connectWallet() {
    try {
      if (!web3) {
        console.error("Web3 is not initialized. Make sure the network is set up correctly.");
        return;
      }
  
      if (window.ethereum) {
        // Use MetaMask to request accounts
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setConnectedAccount(accounts[0]);
          console.log("Wallet connected:", accounts[0], accounts);
        } else {
          console.error("No accounts found.");
        }
      } else {
        console.error("Ethereum provider not detected. Install MetaMask or use a compatible wallet.");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  }

  async function switchToFlowNetwork() {
    const FLOW_CHAIN_ID = "0x2EB"; // Chain ID 747 in hex
    const RPC_URL = "https://mainnet.evm.nodes.onflow.org";
  
    try {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: FLOW_CHAIN_ID,
            chainName: "Flow EVM",
            rpcUrls: [RPC_URL],
            nativeCurrency: {
              name: "FLOW",
              symbol: "FLOW",
              decimals: 18,
            },
            blockExplorerUrls: ["https://evm.flowscan.io"],
          },
        ],
      });
  
      console.log("Flow EVM network added or switched.");
    } catch (error) {
      console.error("Error adding/switching to Flow EVM network:", error);
    }
  }
  
  

  async function claimTokens() {
    if (!web3 || !connectedAccount) {
      setMessage('Connect your wallet first.');
      fadeMessage();
      return;
    }

    try {
      setIsClaiming(true);
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      await contract.methods.claim().send({ from: connectedAccount });
      setMessage('Tokens claimed successfully!');
    } catch (error) {
      console.error('Error claiming tokens:', error);
      setMessage('Error claiming tokens. Check the console for details.');
    } finally {
      setIsClaiming(false);
      fadeMessage();
    }
  }

  function fadeMessage() {
    setTimeout(() => {
      setMessage(null);
    }, 3000); // Fades the message after 3 seconds
  }

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: '#eaf5dc',
      }}
    >
      {/* Connect Wallet Button (Top Right) */}
      <div style={{ position: 'absolute', top: 20, right: 20 }}>
        {connectedAccount ? (
          <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
        ) : (
          <button
            onClick={connectWallet}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {/* Realistic Avocado Button */}
      {connectedAccount && (
        <div
          onClick={claimTokens}
          style={{
            cursor: 'pointer',
            position: 'relative',
            width: '160px',
            height: '240px',
            background: 'linear-gradient(145deg, #558b44, #3a6c2f)',
            borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Greenish Yellow Flesh */}
          <div
            style={{
              width: '120px',
              height: '200px',
              background: 'radial-gradient(circle, #a5c663, #9abd3e)',
              borderRadius: '50% 50% 40% 40% / 60% 60% 40% 40%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Brown Pit with Hover Shake */}
            <div
              className="avocado-pit"
              style={{
                width: '50px',
                height: '50px',
                background: 'radial-gradient(circle, #7a4f3a, #3e261a)',
                borderRadius: '50%',
                transform: isClaiming ? 'scale(0.8)' : 'scale(1)',
                transition: 'transform 0.2s',
                animation: 'shake 0.5s infinite',
                animationPlayState: 'paused', // Default paused
              }}
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'running')}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
            ></div>
          </div>
        </div>
      )}

      {/* Fading Message */}
      {message && (
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            background: '#ffffff',
            color: '#333',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            opacity: message ? 1 : 0,
            transition: 'opacity 1s',
          }}
        >
          {message}
        </div>
      )}

      {/* Keyframe for Shake Animation */}
      <style>
        {`
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-2px);
            }
            50% {
              transform: translateX(2px);
            }
            75% {
              transform: translateX(-2px);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
