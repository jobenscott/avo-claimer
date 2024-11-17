// import Link from "next/link";

// function Navbar() {
//   return (
//     <nav
//       style={{
//         position: "absolute",
//         top: 0,
//         width: "100%",
//         zIndex: 10, // Ensure it stays above other elements
//         display: "flex",
//         justifyContent: "space-evenly",
//         alignItems: "center",
//         padding: "10px 20px",
//         fontFamily: "Arial, sans-serif",
//         fontSize: "24px",
//         paddingLeft: "20rem",
//         paddingRight: "20rem",
//       }}
//     >
//       <Link href="/" passHref style={{
//             color: "#365f77", //#913434
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}>
//           Faucet 🚰
//       </Link>
//       <Link href="/avo-draw" passHref style={{
//             color: "#913434",
//             textDecoration: "none",
//             fontWeight: "bold",
//           }}>
//           Take a chance 🎲
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;


// import Link from "next/link";

// function Navbar({ connectedAccount, onConnect }) {
//   return (
//     <nav
//       style={{
//         position: "absolute",
//         top: 0,
//         width: "100%",
//         zIndex: 10, // Ensure it stays above other elements
//         display: "flex",
//         justifyContent: "center", // Center the links container
//         alignItems: "center",
//         padding: "10px 20px",
//         fontFamily: "Arial, sans-serif",
//         fontSize: "24px",
//       }}
//     >
//       {/* Centered Links */}
//       <div
//         style={{
//           display: "flex",
//           gap: "15px",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Link
//           href="/"
//           passHref
//           style={{
//             color: "#365f77",
//             textDecoration: "none",
//             fontWeight: "bold",
//             marginRight: "25px",
//           }}
//         >
//           Faucet 🚰
//         </Link>
//         <Link
//           href="/avo-draw"
//           passHref
//           style={{
//             color: "#913434",
//             textDecoration: "none",
//             fontWeight: "bold",
//             marginLeft: "25px",
//           }}
//         >
//           Take a chance 🎲
//         </Link>
//       </div>

//       {/* Right-aligned Connect Button */}
//       <div
//         style={{
//           position: "absolute",
//           right: "20px", // Adds padding from the right edge
//         }}
//       >
//         {connectedAccount ? (
//           <span
//             style={{
//               fontWeight: "bold",
//               color: "#365f77",
//             }}
//           >
//             Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
//           </span>
//         ) : (
//           <button
//             onClick={onConnect}
//             style={{
//               padding: "8px 16px",
//               fontSize: "16px",
//               backgroundColor: "#365f77",
//               color: "white",
//               border: "none",
//               borderRadius: "5px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Connect Wallet
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import Link from "next/link";

function Navbar({ connectedAccount, onConnect }) {
  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 10, // Ensure it stays above other elements
        display: "flex",
        justifyContent: "center", // Center the links container
        alignItems: "center",
        padding: "10px 20px",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
      }}
    >
      {/* Centered Links */}
      <div
        style={{
          display: "flex",
          gap: "50px", // Space between links
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          passHref
          style={{
            color: "#365f77",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Faucet 🚰
        </Link>
        <Link
          href="/avo-draw"
          passHref
          style={{
            color: "#913434",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Take a chance 🎲
        </Link>
      </div>

      {/* Right-aligned Connect Button */}
      <div
        style={{
          position: "absolute",
          right: "20px", // Adds padding from the right edge
        }}
      >
        {connectedAccount ? (
          <span
            style={{
              fontWeight: "bold",
              color: "#365f77",
              fontSize: "16px",
            }}
          >
            Connected: {connectedAccount.slice(0, 6)}...{connectedAccount.slice(-4)}
          </span>
        ) : (
          <button
            onClick={onConnect}
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              backgroundColor: "#365f77",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Connect Wallet
          </button>
        )}
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            padding: 10px;
          }

          div {
            width: 100%;
            text-align: center;
          }

          button {
            margin-top: 10px;
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
