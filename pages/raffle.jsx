// // // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // // import Web3 from "web3";

// // // // // // // // // function Raffle() {
// // // // // // // // //   const [web3, setWeb3] = useState(null);
// // // // // // // // //   const [connectedAccount, setConnectedAccount] = useState(null);
// // // // // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // // // // //   const [resultMessage, setResultMessage] = useState(null); // Message for result
// // // // // // // // //   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0);

// // // // // // // // //   // Contract and token details
// // // // // // // // //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// // // // // // // // //   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
// // // // // // // // //   const spendAmount = Web3.utils.toWei("1", "ether"); // 1 token in wei

 

// // // // // // // // //   const contractABI = [
// // // // // // // // //     {
// // // // // // // // //       inputs: [],
// // // // // // // // //       name: "playRaffle",
// // // // // // // // //       outputs: [],
// // // // // // // // //       stateMutability: "nonpayable",
// // // // // // // // //       type: "function",
// // // // // // // // //     },
// // // // // // // // //   ];

// // // // // // // // //   const tokenABI = [
// // // // // // // // //     {
// // // // // // // // //       inputs: [
// // // // // // // // //         { internalType: "address", name: "owner", type: "address" },
// // // // // // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // // // // // //       ],
// // // // // // // // //       name: "allowance",
// // // // // // // // //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// // // // // // // // //       stateMutability: "view",
// // // // // // // // //       type: "function",
// // // // // // // // //     },
// // // // // // // // //     {
// // // // // // // // //       inputs: [
// // // // // // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // // // // // //         { internalType: "uint256", name: "amount", type: "uint256" },
// // // // // // // // //       ],
// // // // // // // // //       name: "approve",
// // // // // // // // //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
// // // // // // // // //       stateMutability: "nonpayable",
// // // // // // // // //       type: "function",
// // // // // // // // //     },
// // // // // // // // //   ];

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (window.ethereum) {
// // // // // // // // //       setWeb3(new Web3(window.ethereum));
// // // // // // // // //     }
// // // // // // // // //   }, []);

// // // // // // // // //   async function connectWallet() {
// // // // // // // // //     if (!web3) return;

// // // // // // // // //     try {
// // // // // // // // //       await window.ethereum.request({ method: "eth_requestAccounts" });
// // // // // // // // //       const accounts = await web3.eth.getAccounts();
// // // // // // // // //       setConnectedAccount(accounts[0]);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error connecting wallet:", error);
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   async function getAllowance() {
// // // // // // // // //     if (!web3 || !connectedAccount) return;

// // // // // // // // //     try {
// // // // // // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // // // // // //       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
// // // // // // // // //       setSpendTokenAllowance(allowance);
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error fetching allowance:", error);
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   async function approveToken() {
// // // // // // // // //     if (!web3 || !connectedAccount) return;

// // // // // // // // //     try {
// // // // // // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // // // // // //       await tokenContract.methods.approve(contractAddress, spendAmount).send({ from: connectedAccount });
// // // // // // // // //       setSpendTokenAllowance(spendAmount); // Update allowance locally
// // // // // // // // //       setResultMessage("Token approved successfully!");
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error approving token:", error);
// // // // // // // // //       setResultMessage("Error approving token. Please check the console.");
// // // // // // // // //     }
// // // // // // // // //   }

  

// // // // // // // // // async function playRaffle() {

// // // // // // // // //     const token_mapping = {
// // // // // // // // //         "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// // // // // // // // //         "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL"
// // // // // // // // //       }

// // // // // // // // //     if (!web3 || !connectedAccount) {
// // // // // // // // //       setResultMessage("Connect your wallet first.");
// // // // // // // // //       return;
// // // // // // // // //     }
  
// // // // // // // // //     try {
// // // // // // // // //       setIsPlaying(true);
// // // // // // // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);
  
// // // // // // // // //       // Estimate gas and gas price
// // // // // // // // //       const estimatedGas = await contract.methods.playRaffle().estimateGas({
// // // // // // // // //         from: connectedAccount,
// // // // // // // // //       });
// // // // // // // // //       const gasPrice = await web3.eth.getGasPrice();
  
// // // // // // // // //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.5); // Add 20% buffer
// // // // // // // // //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.4); // Increase gas price by 10%
  
// // // // // // // // //       const tx = await contract.methods.playRaffle().send({
// // // // // // // // //         from: connectedAccount,
// // // // // // // // //         gas: adjustedGas,
// // // // // // // // //         gasPrice: adjustedGasPrice.toString(),
// // // // // // // // //       });
  
// // // // // // // // //       // Check for events in tx.events
// // // // // // // // //       if (tx.events && tx.events.PrizeWon) {
// // // // // // // // //         const { token, amount } = tx.events.PrizeWon.returnValues;
// // // // // // // // //         setResultMessage(`You won ${Web3.utils.fromWei(amount, "ether")} tokens from ${token}!`);
// // // // // // // // //       } else {
// // // // // // // // //         // Manually decode logs if PrizeWon is not in tx.events
// // // // // // // // //         const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
  
// // // // // // // // //         const eventABI = {
// // // // // // // // //           anonymous: false,
// // // // // // // // //           inputs: [
// // // // // // // // //             { indexed: true, internalType: "address", name: "user", type: "address" },
// // // // // // // // //             { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// // // // // // // // //             { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// // // // // // // // //           ],
// // // // // // // // //           name: "PrizeWon",
// // // // // // // // //           type: "event",
// // // // // // // // //         };
  
// // // // // // // // //         const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// // // // // // // // //         const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);
  
// // // // // // // // //         if (logs.length > 0) {
// // // // // // // // //           const decoded = web3.eth.abi.decodeLog(
// // // // // // // // //             eventABI.inputs,
// // // // // // // // //             logs[0].data,
// // // // // // // // //             logs[0].topics.slice(1)
// // // // // // // // //           );
// // // // // // // // //           setResultMessage(`You won ${Web3.utils.fromWei(decoded.amount, "ether")} tokens from ${token_mapping[decoded.tokenAddress]}!`);
// // // // // // // // //           console.log('decoded', decoded.tokenAddress, token_mapping, token_mapping[decoded.tokenAddress]);
// // // // // // // // //         } else {
// // // // // // // // //           setResultMessage("Better luck next time! No prize this time.");
// // // // // // // // //         }
// // // // // // // // //       }
// // // // // // // // //     } catch (error) {
// // // // // // // // //       console.error("Error playing raffle:", error);
// // // // // // // // //       setResultMessage("Error playing raffle. Please check the console.");
// // // // // // // // //     } finally {
// // // // // // // // //       setIsPlaying(false);
// // // // // // // // //     }
// // // // // // // // //   }
  
  

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (connectedAccount) {
// // // // // // // // //       getAllowance(); // Fetch allowance when account is connected
// // // // // // // // //     }
// // // // // // // // //   }, [connectedAccount]);

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       style={{
// // // // // // // // //         fontFamily: "Arial, sans-serif",
// // // // // // // // //         height: "100vh",
// // // // // // // // //         display: "flex",
// // // // // // // // //         flexDirection: "column",
// // // // // // // // //         justifyContent: "center",
// // // // // // // // //         alignItems: "center",
// // // // // // // // //         position: "relative",
// // // // // // // // //         backgroundColor: "#fdf5e6",
// // // // // // // // //       }}
// // // // // // // // //     >
// // // // // // // // //       {/* Connect Wallet Button (Top Right) */}
// // // // // // // // //       <div style={{ position: "absolute", top: 20, right: 20 }}>
// // // // // // // // //         {connectedAccount ? (
// // // // // // // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // // // // // // //         ) : (
// // // // // // // // //           <button
// // // // // // // // //             onClick={connectWallet}
// // // // // // // // //             style={{
// // // // // // // // //               padding: "10px 20px",
// // // // // // // // //               fontSize: "16px",
// // // // // // // // //               cursor: "pointer",
// // // // // // // // //               backgroundColor: "#0070f3",
// // // // // // // // //               color: "white",
// // // // // // // // //               border: "none",
// // // // // // // // //               borderRadius: "5px",
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             Connect Wallet
// // // // // // // // //           </button>
// // // // // // // // //         )}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Raffle Actions */}
// // // // // // // // //       {connectedAccount && (
// // // // // // // // //         <div>
// // // // // // // // //           {spendTokenAllowance < spendAmount ? (
// // // // // // // // //             <button
// // // // // // // // //               onClick={approveToken}
// // // // // // // // //               style={{
// // // // // // // // //                 padding: "10px 20px",
// // // // // // // // //                 fontSize: "16px",
// // // // // // // // //                 cursor: "pointer",
// // // // // // // // //                 backgroundColor: "#ffc107",
// // // // // // // // //                 color: "black",
// // // // // // // // //                 border: "none",
// // // // // // // // //                 borderRadius: "5px",
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               Approve Token
// // // // // // // // //             </button>
// // // // // // // // //           ) : (
// // // // // // // // //             <button
// // // // // // // // //               onClick={playRaffle}
// // // // // // // // //               disabled={isPlaying}
// // // // // // // // //               style={{
// // // // // // // // //                 padding: "10px 20px",
// // // // // // // // //                 fontSize: "16px",
// // // // // // // // //                 cursor: isPlaying ? "not-allowed" : "pointer",
// // // // // // // // //                 backgroundColor: isPlaying ? "gray" : "#4caf50",
// // // // // // // // //                 color: "white",
// // // // // // // // //                 border: "none",
// // // // // // // // //                 borderRadius: "5px",
// // // // // // // // //               }}
// // // // // // // // //             >
// // // // // // // // //               {isPlaying ? "Playing..." : "Play Raffle"}
// // // // // // // // //             </button>
// // // // // // // // //           )}
// // // // // // // // //         </div>
// // // // // // // // //       )}

// // // // // // // // //       {/* Result Message */}
// // // // // // // // //       {resultMessage && (
// // // // // // // // //         <div
// // // // // // // // //           style={{
// // // // // // // // //             marginTop: "20px",
// // // // // // // // //             padding: "10px 20px",
// // // // // // // // //             backgroundColor: "#ffffff",
// // // // // // // // //             color: "#333",
// // // // // // // // //             borderRadius: "8px",
// // // // // // // // //             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // // // //             textAlign: "center",
// // // // // // // // //           }}
// // // // // // // // //         >
// // // // // // // // //           {resultMessage}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default Raffle;


// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import Web3 from "web3";

// // // // // // // // function Raffle() {
// // // // // // // //   const [web3, setWeb3] = useState(null);
// // // // // // // //   const [connectedAccount, setConnectedAccount] = useState(null);
// // // // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // // // //   const [resultMessage, setResultMessage] = useState(null); // Message for result
// // // // // // // //   const [resultTokens, setResultTokens] = useState(null); // Tokens earned
// // // // // // // //   const [pitFallen, setPitFallen] = useState(false); // Tracks pit animation

// // // // // // // //   const tokenMapping = {
// // // // // // // //     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// // // // // // // //     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
// // // // // // // //   };

// // // // // // // //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// // // // // // // //   const contractABI = [
// // // // // // // //     {
// // // // // // // //       inputs: [],
// // // // // // // //       name: "playRaffle",
// // // // // // // //       outputs: [],
// // // // // // // //       stateMutability: "nonpayable",
// // // // // // // //       type: "function",
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (window.ethereum) {
// // // // // // // //       setWeb3(new Web3(window.ethereum));
// // // // // // // //     }
// // // // // // // //   }, []);

// // // // // // // //   async function connectWallet() {
// // // // // // // //     if (!web3) return;

// // // // // // // //     try {
// // // // // // // //       await window.ethereum.request({ method: "eth_requestAccounts" });
// // // // // // // //       const accounts = await web3.eth.getAccounts();
// // // // // // // //       setConnectedAccount(accounts[0]);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error connecting wallet:", error);
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   async function playRaffle() {
// // // // // // // //     if (!web3 || !connectedAccount) {
// // // // // // // //       setResultMessage("Connect your wallet first.");
// // // // // // // //       return;
// // // // // // // //     }

// // // // // // // //     try {
// // // // // // // //       setIsPlaying(true);
// // // // // // // //       setResultMessage(null);
// // // // // // // //       setPitFallen(false); // Reset pit animation

// // // // // // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);

// // // // // // // //       // Estimate gas and gas price
// // // // // // // //       const estimatedGas = await contract.methods.playRaffle().estimateGas({
// // // // // // // //         from: connectedAccount,
// // // // // // // //       });
// // // // // // // //       const gasPrice = await web3.eth.getGasPrice();

// // // // // // // //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.2); // Add buffer
// // // // // // // //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.1);

// // // // // // // //       const tx = await contract.methods.playRaffle().send({
// // // // // // // //         from: connectedAccount,
// // // // // // // //         gas: adjustedGas,
// // // // // // // //         gasPrice: adjustedGasPrice.toString(),
// // // // // // // //       });

// // // // // // // //       // Check for events
// // // // // // // //       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
// // // // // // // //       const eventABI = {
// // // // // // // //         anonymous: false,
// // // // // // // //         inputs: [
// // // // // // // //           { indexed: true, internalType: "address", name: "user", type: "address" },
// // // // // // // //           { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// // // // // // // //           { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// // // // // // // //         ],
// // // // // // // //         name: "PrizeWon",
// // // // // // // //         type: "event",
// // // // // // // //       };

// // // // // // // //       const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// // // // // // // //       const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

// // // // // // // //       if (logs.length > 0) {
// // // // // // // //         const decoded = web3.eth.abi.decodeLog(
// // // // // // // //           eventABI.inputs,
// // // // // // // //           logs[0].data,
// // // // // // // //           logs[0].topics.slice(1)
// // // // // // // //         );

// // // // // // // //         const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
// // // // // // // //         const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
// // // // // // // //         setResultTokens({ amount: tokenAmount, name: tokenName });
// // // // // // // //       } else {
// // // // // // // //         setResultTokens({ amount: null, name: null });
// // // // // // // //       }

// // // // // // // //       setPitFallen(true); // Trigger pit fall animation
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error playing raffle:", error);
// // // // // // // //       setResultMessage("Error playing raffle. Please check the console.");
// // // // // // // //     } finally {
// // // // // // // //       setIsPlaying(false);
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       style={{
// // // // // // // //         fontFamily: "Arial, sans-serif",
// // // // // // // //         height: "100vh",
// // // // // // // //         display: "flex",
// // // // // // // //         flexDirection: "column",
// // // // // // // //         justifyContent: "center",
// // // // // // // //         alignItems: "center",
// // // // // // // //         position: "relative",
// // // // // // // //         backgroundColor: "#fdf5e6",
// // // // // // // //       }}
// // // // // // // //     >
// // // // // // // //       {/* Connect Wallet Button (Top Right) */}
// // // // // // // //       <div style={{ position: "absolute", top: 20, right: 20 }}>
// // // // // // // //         {connectedAccount ? (
// // // // // // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // // // // // //         ) : (
// // // // // // // //           <button
// // // // // // // //             onClick={connectWallet}
// // // // // // // //             style={{
// // // // // // // //               padding: "10px 20px",
// // // // // // // //               fontSize: "16px",
// // // // // // // //               cursor: "pointer",
// // // // // // // //               backgroundColor: "#0070f3",
// // // // // // // //               color: "white",
// // // // // // // //               border: "none",
// // // // // // // //               borderRadius: "5px",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             Connect Wallet
// // // // // // // //           </button>
// // // // // // // //         )}
// // // // // // // //       </div>

// // // // // // // //       {/* Avocado Button */}
// // // // // // // //       {connectedAccount && (
// // // // // // // //         <div
// // // // // // // //           style={{
// // // // // // // //             cursor: "pointer",
// // // // // // // //             position: "relative",
// // // // // // // //             width: "160px",
// // // // // // // //             height: "240px",
// // // // // // // //             background: "linear-gradient(145deg, #558b44, #3a6c2f)",
// // // // // // // //             borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // // // // //             display: "flex",
// // // // // // // //             justifyContent: "center",
// // // // // // // //             alignItems: "center",
// // // // // // // //             boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
// // // // // // // //           }}
// // // // // // // //           onClick={playRaffle}
// // // // // // // //         >
// // // // // // // //           {/* Greenish Yellow Flesh */}
// // // // // // // //           <div
// // // // // // // //             style={{
// // // // // // // //               width: "120px",
// // // // // // // //               height: "200px",
// // // // // // // //               background: "radial-gradient(circle, #a5c663, #9abd3e)",
// // // // // // // //               borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // // // // //               display: "flex",
// // // // // // // //               justifyContent: "center",
// // // // // // // //               alignItems: "center",
// // // // // // // //               position: "relative",
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             {/* Brown Pit with Animation */}
// // // // // // // //             <div
// // // // // // // //               style={{
// // // // // // // //                 width: "50px",
// // // // // // // //                 height: "50px",
// // // // // // // //                 background: "radial-gradient(circle, #7a4f3a, #3e261a)",
// // // // // // // //                 borderRadius: "50%",
// // // // // // // //                 transform: pitFallen ? "translateY(300px)" : "translateY(0)",
// // // // // // // //                 transition: pitFallen ? "transform 0.6s ease-in" : "none",
// // // // // // // //               }}
// // // // // // // //             ></div>

// // // // // // // //             {/* Dark Green Hole with Result */}
// // // // // // // //             {pitFallen && (
// // // // // // // //               <div
// // // // // // // //                 style={{
// // // // // // // //                   position: "absolute",
// // // // // // // //                   top: "50%",
// // // // // // // //                   left: "50%",
// // // // // // // //                   transform: "translate(-50%, -50%)",
// // // // // // // //                   color: "#fff",
// // // // // // // //                   textAlign: "center",
// // // // // // // //                   fontSize: "16px",
// // // // // // // //                   lineHeight: "20px",
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 {resultTokens?.amount ? (
// // // // // // // //                   <>
// // // // // // // //                     <div style={{ fontSize: "20px", fontWeight: "bold" }}>
// // // // // // // //                       {resultTokens.amount}
// // // // // // // //                     </div>
// // // // // // // //                     <div>{resultTokens.name}</div>
// // // // // // // //                   </>
// // // // // // // //                 ) : (
// // // // // // // //                   <>
// // // // // // // //                     <div style={{ fontSize: "20px", fontWeight: "bold" }}>Sorry!</div>
// // // // // // // //                     <div>Try again</div>
// // // // // // // //                   </>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             )}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       )}

// // // // // // // //       {/* Result Message */}
// // // // // // // //       {resultMessage && (
// // // // // // // //         <div
// // // // // // // //           style={{
// // // // // // // //             marginTop: "20px",
// // // // // // // //             padding: "10px 20px",
// // // // // // // //             backgroundColor: "#ffffff",
// // // // // // // //             color: "#333",
// // // // // // // //             borderRadius: "8px",
// // // // // // // //             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // // //             textAlign: "center",
// // // // // // // //           }}
// // // // // // // //         >
// // // // // // // //           {resultMessage}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Raffle;

// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import Web3 from "web3";

// // // // // // // function Raffle() {
// // // // // // //   const [web3, setWeb3] = useState(null);
// // // // // // //   const [connectedAccount, setConnectedAccount] = useState(null);
// // // // // // //   const [isPlaying, setIsPlaying] = useState(false);
// // // // // // //   const [resultMessage, setResultMessage] = useState(null); // Message for result
// // // // // // //   const [resultTokens, setResultTokens] = useState(null); // Tokens earned
// // // // // // //   const [pitFallen, setPitFallen] = useState(false); // Tracks pit animation
// // // // // // //   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0); // Tracks token allowance

// // // // // // //   const tokenMapping = {
// // // // // // //     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// // // // // // //     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
// // // // // // //   };

// // // // // // //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// // // // // // //   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
// // // // // // //   const spendAmount = Web3.utils.toWei("1", "ether"); // 1 token in wei

// // // // // // //   const contractABI = [
// // // // // // //     {
// // // // // // //       inputs: [],
// // // // // // //       name: "playRaffle",
// // // // // // //       outputs: [],
// // // // // // //       stateMutability: "nonpayable",
// // // // // // //       type: "function",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   const tokenABI = [
// // // // // // //     {
// // // // // // //       inputs: [
// // // // // // //         { internalType: "address", name: "owner", type: "address" },
// // // // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // // // //       ],
// // // // // // //       name: "allowance",
// // // // // // //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// // // // // // //       stateMutability: "view",
// // // // // // //       type: "function",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       inputs: [
// // // // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // // // //         { internalType: "uint256", name: "amount", type: "uint256" },
// // // // // // //       ],
// // // // // // //       name: "approve",
// // // // // // //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
// // // // // // //       stateMutability: "nonpayable",
// // // // // // //       type: "function",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   useEffect(() => {
// // // // // // //     if (window.ethereum) {
// // // // // // //       setWeb3(new Web3(window.ethereum));
// // // // // // //     }
// // // // // // //   }, []);

// // // // // // //   async function connectWallet() {
// // // // // // //     if (!web3) return;

// // // // // // //     try {
// // // // // // //       await window.ethereum.request({ method: "eth_requestAccounts" });
// // // // // // //       const accounts = await web3.eth.getAccounts();
// // // // // // //       setConnectedAccount(accounts[0]);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error connecting wallet:", error);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   async function getAllowance() {
// // // // // // //     if (!web3 || !connectedAccount) return;

// // // // // // //     try {
// // // // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // // // //       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
// // // // // // //       setSpendTokenAllowance(allowance);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error fetching allowance:", error);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   async function approveToken() {
// // // // // // //     if (!web3 || !connectedAccount) return;

// // // // // // //     try {
// // // // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // // // //       await tokenContract.methods.approve(contractAddress, spendAmount).send({ from: connectedAccount });
// // // // // // //       setSpendTokenAllowance(spendAmount); // Update allowance locally
// // // // // // //       setResultMessage("Token approved successfully!");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error approving token:", error);
// // // // // // //       setResultMessage("Error approving token. Please check the console.");
// // // // // // //     }
// // // // // // //   }

// // // // // // //   async function playRaffle() {
// // // // // // //     if (!web3 || !connectedAccount) {
// // // // // // //       setResultMessage("Connect your wallet first.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     if (spendTokenAllowance < spendAmount) {
// // // // // // //       setResultMessage("Insufficient allowance. Please approve the token.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       setIsPlaying(true);
// // // // // // //       setResultMessage(null);
// // // // // // //       setPitFallen(false); // Reset pit animation

// // // // // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);

// // // // // // //       // Estimate gas and gas price
// // // // // // //       const estimatedGas = await contract.methods.playRaffle().estimateGas({
// // // // // // //         from: connectedAccount,
// // // // // // //       });
// // // // // // //       const gasPrice = await web3.eth.getGasPrice();

// // // // // // //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.2); // Add buffer
// // // // // // //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.1);

// // // // // // //       const tx = await contract.methods.playRaffle().send({
// // // // // // //         from: connectedAccount,
// // // // // // //         gas: adjustedGas,
// // // // // // //         gasPrice: adjustedGasPrice.toString(),
// // // // // // //       });

// // // // // // //       // Process result
// // // // // // //       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
// // // // // // //       const eventABI = {
// // // // // // //         anonymous: false,
// // // // // // //         inputs: [
// // // // // // //           { indexed: true, internalType: "address", name: "user", type: "address" },
// // // // // // //           { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// // // // // // //           { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// // // // // // //         ],
// // // // // // //         name: "PrizeWon",
// // // // // // //         type: "event",
// // // // // // //       };

// // // // // // //       const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// // // // // // //       const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

// // // // // // //       if (logs.length > 0) {
// // // // // // //         const decoded = web3.eth.abi.decodeLog(
// // // // // // //           eventABI.inputs,
// // // // // // //           logs[0].data,
// // // // // // //           logs[0].topics.slice(1)
// // // // // // //         );

// // // // // // //         const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
// // // // // // //         const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
// // // // // // //         setResultTokens({ amount: tokenAmount, name: tokenName });
// // // // // // //       } else {
// // // // // // //         setResultTokens({ amount: null, name: null });
// // // // // // //       }

// // // // // // //       setPitFallen(true); // Trigger pit fall animation
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error playing raffle:", error);
// // // // // // //       setResultMessage("Error playing raffle. Please check the console.");
// // // // // // //     } finally {
// // // // // // //       setIsPlaying(false);
// // // // // // //     }
// // // // // // //   }

// // // // // // //   useEffect(() => {
// // // // // // //     if (connectedAccount) {
// // // // // // //       getAllowance(); // Fetch allowance when account is connected
// // // // // // //     }
// // // // // // //   }, [connectedAccount]);

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       style={{
// // // // // // //         fontFamily: "Arial, sans-serif",
// // // // // // //         height: "100vh",
// // // // // // //         display: "flex",
// // // // // // //         flexDirection: "column",
// // // // // // //         justifyContent: "center",
// // // // // // //         alignItems: "center",
// // // // // // //         position: "relative",
// // // // // // //         backgroundColor: '#eaf5dc',
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* Connect Wallet Button (Top Right) */}
// // // // // // //       <div style={{ position: "absolute", top: 20, right: 20 }}>
// // // // // // //         {connectedAccount ? (
// // // // // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // // // // //         ) : (
// // // // // // //           <button
// // // // // // //             onClick={connectWallet}
// // // // // // //             style={{
// // // // // // //               padding: "10px 20px",
// // // // // // //               fontSize: "16px",
// // // // // // //               cursor: "pointer",
// // // // // // //               backgroundColor: "#0070f3",
// // // // // // //               color: "white",
// // // // // // //               border: "none",
// // // // // // //               borderRadius: "5px",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Connect Wallet
// // // // // // //           </button>
// // // // // // //         )}
// // // // // // //       </div>

// // // // // // //       {/* Avocado Button */}
// // // // // // //       {connectedAccount && (
// // // // // // //         spendTokenAllowance < spendAmount ? (
// // // // // // //           <button
// // // // // // //             onClick={approveToken}
// // // // // // //             style={{
// // // // // // //               padding: "10px 20px",
// // // // // // //               fontSize: "16px",
// // // // // // //               cursor: "pointer",
// // // // // // //               backgroundColor: "#ffc107",
// // // // // // //               color: "black",
// // // // // // //               border: "none",
// // // // // // //               borderRadius: "5px",
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             Approve Token
// // // // // // //           </button>
// // // // // // //         ) : (
// // // // // // //           <div
// // // // // // //             style={{
// // // // // // //               cursor: "pointer",
// // // // // // //               position: "relative",
// // // // // // //               width: "160px",
// // // // // // //               height: "240px",
// // // // // // //               background: "linear-gradient(145deg, #558b44, #3a6c2f)",
// // // // // // //               borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // // // //               display: "flex",
// // // // // // //               justifyContent: "center",
// // // // // // //               alignItems: "center",
// // // // // // //               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
// // // // // // //             }}
// // // // // // //             onClick={playRaffle}
// // // // // // //           >
// // // // // // //             {/* Greenish Yellow Flesh */}
// // // // // // //             <div
// // // // // // //               style={{
// // // // // // //                 width: "120px",
// // // // // // //                 height: "200px",
// // // // // // //                 background: "radial-gradient(circle, #a5c663, #9abd3e)",
// // // // // // //                 borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // // // //                 display: "flex",
// // // // // // //                 justifyContent: "center",
// // // // // // //                 alignItems: "center",
// // // // // // //                 position: "relative",
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               {/* Brown Pit with Animation */}
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   width: "50px",
// // // // // // //                   height: "50px",
// // // // // // //                   background: "radial-gradient(circle, #7a4f3a, #3e261a)",
// // // // // // //                   borderRadius: "50%",
// // // // // // //                   transform: pitFallen ? "translateY(300px)" : "translateY(0)",
// // // // // // //                   transition: pitFallen ? "transform 0.6s ease-in" : "none",
// // // // // // //                 }}
// // // // // // //               ></div>

// // // // // // //               {/* Dark Green Hole with Result */}
// // // // // // //               {pitFallen && (
// // // // // // //                 <div
// // // // // // //                   style={{
// // // // // // //                     position: "absolute",
// // // // // // //                     top: "50%",
// // // // // // //                     left: "50%",
// // // // // // //                     transform: "translate(-50%, -50%)",
// // // // // // //                     color: "#fff",
// // // // // // //                     textAlign: "center",
// // // // // // //                     fontSize: "16px",
// // // // // // //                     lineHeight: "20px",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {resultTokens?.amount ? (
// // // // // // //                     <>
// // // // // // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>
// // // // // // //                         {resultTokens.amount}
// // // // // // //                       </div>
// // // // // // //                       <div>{resultTokens.name}</div>
// // // // // // //                     </>
// // // // // // //                   ) : (
// // // // // // //                     <>
// // // // // // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>Sorry!</div>
// // // // // // //                       <div>Try again</div>
// // // // // // //                     </>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )
// // // // // // //       )}

// // // // // // //       {/* Result Message */}
// // // // // // //       {resultMessage && (
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             marginTop: "20px",
// // // // // // //             padding: "10px 20px",
// // // // // // //             backgroundColor: "#ffffff",
// // // // // // //             color: "#333",
// // // // // // //             borderRadius: "8px",
// // // // // // //             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // //             textAlign: "center",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {resultMessage}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Raffle;

// // // // // // import { useEffect, useState } from "react";
// // // // // // import Web3 from "web3";

// // // // // // function Raffle() {
// // // // // //   const [web3, setWeb3] = useState(null);
// // // // // //   const [connectedAccount, setConnectedAccount] = useState(null);
// // // // // //   const [isPlaying, setIsPlaying] = useState(false); // Tracks transaction progress
// // // // // //   const [resultMessage, setResultMessage] = useState(null); // Message for result
// // // // // //   const [resultTokens, setResultTokens] = useState(null); // Tokens earned
// // // // // //   const [pitFallen, setPitFallen] = useState(false); // Tracks pit animation
// // // // // //   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0); // Tracks token allowance

// // // // // //   const tokenMapping = {
// // // // // //     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// // // // // //     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
// // // // // //   };

// // // // // //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// // // // // //   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
// // // // // //   const spendAmount = Web3.utils.toWei("1", "ether"); // 1 token in wei

// // // // // //   const contractABI = [
// // // // // //     {
// // // // // //       inputs: [],
// // // // // //       name: "playRaffle",
// // // // // //       outputs: [],
// // // // // //       stateMutability: "nonpayable",
// // // // // //       type: "function",
// // // // // //     },
// // // // // //   ];

// // // // // //   const tokenABI = [
// // // // // //     {
// // // // // //       inputs: [
// // // // // //         { internalType: "address", name: "owner", type: "address" },
// // // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // // //       ],
// // // // // //       name: "allowance",
// // // // // //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// // // // // //       stateMutability: "view",
// // // // // //       type: "function",
// // // // // //     },
// // // // // //     {
// // // // // //       inputs: [
// // // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // // //         { internalType: "uint256", name: "amount", type: "uint256" },
// // // // // //       ],
// // // // // //       name: "approve",
// // // // // //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
// // // // // //       stateMutability: "nonpayable",
// // // // // //       type: "function",
// // // // // //     },
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     if (window.ethereum) {
// // // // // //       setWeb3(new Web3(window.ethereum));
// // // // // //     }
// // // // // //   }, []);

// // // // // //   async function connectWallet() {
// // // // // //     if (!web3) return;

// // // // // //     try {
// // // // // //       await window.ethereum.request({ method: "eth_requestAccounts" });
// // // // // //       const accounts = await web3.eth.getAccounts();
// // // // // //       setConnectedAccount(accounts[0]);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error connecting wallet:", error);
// // // // // //     }
// // // // // //   }

// // // // // //   async function getAllowance() {
// // // // // //     if (!web3 || !connectedAccount) return;

// // // // // //     try {
// // // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // // //       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
// // // // // //       setSpendTokenAllowance(allowance);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching allowance:", error);
// // // // // //     }
// // // // // //   }

// // // // // //   async function approveToken() {
// // // // // //     if (!web3 || !connectedAccount) return;

// // // // // //     try {
// // // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // // //       await tokenContract.methods.approve(contractAddress, spendAmount).send({ from: connectedAccount });
// // // // // //       setSpendTokenAllowance(spendAmount); // Update allowance locally
// // // // // //       setResultMessage("Token approved successfully!");
// // // // // //     } catch (error) {
// // // // // //       console.error("Error approving token:", error);
// // // // // //       setResultMessage("Error approving token. Please check the console.");
// // // // // //     }
// // // // // //   }

// // // // // //   async function playRaffle() {
// // // // // //     if (!web3 || !connectedAccount) {
// // // // // //       setResultMessage("Connect your wallet first.");
// // // // // //       return;
// // // // // //     }

// // // // // //     if (spendTokenAllowance < spendAmount) {
// // // // // //       setResultMessage("Insufficient allowance. Please approve the token.");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       setIsPlaying(true);
// // // // // //       setResultMessage(null);
// // // // // //       setPitFallen(false); // Reset pit animation

// // // // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);

// // // // // //       // Estimate gas and gas price
// // // // // //       const estimatedGas = await contract.methods.playRaffle().estimateGas({
// // // // // //         from: connectedAccount,
// // // // // //       });
// // // // // //       const gasPrice = await web3.eth.getGasPrice();

// // // // // //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.4); // Add buffer
// // // // // //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.3);

// // // // // //       const tx = await contract.methods.playRaffle().send({
// // // // // //         from: connectedAccount,
// // // // // //         gas: adjustedGas,
// // // // // //         gasPrice: adjustedGasPrice.toString(),
// // // // // //       });

// // // // // //       // Process result
// // // // // //       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
// // // // // //       const eventABI = {
// // // // // //         anonymous: false,
// // // // // //         inputs: [
// // // // // //           { indexed: true, internalType: "address", name: "user", type: "address" },
// // // // // //           { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// // // // // //           { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// // // // // //         ],
// // // // // //         name: "PrizeWon",
// // // // // //         type: "event",
// // // // // //       };

// // // // // //       const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// // // // // //       const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

// // // // // //       if (logs.length > 0) {
// // // // // //         const decoded = web3.eth.abi.decodeLog(
// // // // // //           eventABI.inputs,
// // // // // //           logs[0].data,
// // // // // //           logs[0].topics.slice(1)
// // // // // //         );

// // // // // //         const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
// // // // // //         const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
// // // // // //         setResultTokens({ amount: tokenAmount, name: tokenName });
// // // // // //       } else {
// // // // // //         setResultTokens({ amount: null, name: null });
// // // // // //       }

// // // // // //       setPitFallen(true); // Trigger pit fall animation
// // // // // //     } catch (error) {
// // // // // //       console.error("Error playing raffle:", error);
// // // // // //       setResultMessage("Error playing raffle. Please check the console.");
// // // // // //     } finally {
// // // // // //       setIsPlaying(false);
// // // // // //     }
// // // // // //   }

// // // // // //   useEffect(() => {
// // // // // //     if (connectedAccount) {
// // // // // //       getAllowance(); // Fetch allowance when account is connected
// // // // // //     }
// // // // // //   }, [connectedAccount]);

// // // // // //   return (
// // // // // //     <div
// // // // // //       style={{
// // // // // //         fontFamily: "Arial, sans-serif",
// // // // // //         height: "100vh",
// // // // // //         display: "flex",
// // // // // //         flexDirection: "column",
// // // // // //         justifyContent: "center",
// // // // // //         alignItems: "center",
// // // // // //         position: "relative",
// // // // // //         backgroundColor: "#eaf5dc",
// // // // // //       }}
// // // // // //     >
// // // // // //       <style>
// // // // // //         {`
// // // // // //           @keyframes shake {
// // // // // //             0%, 100% { transform: translateX(0); }
// // // // // //             25% { transform: translateX(-2px); }
// // // // // //             50% { transform: translateX(2px); }
// // // // // //             75% { transform: translateX(-2px); }
// // // // // //           }
// // // // // //         `}
// // // // // //       </style>

// // // // // //       {/* Connect Wallet Button (Top Right) */}
// // // // // //       <div style={{ position: "absolute", top: 20, right: 20 }}>
// // // // // //         {connectedAccount ? (
// // // // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // // // //         ) : (
// // // // // //           <button
// // // // // //             onClick={connectWallet}
// // // // // //             style={{
// // // // // //               padding: "10px 20px",
// // // // // //               fontSize: "16px",
// // // // // //               cursor: "pointer",
// // // // // //               backgroundColor: "#0070f3",
// // // // // //               color: "white",
// // // // // //               border: "none",
// // // // // //               borderRadius: "5px",
// // // // // //             }}
// // // // // //           >
// // // // // //             Connect Wallet
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {/* Avocado Button */}
// // // // // //       {connectedAccount && (
// // // // // //         spendTokenAllowance < spendAmount ? (
// // // // // //           <button
// // // // // //             onClick={approveToken}
// // // // // //             style={{
// // // // // //               padding: "10px 20px",
// // // // // //               fontSize: "16px",
// // // // // //               cursor: "pointer",
// // // // // //               backgroundColor: "#ffc107",
// // // // // //               color: "black",
// // // // // //               border: "none",
// // // // // //               borderRadius: "5px",
// // // // // //             }}
// // // // // //           >
// // // // // //             Approve Token
// // // // // //           </button>
// // // // // //         ) : (
// // // // // //           <div
// // // // // //             style={{
// // // // // //               cursor: "pointer",
// // // // // //               position: "relative",
// // // // // //               width: "160px",
// // // // // //               height: "240px",
// // // // // //               background: "linear-gradient(145deg, #558b44, #3a6c2f)",
// // // // // //               borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // // //               display: "flex",
// // // // // //               justifyContent: "center",
// // // // // //               alignItems: "center",
// // // // // //               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
// // // // // //             }}
// // // // // //             onClick={playRaffle}
// // // // // //           >
// // // // // //             {/* Greenish Yellow Flesh */}
// // // // // //             <div
// // // // // //               style={{
// // // // // //                 width: "120px",
// // // // // //                 height: "200px",
// // // // // //                 background: "radial-gradient(circle, #a5c663, #9abd3e)",
// // // // // //                 borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // // //                 display: "flex",
// // // // // //                 justifyContent: "center",
// // // // // //                 alignItems: "center",
// // // // // //                 position: "relative",
// // // // // //               }}
// // // // // //             >
// // // // // //               {/* Brown Pit with Animation */}
// // // // // //               <div
// // // // // //                 style={{
// // // // // //                   width: "50px",
// // // // // //                   height: "50px",
// // // // // //                   background: "radial-gradient(circle, #7a4f3a, #3e261a)",
// // // // // //                   borderRadius: "50%",
// // // // // //                   transform: pitFallen
// // // // // //                     ? "translateY(300px)"
// // // // // //                     : isPlaying
// // // // // //                     ? "translateY(0)"
// // // // // //                     : "translateY(0)",
// // // // // //                   transition: pitFallen ? "transform 0.6s ease-in" : "none",
// // // // // //                   animation: isPlaying ? "shake 0.5s infinite" : "none",
// // // // // //                 }}
// // // // // //               ></div>

// // // // // //               {/* Dark Green Hole with Result */}
// // // // // //               {pitFallen && (
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     position: "absolute",
// // // // // //                     top: "50%",
// // // // // //                     left: "50%",
// // // // // //                     transform: "translate(-50%, -50%)",
// // // // // //                     color: "#fff",
// // // // // //                     textAlign: "center",
// // // // // //                     fontSize: "16px",
// // // // // //                     lineHeight: "20px",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {resultTokens?.amount ? (
// // // // // //                     <>
// // // // // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>
// // // // // //                         {resultTokens.amount}
// // // // // //                       </div>
// // // // // //                       <div>{resultTokens.name}</div>
// // // // // //                     </>
// // // // // //                   ) : (
// // // // // //                     <>
// // // // // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>Sorry!</div>
// // // // // //                       <div>Try again</div>
// // // // // //                     </>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )
// // // // // //       )}

// // // // // //       {/* Result Message */}
// // // // // //       {resultMessage && (
// // // // // //         <div
// // // // // //           style={{
// // // // // //             marginTop: "20px",
// // // // // //             padding: "10px 20px",
// // // // // //             backgroundColor: "#ffffff",
// // // // // //             color: "#333",
// // // // // //             borderRadius: "8px",
// // // // // //             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // //             textAlign: "center",
// // // // // //           }}
// // // // // //         >
// // // // // //           {resultMessage}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Raffle;

// // // // // import { useEffect, useState } from "react";
// // // // // import Web3 from "web3";

// // // // // function Raffle() {
// // // // //   const [web3, setWeb3] = useState(null);
// // // // //   const [connectedAccount, setConnectedAccount] = useState(null);
// // // // //   const [isPlaying, setIsPlaying] = useState(false); // Tracks transaction progress
// // // // //   const [resultMessage, setResultMessage] = useState(null); // Message for result
// // // // //   const [resultTokens, setResultTokens] = useState(null); // Tokens earned
// // // // //   const [pitFallen, setPitFallen] = useState(false); // Tracks pit animation
// // // // //   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0); // Tracks token allowance

// // // // //   const tokenMapping = {
// // // // //     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// // // // //     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
// // // // //   };

// // // // //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// // // // //   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
// // // // //   const spendAmount = Web3.utils.toWei("1", "ether"); // 1 token in wei

// // // // //   const contractABI = [
// // // // //     {
// // // // //       inputs: [],
// // // // //       name: "playRaffle",
// // // // //       outputs: [],
// // // // //       stateMutability: "nonpayable",
// // // // //       type: "function",
// // // // //     },
// // // // //   ];

// // // // //   const tokenABI = [
// // // // //     {
// // // // //       inputs: [
// // // // //         { internalType: "address", name: "owner", type: "address" },
// // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // //       ],
// // // // //       name: "allowance",
// // // // //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// // // // //       stateMutability: "view",
// // // // //       type: "function",
// // // // //     },
// // // // //     {
// // // // //       inputs: [
// // // // //         { internalType: "address", name: "spender", type: "address" },
// // // // //         { internalType: "uint256", name: "amount", type: "uint256" },
// // // // //       ],
// // // // //       name: "approve",
// // // // //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
// // // // //       stateMutability: "nonpayable",
// // // // //       type: "function",
// // // // //     },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     if (window.ethereum) {
// // // // //       setWeb3(new Web3(window.ethereum));
// // // // //     }
// // // // //   }, []);

// // // // //   async function connectWallet() {
// // // // //     if (!web3) return;

// // // // //     try {
// // // // //       await window.ethereum.request({ method: "eth_requestAccounts" });
// // // // //       const accounts = await web3.eth.getAccounts();
// // // // //       setConnectedAccount(accounts[0]);
// // // // //     } catch (error) {
// // // // //       console.error("Error connecting wallet:", error);
// // // // //     }
// // // // //   }

// // // // //   async function getAllowance() {
// // // // //     if (!web3 || !connectedAccount) return;

// // // // //     try {
// // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // //       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
// // // // //       setSpendTokenAllowance(allowance);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching allowance:", error);
// // // // //     }
// // // // //   }

// // // // //   async function approveToken() {
// // // // //     if (!web3 || !connectedAccount) return;

// // // // //     try {
// // // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // // //       await tokenContract.methods.approve(contractAddress, spendAmount).send({ from: connectedAccount });
// // // // //       setSpendTokenAllowance(spendAmount); // Update allowance locally
// // // // //       setResultMessage("Token approved successfully!");
// // // // //     } catch (error) {
// // // // //       console.error("Error approving token:", error);
// // // // //       setResultMessage("Error approving token. Please check the console.");
// // // // //     }
// // // // //   }

// // // // //   async function playRaffle() {
// // // // //     if (!web3 || !connectedAccount) {
// // // // //       setResultMessage("Connect your wallet first.");
// // // // //       return;
// // // // //     }

// // // // //     if (spendTokenAllowance < spendAmount) {
// // // // //       setResultMessage("Insufficient allowance. Please approve the token.");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       setIsPlaying(true);
// // // // //       setResultMessage(null);
// // // // //       setPitFallen(false); // Reset pit animation

// // // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);

// // // // //       // Estimate gas and gas price
// // // // //       const estimatedGas = await contract.methods.playRaffle().estimateGas({
// // // // //         from: connectedAccount,
// // // // //       });
// // // // //       const gasPrice = await web3.eth.getGasPrice();

// // // // //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.4); // Add buffer
// // // // //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.3);

// // // // //       const tx = await contract.methods.playRaffle().send({
// // // // //         from: connectedAccount,
// // // // //         gas: adjustedGas,
// // // // //         gasPrice: adjustedGasPrice.toString(),
// // // // //       });

// // // // //       // Process result
// // // // //       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
// // // // //       const eventABI = {
// // // // //         anonymous: false,
// // // // //         inputs: [
// // // // //           { indexed: true, internalType: "address", name: "user", type: "address" },
// // // // //           { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// // // // //           { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// // // // //         ],
// // // // //         name: "PrizeWon",
// // // // //         type: "event",
// // // // //       };

// // // // //       const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// // // // //       const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

// // // // //       if (logs.length > 0) {
// // // // //         const decoded = web3.eth.abi.decodeLog(
// // // // //           eventABI.inputs,
// // // // //           logs[0].data,
// // // // //           logs[0].topics.slice(1)
// // // // //         );

// // // // //         const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
// // // // //         const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
// // // // //         setResultTokens({ amount: tokenAmount, name: tokenName });
// // // // //       } else {
// // // // //         setResultTokens({ amount: null, name: null });
// // // // //       }

// // // // //       setPitFallen(true); // Trigger pit fall animation
// // // // //     } catch (error) {
// // // // //       console.error("Error playing raffle:", error);
// // // // //       setResultMessage("Error playing raffle. Please check the console.");
// // // // //     } finally {
// // // // //       setIsPlaying(false);
// // // // //     }
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     if (connectedAccount) {
// // // // //       getAllowance(); // Fetch allowance when account is connected
// // // // //     }
// // // // //   }, [connectedAccount]);

// // // // //   return (
// // // // //     <div
// // // // //       style={{
// // // // //         fontFamily: "Arial, sans-serif",
// // // // //         height: "100vh",
// // // // //         display: "flex",
// // // // //         flexDirection: "column",
// // // // //         justifyContent: "center",
// // // // //         alignItems: "center",
// // // // //         position: "relative",
// // // // //         backgroundColor: "#eaf5dc",
// // // // //       }}
// // // // //     >
// // // // //       <style>
// // // // //         {`
// // // // //           @keyframes shake {
// // // // //             0%, 100% { transform: translateX(0); }
// // // // //             25% { transform: translateX(-2px); }
// // // // //             50% { transform: translateX(2px); }
// // // // //             75% { transform: translateX(-2px); }
// // // // //           }

// // // // //           @keyframes fall {
// // // // //             0% { transform: translateY(0); }
// // // // //             100% { transform: translateY(300px); }
// // // // //           }
// // // // //         `}
// // // // //       </style>

// // // // //       {/* Connect Wallet Button */}
// // // // //       <div style={{ position: "absolute", top: 20, right: 20 }}>
// // // // //         {connectedAccount ? (
// // // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // // //         ) : (
// // // // //           <button
// // // // //             onClick={connectWallet}
// // // // //             style={{
// // // // //               padding: "10px 20px",
// // // // //               fontSize: "16px",
// // // // //               cursor: "pointer",
// // // // //               backgroundColor: "#0070f3",
// // // // //               color: "white",
// // // // //               border: "none",
// // // // //               borderRadius: "5px",
// // // // //             }}
// // // // //           >
// // // // //             Connect Wallet
// // // // //           </button>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* Avocado Button */}
// // // // //       {connectedAccount && (
// // // // //         spendTokenAllowance < spendAmount ? (
// // // // //           <button
// // // // //             onClick={approveToken}
// // // // //             style={{
// // // // //               padding: "10px 20px",
// // // // //               fontSize: "16px",
// // // // //               cursor: "pointer",
// // // // //               backgroundColor: "#ffc107",
// // // // //               color: "black",
// // // // //               border: "none",
// // // // //               borderRadius: "5px",
// // // // //             }}
// // // // //           >
// // // // //             Approve Token
// // // // //           </button>
// // // // //         ) : (
// // // // //           <div
// // // // //             style={{
// // // // //               cursor: "pointer",
// // // // //               position: "relative",
// // // // //               width: "160px",
// // // // //               height: "240px",
// // // // //               background: "linear-gradient(145deg, #558b44, #3a6c2f)",
// // // // //               borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // //               display: "flex",
// // // // //               justifyContent: "center",
// // // // //               alignItems: "center",
// // // // //               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
// // // // //             }}
// // // // //             onClick={playRaffle}
// // // // //           >
// // // // //             {/* Greenish Yellow Flesh */}
// // // // //             <div
// // // // //               style={{
// // // // //                 width: "120px",
// // // // //                 height: "200px",
// // // // //                 background: "radial-gradient(circle, #a5c663, #9abd3e)",
// // // // //                 borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // // //                 display: "flex",
// // // // //                 justifyContent: "center",
// // // // //                 alignItems: "center",
// // // // //                 position: "relative",
// // // // //               }}
// // // // //             >
// // // // //               {/* Brown Pit with Animation */}
// // // // //               <div
// // // // //                 style={{
// // // // //                   width: "50px",
// // // // //                   height: "50px",
// // // // //                   background: "radial-gradient(circle, #7a4f3a, #3e261a)",
// // // // //                   borderRadius: "50%",
// // // // //                   transform: pitFallen
// // // // //                     ? "translateY(300px)"
// // // // //                     : isPlaying
// // // // //                     ? "translateY(0)"
// // // // //                     : "translateY(0)",
// // // // //                   animation: isPlaying
// // // // //                     ? "shake 0.5s infinite"
// // // // //                     : pitFallen
// // // // //                     ? "fall 0.6s ease-in"
// // // // //                     : "none",
// // // // //                 }}
// // // // //               ></div>

// // // // //               {/* Dark Green Hole with Result */}
// // // // //               {pitFallen && (
// // // // //                 <div
// // // // //                   style={{
// // // // //                     position: "absolute",
// // // // //                     top: "50%",
// // // // //                     left: "50%",
// // // // //                     transform: "translate(-50%, -50%)",
// // // // //                     color: "#fff",
// // // // //                     textAlign: "center",
// // // // //                     fontSize: "16px",
// // // // //                     lineHeight: "20px",
// // // // //                   }}
// // // // //                 >
// // // // //                   {resultTokens?.amount ? (
// // // // //                     <>
// // // // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>
// // // // //                         {resultTokens.amount}
// // // // //                       </div>
// // // // //                       <div>{resultTokens.name}</div>
// // // // //                     </>
// // // // //                   ) : (
// // // // //                     <>
// // // // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>Sorry!</div>
// // // // //                       <div>Try again</div>
// // // // //                     </>
// // // // //                   )}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           </div>
// // // // //         )
// // // // //       )}

// // // // //       {/* Result Message */}
// // // // //       {resultMessage && (
// // // // //         <div
// // // // //           style={{
// // // // //             marginTop: "20px",
// // // // //             padding: "10px 20px",
// // // // //             backgroundColor: "#ffffff",
// // // // //             color: "#333",
// // // // //             borderRadius: "8px",
// // // // //             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // //             textAlign: "center",
// // // // //           }}
// // // // //         >
// // // // //           {resultMessage}
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Raffle;

// // // // import { useEffect, useState } from "react";
// // // // import Web3 from "web3";

// // // // function Raffle() {
// // // //   const [web3, setWeb3] = useState(null);
// // // //   const [connectedAccount, setConnectedAccount] = useState(null);
// // // //   const [isPlaying, setIsPlaying] = useState(false); // Tracks transaction progress
// // // //   const [resultMessage, setResultMessage] = useState(null); // Message for result
// // // //   const [resultTokens, setResultTokens] = useState(null); // Tokens earned
// // // //   const [pitFallen, setPitFallen] = useState(false); // Tracks pit animation
// // // //   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0); // Tracks token allowance

// // // //   const tokenMapping = {
// // // //     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// // // //     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
// // // //   };

// // // //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// // // //   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
// // // //   const spendAmount = Web3.utils.toWei("1", "ether"); // 1 token in wei

// // // //   const contractABI = [
// // // //     {
// // // //       inputs: [],
// // // //       name: "playRaffle",
// // // //       outputs: [],
// // // //       stateMutability: "nonpayable",
// // // //       type: "function",
// // // //     },
// // // //   ];

// // // //   const tokenABI = [
// // // //     {
// // // //       inputs: [
// // // //         { internalType: "address", name: "owner", type: "address" },
// // // //         { internalType: "address", name: "spender", type: "address" },
// // // //       ],
// // // //       name: "allowance",
// // // //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// // // //       stateMutability: "view",
// // // //       type: "function",
// // // //     },
// // // //     {
// // // //       inputs: [
// // // //         { internalType: "address", name: "spender", type: "address" },
// // // //         { internalType: "uint256", name: "amount", type: "uint256" },
// // // //       ],
// // // //       name: "approve",
// // // //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
// // // //       stateMutability: "nonpayable",
// // // //       type: "function",
// // // //     },
// // // //   ];

// // // //   useEffect(() => {
// // // //     if (window.ethereum) {
// // // //       setWeb3(new Web3(window.ethereum));
// // // //     }
// // // //   }, []);

// // // //   async function connectWallet() {
// // // //     if (!web3) return;

// // // //     try {
// // // //       await window.ethereum.request({ method: "eth_requestAccounts" });
// // // //       const accounts = await web3.eth.getAccounts();
// // // //       setConnectedAccount(accounts[0]);
// // // //     } catch (error) {
// // // //       console.error("Error connecting wallet:", error);
// // // //     }
// // // //   }

// // // //   async function getAllowance() {
// // // //     if (!web3 || !connectedAccount) return;

// // // //     try {
// // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // //       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
// // // //       setSpendTokenAllowance(allowance);
// // // //     } catch (error) {
// // // //       console.error("Error fetching allowance:", error);
// // // //     }
// // // //   }

// // // //   async function approveToken() {
// // // //     if (!web3 || !connectedAccount) return;

// // // //     try {
// // // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // // //       await tokenContract.methods.approve(contractAddress, spendAmount).send({ from: connectedAccount });
// // // //       setSpendTokenAllowance(spendAmount); // Update allowance locally
// // // //       setResultMessage("Token approved successfully!");
// // // //     } catch (error) {
// // // //       console.error("Error approving token:", error);
// // // //       setResultMessage("Error approving token. Please check the console.");
// // // //     }
// // // //   }

// // // //   async function playRaffle() {
// // // //     if (!web3 || !connectedAccount) {
// // // //       setResultMessage("Connect your wallet first.");
// // // //       return;
// // // //     }

// // // //     if (spendTokenAllowance < spendAmount) {
// // // //       setResultMessage("Insufficient allowance. Please approve the token.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setIsPlaying(true);
// // // //       setResultMessage(null);
// // // //       setPitFallen(false); // Reset pit animation

// // // //       const contract = new web3.eth.Contract(contractABI, contractAddress);

// // // //       // Estimate gas and gas price
// // // //       const estimatedGas = await contract.methods.playRaffle().estimateGas({
// // // //         from: connectedAccount,
// // // //       });
// // // //       const gasPrice = await web3.eth.getGasPrice();

// // // //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.4); // Add buffer
// // // //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.3);

// // // //       const tx = await contract.methods.playRaffle().send({
// // // //         from: connectedAccount,
// // // //         gas: adjustedGas,
// // // //         gasPrice: adjustedGasPrice.toString(),
// // // //       });

// // // //       // Process result
// // // //       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
// // // //       const eventABI = {
// // // //         anonymous: false,
// // // //         inputs: [
// // // //           { indexed: true, internalType: "address", name: "user", type: "address" },
// // // //           { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// // // //           { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// // // //         ],
// // // //         name: "PrizeWon",
// // // //         type: "event",
// // // //       };

// // // //       const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// // // //       const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

// // // //       if (logs.length > 0) {
// // // //         const decoded = web3.eth.abi.decodeLog(
// // // //           eventABI.inputs,
// // // //           logs[0].data,
// // // //           logs[0].topics.slice(1)
// // // //         );

// // // //         const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
// // // //         const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
// // // //         setResultTokens({ amount: tokenAmount, name: tokenName });
// // // //       } else {
// // // //         setResultTokens({ amount: null, name: null });
// // // //       }

// // // //       setPitFallen(true); // Trigger pit fall animation
// // // //     } catch (error) {
// // // //       console.error("Error playing raffle:", error);
// // // //       setResultMessage("Error playing raffle. Please check the console.");
// // // //     } finally {
// // // //       setIsPlaying(false);
// // // //     }
// // // //   }

// // // //   useEffect(() => {
// // // //     if (connectedAccount) {
// // // //       getAllowance(); // Fetch allowance when account is connected
// // // //     }
// // // //   }, [connectedAccount]);

// // // //   return (
// // // //     <div
// // // //       style={{
// // // //         fontFamily: "Arial, sans-serif",
// // // //         height: "100vh",
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         position: "relative",
// // // //         backgroundColor: "#eaf5dc",
// // // //         padding: "20px",
// // // //       }}
// // // //     >
// // // //       <style>
// // // //         {`
// // // //           @keyframes shake {
// // // //             0%, 100% { transform: translateX(0); }
// // // //             25% { transform: translateX(-2px); }
// // // //             50% { transform: translateX(2px); }
// // // //             75% { transform: translateX(-2px); }
// // // //           }

// // // //           @keyframes fall {
// // // //             0% { transform: translateY(0); }
// // // //             100% { transform: translateY(300px); }
// // // //           }
// // // //         `}
// // // //       </style>

// // // //       {/* Explanatory Copy */}
// // // //       <div style={{ marginBottom: "20px", textAlign: "center" }}>
// // // //         <p>
// // // //           Spend <strong>1 AVO</strong> to participate in the raffle for an{" "}
// // // //           <strong>80% chance</strong> to win tokens!
// // // //         </p>
// // // //         <p>Prizes include 1, 10, 100, or 1000 AVO or VINYL. More tokens coming soon!</p>
// // // //       </div>

// // // //       {/* Connect Wallet Button */}
// // // //       <div style={{ position: "absolute", top: 20, right: 20 }}>
// // // //         {connectedAccount ? (
// // // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // // //         ) : (
// // // //           <button
// // // //             onClick={connectWallet}
// // // //             style={{
// // // //               padding: "10px 20px",
// // // //               fontSize: "16px",
// // // //               cursor: "pointer",
// // // //               backgroundColor: "#0070f3",
// // // //               color: "white",
// // // //               border: "none",
// // // //               borderRadius: "5px",
// // // //             }}
// // // //           >
// // // //             Connect Wallet
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       {/* Approve or Play Raffle Button */}
// // // //       {connectedAccount && (
// // // //         spendTokenAllowance < spendAmount ? (
// // // //           <>
// // // //             <p>You need to approve spending 1 AVO to participate in the raffle.</p>
// // // //             <button
// // // //               onClick={approveToken}
// // // //               style={{
// // // //                 padding: "10px 20px",
// // // //                 fontSize: "16px",
// // // //                 cursor: "pointer",
// // // //                 backgroundColor: "#ffc107",
// // // //                 color: "black",
// // // //                 border: "none",
// // // //                 borderRadius: "5px",
// // // //               }}
// // // //             >
// // // //               Approve Token
// // // //             </button>
// // // //           </>
// // // //         ) : (
// // // //           <div
// // // //             style={{
// // // //               cursor: "pointer",
// // // //               position: "relative",
// // // //               width: "160px",
// // // //               height: "240px",
// // // //               background: "linear-gradient(145deg, #558b44, #3a6c2f)",
// // // //               borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // //               display: "flex",
// // // //               justifyContent: "center",
// // // //               alignItems: "center",
// // // //               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
// // // //             }}
// // // //             onClick={playRaffle}
// // // //           >
// // // //             <div
// // // //               style={{
// // // //                 width: "120px",
// // // //                 height: "200px",
// // // //                 background: "radial-gradient(circle, #a5c663, #9abd3e)",
// // // //                 borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // // //                 display: "flex",
// // // //                 justifyContent: "center",
// // // //                 alignItems: "center",
// // // //                 position: "relative",
// // // //               }}
// // // //             >
// // // //               <div
// // // //                 style={{
// // // //                   width: "50px",
// // // //                   height: "50px",
// // // //                   background: "radial-gradient(circle, #7a4f3a, #3e261a)",
// // // //                   borderRadius: "50%",
// // // //                   transform: pitFallen
// // // //                     ? "translateY(300px)"
// // // //                     : isPlaying
// // // //                     ? "translateY(0)"
// // // //                     : "translateY(0)",
// // // //                   animation: isPlaying
// // // //                     ? "shake 0.5s infinite"
// // // //                     : pitFallen
// // // //                     ? "fall 0.6s ease-in"
// // // //                     : "none",
// // // //                 }}
// // // //               ></div>
// // // //             </div>
// // // //           </div>
// // // //         )
// // // //       )}

// // // //       {/* Result Message */}
// // // //       {resultMessage && (
// // // //         <div
// // // //           style={{
// // // //             marginTop: "20px",
// // // //             padding: "10px 20px",
// // // //             backgroundColor: "#ffffff",
// // // //             color: "#333",
// // // //             borderRadius: "8px",
// // // //             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // //             textAlign: "center",
// // // //           }}
// // // //         >
// // // //           {resultMessage}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Raffle;

// // // import { useEffect, useState } from "react";
// // // import Web3 from "web3";

// // // function Raffle() {
// // //   const [web3, setWeb3] = useState(null);
// // //   const [connectedAccount, setConnectedAccount] = useState(null);
// // //   const [isPlaying, setIsPlaying] = useState(false);
// // //   const [resultMessage, setResultMessage] = useState(null);
// // //   const [resultTokens, setResultTokens] = useState(null);
// // //   const [pitFallen, setPitFallen] = useState(false);
// // //   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0);

// // //   const tokenMapping = {
// // //     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// // //     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
// // //   };

// // //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// // //   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
// // //   const spendAmount = Web3.utils.toWei("1", "ether");
// // //   const approvalAmount = Web3.utils.toWei("10000", "ether");

// // //   const contractABI = [
// // //     {
// // //       inputs: [],
// // //       name: "playRaffle",
// // //       outputs: [],
// // //       stateMutability: "nonpayable",
// // //       type: "function",
// // //     },
// // //   ];

// // //   const tokenABI = [
// // //     {
// // //       inputs: [
// // //         { internalType: "address", name: "owner", type: "address" },
// // //         { internalType: "address", name: "spender", type: "address" },
// // //       ],
// // //       name: "allowance",
// // //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// // //       stateMutability: "view",
// // //       type: "function",
// // //     },
// // //     {
// // //       inputs: [
// // //         { internalType: "address", name: "spender", type: "address" },
// // //         { internalType: "uint256", name: "amount", type: "uint256" },
// // //       ],
// // //       name: "approve",
// // //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
// // //       stateMutability: "nonpayable",
// // //       type: "function",
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     if (window.ethereum) {
// // //       setWeb3(new Web3(window.ethereum));
// // //     }
// // //   }, []);

// // //   async function connectWallet() {
// // //     if (!web3) return;

// // //     try {
// // //       await window.ethereum.request({ method: "eth_requestAccounts" });
// // //       const accounts = await web3.eth.getAccounts();
// // //       setConnectedAccount(accounts[0]);
// // //       getAllowance();
// // //     } catch (error) {
// // //       console.error("Error connecting wallet:", error);
// // //     }
// // //   }

// // //   async function getAllowance() {
// // //     if (!web3 || !connectedAccount) return;

// // //     try {
// // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// // //       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
// // //       setSpendTokenAllowance(Number(allowance));
// // //     } catch (error) {
// // //       console.error("Error fetching allowance:", error);
// // //     }
// // //   }

// // //   async function approveToken() {
// // //     if (!web3 || !connectedAccount) return;

// // //     try {
// // //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);

// // //       // Always approve up to the cap
// // //       await tokenContract.methods.approve(contractAddress, approvalAmount).send({ from: connectedAccount });

// // //       // Update the local allowance state after approval
// // //       setSpendTokenAllowance(Number(approvalAmount));
// // //       setResultMessage("Token approved successfully!");
// // //     } catch (error) {
// // //       console.error("Error approving token:", error);
// // //       setResultMessage("Error approving token. Please check the console.");
// // //     }
// // //   }

// // //   async function playRaffle() {
// // //     if (!web3 || !connectedAccount) {
// // //       setResultMessage("Connect your wallet first.");
// // //       return;
// // //     }

// // //     try {
// // //       if (spendTokenAllowance < spendAmount) {
// // //         setResultMessage("Insufficient allowance. Please approve the token.");
// // //         return;
// // //       }

// // //       setIsPlaying(true);
// // //       setResultMessage(null);
// // //       setPitFallen(false);

// // //       const contract = new web3.eth.Contract(contractABI, contractAddress);

// // //       const estimatedGas = await contract.methods.playRaffle().estimateGas({ from: connectedAccount });
// // //       const gasPrice = await web3.eth.getGasPrice();

// // //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.2);
// // //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.1);

// // //       const tx = await contract.methods.playRaffle().send({
// // //         from: connectedAccount,
// // //         gas: adjustedGas,
// // //         gasPrice: adjustedGasPrice.toString(),
// // //       });

// // //       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
// // //       processTransactionResult(receipt);

// // //       // Deduct the spend amount locally to reflect the updated allowance
// // //       setSpendTokenAllowance((prev) => prev - spendAmount);

// // //       setPitFallen(true);
// // //     } catch (error) {
// // //       console.error("Error playing raffle:", error);
// // //       setResultMessage("An error occurred. Please try again.");
// // //     } finally {
// // //       setIsPlaying(false);
// // //     }
// // //   }

// // //   function processTransactionResult(receipt) {
// // //     const eventABI = {
// // //       anonymous: false,
// // //       inputs: [
// // //         { indexed: true, internalType: "address", name: "user", type: "address" },
// // //         { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// // //         { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// // //       ],
// // //       name: "PrizeWon",
// // //       type: "event",
// // //     };

// // //     const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// // //     const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

// // //     if (logs.length > 0) {
// // //       const decoded = web3.eth.abi.decodeLog(
// // //         eventABI.inputs,
// // //         logs[0].data,
// // //         logs[0].topics.slice(1)
// // //       );

// // //       const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
// // //       const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
// // //       setResultTokens({ amount: tokenAmount, name: tokenName });
// // //     } else {
// // //       setResultTokens({ amount: null, name: null });
// // //     }
// // //   }

// // //   return (
// // //     <div
// // //       style={{
// // //         fontFamily: "Arial, sans-serif",
// // //         height: "100vh",
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         position: "relative",
// // //         backgroundColor: "#eaf5dc",
// // //         padding: "20px",
// // //       }}
// // //     >
// // //       <style>
// // //         {`
// // //           @keyframes shake {
// // //             0%, 100% { transform: translateX(0); }
// // //             25% { transform: translateX(-2px); }
// // //             50% { transform: translateX(2px); }
// // //             75% { transform: translateX(-2px); }
// // //           }

// // //           @keyframes fall {
// // //             0% { transform: translateY(0); }
// // //             100% { transform: translateY(300px); }
// // //           }
// // //         `}
// // //       </style>

// // //       {/* Explanation */}
// // //       <div style={{ marginBottom: "20px", textAlign: "center" }}>
// // //         <p>
// // //           Spend <strong>1 AVO</strong> for an 80% chance to win!<br></br> Prizes include 1, 10, 100, or 1000 tokens of <strong>AVO</strong> or <strong>VINYL</strong>
// // //           <br></br><span style={{fontSize: 10}}>(More tokens coming soon!)</span>
// // //         </p>
// // //       </div>

// // //       {/* Connect Wallet */}
// // //       <div style={{ position: "absolute", top: 20, right: 20 }}>
// // //         {connectedAccount ? (
// // //           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
// // //         ) : (
// // //           <button
// // //             onClick={connectWallet}
// // //             style={{
// // //               padding: "10px 20px",
// // //               fontSize: "16px",
// // //               backgroundColor: "#0070f3",
// // //               color: "white",
// // //               borderRadius: "5px",
// // //             }}
// // //           >
// // //             Connect Wallet
// // //           </button>
// // //         )}
// // //       </div>

// // //       {/* Approve or Play */}
// // //       {connectedAccount && (
// // //         spendTokenAllowance < spendAmount ? (
// // //           <>
// // //             <p>Please approve spending AVO to play the raffle.</p>
// // //             <span style={{fontSize: 10}}>(10,000 AVO is default for approval to allow for 10,000 tries before having to approve again. Please adjust as you see fit.)</span>
// // //             <button
// // //               onClick={approveToken}
// // //               style={{
// // //                 padding: "10px 20px",
// // //                 fontSize: "16px",
// // //                 backgroundColor: "#ffc107",
// // //                 borderRadius: "5px",
// // //                 marginTop: 8,
// // //               }}
// // //             >
// // //               Approve Token
// // //             </button>
// // //           </>
// // //         ) : (
// // //           <div
// // //             style={{
// // //               cursor: "pointer",
// // //               position: "relative",
// // //               width: "160px",
// // //               height: "240px",
// // //               background: "linear-gradient(145deg, #558b44, #3a6c2f)",
// // //               borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // //               display: "flex",
// // //               justifyContent: "center",
// // //               alignItems: "center",
// // //               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
// // //             }}
// // //             onClick={playRaffle}
// // //           >
// // //             <div
// // //               style={{
// // //                 width: "120px",
// // //                 height: "200px",
// // //                 background: "radial-gradient(circle, #a5c663, #9abd3e)",
// // //                 borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
// // //                 display: "flex",
// // //                 justifyContent: "center",
// // //                 alignItems: "center",
// // //                 position: "relative",
// // //               }}
// // //             >
// // //               <div
// // //                 style={{
// // //                   width: "50px",
// // //                   height: "50px",
// // //                   background: "radial-gradient(circle, #7a4f3a, #3e261a)",
// // //                   borderRadius: "50%",
// // //                   transform: pitFallen
// // //                     ? "translateY(300px)"
// // //                     : isPlaying
// // //                     ? "translateY(0)"
// // //                     : "translateY(0)",
// // //                   animation: isPlaying
// // //                     ? "shake 0.5s infinite"
// // //                     : pitFallen
// // //                     ? "fall 0.6s ease-in"
// // //                     : "none",
// // //                 }}
// // //               ></div>

// // //               {/* Result in the center */}
// // //               {pitFallen && (
// // //                 <div
// // //                   style={{
// // //                     position: "absolute",
// // //                     top: "50%",
// // //                     left: "50%",
// // //                     transform: "translate(-50%, -50%)",
// // //                     color: "#fff",
// // //                     textAlign: "center",
// // //                   }}
// // //                 >
// // //                   {resultTokens?.amount ? (
// // //                     <>
// // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>
// // //                         {resultTokens.amount}
// // //                       </div>
// // //                       <div>{resultTokens.name}</div>
// // //                     </>
// // //                   ) : (
// // //                     <>
// // //                       <div style={{ fontSize: "20px", fontWeight: "bold" }}>Sorry!</div>
// // //                       <div>Try again</div>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )
// // //       )}

// // //       {/* Error or Success Message */}
// // //       {resultMessage && (
// // //         <div
// // //           style={{
// // //             marginTop: "20px",
// // //             padding: "10px 20px",
// // //             backgroundColor: "#ffffff",
// // //             color: "#333",
// // //             borderRadius: "8px",
// // //             textAlign: "center",
// // //           }}
// // //         >
// // //           {resultMessage}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default Raffle;

// // import { useEffect, useState } from "react";
// // import Web3 from "web3";

// // function Raffle() {
// //   const [web3, setWeb3] = useState(null);
// //   const [connectedAccount, setConnectedAccount] = useState(null);
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const [resultMessage, setResultMessage] = useState(null);
// //   const [resultTokens, setResultTokens] = useState(null);
// //   const [pitFallen, setPitFallen] = useState(false);
// //   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0);

// //   const tokenMapping = {
// //     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
// //     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
// //   };

// //   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
// //   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
// //   const spendAmount = Web3.utils.toWei("1", "ether");
// //   const approvalAmount = Web3.utils.toWei("10000", "ether");

// //   const contractABI = [
// //     {
// //       inputs: [],
// //       name: "playRaffle",
// //       outputs: [],
// //       stateMutability: "nonpayable",
// //       type: "function",
// //     },
// //   ];

// //   const tokenABI = [
// //     {
// //       inputs: [
// //         { internalType: "address", name: "owner", type: "address" },
// //         { internalType: "address", name: "spender", type: "address" },
// //       ],
// //       name: "allowance",
// //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
// //       stateMutability: "view",
// //       type: "function",
// //     },
// //     {
// //       inputs: [
// //         { internalType: "address", name: "spender", type: "address" },
// //         { internalType: "uint256", name: "amount", type: "uint256" },
// //       ],
// //       name: "approve",
// //       outputs: [{ internalType: "bool", name: "", type: "bool" }],
// //       stateMutability: "nonpayable",
// //       type: "function",
// //     },
// //   ];

// //   useEffect(() => {
// //     if (window.ethereum) {
// //       setWeb3(new Web3(window.ethereum));
// //     }
// //   }, []);

// //   async function connectWallet() {
// //     if (!web3) return;

// //     try {
// //       await window.ethereum.request({ method: "eth_requestAccounts" });
// //       const accounts = await web3.eth.getAccounts();
// //       setConnectedAccount(accounts[0]);
// //       getAllowance();
// //     } catch (error) {
// //       console.error("Error connecting wallet:", error);
// //     }
// //   }

// //   async function getAllowance() {
// //     if (!web3 || !connectedAccount) return;

// //     try {
// //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
// //       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
// //       setSpendTokenAllowance(Number(allowance));
// //     } catch (error) {
// //       console.error("Error fetching allowance:", error);
// //     }
// //   }

// //   async function approveToken() {
// //     if (!web3 || !connectedAccount) return;

// //     try {
// //       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);

// //       // Always approve up to the cap
// //       await tokenContract.methods.approve(contractAddress, approvalAmount).send({ from: connectedAccount });

// //       // Update the local allowance state after approval
// //       getAllowance(); // Re-fetch allowance
// //       setResultMessage("Token approved successfully!");
// //     } catch (error) {
// //       console.error("Error approving token:", error);
// //       setResultMessage("Error approving token. Please check the console.");
// //     }
// //   }

// //   async function playRaffle() {
// //     if (!web3 || !connectedAccount) {
// //       setResultMessage("Connect your wallet first.");
// //       return;
// //     }

// //     try {
// //       if (spendTokenAllowance < spendAmount) {
// //         setResultMessage("Insufficient allowance. Please approve the token.");
// //         return;
// //       }

// //       setIsPlaying(true);
// //       setResultMessage(null);
// //       setPitFallen(false);

// //       const contract = new web3.eth.Contract(contractABI, contractAddress);

// //       const estimatedGas = await contract.methods.playRaffle().estimateGas({ from: connectedAccount });
// //       const gasPrice = await web3.eth.getGasPrice();

// //       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.2);
// //       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.1);

// //       const tx = await contract.methods.playRaffle().send({
// //         from: connectedAccount,
// //         gas: adjustedGas,
// //         gasPrice: adjustedGasPrice.toString(),
// //       });

// //       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
// //       processTransactionResult(receipt);

// //       // Deduct the spend amount locally to reflect the updated allowance
// //       setSpendTokenAllowance((prev) => prev - spendAmount);

// //       setPitFallen(true);
// //     } catch (error) {
// //       console.error("Error playing raffle:", error);
// //       setResultMessage("An error occurred. Please try again.");
// //     } finally {
// //       setIsPlaying(false);
// //     }
// //   }

// //   function processTransactionResult(receipt) {
// //     const eventABI = {
// //       anonymous: false,
// //       inputs: [
// //         { indexed: true, internalType: "address", name: "user", type: "address" },
// //         { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
// //         { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
// //       ],
// //       name: "PrizeWon",
// //       type: "event",
// //     };

// //     const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
// //     const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

// //     if (logs.length > 0) {
// //       const decoded = web3.eth.abi.decodeLog(
// //         eventABI.inputs,
// //         logs[0].data,
// //         logs[0].topics.slice(1)
// //       );

// //       const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
// //       const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
// //       setResultTokens({ amount: tokenAmount, name: tokenName });
// //     } else {
// //       setResultTokens({ amount: null, name: null });
// //     }
// //   }

// //   return (
// //     <div
// //       style={{
// //         fontFamily: "Arial, sans-serif",
// //         height: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         position: "relative",
// //         backgroundColor: "#eaf5dc",
// //         padding: "20px",
// //       }}
// //     >
// //       {/* Explanation */}
// //       <div style={{ marginBottom: "20px", textAlign: "center" }}>
// //         <p>
// //           Spend <strong>1 AVO</strong> for an 80% chance to win!
// //           <br />
// //           Prizes include 1, 10, 100, or 1000 tokens of <strong>AVO</strong> or <strong>VINYL</strong>
// //           <br />
// //           <span style={{ fontSize: 10 }}>(More tokens coming soon!)</span>
// //         </p>
// //       </div>

// //       {/* Approve or Play */}
// //       {connectedAccount && (
// //         spendTokenAllowance < spendAmount ? (
// //           <>
// //             <p>Please approve spending 1 AVO to play the raffle.</p>
// //             <button
// //               onClick={approveToken}
// //               style={{
// //                 padding: "10px 20px",
// //                 fontSize: "16px",
// //                 backgroundColor: "#ffc107",
// //                 borderRadius: "5px",
// //               }}
// //             >
// //               Approve Token
// //             </button>
// //           </>
// //         ) : (
// //           <button
// //             onClick={playRaffle}
// //             style={{
// //               padding: "10px 20px",
// //               fontSize: "16px",
// //               backgroundColor: "#4caf50",
// //               borderRadius: "5px",
// //             }}
// //             disabled={isPlaying}
// //           >
// //             {isPlaying ? "Playing..." : "Play Raffle"}
// //           </button>
// //         )
// //       )}

// //       {/* Error or Success Message */}
// //       {resultMessage && (
// //         <div
// //           style={{
// //             marginTop: "20px",
// //             padding: "10px 20px",
// //             backgroundColor: "#ffffff",
// //             color: "#333",
// //             borderRadius: "8px",
// //             textAlign: "center",
// //           }}
// //         >
// //           {resultMessage}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Raffle;

// import { useEffect, useState } from "react";
// import Web3 from "web3";

// function Raffle() {
//   const [web3, setWeb3] = useState(null);
//   const [connectedAccount, setConnectedAccount] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [resultMessage, setResultMessage] = useState(null);
//   const [resultTokens, setResultTokens] = useState(null);
//   const [pitFallen, setPitFallen] = useState(false);
//   const [spendTokenAllowance, setSpendTokenAllowance] = useState(0);

//   const tokenMapping = {
//     "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
//     "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
//   };

//   const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
//   const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
//   const spendAmount = Web3.utils.toWei("1", "ether");
//   const approvalAmount = Web3.utils.toWei("10000", "ether");

//   const contractABI = [
//     {
//       inputs: [],
//       name: "playRaffle",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ];

//   const tokenABI = [
//     {
//       inputs: [
//         { internalType: "address", name: "owner", type: "address" },
//         { internalType: "address", name: "spender", type: "address" },
//       ],
//       name: "allowance",
//       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//       stateMutability: "view",
//       type: "function",
//     },
//     {
//       inputs: [
//         { internalType: "address", name: "spender", type: "address" },
//         { internalType: "uint256", name: "amount", type: "uint256" },
//       ],
//       name: "approve",
//       outputs: [{ internalType: "bool", name: "", type: "bool" }],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ];

//   useEffect(() => {
//     if (window.ethereum) {
//       setWeb3(new Web3(window.ethereum));
//     }
//   }, []);

//   async function connectWallet() {
//     if (!web3) return;

//     try {
//       await window.ethereum.request({ method: "eth_requestAccounts" });
//       const accounts = await web3.eth.getAccounts();
//       setConnectedAccount(accounts[0]);
//       await getAllowance(); // Ensure allowance sync on connect
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//       setResultMessage("Error connecting wallet.");
//     }
//   }

//   async function getAllowance() {
//     if (!web3 || !connectedAccount) return;

//     try {
//       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
//       const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
//       setSpendTokenAllowance(Number(allowance));
//     } catch (error) {
//       console.error("Error fetching allowance:", error);
//     }
//   }

//   async function approveToken() {
//     if (!web3 || !connectedAccount) return;

//     try {
//       const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);

//       // Approve up to the cap
//       await tokenContract.methods.approve(contractAddress, approvalAmount).send({ from: connectedAccount });

//       // Refresh allowance state after approval
//       await getAllowance();
//       setResultMessage("Token approved successfully!");
//     } catch (error) {
//       console.error("Error approving token:", error);
//       setResultMessage("Error approving token. Please check the console.");
//     }
//   }

//   async function playRaffle() {
//     if (!web3 || !connectedAccount) {
//       setResultMessage("Connect your wallet first.");
//       return;
//     }

//     // Check allowance before playing
//     try {
//       if (spendTokenAllowance < spendAmount) {
//         setResultMessage("Insufficient allowance. Please approve the token.");
//         return;
//       }

//       setIsPlaying(true);
//       setResultMessage(null);
//       setPitFallen(false);

//       const contract = new web3.eth.Contract(contractABI, contractAddress);

//       const estimatedGas = await contract.methods.playRaffle().estimateGas({ from: connectedAccount });
//       const gasPrice = await web3.eth.getGasPrice();

//       const adjustedGas = Math.ceil(Number(estimatedGas) * 1.2);
//       const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.1);

//       const tx = await contract.methods.playRaffle().send({
//         from: connectedAccount,
//         gas: adjustedGas,
//         gasPrice: adjustedGasPrice.toString(),
//       });

//       const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
//       processTransactionResult(receipt);

//       // Update allowance state locally after successful play
//       setSpendTokenAllowance((prev) => prev - Number(spendAmount));

//       setPitFallen(true);
//     } catch (error) {
//       console.error("Error playing raffle:", error);
//       setResultMessage("An error occurred. Please try again.");
//     } finally {
//       setIsPlaying(false);
//     }
//   }

//   function processTransactionResult(receipt) {
//     const eventABI = {
//       anonymous: false,
//       inputs: [
//         { indexed: true, internalType: "address", name: "user", type: "address" },
//         { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
//         { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
//       ],
//       name: "PrizeWon",
//       type: "event",
//     };

//     const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
//     const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

//     if (logs.length > 0) {
//       const decoded = web3.eth.abi.decodeLog(
//         eventABI.inputs,
//         logs[0].data,
//         logs[0].topics.slice(1)
//       );

//       const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
//       const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
//       setResultTokens({ amount: tokenAmount, name: tokenName });
//     } else {
//       setResultTokens({ amount: null, name: null });
//     }
//   }

//   return (
//     <div
//       style={{
//         fontFamily: "Arial, sans-serif",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         backgroundColor: "#eaf5dc",
//         padding: "20px",
//       }}
//     >
//       {/* Explanation */}
//       <div style={{ marginBottom: "20px", textAlign: "center" }}>
//         <p>
//           Spend <strong>1 AVO</strong> for an 80% chance to win!<br />
//           Prizes include 1, 10, 100, or 1000 tokens of <strong>AVO</strong> or <strong>VINYL</strong>.
//         </p>
//       </div>

//       {/* Connect Wallet */}
//       <div style={{ position: "absolute", top: 20, right: 20 }}>
//         {connectedAccount ? (
//           <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
//         ) : (
//           <button
//             onClick={connectWallet}
//             style={{
//               padding: "10px 20px",
//               fontSize: "16px",
//               backgroundColor: "#0070f3",
//               color: "white",
//               borderRadius: "5px",
//             }}
//           >
//             Connect Wallet
//           </button>
//         )}
//       </div>

//       {/* Approve or Play */}
//       {connectedAccount && (
//         spendTokenAllowance < spendAmount ? (
//           <>
//             <p>Please approve spending 1 AVO to play the raffle.</p>
//             <button
//               onClick={approveToken}
//               style={{
//                 padding: "10px 20px",
//                 fontSize: "16px",
//                 backgroundColor: "#ffc107",
//                 borderRadius: "5px",
//               }}
//             >
//               Approve Token
//             </button>
//           </>
//         ) : (
//           <div
//             style={{
//               cursor: "pointer",
//               position: "relative",
//               width: "160px",
//               height: "240px",
//               background: "linear-gradient(145deg, #558b44, #3a6c2f)",
//               borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
//             }}
//             onClick={playRaffle}
//           >
//             {/* Result */}
//             {pitFallen && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "50%",
//                   left: "50%",
//                   transform: "translate(-50%, -50%)",
//                   color: "#fff",
//                   textAlign: "center",
//                 }}
//               >
//                 {resultTokens?.amount ? (
//                   <>
//                     <div style={{ fontSize: "20px", fontWeight: "bold" }}>
//                       {resultTokens.amount}
//                     </div>
//                     <div>{resultTokens.name}</div>
//                   </>
//                 ) : (
//                   <>
//                     <div style={{ fontSize: "20px", fontWeight: "bold" }}>Sorry!</div>
//                     <div>Try again</div>
//                   </>
//                 )}
//               </div>
//             )}
//           </div>
//         )
//       )}

//       {/* Error or Success Message */}
//       {resultMessage && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "10px 20px",
//             backgroundColor: "#ffffff",
//             color: "#333",
//             borderRadius: "8px",
//             textAlign: "center",
//           }}
//         >
//           {resultMessage}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Raffle;

import { useEffect, useState } from "react";
import Web3 from "web3";

function Raffle() {
  const [web3, setWeb3] = useState(null);
  const [connectedAccount, setConnectedAccount] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [resultMessage, setResultMessage] = useState(null);
  const [resultTokens, setResultTokens] = useState(null);
  const [pitFallen, setPitFallen] = useState(false);
  const [spendTokenAllowance, setSpendTokenAllowance] = useState(0);

  const tokenMapping = {
    "0x995258Cea49C25595CD94407FaD9E99B81406A84": "AVO",
    "0x6a2cD141d75864944318acf272443FEBC54855a9": "VINYL",
  };

  const contractAddress = "0x4abAB4A5da6e113B1a1B8942375A117870472370";
  const spendingTokenAddress = "0x995258Cea49C25595CD94407FaD9E99B81406A84";
  const spendAmount = Web3.utils.toWei("1", "ether");
  const approvalAmount = Web3.utils.toWei("10000", "ether");

  const contractABI = [
    {
      inputs: [],
      name: "playRaffle",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const tokenABI = [
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" },
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  useEffect(() => {
    if (window.ethereum) {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);

  async function connectWallet() {
    if (!web3) return;

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      setConnectedAccount(accounts[0]);
      await getAllowance();
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setResultMessage("Error connecting wallet.");
    }
  }

  async function getAllowance() {
    if (!web3 || !connectedAccount) return;

    try {
      const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
      const allowance = await tokenContract.methods.allowance(connectedAccount, contractAddress).call();
      setSpendTokenAllowance(Number(allowance));
    } catch (error) {
      console.error("Error fetching allowance:", error);
    }
  }

  async function approveToken() {
    if (!web3 || !connectedAccount) return;

    try {
      const tokenContract = new web3.eth.Contract(tokenABI, spendingTokenAddress);
      if (spendTokenAllowance >= spendAmount) {
        setResultMessage("Token is already approved!");
        return;
      }
      await tokenContract.methods.approve(contractAddress, approvalAmount).send({ from: connectedAccount });
      await getAllowance();
      setResultMessage("Token approved successfully!");
    } catch (error) {
      console.error("Error approving token:", error);
      setResultMessage("Error approving token. Please check the console.");
    }
  }

  async function playRaffle() {
    if (!web3 || !connectedAccount) {
      setResultMessage("Connect your wallet first.");
      return;
    }

    if (spendTokenAllowance < spendAmount) {
      setResultMessage("Insufficient allowance. Please approve the token.");
      return;
    }

    try {
      setIsPlaying(true);
      setResultMessage(null);
      setPitFallen(false);

      const contract = new web3.eth.Contract(contractABI, contractAddress);

      const estimatedGas = await contract.methods.playRaffle().estimateGas({ from: connectedAccount });
      const gasPrice = await web3.eth.getGasPrice();

      const adjustedGas = Math.ceil(Number(estimatedGas) * 1.4);
      const adjustedGasPrice = Math.ceil(Number(gasPrice) * 1.3);

      const tx = await contract.methods.playRaffle().send({
        from: connectedAccount,
        gas: adjustedGas,
        gasPrice: adjustedGasPrice.toString(),
      });

      const receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
      processTransactionResult(receipt);

      setPitFallen(true);
      setSpendTokenAllowance((prev) => prev - Number(spendAmount));
    } catch (error) {
      console.error("Error playing raffle:", error);
      setResultMessage("An error occurred. Please try again.");
    } finally {
      setIsPlaying(false);
    }
  }

  function processTransactionResult(receipt) {
    const eventABI = {
      anonymous: false,
      inputs: [
        { indexed: true, internalType: "address", name: "user", type: "address" },
        { indexed: false, internalType: "address", name: "tokenAddress", type: "address" },
        { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      ],
      name: "PrizeWon",
      type: "event",
    };

    const eventSignature = web3.eth.abi.encodeEventSignature(eventABI);
    const logs = receipt.logs.filter((log) => log.topics[0] === eventSignature);

    if (logs.length > 0) {
      const decoded = web3.eth.abi.decodeLog(
        eventABI.inputs,
        logs[0].data,
        logs[0].topics.slice(1)
      );

      const tokenName = tokenMapping[decoded.tokenAddress] || "Unknown Token";
      const tokenAmount = Web3.utils.fromWei(decoded.amount, "ether");
      setResultTokens({ amount: tokenAmount, name: tokenName });
    } else {
      setResultTokens({ amount: null, name: null });
    }
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#eaf5dc",
      }}
    >
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            50% { transform: translateX(2px); }
            75% { transform: translateX(-2px); }
          }

          @keyframes fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(300px); }
          }
        `}
      </style>

      {/* Explanation */}
      {/* <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <p>
          Spend <strong>1 AVO</strong> for an 80% chance to win!<br />
          Prizes include 1, 10, 100, or 1000 tokens of <strong>AVO</strong> or <strong>VINYL</strong>.
        </p>
      </div> */}
      {/* Explanation */}
<div
  style={{
    marginBottom: "20px",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background for contrast
    color: "#ffffff", // Bright white text for visibility
    padding: "15px 20px", // Spacing for readability
    borderRadius: "8px", // Rounded corners for aesthetics
    fontSize: "18px", // Larger font size
    lineHeight: "1.6", // Increased line height for readability
    maxWidth: "90%", // Ensures it fits well on smaller screens
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for a polished look
  }}
>
  <p>
    Spend <strong>1 AVO</strong> for an 80% chance to win!<br />
    Prizes include <strong>1, 10, 100, or 1000 tokens</strong> of{" "}
    <strong>AVO</strong> or <strong>VINYL</strong>.
    <br />
    <span style={{ fontSize: "14px", fontStyle: "italic" }}>
      (More tokens coming soon!)
    </span>
  </p>
</div>


      {/* Connect Wallet */}
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        {connectedAccount ? (
          <span>Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}</span>
        ) : (
          <button
            onClick={connectWallet}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#0070f3",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {/* Approve or Play */}
      {connectedAccount && (
        spendTokenAllowance < spendAmount ? (
            <>
            <p style={{ color: "#000000" }}>Please approve spending AVO to play the raffle.</p>
            <span
              style={{
                fontSize: "10px",
                color: "#000000", // Explicitly set text color to black
              }}
            >
              (10,000 AVO has been chosen as default for approval to allow for 10,000 tries before having to approve again. Please adjust as you see fit.)
            </span>
            <button
              onClick={approveToken}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#ffc107",
                borderRadius: "5px",
                marginTop: "8px",
              }}
            >
              Approve Token
            </button>
          </>
          
        ) : (
          <div
            style={{
              cursor: "pointer",
              position: "relative",
              width: "160px",
              height: "240px",
              background: "linear-gradient(145deg, #558b44, #3a6c2f)",
              borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            }}
            onClick={playRaffle}
          >
            <div
              style={{
                width: "120px",
                height: "200px",
                background: "radial-gradient(circle, #a5c663, #9abd3e)",
                borderRadius: "50% 50% 40% 40% / 60% 60% 40% 40%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "radial-gradient(circle, #7a4f3a, #3e261a)",
                  borderRadius: "50%",
                  transform: pitFallen
                    ? "translateY(300px)"
                    : isPlaying
                    ? "translateY(0)"
                    : "translateY(0)",
                  animation: isPlaying
                    ? "shake 0.5s infinite"
                    : pitFallen
                    ? "fall 0.6s ease-in"
                    : "none",
                }}
              ></div>

              {/* Result in the center */}
              {pitFallen && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {resultTokens?.amount ? (
                    <>
                      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                        {resultTokens.amount}
                      </div>
                      <div>{resultTokens.name}</div>
                    </>
                  ) : (
                    <>
                      <div style={{ fontSize: "20px", fontWeight: "bold" }}>Sorry!</div>
                      <div>Try again</div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        )
      )}

      {/* Error or Success Message */}
      {resultMessage && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#ffffff",
            color: "#333",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          {resultMessage}
        </div>
      )}
    </div>
  );
}

export default Raffle;
